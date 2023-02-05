<template>
    <li class="nav-li">
      <img :src="src" width="45" height="45" style="border-radius: 20%;margin-right:6px;" @click="hrefToHome">
    </li>
  </template>
  <script>
    export default {
      props: {
          src: String,
      },
      methods: {
        hrefToHome() {
            window.location.href="/#";
        }
      }
    }
  </script>