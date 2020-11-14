<template>
  <div class="OnlineSubmit">
    <div id="doc-banner">
      <img src="../../assets/images/onlinesubmit.jpg" alt />
    </div>
    <div class="submit-pane">
      <div>
        ———
        <span>在线投稿</span>
        ———
      </div>
      <p>ONLINE SUBMISSION</p>
      <div class="submit-title">
        <span>文献名称</span>
        <input
          type="text"
          v-model="docName"
          maxlength="255"
          :class="{ redBorder: State.docName }"
        />
        <strong>*</strong>
      </div>
      <div class="submit-message">
        <div>
          <div>
            <span>作者姓名</span>
            <input
              type="text"
              v-model="author"
              maxlength="100"
              :class="{ redBorder: State.author }"
            />
            <strong>*</strong>
          </div>
          <p>写第一作者或联系人</p>
        </div>
        <div>
          <div>
            <span>联系电话</span>
            <input
              type="text"
              v-model="phone"
              :class="{ redBorder: State.phone }"
            />
            <strong>*</strong>
          </div>
          <p>请填写正确的联系电话</p>
        </div>
      </div>
      <div class="submit-title">
        <span>电子邮箱</span>
        <input
          type="text"
          v-model="email"
          :class="{ redBorder: State.email }"
        />
        <strong>*</strong>
      </div>
      <div class="submit-select">
        <div>
          <span>上传稿件</span>
          <div>
            选择文件
            <input
              type="file"
              accept=".doc,.docx"
              @change="getFile($event)"
            />
          </div>
          <p v-show="file" class="file-name">{{ file.name }}</p>
        </div>

        <div>
          <span @click="modal1 = true">基金项目</span>
          <Modal v-model="modal1">
            <p
              slot="header"
              style="color: white; text-align: center; font-size: 20px"
            >
              论文所属基金选择
            </p>
            <div class="fund-pane">
              <div>
                <label>项目号：</label>
                <input type="text" />
              </div>
              <div>
                <label>项目名称：</label>
                <input type="text" />
              </div>
              <div>
                <label>立项单位/部门：</label>
                <input type="text" />
              </div>
              <div>
                <label>项目名称(英文)：</label>
                <input type="text" />
              </div>
              <div>
                <label>项目备注：</label>
                <input type="text" />
              </div>
            </div>
          </Modal>
          <!-- <span>开具发票</span> -->
        </div>
      </div>
      <div class="message-add">
        <div class="keywords">
          <span>关键词</span>
          <div class="tags">
            <Tag
              color="primary"
              v-for="item in countTags"
              :key="item.index"
              :name="item"
              type="border"
              closable
              @on-close="handleClose"
            >
              {{ item }}
            </Tag>
            <Input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              maxlength="25"
              ref="saveTagInput"
              placeholder="回车以确定"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @on-blur="handleInputConfirm"
            />
            <Button
              v-else
              type="primary"
              icon="ios-add"
              size="small"
              @click="handleAdd"
            >
              添加标签
            </Button>
          </div>
        </div>
        <div class="summary">
          <span>摘要</span>
          <textarea
            cols="30"
            rows="10"
            maxlength="300"
            v-model="summary"
            :class="{ redBorder: State.summary }"
          ></textarea>
        </div>
      </div>

      <div>
        <Button type="default" size="large" @click="clear">清空</Button>
        <Button type="primary" size="large" @click="submitDocu"
          >提交投稿</Button
        >
      </div>
    </div>
    <!-- <div class="message-list">
            <div class="new-magazines">
                <p> 最新投稿</p>
                <div>
                    <ul>
                        <li v-for="item in magazines.slice(0,6)" :key="item.index">
                            <span>{{item.author}}</span>
                            <span :title="item.works">{{item.works}}</span>
                            <span>{{item.time}}</span>
                        </li>
                    </ul>
                    <ul>
                        <li  v-for="item in magazines.slice(-6)" :key="item.index">
                            <span>{{item.author}}</span>
                            <span :title="item.works">{{item.works}}</span>
                            <span>{{item.time}}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="employ-messages">
                <p> 录用通知
                    <a href="" @click.prevent>查看更多</a>
                </p>
                <div>
                    <ul>
                        <li v-for="item in messages.slice(0,6)" :key="item.index">
                            <a href="" @click.prevent>
                                <span :title="item.notice">{{item.notice}}</span>
                                <span>{{item.time}}</span>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li  v-for="item in messages.slice(-6)" :key="item.index">
                            <a href="" @click.prevent>
                                <span :title="item.notice">{{item.notice}}</span>
                                <span>{{item.time}}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div> -->
  </div>
</template>
<script>
import Banner from "../../components/Banner/Banner";

export default {
  data() {
    return {
      // magazines: [],
      // messages: [],
      author: "", //作者
      phone: "", //电话
      email: "", //电子邮箱
      docName: "", //文献名称
      summary: "", //摘要
      countTags: [], //标签组
      inputVisible: false, //是否显示输入框
      inputValue: "", //输入框的内容
      modal1: false,
      emailState: false,
      phoneState: false,
      State: {
        email: false, //邮箱输入框状态
        phone: false, //电话输入框状态
        author: false, //作者输入框状态
        docName: false, //文献名输入框状态
        summary: false, //摘要输入框状态
      },
      file: "", //文件
    };
  },
  components: {
    Banner,
  },
  methods: {
    //清空所有字段
    clear() {
      this.author = "";
      this.docName = "";
      this.phone = "";
      this.summary = "";
      this.email = "";
      this.file = "";
      if (this.countTags.length) {
        this.countTags.splice(0,this.countTags.length);
      }
    },
    //点击添加标签
    handleAdd() {
      //输入框出现
      this.inputVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    //删除标签
    handleClose(event, name) {
      const index = this.countTags.indexOf(name);
      this.countTags.splice(index, 1);
    },
    //生成标签
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        //添加到数组里
        this.countTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    //校验邮箱
    isEmail(email) {
      let reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
      if (!reg.test(email)) return false;
      else return true;
    },
    //检查电话
    isPhone(phone) {
      let reg = /^1[0-9]{10}$/;
      if (!reg.test(phone)) return false;
      else return true;
    },
    //获取文件
    getFile(event) {
      this.file = event.target.files[0];
    },
    //提交投稿
    submitDocu() {
      //检查字段
      let state = this.checkParams();
      //错误时阻止用户提交
      if (!state) {
        return false;
      }

      //表单数据，分两个接口
      let data = new FormData();
      data.append("title", this.docName);
      data.append("keyword", this.countTags);
      data.append("author", this.author);
      data.append("email", this.email);
      data.append("phone", this.phone);
      data.append("abstractText", this.summary);
      //文件上传
      let fileData = new FormData();
      //后缀名
      let suffix = this.file.name.slice(
        this.file.name.indexOf("."),
        this.file.name.length
      );
      //修改文件名
      let newfile = new File([this.file], this.docName + suffix);
      fileData.append("file", newfile);

      this.$http
        .post(this.domain + "con/stc", data)
        .then((res) => {
          if (res.data.code != 1) {
            return false;
          }

          //上传文件
          //配置请求头
          let config = {
            headers: { "Content-Type": "multipart/form-data" },
          };
          return this.$http.post(
            this.domain + "con/fu",
            fileData,
            config
          );
        })
        .then((res) => {
          if (res.data.code == 1) {
            this.$Message.success("投稿成功");
            this.clear();
          } else {
            this.$Message.error("投稿失败");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //检查
    checkParams() {
      let state = true;
      let arr = []; //含错误字段的数组
      //消除红框警告样式
      for (let key in this.State) {
        this.State[key] = false;
      }
      if (!this.docName) {
        this.State.docName = true;
        arr.push("文献名");
        state = false;
      }
      if (!this.author) {
        this.State.author = true;
        arr.push("作者名");
        state = false;
      }
      if (!this.isPhone(this.phone) || !this.phone) {
        this.State.phone = true;
        state = false;
        arr.push("电话");
      }
      if (!this.isEmail(this.email) || !this.email) {
        this.State.email = true;
        state = false;
        arr.push("邮箱");
      }
      if (!this.file) {
        state = false;
        arr.push("文件选择");
      }
      if (!this.countTags.length) {
        state = false;
        arr.push("关键词");
      }
      if (!this.summary) {
        this.State.summary = true;
        arr.push("摘要");
        state = false;
      }
      let sum = "";
      arr.forEach((item, index) => {
        sum += `${item}、`;
      });
      if (!state) this.$Message.error(sum.slice(0, -1) + "有误"); //提示

      return state;
    },
    /*
            获取最新投稿
            getNewDocu(){
                this.$http.get(this.domain + "doc",{
                    params:{
                        pageNum: 1,
                        pageSize: 12,
                    }
                })
                .then(res=>{
                    let data = res.data.data;
                    console.log(res);
                    data.list.forEach((item,index)=>{
                        this.magazines.push({
                            author: item.author,
                            works: `《${item.title}》`,
                            time: item.publishTime,
                        });
                        this.messages.push({
                            notice: `《${item.fromJournal}》 录用证明`,
                            time: item.publishTime,
                        })
                    })
                })
            }
            */
  },
  mounted() {},
  watch: {
    docName(val, oldval) {
      if (val) {
        this.State.docName = false;
        // if (this.file) {
        //   this.file.name = val;
        // }
      } else {
        this.State.docName = true;
      }
    },
    author(val, oldval) {
      if (val) {
        this.State.author = false;
      } else {
        this.State.author = true;
      }
    },
    email(val, oldval) {
      if (val) {
        this.State.email = false;
      } else {
        this.State.email = true;
      }
    },
    phone(val, oldval) {
      if (val) {
        this.State.phone = false;
      } else {
        this.State.phone = true;
      }
    },
    summary(val, oldval) {
      if (val) {
        this.State.summary = false;
      } else {
        this.State.summary = true;
      }
    },
  },
};
</script>


<style lang="scss" scoped>
@import "./OnlineSubmit.scss";
</style>