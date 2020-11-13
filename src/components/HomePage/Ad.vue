<template>
  <div id="Ad">
        <!-- <a class="ad-pane" href="/paperhub/client/OnlineSubmit">
            <img :src="imgSrc" alt="">
        </a> -->
        <router-link class="ad-pane" to="/OnlineSubmit">
            <img :src="imgSrc" alt="">
        </router-link>
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
        width: 1200px;
        img {
            height: 148px;
            width: 100%;
            margin: 30px 0;
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
    }
}


</style>