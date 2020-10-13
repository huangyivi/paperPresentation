<template>
  <div id="search">
    <div>
      <h1>文献搜索</h1>
    </div>
    <div id="search-up">
      <input type="text" v-model="input"/>
      <i-button type="primary" icon="ios-search">搜索</i-button>
    </div>
    <div id="search-type">
      <input class="doc-attach"  type="radio" name="group1" value="1" id="title" @click="changeAttach" checked />
      <label for="title">文章标题</label>
      <input class="doc-attach" type="radio" name="group1" value="2" id="author" @click="changeAttach" />
      <label for="author">作者</label>
      <input class="doc-attach" type="radio" name="group1" value="3" id="keyword" @click="changeAttach" />
      <label for="keyword">关键词</label>
    </div>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      input : this.Global.docInput
    };
  },
  methods: {
    changeAttach(){
      let attachs = document.getElementsByClassName('doc-attach');
      for(let i=0;i<attachs.length;i++){
        if(attachs[i].checked == true){
          this.docAttach = attachs[i].value;
          // console.log(this.docAttach);
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#search {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  min-width: 1120px;
  min-height: 200px;
  padding: 0 300px;
  #search-up {
    display: flex;
    input {
      min-width: 700px;
      min-height: 31px;
      border: 3px solid #2d8cf0;
      font-size: 24px;
      outline: none;
      margin-right: 10px;
      padding: 0 10px;
    }
  }
  #search-type {
    justify-self: flex-start;
    width: 100%;
    min-width: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    > * {
      margin: 0 5px;
      cursor: pointer;
    }
    > *:hover {
      color: #2d8cf0;
    }
  }
}
</style>