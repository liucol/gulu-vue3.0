<template>
<div class="topnave">
    <div class="logo" @click="toggleMenu">
        <img src="../assets/image/logo.png" />
        <span>Vue.js</span>
    </div>
    <div class="menu">
        <span>菜单</span>
        <span>菜单</span>
    </div>
</div>
</template>

<script lang="ts">
import {
    inject,
    Ref
} from 'vue'

export default {
    setup() {
        const menuVisible = inject < Ref < boolean > > ('xxx');
        const toggleMenu = () =>{
            menuVisible.value = !menuVisible.value;
        };
        return {toggleMenu};
    },
}
</script>

<style lang="scss" scoped>
/* 顶部导航 */
.topnave {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    padding: 10px 0;
    background: #FDFFE0;

    .logo {
        display: flex;
        align-items: center;
        margin-right: 30px;

        img {
            width: 64px;
        }

        span {
            font-size: 30px;
        }
    }

    .menu span {
        display: inline-block;
        padding: 0 30px;
    }
}
</style>
