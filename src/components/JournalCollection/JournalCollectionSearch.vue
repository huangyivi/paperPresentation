<template>
  <!-- 最上面搜索栏 -->
  <div class="search-main">
    <div class="jou-coll-search">
      <label>已选条件：</label>
      <div class="check-box">
        <span class="check-div">
          科学技术
          <span class="check-delete">x</span>
        </span>
      </div>
      <div class="all-cancel">全部取消</div>
      <div class="check-total">
        （共筛选出相关期刊 <span class="red">{{ searchTotal }}</span> 本）
      </div>
    </div>
    <!-- 筛选与显示 -->
    <div class="search-body">
      <searchNav></searchNav>
      <div class="search-right">
        <div class="search-list">
          <div>
            <Dropdown class="drop-down">
              <Button type="primary" class="dropdown">
                期刊级别
                <Icon type="ios-arrow-down"></Icon>
              </Button>
              <DropdownMenu slot="list">
                <DropdownItem>不限</DropdownItem>
                <DropdownItem>核心（南大）</DropdownItem>
                <DropdownItem>国家级</DropdownItem>
                <DropdownItem>省级</DropdownItem>
                <DropdownItem>核心（北大）</DropdownItem>
                <DropdownItem>核心（北大.南大）</DropdownItem>
                <DropdownItem>未分级</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown class="drop-down">
              <Button type="primary" class="dropdown">
                发行周期
                <Icon type="ios-arrow-down"></Icon>
              </Button>
              <DropdownMenu slot="list">
                <DropdownItem>不限</DropdownItem>
                <DropdownItem>年刊</DropdownItem>
                <DropdownItem>半年刊</DropdownItem>
                <DropdownItem>季刊</DropdownItem>
                <DropdownItem>双月刊</DropdownItem>
                <DropdownItem>月刊</DropdownItem>
                <DropdownItem>半月刊</DropdownItem>
                <DropdownItem>旬刊</DropdownItem>
                <DropdownItem>周刊</DropdownItem>
                <DropdownItem>其他</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown class="drop-down">
              <Button type="primary" class="dropdown">
                影响因子
                <Icon type="ios-arrow-down"></Icon>
              </Button>
              <DropdownMenu slot="list">
                <DropdownItem>不限</DropdownItem>
                <DropdownItem>0.5以上</DropdownItem>
                <DropdownItem>1.0以上</DropdownItem>
                <DropdownItem>2.0以上</DropdownItem>
                <DropdownItem>3.0以上</DropdownItem>
                <DropdownItem>4.0以上</DropdownItem>
                <DropdownItem>5.0以上</DropdownItem>
                <DropdownItem>6.0以上</DropdownItem>
                <DropdownItem>7.0以上</DropdownItem>
                <DropdownItem>8.0以上</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div class="search-ans">
          <searchAnswer></searchAnswer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchNav from "../../components/JournalCollection/searchNav/searchNav";
import searchAnswer from "../../components/JournalCollection/searchAnswer/searchAnswer";

export default {
  name: "JournalCollectionSearch",
  props: [""],
  data() {
    return {
      searchTotal: 20,
      visible: false,
      
    };
  },
  components: {
    searchNav,
    searchAnswer,
  },
  methods: {
    handleOpen() {
      this.visible = true;
    },
    handleClose() {
      this.visible = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import "JournalCollectionSearch.scss";
</style>