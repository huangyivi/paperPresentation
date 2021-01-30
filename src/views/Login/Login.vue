<template>
  <div class="container">
    <transition-group name="panel">
      <!-- 注册面板 -->
      <div v-show="!isLogin" class="register-wrap" key="0">
        <h2>游客注册</h2>
        <div class="register-name">
          <span>姓名</span>
          <Input
            v-model="registerQuery.name"
            placeholder="输入姓名"
            class="Input"
            maxlength="20"
            type="text"
          />
        </div>
        <div class="register-phone">
          <span>电话</span>
          <Input
            v-model="registerQuery.phone"
            placeholder="输入正确的电话号码"
            class="Input"
            type="text"
            maxlength="20"
          />
        </div>
        <div class="register-address">
          <span>地址</span>
          <Input
            v-model="registerQuery.address"
            placeholder="输入有效的收货地址"
            class="Input"
            type="text"
            maxlength="100"
          />
        </div>
        <div class="register-work">
          <span>工作单位</span>
          <Input
            v-model="registerQuery.work"
            placeholder="输入工作的单位"
            class="Input"
            type="text"
            maxlength="100"
          />
        </div>
        <div class="register-identity">
          <span>身份证号</span>
          <Input
            v-model="registerQuery.indentity"
            placeholder="(非必填)输入有效的身份证号码"
            class="Input"
            type="text"
            maxlength="20"
          />
        </div>
        <div class="register-recommend">
          <span>推荐码</span>
          <Input
            v-model="registerQuery.recommend"
            placeholder="（选填）输入别人分享给你的推荐码"
            class="Input"
            type="text"
            @on-enter="handleRegister()"
            maxlength="40"
          />
        </div>
        <div class="turn">
          <i @click="handleTurn(0)">已有账号，立即登录</i>
        </div>
        <div class="register-btn btn" @click="handleRegister()">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect class="rectangle" width="100%" height="100%"></rect>
            <text class="text" text-anchor="middle" font-size="18" fill="white">
              注册
            </text>
          </svg>
        </div>
      </div>
      <!-- 登陆面板 -->
      <div v-show="isLogin" class="login-wrap" key="1">
        <h2>游客登录</h2>
        <div class="login-name">
          <span>姓名</span>
          <Input
            v-model="loginQuery.name"
            placeholder="输入姓名"
            class="Input"
            type="text"
            maxlength="20"
          />
        </div>
        <div class="login-phone">
          <span>电话</span>
          <Input
            v-model="loginQuery.phone"
            placeholder="输入正确的电话号码"
            class="Input"
            type="text"
            maxlength="20"
            @on-enter="handleLogin()"
          />
        </div>
        <div class="turn">
          <i @click="handleTurn(1)">未有账号，立即注册</i>
        </div>
        <div class="login-btn btn" @click="handleLogin()">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect class="rectangle" width="100%" height="100%"></rect>
            <text class="text" text-anchor="middle" font-size="18" fill="white">
              登录
            </text>
          </svg>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isLogin: true, //控制面板的显示状态
      //登录所需的参数
      loginQuery: {
        name: "", //姓名
        phone: "", //电话
      },
      //注册所需的参数
      registerQuery: {
        name: "", //姓名
        phone: "", //电话
        address: "", //地址
        work: "", ///工作单位
        indentity: "", //身份证号码
        recommend: "", //推荐吗
      },
    };
  },

  methods: {
    //控制面板的显示
    handleTurn(num) {
      /* 
          num 0 ----  显示登陆面板
          num 1 ----  显示注册面板 
          */
      if (num == 0) {
        this.isLogin = true;
        this.registerQuery = this.handleClearInput(this.registerQuery);
      } else {
        this.isLogin = false;
        this.loginQuery = this.handleClearInput(this.loginQuery);
      }
    },
    //游客登录
    handleLogin() {
      //校验参数
      //校姓名
      if (!this.loginQuery.name) {
        this.$Message.error("姓名为空");
        return false;
      }
      //校电话
      if (!this.loginQuery.phone || !this.checkPhone(this.loginQuery.phone)) {
        this.$Message.error("电话号码无效");
        return false;
      }
      //发送请求
      let data = new FormData();
      data.append("name", this.loginQuery.name); //姓名
      data.append("telephone", this.loginQuery.phone); //电话

      const docsmsg = this.$Message.loading({
        content: "登录中...",
        duration: 0,
      });

      this.$http
        .post(this.domain + "visitor/login", data)
        .then((res) => {
          console.log(res);
          const { code, msg } = res.data;
          if (code == 1) {
            //登陆成功

            //跳转
            setTimeout(() => {
              //用户信息存入缓存
              window.sessionStorage.setItem(
                "userInfo",
                JSON.stringify(this.loginQuery)
              );
              this.$router.push("/HomePage");
              this.$Message.success("登录成功");
            }, 1000);
          } else {
            //登陆失败
            this.$Message.error(msg);
          }
        })
        .catch((err) => {
          console.log(err);
          this.$Message.error("服务器连接失败");
        })
        .finally(() => {
          setTimeout(docsmsg, 1000); //隐藏loading
        });
    },
    //游客注册
    handleRegister() {
      //校验参数
      //校姓名
      if (!this.registerQuery.name) {
        this.$Message.error("姓名为空");
        return false;
      }
      //校电话
      if (
        !this.registerQuery.phone ||
        !this.checkPhone(this.registerQuery.phone)
      ) {
        this.$Message.error("电话号码无效");
        return false;
      }
      //校地址
      if (!this.registerQuery.address) {
        this.$Message.error("地址为空");
        return false;
      }
      //校工作单位
      if (!this.registerQuery.work) {
        this.$Message.error("工作单位为空");
        return false;
      }
      //校身份证号码
      if (!this.checkID(this.registerQuery.indentity)) {
        this.$Message.error("无效身份证");
        return false;
      }
      let data = new FormData();
      data.append("name", this.registerQuery.name); //姓名
      data.append("telephone", this.registerQuery.phone); //电话
      data.append("address", this.registerQuery.address); //地址
      data.append("workPlace", this.registerQuery.work); //工作单位
      data.append("card", this.registerQuery.indentity); //身份证号码
      data.append("recommendation", this.registerQuery.recommend); //推荐码
      const loadingmsg = this.$Message.loading({
        content: "Loading...",
        duration: 0,
      });
      //发送请求
      this.$http
        .post(this.domain + "visitor/register", data)
        .then((res) => {
          console.log(res);
          const { code, msg } = res.data;
          if (code == 1) {
            //注册成功
            this.$Message.success("注册成功");
            //加载登录页面
            const docsmsg = this.$Message.loading({
              content: "加载登录页面...",
              duration: 0,
            });
            setTimeout(() => {
              this.handleTurn(0);
              setTimeout(docsmsg, 700); //隐藏loading
            }, 1000);
          } else {
            //失败
            this.$Message.error(msg);
          }
        })
        .catch((err) => {
          console.log(err);
          this.$Message.error("服务器连接失败");
        })
        .finally(() => {
          setTimeout(loadingmsg, 0); //隐藏loading
        });
    },
    //检测电话号码
    checkPhone(phone) {
      let exp = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
      return exp.test(phone);
    },
    //检查身份证
    checkID(ID) {
      //空的话不校验
      if (!ID) return true;
      let exp = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
      return exp.test(ID);
    },
    //清空输入框内容
    handleClearInput(obj) {
      for (let key in obj) {
        obj[key] = "";
      }
      return obj;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Login.scss";
span,
button,
input {
  margin: 0;
  padding: 0;
}

button,
input {
  outline: none;
}

.Input {
  width: 300px;
}
</style>