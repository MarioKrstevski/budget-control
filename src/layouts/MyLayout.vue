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
        <q-list-header class="text-blue-grey-10">Previews</q-list-header>
          <q-item to="/dashboard" exact ripple>
            <q-item-side icon="view_compact" />
            <q-item-main label="Dashboard"/>
          </q-item>
          <q-item to="/transactions" exact>
            <q-item-side icon="attach_money" />
            <q-item-main label="Transactions"/>
          </q-item>
          <q-item to="/budgets" exact>
            <q-item-side  icon="euro_symbol" />
            <q-item-main  label="Budgets"/>
          </q-item>
          <q-item to="/statistics" exact>
            <q-item-side icon="assessment" />
            <q-item-main label="Statistics"/>
          </q-item>
      </q-list>

      <q-list
        no-border
        link
        sparse
        inset-delimiter
      >
      <q-list-header class="text-blue-grey-10">Account</q-list-header>
        <q-item to="/settings" exact>
          <q-item-side icon="settings" />
          <q-item-main label="Settings"/>
        </q-item>
        <q-item>
          <q-item-side icon="screen_lock_portrait" />
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
.router-link-active {
   background-color: rgb(208, 223, 223) !important ;
   border-left: 8px solid rgb(122, 197, 122);
   cursor: pointer;
 }
 .q-item:hover{
   background-color: rgb(208, 223, 223) !important ;
 }
 .router-link-active .q-item-icon{
   color: rgb(122, 197, 122) !important;
 }
</style>
