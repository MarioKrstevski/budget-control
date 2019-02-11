<template>
  <q-layout view="lHh Lpr lFf">
      Login
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';

export default {
  name: 'Login',
  methods: {
    openURL,
  },
};
</script>

<style>
.rlink:hover{
  background-color: #040;
}
</style>
