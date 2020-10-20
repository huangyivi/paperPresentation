<template>
    <div v-if="bookSum.bookid == 1" class="book-intro" :style="{backgroundImage:'url('+bookSum.bookImg+')',color: '#2880da'}">
        <p>
            <span class="book-title">{{bookSum.bookTitle}}</span>
            <span class="book-num" v-show="bookSum.bookNum">{{bookSum.bookNum}}本</span>
        </p>
        <p class="book-translate" v-html="bookSum.bookEn"></p>
    </div>
    
    <div v-else-if="bookSum.bookid <4 && bookSum.bookid>1" class="book-intro" :style="{backgroundImage:'url('+bookSum.bookImg+')',color: '#fff'}">
        <p class="borderB-white">
            <span class="book-title">{{bookSum.bookTitle}}</span>
            <span class="book-num num-second" v-show="bookSum.bookNum">{{bookSum.bookNum}}本</span>
        </p>
        <p class="book-translate" v-html="bookSum.bookEn"></p>
    </div>

    <div v-else class="book-intro" :style="{backgroundImage:'url('+bookSum.bookImg+')',color: '#e72008'}">
        <p class="borderB-red">
            <span class="book-title">{{bookSum.bookTitle}}</span>
            <span class="book-num" v-show="bookSum.bookNum">{{bookSum.bookNum}}本</span>
        </p>
        <p class="book-translate" v-html="bookSum.bookEn"></p>
    </div>
  
</template>

<script>
export default {

    props:["bookSum"],

    data(){
        return {

        }
    }

}
</script>

<style lang="scss" scoped>

 .book-intro {
                
    margin: 10px 0;
    padding: 26px 26px 0 0;
    width: 222px;
    height: 366px;
    overflow: hidden;
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

        &.borderB-white {
            border-bottom-color: #fff;
        }

        &.borderB-red {
            border-bottom-color: #e72008;
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

            &.num-second {
                background: none;
                border: 1px solid #fff;
            }

        }
    }
}


</style>