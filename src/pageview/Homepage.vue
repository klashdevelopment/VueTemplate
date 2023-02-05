<!-- Add the HTML -->
<template>
    <!-- Draw a Navbar. -->
    <Navbar />
    <!-- Draw the content. See Content.vue -->
    <Content />
</template>
<!-- Add the script -->
<script>
// Import the components that we use.
import Content from '../components/Content.vue';
import Navbar from '../components/Navbar.vue';
// Export the vue component file's data.
export default {
    // Because we use other components, we need to export them.
    components: {
        // Add the used components.
        Content,
        Navbar
    }
}
</script>