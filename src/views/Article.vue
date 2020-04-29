<template>
  <div class="container">
    <div class="big-box">
      <BlogTitle></BlogTitle>
      <div class="main">
        <ArticlesList>
          <div>
            <a class="back" href="JavaScript:history.go(-1)">返回</a>
            <div class="article" v-html="articles">
            </div>
          </div>
        </ArticlesList>
        <div class="tools">
          <AboutMe></AboutMe>
          <MyWords></MyWords>
          <Tags></Tags>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import BlogTitle from '@/components/BlogTitle.vue'
import ArticlesList from '@/components/ArticlesList.vue'
import AboutMe from '@/components/AboutMe.vue'
import MyWords from '@/components/MyWords.vue'
import Tags from '@/components/Tags.vue'
import Footer from '@/components/Footer.vue'

export default {
  computed: {
    articles () {
      console.log(this.$route.params.id)
      return this.$store.state.articles[this.$route.params.id].mainWords
    }
  },
  components: {
    BlogTitle,
    ArticlesList,
    AboutMe,
    MyWords,
    Tags,
    Footer
  }
}

</script>

<style lang="scss">
  .container {
    width: 100%;
    height: auto;
  }

  .big-box {
    width: 960px;
    height: auto;
    margin: 0 auto;
    border: 10px solid #fff;
    background-color: #fff;

    box-shadow: 0 0 10px #ccc;
  }

  .main {
    width: 100%;
    height: auto;
    margin: 15px 0;
    display: flex;

    .tools {
      width: 310px;
      padding: 10px 40px;

      h3 {
        margin: 8px 0;
        font-size: 13px;
        color: #222;
      }
    }
  }

  .back {
    font-size: 14px;
    color: #cc6611;
  }

  .back:selected {
    color: #cc6611;
  }

  .article {
    line-height: 1.8;

    h1 {
      margin: 16px 0;
      font-size: 24px;
      font-weight: 400;
      color: #cc6611;
    }

    h2 {
      font-weight: 400;
      margin: 12px 0;
      font-size: 20px;
      color: #222;
    }

    h3 {
      font-weight: 400;
      margin: 12px 0;
      font-size: 18px;
      color: #222;
    }

    p {
      margin-bottom: 10px;
      font-size: 16px;
      color: #333;
    }

    ul,
    ol {
      margin: 10px 0;
    }

    li {
      margin-left: 30px;
    }

    pre {
      line-height: 1;
      margin: 15px 0;
    }
  }

</style>
