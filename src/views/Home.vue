<template>
<div>
    <Topnav />
    <div class="banner">
        <h1>轱辘UI</h1>
        <h2>一个厉害的 UI 框架</h2>
        <p class="actions">
            <a href="https://GitHub.com">GitHub</a>
            <router-link to="/doc">开始</router-link>
        </p>
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
.banner {
    padding: 100px 0;
    text-align: center;
    background: #88DF90;

    h1 {
        margin-bottom: 10px;
    }

    h2 {
        margin-bottom: 10px;
    }

    .actions a {
        display: inline-block;
        margin: 0 8px;
        padding: 0 8px;
        $h: 28px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        background: #fff;
    }
}
</style>
