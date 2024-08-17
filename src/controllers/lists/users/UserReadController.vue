<template>
    <div>
      <q-card class="q-mb-md">
          <userRead
            :id="+session.user.id"
            @initialLoadHappened="initialLoadHappened = true"
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
                    parentFKey: 'user_id',
                    parentFVal: +session.user.id,
                    parentItem: session.user,
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
import userRead from 'src/views/lists/users/UserRead.vue'
import User from "src/models/User";
import VueCookies from "vue-cookies";
import FamilyMembershipList from "src/views/lists/family-memberships/FamilyMembershipList.vue";

export default {
    name: 'User-read-controller',
    components: {
      FamilyMembershipList,
        userRead,
    },
  data() {
    return {
      initialLoadHappened: false,
      renderSection1: false,
    }
  },
  computed: {
    session() {
      return VueCookies.get('VITE_AUTH');
    }
  },
}
</script>
