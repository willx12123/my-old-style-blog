<template>
  <div class="tags">
    <h3>标签</h3>
    <div class="tags-list">
      <ul>
        <li @click="goTag('互联网科技')">互联网科技</li>
        <li @click="goTag('JavaScript')">JavaScript</li>
        <li @click="goTag('编程')">编程</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTag (tag) {
      this.$router.push(`/tagarticles${tag}`)
    }
  }
}

</script>

<style lang="scss">
  @mixin box {
    width: 100%;
    height: auto;
    padding: 5px 0;
    margin-bottom: 10px;
  }

  .tags {
    @include box;

    .tags-list {
      ul {
        width: 100%;
        height: auto;

        li {
          cursor: pointer;
          margin: 3px 0;
          list-style: none;
          font-size: 14px;
          color: #cc6611;
          text-decoration: underline;
        }
      }
    }
  }

</style>
