<template>
    <div class="noteline" >
        <key.Note 
         v-for="note in props.notes" 
         :left="note.leave===0?0:frame-note.leave"
         :width="note.leave===0?frame-note.push:note.leave-note.push"
         :key="frame"
        />
    </div>
</template>

<script setup>
    const props=defineProps({notes: Object, frame: Number});
    const notes=ref((props.notes))
</script>

<style scoped>
.noteline{
    height: 40px;
    width: 80%;

    position: relative;
    
    border-top: 2px solid gray;
    border-bottom: 2px solid gray;
}
</style>