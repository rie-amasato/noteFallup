<template>
<div class="keyboard">
    <Key v-for="key of keyinfo"
        :notes="key"
        :frame="frame"
    />
</div>

debug_{{keys}}_{{frame}}<br>
keyinfo_{{keyinfo}}
<div>{{keys}}</div>
</template>

<script setup>
import AmaInterface from "/utils/amainterface"
const amaInterface=new AmaInterface()

const frame=ref(0)
const keys=ref(amaInterface.keys)

const keyinfo=ref({
    z: [],
    x: [],
    c: [],
    v: [],
    b: [],
    n: [],
    m: [],
})

onMounted(()=>{
    amaInterface.addKeyEvents()

    loopStart()
})


const loopStart=()=>{
    loop()
    
    frame.value+=1
    setTimeout(()=>{
        loopStart()
    }, 25)
}

const loop=()=>{
    Object.keys(keyinfo.value).forEach((k)=>{
        console.log(k)
        if(amaInterface.keys.includes(k)){
            if (keyinfo.value[k].length===0 ||
                keyinfo.value[k].at(-1).leave!==0){
                
                keyinfo.value[k].push({push: frame.value, leave: 0})
            }
        }else{
            if(keyinfo.value[k].length!==0){
                if (keyinfo.value[k].at(-1).leave===0)keyinfo.value[k].at(-1).leave=frame.value
            }
        }

        const lifetime=150;
        if(keyinfo.value[k].length!==0){
            keyinfo.value[k]=keyinfo.value[k].filter((v)=>{
                return(v.leave===0 || frame.value-v.leave<lifetime)
            })
        }
    })
}
</script>

<style scoped>
.keyboard{
    transform: rotate(270deg);
}
</style>