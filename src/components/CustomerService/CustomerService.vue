<template>
  <div>
    <Modal
      class="chat-container"
      footer-hide
      :mask-closable="false"
      draggable
      scrollable
      v-model="display"
    >
      <p slot="header" style="color: #fff;text-align: center;">
        <span>期刊发表网欢迎您</span>
      </p>
      <p slot="close">
        <Icon type="md-close" size="20px" color="#fff" />
      </p>
      <div class="chat-history">
        <ul>
          <li class="chat-content">
            <p class="server-name">
              <span>编辑</span>
              <span>10-16</span>
              <span>00:00:00</span>
            </p>
            <p>您好，我是今天的值班客服，微信/QQ：176xxxxxx，关于 论文咨询、发表以及查稿，查文献都可以联系我。</p>
          </li>
          <li class="chat-content">
            <p class="customer-name">
              <span>我</span>
              <span>10-16</span>
              <span>00:00:00</span>
            </p>
            <p>您好，我想咨询一下关于......</p>
          </li>
          <li class="chat-tip">
            <span>当前客服在线</span>
          </li>
        </ul>
      </div>
      <div class="chat-utils">
        <emoji @emotion="handleEmotion" />
        <div class="chat-icon">
          <svg
            t="1602854622107"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4262"
            width="25"
            height="25"
          >
            <path
              d="M191.802 833.049c-26.552 0-48.153-21.886-48.153-48.786v-548.08c0-26.901 21.602-48.786 48.153-48.786h204.061c13.065 0 25.741 5.482 34.776 15.041l47.123 49.853c18.447 19.508 44.365 30.694 71.112 30.694H845.5c26.55 0 48.149 21.884 48.149 48.784v452.494c0 26.9-21.6 48.786-48.149 48.786H191.802z"
              fill="#FFFFFF"
              p-id="4263"
            />
            <path
              d="M395.863 212.397c6.221 0 12.274 2.629 16.609 7.215l47.129 49.858c23.145 24.477 55.684 38.515 89.275 38.515H845.5c12.765 0 23.15 10.67 23.15 23.784v452.494c0 13.116-10.385 23.786-23.15 23.786H191.802c-12.767 0-23.153-10.67-23.153-23.786v-548.08c0-13.116 10.386-23.786 23.153-23.786h204.061m0-50H191.802c-40.4 0-73.153 33.035-73.153 73.786v548.08c0 40.75 32.753 73.786 73.153 73.786H845.5c40.398 0 73.15-33.037 73.15-73.786V331.769c0-40.75-32.751-73.784-73.15-73.784H548.875c-20.007 0-39.137-8.266-52.944-22.868l-47.124-49.852c-13.803-14.604-32.937-22.868-52.944-22.868z"
              fill="#1A1A1A"
              p-id="4264"
            />
            <path
              d="M168.66 391.447h556.523c19.21 0 34.783 15.572 34.783 34.783v139.13c0 19.209-15.572 34.783-34.783 34.783H168.66V391.447z"
              fill="#FFCD36"
              p-id="4265"
            />
          </svg>
        </div>
      </div>
      <div>
        <textarea type="text" class="chat-area" id="chat-area" v-model="content"></textarea>
      </div>
      <div class="chat-footer">
        <Button icon="md-arrow-round-up" type="primary" @click="sendMsg">发送</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
import Emoji from "./Emoji/Emoji";
export default {
  data() {
    return {
      content: "",
      // 聊天历史，1为用户，2为客服，3为消息提示
      history: [
        {
          type: 2
        }
      ]
    };
  },
  components: {
    Emoji
  },
  methods: {
    ok() {},
    cancel() {}
  },
  computed: {
    display: {
      get() {
        return this.$store.state.displayService;
      },
      set(val) {
        this.$store.commit("setService", val);
      }
    }
  },
  created() {
    // 隐藏客服对话框
    this.display = false;
  },
  methods: {
    handleEmotion(val) {
      let chatArea = document.getElementById("chat-area");
      let startPos = chatArea.selectionStart;
      let endPos = chatArea.selectionEnd;
      if(startPos === undefined || endPos === undefined) return ;
      this.content = this.content.substring(0,startPos) + val + this.content.substring(endPos);
      // 重新定义光标的位置
      chatArea.focus();
      chatArea.selectionStart = startPos + val.length;
      chatArea.selectionEnd = startend + val.length;
    },
    // 将文字匹配成图片
    // 将匹配结果替换表情图片
    emotion(res) {
      let word = res.replace(/\#|\;/gi, "");
      const list = [
        "微笑",
        "撇嘴",
        "色",
        "发呆",
        "得意",
        "流泪",
        "害羞",
        "闭嘴",
        "睡",
        "大哭",
        "尴尬",
        "发怒",
        "调皮",
        "呲牙",
        "惊讶",
        "难过",
        "酷",
        "冷汗",
        "抓狂",
        "吐",
        "偷笑",
        "可爱",
        "白眼",
        "傲慢",
        "饥饿",
        "困",
        "惊恐",
        "流汗",
        "憨笑",
        "大兵",
        "奋斗",
        "咒骂",
        "疑问",
        "嘘",
        "晕",
        "折磨",
        "衰",
        "骷髅",
        "敲打",
        "再见",
        "擦汗",
        "抠鼻",
        "鼓掌",
        "糗大了",
        "坏笑",
        "左哼哼",
        "右哼哼",
        "哈欠",
        "鄙视",
        "委屈",
        "快哭了",
        "阴险",
        "亲亲",
        "吓",
        "可怜",
        "菜刀",
        "西瓜",
        "啤酒",
        "篮球",
        "乒乓",
        "咖啡",
        "饭",
        "猪头",
        "玫瑰",
        "凋谢",
        "示爱",
        "爱心",
        "心碎",
        "蛋糕",
        "闪电",
        "炸弹",
        "刀",
        "足球",
        "瓢虫",
        "便便",
        "月亮",
        "太阳",
        "礼物",
        "拥抱",
        "强",
        "弱",
        "握手",
        "胜利",
        "抱拳",
        "勾引",
        "拳头",
        "差劲",
        "爱你",
        "NO",
        "OK",
        "爱情",
        "飞吻",
        "跳跳",
        "发抖",
        "怄火",
        "转圈",
        "磕头",
        "回头",
        "跳绳",
        "挥手",
        "激动",
        "街舞",
        "献吻",
        "左太极",
        "右太极"
      ];
      let index = list.indexOf(word);
      return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" align="middle">`;
    },
    sendMsg() {
      this.content.replace(/\#{1,3}\;/gi, this.emotion);
    }
  }
};
</script>
<style lang="scss" scoped>
@import './CustomerService.scss';
</style>
<style>
.ivu-modal-header {
  background: rgb(0, 160, 255);
}
</style>