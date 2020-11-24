<template>
    <div>
        <router-view/>
    </div>
</template>

<script lang="ts">
    import {
        provide,
        ref
    } from 'vue';

    export default {
        name: "App",
        setup() {
            const width = document.documentElement.clientWidth;
            console.log(width);
            const menuVisible = ref(width > 500);
            provide('xxx', menuVisible);
        }
    };
</script>
