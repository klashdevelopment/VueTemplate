<template>
    <center class="content" style="margin-top:60px;">
        <h1 class="codefont-bold">Example Home Page</h1>
        <p class="codefont">
            <LoremIpsum max=200 />
        </p>
        <Seperator linestyle="solid" />
        <section class="codefont">
            <h2 class="codefont-bold">Example Section</h2>
            <p><LoremIpsum max=75 /></p>
        </section>
        <Seperator linestyle="solid" />
        <section class="codefont">
            <font-awesome-icon onclick="window.open('https://example.com/Discord')" class="fa-link" icon="fa-brands fa-discord" />
            <font-awesome-icon onclick="window.open('https://example.com/GitHub')" class="fa-link" icon="fa-brands fa-github" />
            <font-awesome-icon onclick="window.open('https://example.com/Twitter')" class="fa-link"  icon="fa-brands fa-twitter" />
            <font-awesome-icon onclick="window.open('https://example.com/YouTube')" class="fa-link"  icon="fa-brands fa-youtube" />
            <font-awesome-icon onclick="window.open('https://example.com/Tiktok')" class="fa-link" icon="fa-brands fa-tiktok" />
            <font-awesome-icon onclick="window.open('https://example.com/Email')" class="fa-link"  icon="fa-solid fa-envelope" />
        </section>
    </center>
</template>
<script>
import LoremIpsum from './LoremIpsum.vue';
import Seperator from './Seperator.vue';
export default {
    components: {
    Seperator,
    LoremIpsum
}
}
</script>
<style>
    .content {
        width: 60%;
        margin-right: 20%;
        margin-left: 20%;
    }
</style>