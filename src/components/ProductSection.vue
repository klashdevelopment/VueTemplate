<template>
    <div style="border-top: 1px solid white; border-bottom: 1px solid white;">
        <h2>{{ company }}</h2>
        
        <div style="margin: 8px; padding: 8px;" v-for="item in products"><a class="codefont-bold" style="font-size:20px;">{{ item.title }}</a> <p> {{ item.description }} </p> <button class="download-button" @click="download(item)"> {{ item.btntext }} </button></div>
    </div>
</template>
<script>
export default {
    props: {
        products: {
            type: Array,
            required: true
        },
        company: String,
    },
    methods: {
        download(item) {
            window.open(item.download);
        }
    }
}
</script>