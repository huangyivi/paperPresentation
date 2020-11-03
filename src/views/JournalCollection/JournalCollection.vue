<template>
  <div class="min-w">
    <div class="jou-coll-title">
      <img src="../../assets/images/periodicals.jpg" alt />
    </div>
    <JournalCollectionSearch></JournalCollectionSearch>
  </div>
</template>

<script>
import JournalCollectionSearch from "../../components/JournalCollection/JournalCollectionSearch";

export default {
  name: "JournalCollection",

  props: {},

  components: {
    JournalCollectionSearch,
  },

  data() {
    return {};
  },

  methods: {},

  mounted() {},
};
</script>

<style scoped lang="scss">
.min-w {
  width: 100%;
}

.jou-coll-title {
  height: 300px;
  width: 100%;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  background-color: rgb(0, 158, 255);

  img {
    height: 100%;
    width: 100%;
  }
}
</style>