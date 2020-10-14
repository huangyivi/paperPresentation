<template>
  <div class="dos">
    <div class="dos-left"></div>
    <div class="dos-right">
      <div class="dos-form">
        <div class="form-input">
          <div class="form-j-name">
            <label>期刊名称</label>
            <span>食品街</span>
          </div>
          <div>
            <label>作者姓名</label>
            <input type="text" placeholder="写第一作者或联系人 *" />
          </div>
          <div>
            <label>联系方式</label>
            <input type="text" placeholder="可以联系到您的手机号 *" />
          </div>
          <div>
            <label>电子邮箱</label>
            <input type="text" placeholder="接收录用通知的邮箱" />
          </div>
          <div>
            <label>联系QQ</label>
            <input type="text" placeholder="请提供常用的联系qq" />
          </div>
          <div class="form-address">
            <label>邮寄地址</label>
            <input type="text" placeholder="接收样刊的地址" />
          </div>
          <div>
            <label>上传稿件</label>
            <div class="upfile-btm">选择文件</div>
            <input type="file" class="upfile-input" />
          </div>
        </div>
        <div class="form-sub">
          <span class="clear">清空</span>
          <button class="submit">提交投稿</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailOnlineSubMission",

  props: {},

  components: {},

  data() {
    return {};
  },

  methods: {},

  mounted() {},
};
</script>

<style scoped lang="scss">
.dos {
  width: 100%;
  height: 273px;
  overflow: hidden;
  background-size: 100% 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  .dos-left {
    height: 100%;
    width: 216px;
    background: url(http://zhimaikeji.net/imgs/wf/sub_bg.png) no-repeat;
    background-size: 100% 100%;
  }

  .dos-right {
    width: calc(100% - 216px);
    height: 100%;
    background: #e9f6ff;
    overflow: hidden;
    padding: 15px 25px 0;

    label {
      width: 55px;
      height: 28px;
      line-height: 28px;
      color: #787878;
      font-size: 12px;
      text-align: right;
      margin-right: 5px;
    }

    .form-input {
      width: 100%;

      div {
        display: inline-block;
        width: 47%;
        margin-bottom: 10px;
        position: relative;
      }

      > div:nth-child(2),
      > div:nth-child(4) {
        margin-right: 5%;
      }

      input {
        width: calc(100% - 60px);
        height: 26px;
        background: #fff;
        border-radius: 4px;
        border: 1px solid #d8d8d8;
        padding-left: 10px;
        font-size: 12px;
      }

      .form-j-name {
        width: 100%;
        color: #101010;

        span {
          margin-left: 8px;
        }
      }

      .form-address {
        width: 100%;
      }

      .upfile-btm {
        width: 76px;
        height: 26px;
        background: #fff;
        border-radius: 4px;
        border: 1px solid #2980da;
        text-align: center;
        line-height: 26px;
        color: #2980da;
        font-size: 12px;
        position: absolute;
        top: 0;
        left: 60px;
      }

      .upfile-input {
        display: block;
        width: 76px;
        height: 28px;
        position: absolute;
        top: 0;
        left: 60px;
        font-size: 0;
        opacity: 0;
        cursor: pointer;
        padding-left: 0;
      }
    }

    .form-sub {
      width: 200px;
      height: 30px;
      float: right;
      display: flex;
      margin-right: 0;
      margin-top: 10px;
      justify-content: space-between;

      span,
      button {
        width: 92px;
        height: 28px;
        display: inline-block;
        line-height: 28px;
        text-align: center;
        font-size: 12px;
        cursor: pointer;
        border-radius: 4px;
      }

      .clear {
        color: #2980da;
        border: 1px solid #2980da;
      }

      .submit {
        border: 0;
        outline: none;
        background: #2980da;
        color: #fff;
      }
    }
  }
}
</style>