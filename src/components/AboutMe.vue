<template>
  <div class="about-me">
    <h3>关于博主</h3>
    <div class="intro">
      <div class="head"></div>
      <div class="intro-msg"><strong>@徐航宇</strong>喜欢代码 /<br>喜欢设计 /</div>
    </div>
  </div>
</template>

<script>
export default {

}

</script>

<style lang="scss">
  @mixin box {
    width: 100%;
    height: auto;
    padding: 5px 0;
    margin-bottom: 10px;
  }

  .about-me {
    @include box;

    .intro {
      @include box;
      margin-bottom: 0;
      display: flex;

      .head {
        height: 85px;
        width: 85px;
        box-shadow: 0 0 5px #ccc;
        background: url("../assets/images/head.jpg")center no-repeat;
        background-size: cover;
      }

      .intro-msg {
        width: auto;
        height: auto;
        padding: 3px 22px;
        font-size: 12px;
        color: #333;

        strong {
          display: block;
          margin-bottom: 5px;
          color: #666;
          font-size: 14px;
        }
      }
    }
  }

</style>
