<template>
  <div class="Book">
      <div class="book-show">
            <div class="book-container">
                <!-- <a class="book-to" :href="getTrueHref(data.id)">
                    <img class="book-img" :src="data.bookurl" alt="">     
                </a> -->
                <router-link class="book-to" :to="getTrueHref(data.id)">
                    <img class="book-img" :src="data.bookurl" alt="">
                </router-link>
                <!-- <a v-show="data.bookEn" class="book-en" :href="getTrueHref(data.id)">{{data.bookEn}}</a> -->
                <!-- <a v-show="data.bookName" class="book-name" :href="getTrueHref(data.id)">{{data.bookName}}</a> -->
                <router-link v-show="data.bookName" class="book-name" :to="getTrueHref(data.id)">{{data.bookName}}</router-link>
                <div class="second-line">
                    <span>{{data.bookClass}}</span>
                    |
                    <span>{{data.bookRank}}</span>
                </div>
                <div class="fromJournal" v-show="data.bookResoure">
                    <span>收录:</span>
                    <span>{{data.bookResoure}}</span>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {

    props: ["book"],

    data(){
        return {
            data:{
                // bookName: '内燃机与配件',
                // bookRank: '国家级',
                // bookClass: '半月刊',
                // bookResoure: '知网、万方、维普、龙源',
            },
        }
    },

    methods: {
        getTrueHref(id){
            return '/JournalDetails/' + id;
        }
    },

    mounted(){
        this.data = this.book;
    },

    watch:{
        book: {
            handle(newVal,oldVal){
                this.data = this.book;
            }
        },
        deep: true,
    }


}
</script>

<style lang="scss" scoped>

    .Book {

        margin: 10px 7px;
        height: 366px;

        .book-show {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 222px;
            height: 100%;
            overflow: hidden;
            background: #fff;

            .book-container {
                

                .book-to {
                    margin: 0 auto;
                    display: block;
                    width: 138px;
                    height: 192px;

                    .book-img {
                        width: 100%;
                        height: 100%;
                        border: 4px solid #efefef;
                        transition: all .5s;

                        &:hover {
                        border-color: #FF8F00;
                    }
                    }
                }

                .book-name {
                    display: block;
                    color: #3c3c3c;
                    margin-top: 10px;
                    font-size: 14px;
                    text-align: center;
                    transition: all .5s;

                    &:hover {
                        color: #FF8F00;
                    }
                }

                .book-en {
                    display: block;
                    color: #3c3c3c;
                    margin-top: 10px;
                    font-size: 14px;
                    text-align: center;
                    transition: all .5s;

                    &:hover {
                        color: #FF8F00;
                    }
                }

                >div {
                    margin: 10px 0;
                    font-size: 12px;
                    text-align: center;
                    color: #7e7e7e;

                    &:last-child {
                        padding: 5px;
                        border-top: 1px solid #7e7e7e;
                    }

                }

                .second-line {
                    
                    padding: 5px 0;
                    margin: 0 15px;

                    >span {
                        margin: 0 2px;
                    }
                }

                .fromJournal {
                    margin: 0 10px;
                    max-height: 50px;
                    overflow: auto;

                    &::-webkit-scrollbar {
                        width: 0;
                    }
                }
        
            }
        }
    }



</style>