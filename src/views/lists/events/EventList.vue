<template>

    <SuperTable
        :showMap="true"
        :model="superTableModel"
        @clickRow="openRecord"
        :displayMapField="false"
        :parentKeyValuePair="parentKeyValuePair"
        :fetchFlags="fetchFlags"
        :templateListGrid="templateListGrid"
        :templateListCalendar="templateListCalendar"
        :viewAs="{
          show: [
            'grid',
            'calendar',
            'map',
          ],
          default: 'calendar'
        }"
        :allowedFilters="[
          'start_datetime'
        ]"
    />



</template>

<script>
import { SuperTable } from 'quicklists-vue-orm-ui'
import Event from 'src/models/orm-api/Event'
import moment from 'moment';

export default {
    name: 'Event-list',
    components: {
        SuperTable,
    },

    props: {
        parentKeyValuePair: {
            type: Object,
            default: () => ({})
        },
        fetchFlags: {
            type: Object,
            default: () => ({})
        }
    },

    computed: {
        superTableModel() {
            return Event
        },
    },
  methods: {
    openRecord(pVal, item, router) {
        router.push({
            name: '/lists/events/:rId/:rName',
            params: {
                rId: pVal,
                rName: pVal,
            },
        })
    },
    formatCasualTime(start, end) {
      const now = moment();
      const startDate = moment(start);
      const endDate = moment(end);

      const startTime = startDate.format('HH:mm');
      const endTime = endDate.format('HH:mm');

      const dayNameStart = startDate.format('ddd');
      const dayNameEnd = endDate.format('ddd');

      const startDayWithMonth = startDate.format('MMM Do');
      const endDayWithMonth = endDate.format('MMM Do');

      const yearStart = startDate.year();
      const yearEnd = endDate.year();

      // Calculate duration in minutes, hours, days, and weeks, and round to the nearest half unit
      const durationMinutes = endDate.diff(startDate, 'minutes');
      const durationHours = durationMinutes / 60;
      const durationDays = durationHours / 24;
      const durationWeeks = durationDays / 7;

      let durationText;
      if (durationMinutes < 60) {
        const roundedMinutes = Math.round(durationMinutes / 30) * 0.5;
        durationText = `~${roundedMinutes} minute${roundedMinutes !== 1 ? 's' : ''}`;
      } else if (durationHours < 24) {
        const roundedHours = Math.round(durationHours * 2) / 2;
        durationText = `~${roundedHours} hour${roundedHours !== 1 ? 's' : ''}`;
      } else if (durationDays < 7) {
        const roundedDays = Math.round(durationDays * 2) / 2;
        durationText = `~${roundedDays} day${roundedDays !== 1 ? 's' : ''}`;
      } else {
        const roundedWeeks = Math.round(durationWeeks * 2) / 2;
        durationText = `~${roundedWeeks} week${roundedWeeks !== 1 ? 's' : ''}`;
      }

      // Determine if the event is within the next 6 days
      const withinNextSixDays = startDate.isBefore(now.clone().add(6, 'days'));

      // Format the time range
      let formattedRange = "";
      if (startDate.isSame(endDate, 'day')) {
        formattedRange = startDate.isSame(now, 'day')
          ? `Today, ${startTime} - ${endTime}`
          : `${dayNameStart}, ${startTime} - ${endTime}`;
      } else if (withinNextSixDays) {
        formattedRange = `${dayNameStart}, ${startTime} - ${dayNameEnd}, ${endTime}`;
      } else if (startDate.isSame(endDate, 'month')) {
        formattedRange = `${startDayWithMonth}, ${dayNameStart}, ${startTime} - ${endDayWithMonth}, ${dayNameEnd}, ${endTime}`;
      } else if (startDate.isSame(endDate, 'year')) {
        formattedRange = `${startDayWithMonth}, ${dayNameStart}, ${startTime} - ${endDayWithMonth}, ${dayNameEnd}, ${yearEnd}, ${endTime}`;
      } else {
        formattedRange = `${startDayWithMonth}, ${dayNameStart}, ${yearStart}, ${startTime} - ${endDayWithMonth}, ${dayNameEnd}, ${yearEnd}, ${endTime}`;
      }

      // Calculate "coming up" hint or event status
      const timeUntilStart = startDate.diff(now, 'minutes');
      const timeUntilEnd = endDate.diff(now, 'minutes');
      let comingUpHint = '';
      if (timeUntilEnd < 0) {
        comingUpHint = "Event has finished";
      } else if (timeUntilStart <= 0 && timeUntilEnd >= 0) {
        comingUpHint = "Event is happening now";
      } else if (timeUntilStart < 60) {
        const roundedMinutes = Math.round(timeUntilStart / 30) * 0.5;
        comingUpHint = `~${roundedMinutes} minute${roundedMinutes !== 1 ? 's' : ''} from now`;
      } else if (timeUntilStart < 1440) { // Less than a day
        const roundedHours = Math.round((timeUntilStart / 60) * 2) / 2;
        comingUpHint = `~${roundedHours} hour${roundedHours !== 1 ? 's' : ''} from now`;
      } else if (timeUntilStart < 10080) { // Less than a week
        const roundedDays = Math.round((timeUntilStart / 1440) * 2) / 2;
        comingUpHint = `~${roundedDays} day${roundedDays !== 1 ? 's' : ''} from now`;
      } else if (timeUntilStart < 43800) { // Less than a month
        const roundedWeeks = Math.round((timeUntilStart / 10080) * 2) / 2;
        comingUpHint = `~${roundedWeeks} week${roundedWeeks !== 1 ? 's' : ''} from now`;
      } else {
        const roundedMonths = Math.round((timeUntilStart / 43800) * 2) / 2;
        comingUpHint = `~${roundedMonths} month${roundedMonths !== 1 ? 's' : ''} from now`;
      }

      return {
        range: formattedRange,
        duration: durationText,
        comingUpHint: comingUpHint
      };
    }
  },
  data() {
    return {
      templateListGrid: {
        cols: [
          {
            width: 12,
            dataPoint: {
              type: "component",
              componentPath: () => import('./EventImage.vue'),
              label: "",
              hideLabel: true,
            },
          },
          {
            width: 12,
            class: "q-pa-md q-col-gutter-sm",
            cols: [

              {
                width: 12,
                dataPoint: {
                  type: "function",
                  function: (item) => `${item.name}`,
                  label: "",
                  tag: "div",
                  class: "text-h6",
                  hideLabel: true,
                },
              },
              {
                width: 12,
                dataPoint: {
                  type: "function",
                  function: (item) => `${this.formatCasualTime(item.start_datetime, item.end_datetime).comingUpHint}`,
                  label: "Count Down",
                  xOrientation: true,
                },
              },
              {
                width: 12,
                dataPoint: {
                  type: "function",
                  function: (item) => `${this.formatCasualTime(item.start_datetime, item.end_datetime).range}`,
                  label: "Date",
                  xOrientation: true,
                },
              },
              {
                width: 12,
                dataPoint: {
                  type: "function",
                  function: (item) => `${this.formatCasualTime(item.start_datetime, item.end_datetime).duration}`,
                  label: "Duration",
                  xOrientation: true,
                },
              },
              {
                width: 12,
                dataPoint: {
                  label: "School",
                  field: "school",
                  xOrientation: true,
                },
              },
              {
                width: 12,
                dataPoint: {
                  type: "component",
                  componentPath: () => import('./EventButtonAttend.vue'),
                  label: "",
                  class: "text-right ",
                  hideLabel: true,
                },
              },
              {
                width: 12,
                dataPoint: {
                  hideLabel: true,
                  field: "actions",
                },
              },
            ]
          },
        ],
      },
      templateListCalendar: {
        cols: [
          {
            width: 12,
            class: "q-pa-md q-col-gutter-sm",
            cols: [
              {
                width: 12,
                dataPoint: {
                  type: "function",
                  function: (item) => `${item.name}`,
                  label: "",
                  tag: "div",
                  class: "text-bold text-caption",
                  hideLabel: true,
                },
              },
              {
                width: 12,
                class: "text-caption",
                dataPoint: {
                  type: "function",
                  function: (item) => `${this.formatCasualTime(item.start_datetime, item.end_datetime).comingUpHint}`,
                  label: "Count Down",
                  xOrientation: true,
                },
              },
              {
                width: 12,
                dataPoint: {
                  type: "function",
                  function: (item) => `${this.formatCasualTime(item.start_datetime, item.end_datetime).range}`,
                  label: "Date",
                  xOrientation: true,
                },
              },
              {
                width: 12,
                dataPoint: {
                  type: "function",
                  function: (item) => `${this.formatCasualTime(item.start_datetime, item.end_datetime).duration}`,
                  label: "Duration",
                  xOrientation: true,
                },
              },
              {
                width: 12,
                dataPoint: {
                  label: "School",
                  field: "school",
                  xOrientation: true,
                },
              },
              {
                width: 12,
                dataPoint: {
                  type: "component",
                  componentPath: () => import('./EventButtonAttend.vue'),
                  label: "",
                  class: "text-right ",
                  hideLabel: true,
                },
              },
              {
                width: 12,
                dataPoint: {
                  hideLabel: true,
                  field: "actions",
                },
              },
            ]
          },
        ],
      }
    }
  },
}
</script>
