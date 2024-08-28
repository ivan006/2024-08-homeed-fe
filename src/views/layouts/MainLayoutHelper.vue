<template>
  <div>
    <template v-if="isSmallScreen">
      <!--<template v-if="true">-->
      <q-layout
        view="lHh Lpr lFf"
        style="background-color: #F8F8F8; padding-bottom: 50px;"

      >
        <q-header elevated style="background-color: rgb(0, 31, 63);">
          <q-toolbar>
            <q-btn
              flat
              dense
              round
              icon="menu"
              aria-label="Menu"
              @click="toggleLeftDrawer"
            />
          </q-toolbar>
        </q-header>
        <q-drawer
          v-model="leftDrawerOpen"
          show-if-above
          bordered
        >
          <q-list>
            <q-item-label header>
              <!--Essential Links-->
              &nbsp;
            </q-item-label>
            <slot name="menu"></slot>
          </q-list>
        </q-drawer>
        <div class="q-px-md">
          <div class="q-pb-md">
            <slot name="default"></slot>
          </div>
        </div>
      </q-layout>
    </template>
    <template v-else>
      <div class="row no-wrap">
        <div  class="" style="width: 300px; border-right: 1px solid rgba(0, 0, 0, 0.12);">
          <q-list style="padding-top: 10px;">
            <slot name="menu"></slot>
          </q-list>
        </div>
        <div  class="" style="flex: 1; overflow: auto; background-color: 	#F8F8F8; min-height: 100vh;">

          <div class="q-pa-md container-md">

            <div class="q-pb-md">
              <slot name="default"></slot>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isSmallScreen = ref(false);

const checkScreenWidth = () => {
  isSmallScreen.value = window.innerWidth <= 1151;
};

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

onMounted(() => {
  checkScreenWidth();
  window.addEventListener('resize', checkScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenWidth);
});
</script>

