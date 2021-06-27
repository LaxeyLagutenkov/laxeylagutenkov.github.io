<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import authLayout from './layouts/authLayout.vue'
import basicLayout from './layouts/basicLayout.vue'
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'basic') + '-layout'
    }
  },
  components: {
    authLayout,
    basicLayout
  }
}
</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/index.css';
</style>
