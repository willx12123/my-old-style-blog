<template>
  <div class="my-words">
    <h3>博主的话</h3>
    <span>在这个快速的时代，很少有人会写博客了，因为没有好处，流量也不大。但我认为所有人都应该有一个自己的Blog，尝试将自己的生活和想法记录下来——这样才能在没有记忆的互联网上留下一些独特的印记。</span>
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

  .my-words {
    @include box;

    span {
      font-size: 13px;
      color: #333;
    }
  }

</style>
