<template>
  <div>
    <div class="jou-coll-title">
      <img src="..\..\..\src\assets\images\all_bnner.jpg" alt />
    </div>
    <JournalCollectionSearch></JournalCollectionSearch>
  </div>
</template>

<script>
import JournalCollectionSearch from "../../components/JournalCollection/JournalCollectionSearch"

export default {
  name: "JournalCollection",

  props: {},

  components: {
    JournalCollectionSearch
  },

  data() {
    return {
      
    };
  },

  methods: {},

  mounted() {},
};
</script>

<style scoped lang="scss">
.jou-coll-title {
  height: 300px;
  width: 100%;
  min-width: 1455px;
  position: relative;
  margin: 0 auto;
  overflow: hidden;

  img {
    height: 100%;
    border: none;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -960px;
  }
}
</style>