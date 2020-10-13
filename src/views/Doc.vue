<template>
<div>
    <Topnav />
    <div class="content">
        <aside>边栏</aside>
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
