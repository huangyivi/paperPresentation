<template>
    <div class="BigContainer">
        <div>
            <!-- <div class="book-sum" :style="{backgroundImage:'url('+bookSum.bookImg+')'}">
                <p>
                    <span class="book-title">{{bookSum.bookTitle}}</span>
                    <span class="book-num" v-if="bookSum.bookNum">{{bookSum.bookNum}}本</span>
                </p>
                <p class="book-translate">{{bookSum.bookEn}}</p>
            </div> -->
            
            <BookIntro :bookSum="bookSum"/>

            <!-- <div class="book-show" v-for="(item,index) in books" :key="item.index">
                <div class="book-container">
                    <a class="book-to" href="" @click.prevent>
                        <img class="book-img" :src="imgBase" alt="">     
                    </a>
                    <a class="book-name" href="" @click.prevent>{{item.bookName}}</a>
                    <div class="second-line">
                        <span>{{item.bookClass}}</span>
                        |
                        <span>{{item.bookRank}}</span>
                    </div>
                    <div>
                        <span>收录:</span>
                        <span>{{item.bookResoure}}</span>
                    </div>
                </div>
            </div> -->

            <Book v-for="item in books" :key="item.index" :book="item"></Book>
        </div>
    </div>
</template>

<script>
    import Banner from '../Banner/Banner'
    import BookIntro from './BookIntro'
    import Book from './Book'

    export default {
        props:["bookSum"],
        data(){
            return {
                books:[
                    {
                        bookName: '内燃机与配件',
                        bookRank: '国家级',
                        bookClass: '半月刊',
                        bookResoure: '知网、万方、维普、龙源',
                        bookurl: 'http://54.222.136.26:8080/uimgs/prl/nrpj.jpg',
                    },
                    {
                        bookName: 'nimm',
                        bookRank: '国家级',
                        bookClass: '半月刊',
                        bookResoure: '知网、万方、维普、龙源',
                        bookurl: 'http://54.222.136.26:8080/uimgs/prl/nrpj.jpg',
                    },
                    {
                        bookName: 'nimm',
                        bookRank: '国家级',
                        bookClass: '半月刊',
                        bookResoure: '知网、万方、维普、龙源',
                        bookurl: 'http://54.222.136.26:8080/uimgs/prl/nrpj.jpg',
                    },
                    {
                        bookName: 'nimm',
                        bookRank: '国家级',
                        bookClass: '半月刊',
                        bookResoure: '知网、万方、维普、龙源',
                        bookurl: 'http://54.222.136.26:8080/uimgs/prl/nrpj.jpg',
                    },
                ],
                

            }
        },
        components: {
            Banner,
            BookIntro,
            Book
        },
        mounted(){

        }

    }
</script>

<style lang="scss" scoped>

    // $Pic: 'http://zhimaikeji.net/imgs/wf/paper_sub.png';
    .BigContainer {

        padding: 10px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background: rgb(249,249,249);

        >div {
            width: 80%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            .book-sum {
                
                margin: 10px 0;
                padding: 26px 26px 0 0;
                width: 222px;
                height: 366px;
                overflow: hidden;
                color: #2880da;
                text-align: right;
                background-repeat: no-repeat;
                
                >p {
        
                    font-size: 12px;
        
                    &:first-child {
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        font-size: 18px;
                        height: 30px;
                        border-bottom: 1px solid #2880da;
                    }
        
        
                    span {

                        &.book-num {
                            display: inline-block;
                            padding: 0 10px;
                            margin-left: 5px;
                            color: #fff;
                            font-size: 12px;
                            height: 19px;
                            line-height: 19px;
                            background-color: #2880da;
                        }

                    }
                }
            }
        }
    }
    
    
</style>