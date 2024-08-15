<template>
  <div>
    <q-card class=" q-mb-md" style="overflow: hidden;">
      <SuperRecord
        ref="SuperRecordRef"
        :model="User"
        :id="+session.user.id"
        :templateOverview="templateListGrid"
        hideRelations
        @initialLoadHappened="initialLoadHappened = true"
        :relationships="[
          // 'bookings.clients',
        ]"

      >
      </SuperRecord>
      <!--hideRelations-->

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

<script setup>
import {SuperRecord} from "quicklists-vue-orm-ui";
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();

import {computed, ref} from 'vue';
import User from 'src/models/User'
import VueCookies from "vue-cookies";
// import FamilyList from "pages/my-account/families/FamilyList.vue";
import familyMembershipList from 'src/views/lists/family-memberships/FamilyMembershipList.vue'
import FamilyMembership from 'src/models/orm-api/FamilyMembership'

const renderSection1 = ref(false);

const initialLoadHappened = ref(false);

const SuperRecordRef = ref(null);

const session = computed(() => {
  return VueCookies.get('VITE_AUTH');
});




const templateListGrid = ref({
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
});


</script>





