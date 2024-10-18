<template>
    <div>
      <q-card class="q-mb-md" style="overflow: hidden;">
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

            <q-card class="q-mb-md" style="overflow: hidden;">
              <q-expansion-item
                defaultOpened
                label="Family Ties"
                expand-separator
                class="bordered-expansion-item"
              >
                <q-separator />
                <div class="q-pa-md">

                  <FamilyTyList
                    :parentKeyValuePair="{
                      parentFKey: 'user_id',
                      parentFVal: +session.user.id,
                      parentItem: session.user,
                    }"
                    :colWidth="6"

                  />
                </div>
              </q-expansion-item>
            </q-card>

          </div>
          <div class="col-xl-6 col-md-6 col-sm-12 col-xs-12">

            <q-card class="q-mb-md" style="overflow: hidden;">
              <q-expansion-item
                defaultOpened
                label="Jobs"
                expand-separator
                class="bordered-expansion-item"
              >
                <q-separator />
                <div class="q-pa-md">

                  <job-list
                    :parentKeyValuePair="{
                      parentFKey: 'user_id',
                      parentFVal: +session.user.id,
                      parentItem: session.user,
                    }"
                    :colWidth="6"

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
import FamilyTyList from "src/views/lists/family-ties/FamilyTyList.vue";
import JobList from "src/views/lists/jobs/JobList.vue";

export default {
    name: 'User-read-controller',
    components: {
      JobList,
      FamilyTyList,
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
