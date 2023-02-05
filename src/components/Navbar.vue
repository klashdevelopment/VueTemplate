<template>
    <nav class="nav-nav">
  <ul class="nav-ul">
    <NavIcon src="/placeholder.webp" />
    <NavItem v-for="page in pages" :text="page.name" :link="page.link" :active="(activePage.toLowerCase() === page.name.toLowerCase())" />
  </ul>
</nav>
</template>
<script>
import NavItem from './NavItem.vue';
import NavIcon from './NavIcon.vue';
export default {
    components: {
      NavItem,
      NavIcon
    },
    props: {
      activePage: {
        default: 'home',
        type: String
      },
      pages: {
        type: Array,
        default: [
          {
            name: "Home",
            link: '/'
          },
          {
            name: "Other",
            link: 'other'
          }
        ]
      }
    }
}
</script>
<style scoped>
</style>