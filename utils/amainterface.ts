export default class AmaInterface{
    keys: string[]=[];

    addKeyEvents=()=>{
        window.addEventListener("keydown", (e)=>{
            if (!this.keys.includes(e.key))this.keys.push(e.key)
        })
        window.addEventListener("keyup", (e)=>{
            if (this.keys.includes(e.key)){
                const index=this.keys.findIndex((v)=>{return v===e.key})
                this.keys.splice(index, 1)
            }
        })
    }
}