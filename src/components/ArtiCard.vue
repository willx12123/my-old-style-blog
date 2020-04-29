<template>
  <div class="arti-card">
    <div class="arti-title" @click="readMore">{{article.title}}</div>
    <div class="arti-intro">
      {{intro}}
    </div>
    <div class="arti-more" @click="readMore">查看更多</div>
    <div class="arti-author">
      <span>作者：徐航宇</span>
      <span>&nbsp;时间：{{date}}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    date () {
      const year = this.article.date.toString().slice(0, 4)
      const month = this.article.date.toString().slice(4, 6)
      const day = this.article.date.toString().slice(6, 8)
      return `${year}年${month}月${day}日`
    },
    intro () {
      const temp = this.article.mainWords.replace(/<[^>]+>/g, '')
      let intro
      if (temp.length > 80) {
        intro = temp.slice(0, 77) + '...'
      } else {
        intro = temp
      }
      return intro
    }
  },
  props: {
    article: {
      type: Object
    }
  },
  mounted () {

  },
  methods: {
    readMore () {
      this.$router.push(`/article${this.article.id}`)
    }
  }
}

</script>

<style lang="scss">
  .arti-card {
    width: 100%;
    height: auto;
    overflow: hidden;

    .arti-title {
      margin: 16px 0;
      font-size: 24px;
      color: #cc6611;

      cursor: pointer;
      transition: 0.5s;
    }

    .arti-title:hover {
      text-decoration: underline;
    }

    .arti-intro {
      font-size: 14px;
      color: #222;
    }

    .arti-more {
      font-size: 14px;
      color: #cc6611;
      cursor: pointer;
    }

    .arti-more:hover {
      text-decoration: underline;
    }

    .arti-author {
      margin-top: 20px;
      margin-bottom: 45px;
      padding: 10px 5px;
      width: 100%;
      height: auto;

      background-color: #f9f9f9;

      color: #666;
      font-size: 12px;
    }
  }

</style>
