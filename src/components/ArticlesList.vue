<template>
  <div class="articles">
    <h2>2020年4月8日</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .articles {
    width: 650px;
    padding: 8px 24px;
    border-right: 2px solid #efefef;
    overflow: hidden;

    h2 {
      font-size: 14px;
      color: #222;
      margin-bottom: 10px;
    }
  }

</style>
