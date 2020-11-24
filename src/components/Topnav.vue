<template>
    <div class="topnave">
        <div class="logo">
            <img src="../assets/image/logo.png"/>
            <span>Vue.js</span>
        </div>
        <div class="menu">
            <span>菜单</span>
            <span>菜单</span>
        </div>
        <span class="toggleAside" @click="toggleMenu"></span>
    </div>
</template>

<script lang="ts">
    import {
        inject,
        Ref
    } from 'vue'

    export default {
        setup() {
            const menuVisible = inject<Ref<boolean>>('xxx');
            const toggleMenu = () => {
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
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        background: #FDFFE0;

        .logo {
            display: flex;
            align-items: center;
            margin-right: auto;
            margin-left: 60px;

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

        > .toggleAside {
            display: none;
            width: 24px;
            height: 24px;
            background: red;
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
        }

        /*0-500的屏幕宽度定制的样式*/
        @media (max-width: 500px) {
            > .menu {
                display: none;
            }
            > .logo {
                margin: 0 auto;
            }
            > .toggleAside {
                display: inline-block;
            }
        }
    }
</style>
