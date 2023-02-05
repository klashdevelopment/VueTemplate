<template>
    <Navbar activePage="other" />
    <center class="content codefont" style="margin-top:60px;">
        <h1 class="codefont-bold">Page Title</h1>
        <Seperator linestyle="solid" />

        <!-- Add content here. -->
        <LoremIpsum max=1p />

        <Seperator linestyle="solid" />
        <section>
            <font-awesome-icon onclick="window.open('https://dsc.gg/klashdev')" class="fa-link" icon="fa-brands fa-discord" />
            <font-awesome-icon onclick="window.open('https://github.com/klashdevelopment')" class="fa-link" icon="fa-brands fa-github" />
            <font-awesome-icon onclick="window.open('https://twitter.com/KlashDev')" class="fa-link"  icon="fa-brands fa-twitter" />
            <font-awesome-icon onclick="window.open('https://youtube.com/@klashdevelopment')" class="fa-link"  icon="fa-brands fa-youtube" />
            <font-awesome-icon onclick="window.open('https://tiktok.com/@klashdevelopment')" class="fa-link" icon="fa-brands fa-tiktok" />
            <font-awesome-icon onclick="window.open('mailto:developmentklash@gmail.com')" class="fa-link"  icon="fa-solid fa-envelope" />
        </section>
    </center>
</template>
<script>
import Content from '../components/Content.vue';
import Navbar from '../components/Navbar.vue';
import Seperator from '../components/Seperator.vue';
import ProductSection from '../components/ProductSection.vue';
import LoremIpsum from '../components/LoremIpsum.vue';
export default {
    components: {
        Content,
        LoremIpsum,
        Navbar,
        Seperator,
        ProductSection
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