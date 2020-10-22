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
              <a :href="getTrueHref(item.id)" target="blank">
                  <span>{{item.name}}</span>
              </a>
              <span>{{item.time}}</span>
          </li>
          <h3 v-show="!article.articles.length">暂无数据</h3>
      </ul>
  </div>
</template>

<script>
export default {
    props:["article"],

    data(){
        return {
        }
    },
    methods: {
        getTrueHref(id){
            return '/DocDetails/' + id;
        }
    },
    wathc: {
        article: {
            handle(newVal,oldVal){
                return this.article;
            }
        },
        deep: true
    }
}
</script>

<style lang="scss" scoped>
$blueColor:#2880da;

.Article {
    width: 500px;

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

        max-height: 464px;

        li {
            display: flex;
            justify-content: space-between;
            height: 44px;
            line-height: 44px;
            
            border-bottom: 1px dashed #d8d8d8;
            cursor: pointer;

            a {
                color: #5f5f5f;
            }

            span {

                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;

                &:first-child {
                    width: 350px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }

            &:hover,
            &:hover a {
                color: $blueColor;
            }
        }

        h3 {
            height: 100px;
            line-height: 100px;
            text-align: center;
            font-size: 30px;
        }
    }

}
</style>