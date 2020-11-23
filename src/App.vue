<template>
<div>
    <router-view />
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
        const menuVisible = ref(false);
        provide('xxx', menuVisible);
    }
};
</script>
