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
    import {router} from "./router.ts";

    export default {
        name: "App",
        setup() {
            const width = document.documentElement.clientWidth;
            //设置一个初始值
            const menuVisible = ref(width > 500);
            //把变量命个名字并且开放出去
            provide('xxx', menuVisible);
            router.afterEach(() => {
                if (width <= 500) {
                    menuVisible.value = false;
                }
            });
        }
    };
</script>
