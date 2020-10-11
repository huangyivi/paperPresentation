<template>
  <div class="man">
      <div>
          <div>
            <img :src="man.img" alt="">
            <p>{{man.name}}</p>
          </div>
          <button>找她咨询</button>
      </div>
  </div>
</template>

<script>
export default {
    props: ["man"],

    data(){
        return {

        }
    },

}
</script>

<style lang="scss" scoped>
$manColor: #ffa231;
.man {
    width: 222px;
    height: 280px;
    margin: 5px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border: 1px solid #d8d8d8;

    >div {

        
        width: 150px;
        text-align: center;

        >div {

            position: relative;
            width: 150px;
            height: 150px;
            

            img {
                width: 150px;
                height: 150px;
                border: 1px solid #d8d8d8;
                box-sizing: border-box;
            }

            p {
                margin: 0 auto;
                position: absolute;
                left: 50%;
                bottom: 0;
                width: 67px;
                height: 27px;
                line-height: 27px;
                background: #2880da;
                color: #fff;
                font-size: 12px;
                border-radius: 14px;
                transform: translate(-50%,50%);
                z-index: 1;
            }
        }

        button {
            width: 100%;
            height: 39px;
            line-height: 39px;
            margin-top: 30px;
            font-size: 14px;
            background: $manColor;
            color: #fff;
            border: none;
            outline: none;
            border-radius: 8px;
            cursor: pointer;
            
        }
    }

    &:hover,
    &:hover img {
        border-color: $manColor;
    }
}

</style>