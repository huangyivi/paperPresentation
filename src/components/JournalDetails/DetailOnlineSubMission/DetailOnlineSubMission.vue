<template>
  <div class="dos">
    <div class="dos-left"></div>
    <div class="dos-right">
      <div class="dos-form">
        <div class="form-input">
          <div class="form-j-name">
            <label>期刊名称</label>
            <span>{{ journalName }}</span>
          </div>
          <div>
            <label>作者姓名</label>
            <input
              type="text"
              placeholder="写第一作者或联系人 *"
              v-model="onlineSub.authod"
            />
          </div>
          <div>
            <label>联系方式</label>
            <input
              type="text"
              placeholder="可以联系到您的手机号 *"
              v-model="onlineSub.phone"
            />
          </div>
          <div>
            <label>电子邮箱</label>
            <input
              type="text"
              placeholder="接收录用通知的邮箱"
              v-model="onlineSub.email"
            />
          </div>
          <div>
            <label>联系QQ</label>
            <input
              type="text"
              placeholder="请提供常用的联系qq"
              v-model="onlineSub.qq"
            />
          </div>
          <div class="form-address">
            <label>邮寄地址</label>
            <input
              type="text"
              placeholder="接收样刊的地址"
              v-model="onlineSub.address"
            />
          </div>
          <div>
            <label>上传稿件</label>
            <div class="upfile-btm">选择文件</div>
            <input type="file" class="upfile-input" @change="getFile($event)" />
            <span>{{ fileName }}</span>
          </div>
        </div>
        <div class="form-sub">
          <span class="clear" @click="deleteAll">清空</span>
          <button class="submit" @click="submitAddFile">提交投稿</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailOnlineSubMission",

  props: ["journalName", "jid"],

  components: {},

  data() {
    return {
      fileName: "注：多个文件请压缩上传",
      addArr: "", // 上传的文件
      onlineSub: {
        authod: "",
        phone: "",
        email: "",
        qq: "",
        address: "",
      },
    };
  },

  methods: {
    getFile(event) {
      var file = event.target.files;
      this.fileName = file[0].name;
      this.addArr = file[0];
    },

    submitAddFile() {
      if (!this.onlineSub.authod) {
        alert("请输入作者姓名！");
        return;
      }

      if (!this.onlineSub.phone) {
        alert("请输入联系方式！");
        return;
      }

      if (0 == this.addArr.length) {
        console.log(this.addArr);
        alert("文件为空！");
        return;
      }

      var formData = new FormData();
      formData.append("num", this.onlineSub.authod);
      formData.append("linkId", this.onlineSub.phone);
      formData.append("rfilename", this.onlineSub.email);
      formData.append("rfilename", this.onlineSub.qq);
      formData.append("rfilename", this.onlineSub.address);
      formData.append("fileUpload", this.addArr);

      
      // 未完成

      /* this.axios
        .post(apidate.uploadEnclosure, formData, config)
        .then((response) => {
          if (response.data.info == "success") {
            
          }
        }); */
    },

    deleteAll() {
      this.onlineSub.authod = "";
      this.onlineSub.phone = "";
      this.onlineSub.email = "";
      this.onlineSub.qq = "";
      this.onlineSub.address = "";
      this.onlineSub.addArr = "";
      this.addArr = "";
      this.fileName = "注：多个文件请压缩上传";
    },
  },

  mounted() {},
};
</script>

<style scoped lang="scss">
@import "DetailOnlineSubMission.scss";
</style>