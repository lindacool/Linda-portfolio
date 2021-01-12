<template>
<div class="col-sm-12 text-center button-div" >
<button @click="back">Go back</button>
<button @click="redirect">Home</button>
</div>

  
</template>

<script>
export default {
    methods: {
        redirect() {
            this.$router.push({name: 'Home'})
        },
        back() {
            this.$router.go(-1)
        }
    }

}
</script>


<style lang="scss" scoped>

.button-div{
     position:absolute;
     button{
    margin: 0 10px;
    padding: 10px;
    border: none;
    border-radius: 4px;
   

}

}
    





</style>