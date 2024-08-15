<template>
  <div>
    <q-card class="q-mt-md">
      <familyRead
        :id="id"
        :templateOverview="templateListGrid"
        hideRelations
      />
    </q-card>
  </div>
</template>

<script>
import familyRead from 'src/views/lists/families/FamilyRead.vue'

export default {
    name: 'Family-read-controller',
    components: {
        familyRead,
    },

    data() {
        return {
            id: +this.$route.params.rId,
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
}
</script>
