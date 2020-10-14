<template>
  <div class="min-w">
      <!-- 测试分支 -->
    <div class="paper-title">
      <img src="http://zhimaikeji.net/imgs/wf/test_banner.png" alt />
    </div>
    <div class="paper-body">
      <CheckDuplicate
        v-for="(item, index) in paperCheck"
        :key="index"
        :img="item.img"
        :title="item.title"
        :detail="item.detail"
        :href="item.href"
      ></CheckDuplicate>
    </div>
  </div>
</template>

<script>
import CheckDuplicate from "../../components/CheckDuplicate/CheckDuplicate";

export default {
  name: "PaperCheck",

  props: {},

  components: {
    CheckDuplicate,
  },

  data() {
    return {
      paperCheck: [
        {
          img: "http://zhimaikeji.net/imgs/test1.png",
          title: "中国知网",
          detail:
            "知网大分解学术不端文献检测系统，知网学术不端检测，一般用于硕博、本科、专科生的毕业论文分段进行检测，区别是需要将论文分成段落来进行检测，最终分段后检测出的结果再进行简单计算可获得最终的抄袭结果，检测的文献库范围跟知网VIP5.0系统一致，也同样包含…",
          href: "#",
        },
        {
          img: "http://zhimaikeji.net/imgs/test1.png",
          title: "中国知网",
          detail:
            "知网大分解学术不端文献检测系统，知网学术不端检测，一般用于硕博、本科、专科生的毕业论文分段进行检测，区别是需要将论文分成段落来进行检测，最终分段后检测出的结果再进行简单计算可获得最终的抄袭结果，检测的文献库范围跟知网VIP5.0系统一致，也同样包含…",
          href: "#",
        },
        {
          img: "http://zhimaikeji.net/imgs/test1.png",
          title: "中国知网",
          detail:
            "知网大分解学术不端文献检测系统，知网学术不端检测，一般用于硕博、本科、专科生的毕业论文分段进行检测，区别是需要将论文分成段落来进行检测，最终分段后检测出的结果再进行简单计算可获得最终的抄袭结果，检测的文献库范围跟知网VIP5.0系统一致，也同样包含…",
          href: "#",
        },
        {
          img: "http://zhimaikeji.net/imgs/test1.png",
          title: "中国知网",
          detail:
            "知网大分解学术不端文献检测系统，知网学术不端检测，一般用于硕博、本科、专科生的毕业论文分段进行检测，区别是需要将论文分成段落来进行检测，最终分段后检测出的结果再进行简单计算可获得最终的抄袭结果，检测的文献库范围跟知网VIP5.0系统一致，也同样包含…",
          href: "#",
        },
        {
          img: "http://zhimaikeji.net/imgs/test1.png",
          title: "中国知网",
          detail:
            "知网大分解学术不端文献检测系统，知网学术不端检测，一般用于硕博、本科、专科生的毕业论文分段进行检测，区别是需要将论文分成段落来进行检测，最终分段后检测出的结果再进行简单计算可获得最终的抄袭结果，检测的文献库范围跟知网VIP5.0系统一致，也同样包含…",
          href: "#",
        },
      ],
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

.paper-title {
  height: 225px;
  width: 100%;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  background-color: rgb(0, 120, 132);

  img {
    height: 100%;
    border: none;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 50%;
    margin-left: -960px;
  }
}

.paper-body {
  width: 100%;
  margin: 26px 0;
}
</style>