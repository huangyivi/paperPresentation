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
        <span>集文网欢迎您</span>
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
        <!-- <emoji @emotion="handleEmotion" /> -->
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
// import Emoji from "./Emoji/Emoji";
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
    // Emoji,
    Message,
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
      let theContent = this.content.replace(
        /\$/gi,
        '<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/'
      );
      theContent = theContent.replace(/\&/gi, '.gif" align="middle">');
      // 获取日期
      let date = new Date();
      // 发送至服务端
      let formdata = new FormData();
      formdata.append("content", theContent);
      this.$http
        .post(
          this.domain + `chat/${this.clientId}/sendTo/${this.serverId}`,
          formdata
        )
        .then((res) => {
          if (res.data.code === 1) {
            console.log("发送成功！");
            this.history.push({
              type: 1,
              name: "我",
              date: date.getMonth() + 1 + "-" + date.getDate(),
              time:
                date.getHours() +
                ":" +
                date.getMinutes() +
                ":" +
                date.getSeconds(),
              content: res.data.data.content,
            });
            this.content = "";
            document.getElementById("chat-area").focus();
            setTimeout(() => {
              let chat = document.getElementById("chat-history");
              if (chat) {
                chat.scrollTop = chat.scrollHeight;
              }
            });
          } else {
            this.$Message.warning("客服已离线！");
            this.alert = "当前客服不在线！";
            setTimeout(() => {
              this.visible = false;
            }, 2000);
            return;
          }
        });
    },
    // 获取聊天id
    getClientId() {
      let data = new FormData();
      data.append("chat", localStorage.getItem("customer_chat"));

      this.$http
        .post(this.domain + "chat/chatId", data, {
          headers: {
            token: "welcome",
          },
        })
        .then((res) => {
          if (res.data.code == 1) {
            this.clientId = res.data.data;
            localStorage.setItem("customer_chat", res.data.data);
            console.log(localStorage.getItem("customer_chat"));
            console.log("获取用户id成功!");
          }
        })
        .then(() => {
          this.initWebSocket();
          // this.getService();
        });
    },
    // 获取客服服务
    getService() {
      if (this.serverId == "") {
        this.$http
          .post(this.domain + "chat/getService/" + this.clientId)
          .then((res) => {
            if (res.data.code === 1) {
              this.serverId = res.data.data.id;
              this.serverName = res.data.data.username;
              let date = new Date();
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
          .post(this.domain + `chat/${this.clientId}/history/${this.serverId}`)
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
              if (chat) {
                chat.scrollTop = chat.scrollHeight;
              }
            });
          });
      }
    },
    // 启动连接
    initWebSocket() {
      if (!window.socket) {
        let that = this;
        let socket = new SockJs(that.domain + "ws-websocket?" + this.clientId);
        // 获取Stomp子协议的客户端对象
        window.socket = Stomp.over(socket);
        // 发起websocket连接
        window.socket.connect({}, function (res) {
          console.log("连接成功！");
          that.getService();
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
            that.$Notice.info({
              desc: "客服发来消息！",
              duration: 3,
            });
            setTimeout(() => {
              let chat = document.getElementById("chat-history");
              if (chat) {
                chat.scrollTop = chat.scrollHeight;
              }
            });
          });
          // 用户等待获取客服服务
          window.socket.subscribe("/user/queue/chat/serverOnline", (res) => {
            that.getService();
            that.$Message.info("客服已上线");
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
.ivu-modal-header p,
.ivu-modal-header-inner {
  color: #fff !important;
}
</style>