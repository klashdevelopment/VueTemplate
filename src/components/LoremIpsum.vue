<template>
    <p>{{ lorem }}</p>
</template>
<script>
export default {
    data() {
        return {
            lorem: ""
        }
    },
    props: {
        max: Number | String
    },
    created() {
        var lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est turpis, aliquam sollicitudin finibus sit amet, ultricies a augue. Nullam faucibus consequat faucibus. Duis pharetra turpis non lorem commodo feugiat. Duis posuere risus eget neque tincidunt, in pellentesque ipsum ultricies. Donec facilisis diam ut pellentesque ornare. In sollicitudin lectus egestas posuere consequat. Suspendisse potenti. Sed neque quam, dignissim quis scelerisque nec, rhoncus tincidunt enim. Aenean eget tortor feugiat, volutpat lectus vel, blandit tellus. Vivamus eu lobortis turpis. Mauris eu dolor quis tellus gravida pretium vitae eget ex. Quisque posuere quam tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc sagittis volutpat tellus et posuere.`;
        var text = "";
        var maximum = 0;
        if(this.max === "1p") {
            maximum = lorem.length;
        }else{
            maximum = parseInt(this.max);
        }
        while (text.length < maximum) {
            text += lorem;
        }
        console.log(text);
        this.lorem = text.substring(0, maximum);
    }
}
</script>