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
                <DropdownItem>驴打滚</DropdownItem>
                <DropdownItem>炸酱面</DropdownItem>
                <DropdownItem>豆汁儿</DropdownItem>
                <DropdownItem>冰糖葫芦</DropdownItem>
                <DropdownItem>北京烤鸭</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown class="drop-down">
              <Button type="primary" class="dropdown">
                发行周期
                <Icon type="ios-arrow-down"></Icon>
              </Button>
              <DropdownMenu slot="list">
                <DropdownItem>驴打滚</DropdownItem>
                <DropdownItem>炸酱面</DropdownItem>
                <DropdownItem>豆汁儿</DropdownItem>
                <DropdownItem>冰糖葫芦</DropdownItem>
                <DropdownItem>北京烤鸭</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown class="drop-down">
              <Button type="primary" class="dropdown">
                影响因子
                <Icon type="ios-arrow-down"></Icon>
              </Button>
              <DropdownMenu slot="list">
                <DropdownItem>驴打滚</DropdownItem>
                <DropdownItem>炸酱面</DropdownItem>
                <DropdownItem>豆汁儿</DropdownItem>
                <DropdownItem>冰糖葫芦</DropdownItem>
                <DropdownItem>北京烤鸭</DropdownItem>
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