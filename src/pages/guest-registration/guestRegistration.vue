<template>
  <div class="q-pa-md container-md guestRegistration">
    <!--<q-card style="width: unset;">-->


    <!--  <q-card-section>-->
    <!--    <div class="text-h6">Multi-Step Form</div>-->
    <!--  </q-card-section>-->
    <!--  <q-separator />-->
    <!--  <q-card-section  class="q-pa-none">-->

        <template v-if="!session">
          <!--<step0-register @next="checkToken()" />-->
          ddd
        </template>

    <!--  </q-card-section>-->
    <!--</q-card>-->
  </div>
</template>

<script setup>
import {computed, ref} from 'vue'
// import VueCookies from 'vue-cookies'
// import Step0Register from "pages/guest-registration/step0Register.vue";
import VueCookies from 'vue-cookies'
// import Session from 'src/models/Session';
const step = ref(1);

// const session = computed(() => {
//   // return Session.query().first();
//   return VueCookies.get('VITE_AUTH');
// });



const session = ref(VueCookies.get('VITE_AUTH'));


const checkToken = () => {
  session.value = VueCookies.get('VITE_AUTH');
}


</script>

<style lang="scss">

#q-app input[type=text] {
  //padding: unset !important;

  //line-height: 24px;
  padding-top: 24px !important;
  padding-bottom: 8px !important;;
}
// app global css in SCSS form



// breakpoint variable, from https://quasar.dev/style/breakpoints
// Except the xs one because I think 600px is too small
$xs-breakpoint: 718px;
$sm-breakpoint: 1024px;
$md-breakpoint: 1439px;
$lg-breakpoint: 1920px;

.container,
.container-sm,
.container-md,
.container-lg,
.container-xl {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: $xs-breakpoint) {
  .container,
  .container-sm {
    max-width: 540px;
  }
}

@media (min-width: $sm-breakpoint) {
  .container,
  .container-sm,
  .container-md {
    max-width: 920px;
  }
}

@media (min-width: $md-breakpoint) {
  .container,
  .container-sm,
  .container-md,
  .container-lg {
    max-width: 1140px;
  }
}

@media (min-width: $lg-breakpoint) {
  .container,
  .container-sm,
  .container-md,
  .container-lg,
  .container-xl {
    max-width: 1440px;
  }
}


.guestRegistration {
  .q-stepper__step-inner {
    padding: 5px;
  }
}

</style>
