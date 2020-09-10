<template>
<div>
    hi | <router-link to='/'>pearl</router-link> | <router-link to='/xxx'>pearl2</router-link>
</div>
<hr />
<router-view />
</template>

<script>
export default {
    name: "App",
};
</script>
