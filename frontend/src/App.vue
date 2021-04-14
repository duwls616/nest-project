<template>
  <v-app id="inspire">
    <main-app-bar></main-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import MainAppBar from './components/layout/AppBar';

export default {
  name: 'inspire',
  components: {
    MainAppBar,
  },
}
</script>
