<template>
  <div class="WebIntro">
      <div>
          <p>
              {{web.id}}
          </p>
          <h3>
              {{web.intro}}
          </h3>
      </div>
      <div>
          {{web.text}}
      </div>
  </div>
</template>

<script>
export default {
    props:["web"],
    data(){
        return {
            
        }
    }

}
</script>

<style lang="scss" scoped>
.WebIntro {

    margin: 2px;
    display: flex;
    cursor: pointer;

    >div {

        &:first-child {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 80px;
            height: 80px;
            text-align: center;
            color: #fff;
            background: #6fb2f7;

            p {
                font-size: 30px;
            }

            h3 {
                font-weight: normal;
                font-size: 16px;
            }

        }

        &:last-child {
            font-size: 12px;
            width: 326px;
            height: 80px;
            padding: 10px 15px;
            box-sizing: border-box;
            text-align: justify;
            overflow: hidden;
            background: #f2f2f2;

        }
    }
}

</style>