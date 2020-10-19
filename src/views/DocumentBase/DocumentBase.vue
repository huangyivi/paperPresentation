<template>
    <div>
        <Banner :imgSrc="BannerSrc"/>
        <Table/>
    </div>
</template>
<script>
    import Banner from "../../components/Banner/Banner";
    import Table from "../../components/DocumentBase/Table"
    export default{
        name : "DocumentBase",
        data(){
            return {
                BannerSrc : "https://img.zcool.cn/community/013a585ba07606a801213dea85ff57.jpg@1280w_1l_2o_100sh.jpg"
            }
        },
        components:{
            Banner,
            Table
        }
    }
</script>
<style lang="scss" scoped>

</style>