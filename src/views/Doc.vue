<template>
<div>
    <Topnav />
    <div class="content">
        <aside>
            <h2>组件列表</h2>
            <ol>
                <li>
                    <router-link to="/doc/swich">Switch 组件</router-link>
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
        <main>主内容</main>
    </div>
</div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue"
export default {
    components: {
        Topnav
    }

}
</script>

<style lang="scss" scoped>
.content {
    display: flex;
    height: calc(100vh - 84px);
}

.content aside {
    width: 10%;
    text-align: center;
    background: #D1FACC;
}

.content main {
    width: 90%;
}
</style>
