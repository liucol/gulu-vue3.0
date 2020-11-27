<template>
    <button @click="toggle" :class="{checked}">
        <span></span>
    </button>
</template>

<script lang="ts">
    import {ref} from "vue"

    export default {
        name: "Switch",
        setup() {
            const checked = ref(false);
            const toggle = () => {
                checked.value = !checked.value;
            }
            return {checked,toggle};
        }
    }
</script>

<style lang="scss" scoped>
    $h: 22px;
    $h2: $h - 4px;
    button {
        position: relative;
        height: $h;
        width: $h*2;
        border: none;
        background: #ccc;
        border-radius: $h/2;
    }

    span {
        position: absolute;
        display: inline-block;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background: white;
        border-radius: $h2 /2;
    }

    button.checked {
        background: blue;
    }

    button.checked > span {
        left: calc(100% - #{$h2} - 2px);
    }
</style>

