<template>
debug_{{keys}}_{{frame}}<br>
keyinfo_{{keyinfo}}
<div>{{keys}}</div>
<Key
    :notes="keyinfo.m"
    :frame="frame"
 />
</template>

<script setup>
import AmaInterface from "/utils/amainterface"
const amaInterface=new AmaInterface()

const frame=ref(0)
const keys=ref(amaInterface.keys)

const keyinfo=ref({m: [{push: 10, leave: 5},{push: 100, leave: 60}]})

onMounted(()=>{
    amaInterface.addKeyEvents()
    loopStart(30)
})


const loopStart=(fps)=>{
    loop()
    
    frame.value+=1
    setTimeout(()=>{
        loopStart()
    },1000/fps)
}

const loop=()=>{
    if(amaInterface.keys.includes("m")){
        if (keyinfo.value.m.length===0 ||
            keyinfo.value.m.at(-1).leave!==0){
            
            keyinfo.value.m.push({push: frame.value, leave: 0})
        }
    }else{
        if(keyinfo.value.m.length!==0){
            if (keyinfo.value.m.at(-1).leave===0)keyinfo.value.m.at(-1).leave=frame.value
        }
    }

    const lifetime=600;
    if(keyinfo.value.m.length!==0){
        keyinfo.value.m=keyinfo.value.m.filter((v)=>{
            return(v.leave===0 || frame.value-v.leave<lifetime)
        })
    }
}
</script>