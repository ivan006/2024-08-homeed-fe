<template>
  <div>
    <q-card class="q-mt-md">
      <familyRead
        :id="id"
        :templateOverview="templateListGrid"
        hideRelations
        @initialLoadHappened="$emit('initialLoadHappened')"
      />
    </q-card>
    <div
      v-show="initialLoadHappened"
    >

      <div class="row  q-col-gutter-md">
        <div class="col-xl-6 col-md-6 col-sm-12 col-xs-12">

          <q-card class="q-mb-md">
            <q-expansion-item
              label="Family Memberships"
              expand-separator
              class="bordered-expansion-item"
              @show="renderSection1=true"
            >
              <div class="q-pa-md">

                <familyMembershipList
                  v-if="renderSection1"
                  :parentKeyValuePair="{
                    key: 'user_id',
                    value: +session.user.id
                  }"

                />
              </div>
            </q-expansion-item>
          </q-card>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import familyRead from 'src/views/lists/families/FamilyRead.vue'
import FamilyMembershipList from "src/views/lists/family-memberships/FamilyMembershipList.vue";

export default {
    name: 'Family-read-controller',
    components: {
      FamilyMembershipList,
        familyRead,
    },

    data() {
        return {
          initialLoadHappened: false,
          renderSection1: false,
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
                // {
                //   width: 3,
                //   dataPoint: {
                //     type: "function",
                //     function: (item) => `${item.email}`,
                //     label: "Email",
                //     // xOrientation: true,
                //   },
                // },
              ],
            }
        }
    },
}
</script>
