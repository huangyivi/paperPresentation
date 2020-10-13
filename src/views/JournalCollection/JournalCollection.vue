<template>
  <div class="min-w">
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
    JournalCollectionSearch,
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
.min-w {
  min-width: 1400px;
}

.jou-coll-title {
  height: 300px;
  width: 100%;
  position: relative;
  margin: 0 auto;
  overflow: hidden;

  img {
    height: 100%;
    border: none;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -930px;
  }
}
</style>