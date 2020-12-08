<template>
    <div class="wrap">
        <Switch :value="y" @input="y = $event"/>
    </div>
</template>

<script lang="ts">
    import Switch from "../lib/Switch.vue";
    import {ref} from 'vue';

    export default {
        name: "switchDemo",
        components: {
            Switch
        },
        setup() {
            const y = ref(false);
            return {y};
        }
    }
</script>

<style scoped>
    .wrap {

    }
</style>