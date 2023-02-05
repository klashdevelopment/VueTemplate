<template>
  <li class="nav-li">
    <a class="nav-a" :href="link" :class="{ right: right, active: active }">{{ text }}</a>
  </li>
</template>
<script>
  export default {
    props: {
        link: String,
        active: Boolean,
        text: String,
        right: Boolean
    }
  }
</script>