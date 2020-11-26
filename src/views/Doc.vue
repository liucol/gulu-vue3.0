<template>
    <div>
        <Topnav/>
        <div class="content" :class="{showAside: menuVisible}">
            <aside v-if="menuVisible">
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/switch">Switch 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 组件</router-link>
                    </li>
                </ol>
            </aside>
            <main>
                <router-view/>
            </main>
        </div>
    </div>
</template>

<script lang="ts">
    import Topnav from "../components/Topnav.vue";
    import {mapGetters} from "vuex";
    import {
        inject,
        Ref
    } from 'vue';


    export default {
        components: {
            Topnav
        },
        setup() {
            const menuVisible = inject<Ref<boolean>>('xxx');
            return {menuVisible};
        },
    }
</script>

<style lang="scss" scoped>
    .content {
        display: flex;
        padding-left: 182px;
        margin-top: 74px;
        min-height: calc(100vh - 74px);

        aside {
            position: fixed;
            top: 74px;
            left: 0;
            padding: 30px 16px 16px;
            width: 150px;
            height: 100%;
            background: lightblue;

            h2 {
                margin-bottom: 4px;
            }

            li {
                padding: 8px 0 4px 0;
            }
        }

        main {
            width: 100%;
            margin: 5px 0 0 5px;
            padding: 10px;
            background: #88DF8E;
        }
    }

    @media (max-width: 500px) {
        .content {
            padding-left: 0;
        }
    }

    .showAside{
        padding-left: 182px;
    }
</style>
