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
      <p slot="header" style="color: #fff; text-align: center">
        <span>期刊发表网欢迎您</span>
      </p>
      <p slot="close">
        <Icon type="md-close" size="20px" color="#fff" />
      </p>
      <div class="chat-history">
        <ul id="chat-history">
          <message
            v-for="(item, key) in history"
            :key="key"
            :class="item.type == 1 ? 'chat-customer' : 'chat-server'"
            :content="item.content"
            :date="item.date"
            :time="item.time"
            :name="item.name"
          />
        </ul>
      </div>
      <div class="chat-utils">
        <emoji @emotion="handleEmotion" />
        <!-- <div class="chat-icon">
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
        </div>-->
      </div>
      <div>
        <textarea
          type="text"
          class="chat-area"
          id="chat-area"
          v-model="content"
          @keyup.enter="sendMsg"
        ></textarea>
      </div>
      <div class="chat-footer">
        <Poptip v-model="visible">
          <Button icon="md-arrow-round-up" type="primary" @click="sendMsg"
            >发送</Button
          >
          <div slot="content" class="poptip">{{ alert }}</div>
        </Poptip>
      </div>
    </Modal>
  </div>
</template>
<script>
import Emoji from "./Emoji/Emoji";
import Message from "./Message/Message";
import SockJs from "sockjs-client";
import Stomp from "stompjs";
export default {
  data() {
    return {
      alert: "发送成功！",
      content: "",
      // 聊天历史，1为用户，2为客服，3为消息提示
      history: [],
      clientId: "",
      serverId: "",
      serverName: "",
      // 提示框
      visible: false,
    };
  },
  components: {
    Emoji,
    Message,
  },
  methods: {
    ok() {},
    cancel() {},
  },
  computed: {
    display: {
      get() {
        return this.$store.state.displayService;
      },
      set(val) {
        this.$store.commit("setService", val);
      },
    },
  },
  methods: {
    handleEmotion(val) {
      let chatArea = document.getElementById("chat-area");
      let startPos = chatArea.selectionStart;
      let endPos = chatArea.selectionEnd;
      if (startPos === undefined || endPos === undefined) return;
      this.content =
        this.content.substring(0, startPos) +
        this.emotion(val) +
        this.content.substring(endPos);
      // 重新定义光标的位置
      chatArea.focus();
      chatArea.selectionStart = startPos + val.length;
      chatArea.selectionEnd = startPos + val.length;
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
        "右太极",
      ];
      let index = list.indexOf(word);
      return `$${index}&`;
    },
    // 发送消息
    sendMsg() {
      if (this.content == "") {
        this.alert = "消息不能为空！";
        setTimeout(() => {
          this.visible = false;
        }, 2000);
        return;
      } else if (this.serverId == "") {
        this.alert = "当前客服不在线！";
        setTimeout(() => {
          this.visible = false;
        }, 2000);
        return;
      } else {
        this.alert = "发送成功！";
        setTimeout(() => {
          this.visible = false;
        }, 2000);
      }
      // 转换表情包
      this.content = this.content.replace(
        /\$/gi,
        '<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/'
      );
      this.content = this.content.replace(/\&/gi, '.gif" align="middle">');
      // 获取日期
      let date = new Date();
      this.history.push({
        type: 1,
        name: "我",
        date: date.getMonth() + 1 + "-" + date.getDate(),
        time:
          date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
        content: this.content,
      });
      // 发送至服务端
      let formdata = new FormData();
      formdata.append("content", this.content);
      this.$http
        .post(
          `http://39.98.41.126:30001/chat/${this.clientId}/sendTo/${this.serverId}`,
          formdata
        )
        .then((res) => {
          console.log("发送成功！");
        });
      this.content = "";
      document.getElementById("chat-area").focus();
      setTimeout(() => {
        let chat = document.getElementById("chat-history");
        chat.scrollTop = chat.scrollHeight;
      });
    },
    // 获取聊天id
    getClientId() {
      let data = new FormData();
      data.append("chat", localStorage.getItem("chat"));
      console.log(localStorage.getItem("chat"));

      this.$http
        .post("http://39.98.41.126:30001/chat/chatId", data)
        .then((res) => {
          if (res.data.code == 1) {
            console.log(res.data);
            this.clientId = res.data.data;
            localStorage.setItem("chat", res.data.data);
            console.log(localStorage.getItem("chat"));
            console.log("获取用户id成功!");
          }
        })
        .then(() => {
          this.getService();
          this.initWebSocket();
        });
    },
    // 获取客服服务
    getService() {
      if (this.serverId == "") {
        this.$http
          .post("http://39.98.41.126:30001/chat/getService/" + this.clientId)
          .then((res) => {
            if (res.data.code === 1) {
              this.serverId = res.data.data.id;
              this.serverName = res.data.data.username;
              let date = new Date();
              this.history.push({
                type: 2,
                name: this.serverName,
                date:
                  date.getFullYear() +
                  "-" +
                  (date.getMonth() + 1) +
                  "-" +
                  date.getDate(),
                time:
                  date.getHours() +
                  ":" +
                  date.getMinutes() +
                  ":" +
                  date.getSeconds(),
                content: `您好，我是${this.serverName},请问您需要咨询什么业务？`,
              });
              console.log("获取客服id成功！");
            } else {
              let date = new Date();
              this.history.push({
                type: 2,
                name: "机器人",
                date: date.getMonth() + 1 + "-" + date.getDate(),
                time:
                  date.getHours() +
                  ":" +
                  date.getMinutes() +
                  ":" +
                  date.getSeconds(),
                content:
                  "当前无客服在线，请拨打电话：17666665234 或者 扫描左侧微信二维码联系我们。",
              });

              console.log("当前客服不在线");
            }
          })
          .then(() => {
            this.getHistory();
          })
          .catch((err) => {
            console.log("服务器连接已断开");
          });
      }
    },
    // 获取历史记录
    getHistory() {
      if (this.serverId) {
        this.$http
          .post(
            `http://39.98.41.126:30001/chat/${this.clientId}/history/${this.serverId}`
          )
          .then((res) => {
            console.log(res.data);
            let data = res.data.data;
            for (let i = 0; i < data.length; i++) {
              if (data[i].sender.roleType == 1) {
                this.history.push({
                  type: 1,
                  name: "我",
                  date: data[i].time.slice(0, 10),
                  time: data[i].time.slice(11, 19),
                  content: data[i].content,
                });
              } else {
                this.history.push({
                  type: 2,
                  name: data[i].sender.username,
                  date: data[i].time.slice(0, 10),
                  time: data[i].time.slice(11, 19),
                  content: data[i].content,
                });
              }
            }
          })
          .then(() => {
            setTimeout(() => {
              let chat = document.getElementById("chat-history");
              chat.scrollTop = chat.scrollHeight;
            }, 1000);
          });
      }
    },
    // 启动连接
    initWebSocket() {
      if (!window.socket) {
        let that = this;
        let socket = new SockJs(
          "http://39.98.41.126:30001/ws-websocket?" + this.clientId
        );
        // 获取Stomp子协议的客户端对象
        window.socket = Stomp.over(socket);
        // 发起websocket连接
        window.socket.connect({}, function (res) {
          console.log("连接成功！");
          // 用户接收客服信息
          window.socket.subscribe("/user/queue/chat", function (msg) {
            let data = JSON.parse(msg.body);
            console.log(data);
            that.history.push({
              type: 2,
              name: that.serverName,
              date: data.time.slice(0, 10),
              time: data.time.slice(11, 19),
              content: data.content,
            });
            that.$Message.info({
              content: "客服发来消息！",
              duration: 2,
            });
          });
          // 用户等待获取客服服务
          window.socket.subscribe("/user/queue/chat/serverOnline", (res) => {
            that.getService();
          });
        });
      }
    },
    // 关闭连接
    closeSocket() {
      window.socket.disconnet(() => {
        console.log("链接已经断开！");
      });
      window.socket = null;
    },
  },
  created() {
    // 隐藏客服对话框
    this.display = false;
    this.getClientId();
  },
  destroyed() {
    this.closeSocket();
  },
};
</script>
<style lang="scss" scoped>
@import "./CustomerService.scss";
</style>
<style>
.ivu-modal-header {
  background: rgb(0, 160, 255);
}
</style>