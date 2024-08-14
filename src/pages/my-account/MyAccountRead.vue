<template>
    <div>
        <q-card class="q-pa-md q-mt-md">
          <!--<pre>{{session}}</pre>-->
            <SuperRecord
                :model="superRecordModel"
                :id="+session.user.id"
                :displayMapField="true"
                :templateOverview="templateListGrid"
            >
            </SuperRecord>
        </q-card>
    </div>
</template>

<script>
import { SuperRecord } from 'quicklists-vue-orm-ui'
import User from 'src/models/User'
import {computed} from "vue";
import VueCookies from "vue-cookies";

export default {
    name: 'MyAccountRead',
    components: {
      SuperRecord
    },
    data() {
        return {
          templateListGrid: {
            class: "q-pa-md q-col-gutter-md",
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
                width: 3,
                dataPoint: {
                  type: "function",
                  function: (item) => `${item.email}`,
                  label: "Email",
                  // xOrientation: true,
                },
              },
            ],
          }
        }
    },
    computed: {
        session() {
          return VueCookies.get('VITE_AUTH');
        },
        superRecordModel() {
            return User
        },
    },
}
</script>

<style scoped></style>
