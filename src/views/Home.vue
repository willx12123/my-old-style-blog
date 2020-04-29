<template>
  <div class="container">
    <div class="big-box">
      <BlogTitle></BlogTitle>
      <div class="main">
        <ArticlesList>
          <div class="card-list">
            <ArtiCard v-for="item in arr" :key="item.id" :article="item"></ArtiCard>
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
import ArtiCard from '@/components/ArtiCard.vue'
import AboutMe from '@/components/AboutMe.vue'
import MyWords from '@/components/MyWords.vue'
import Tags from '@/components/Tags.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  computed: {
    arr () {
      const arr = JSON.parse(JSON.stringify(this.$store.state.articles))
      arr.sort((a, b) => {
        if (a.date < b.date) {
          return 1
        } else if (a.date > b.date) {
          return -1
        }
        return 0
      })
      return arr
    }
  },
  components: {
    BlogTitle,
    ArticlesList,
    ArtiCard,
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
    overflow: hidden;

    box-shadow: 0 0 10px #ccc;
  }

  .main {
    width: 100%;
    height: auto;
    margin: 15px 0;
    display: flex;

    .card-list {
      width: 100%;
      height: auto;
    }

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
</style>
