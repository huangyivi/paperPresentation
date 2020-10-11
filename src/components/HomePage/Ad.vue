<template>
  <div id="Ad">
        <a class="ad-pane" href="" @click.prevent>
            <img :src="imgSrc" alt="">
        </a>
  </div>
</template>

<script>


export default {
    

    data(){
        return {
            
        }
    },
    props:["imgSrc"],

}
</script>

<style lang="scss" scoped>

#Ad {
    .ad-pane {

        display: flex;
        justify-content: center;

        img {
            height: 148px;
            width: 80%;
            margin: 30px 0;
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
    }
}


</style>