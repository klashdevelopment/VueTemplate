<template>
    <div :style="{ borderTopWidth: linewidth, borderTopStyle: linestyle, borderTopColor: 'rgb(203, 203, 203)', width: '100%' } "></div>
</template>
<script>
    export default {
        props: {
            linewidth: {
                type: String,
                default: '2.5px'
            },
            linestyle: {
                type: String,
                default: 'solid'
            }
        }
    }
</script>