<template>
<span class="note"></span>
</template>

<script setup>
const props=defineProps(["left", "width"])

const speed=5/6

const left=ref(`${props.left*speed}%`)
const width=ref(`${
    (props.left+props.width)*speed<100?
    props.width*speed
    :100-(props.left)*speed
}%`)
</script>

<style scoped>
.note{
    overflow: hidden;
    height: 100%;
    width: v-bind(width);

    position: absolute;
    left: v-bind(left);
    background-color: rgba(200, 22, 200, 0.5);
}
</style>