<template>
  <div class="Article">
      <div class="article-title">
          <div>
              <span>{{article.title}}</span>
              <span>{{article.num}}篇</span>
          </div>
          <div>{{article.intro}}</div>
      </div>
      <ul>
          <li v-for="item in article.articles" :key="item.index">
              <span>{{item.name}}</span>
              <span>{{item.time}}</span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:["article"],

    data(){
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
$blueColor:#2880da;

.Article {
    width: 550px;

    .article-title {
        display: flex;
        justify-content: space-between;
        height: 35px;
        line-height: 35px;
        font-size: 16px;
        color: $blueColor;
        border-bottom: 1px solid #d8d8d8;

        span {

            &:first-child {
                display: inline-block;
                height: 35px;
                line-height: 35px;
                border-bottom: 1px solid $blueColor;
            }

            &:last-child {
                padding: 0 4px;
                margin-left: 10px;
                font-size: 12px;
                border: 1px solid $blueColor;
            }
        }
    }

    ul {

        li {
            display: flex;
            justify-content: space-between;
            height: 44px;
            line-height: 44px;
            border-bottom: 1px dashed #d8d8d8;
            cursor: pointer;

            span {

                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;

                &:first-child {
                    width: 400px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }

            &:hover {
                color: $blueColor;
            }
        }
    }

}
</style>