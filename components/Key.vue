<template>
    <div class="note" v-for="note in JSON.parse(notes)">
    {{note}}
    </div>
</template>

<script setup>
    const props=defineProps(Object)
</script>