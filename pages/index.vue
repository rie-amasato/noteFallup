<template>
index{{frame}}
<div>{{keys}}</div>
<Key
    notes="[{push: 5, leave: 10}]"
 />
</template>

<script setup>
import AmaInterface from "/utils/amainterface"
const amaInterface=new AmaInterface()

const frame=ref(0)
const keys=ref(amaInterface.keys)

onMounted(()=>{
    amaInterface.addKeyEvents()
    loopStart(60)
})


const loopStart=(fps)=>{
    loop()
    
    frame.value+=1
    setTimeout(()=>{
        loopStart()
    },1000/fps)
}

const loop=()=>{

}
</script>