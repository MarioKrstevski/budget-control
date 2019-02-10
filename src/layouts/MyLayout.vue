<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Budget Control
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
      class="justify-center"
    >
      <div style="display:grid; alignItems:center; height:100%">
        <q-list
        no-border
        sparse
        link
      >
        <q-list-header class="blue-grey-10">Previews</q-list-header>
        <q-item>
          <q-item-side icon="school" />
          <q-item-main label="Dashboard"/>
        </q-item>
        <q-item>
          <q-item-side icon="code" />
          <q-item-main label="Transactions"/>
        </q-item>
        <q-item>
          <q-item-side icon="chat" />
          <q-item-main label="Budgets"/>
        </q-item>
        <q-item>
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Statistics"/>
        </q-item>
      </q-list>

      <q-list
        no-border
        link
        sparse
        inset-delimiter
      >
        <q-list-header>Account</q-list-header>
        <q-item>
          <q-item-side icon="school" />
          <q-item-main label="Settings"/>
        </q-item>
        <q-item>
          <q-item-side icon="code" />
          <q-item-main label="Sign Out"/>
        </q-item>
      </q-list>
      </div>
    </q-layout-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';

export default {
  name: 'MyLayout',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
    };
  },
  methods: {
    openURL,
  },
};
</script>

<style>
</style>
