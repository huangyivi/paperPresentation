<template>
    <div>
        <Banner :imgSrc="BannerSrc"/>
       <Bookshelf/>
    </div>
</template>
<script>
    import Bookshelf from "../../components/JournalRecommend/Bookshelf"
    import Banner from "../../components/Banner/Banner"
    export default{
        name : "JournalRecommend",
        components : {
            Bookshelf, 
            Banner
        },
        data(){
            return {
                BannerSrc : "https://img.zcool.cn/community/013a585ba07606a801213dea85ff57.jpg@1280w_1l_2o_100sh.jpg"
            }
        }
    }
</script>