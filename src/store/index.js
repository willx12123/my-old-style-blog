import Vue from 'vue'
import Vuex from 'vuex'
import Arti01 from '../assets/articles/processing完成星际穿越.md'
import Arti02 from '../assets/articles/谈谈Markdown.md'
import Arti03 from '../assets/articles/JS杂谈-从古代到现代之浅谈网页设计之路.md'
import Arti04 from '../assets/articles/JS进阶-Promise对象.md'
import Arti05 from '../assets/articles/我做出了第一版的“手工”博客！.md'
import Arti06 from '../assets/articles/一个NIH患者的自白.md'
import Arti07 from '../assets/articles/我为什么要写博客.md'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [
      {
        id: 0,
        mainWords: Arti01,
        title: 'processing完成星际穿越',
        date: 20200101,
        tag: '编程'
      },
      {
        id: 1,
        mainWords: Arti02,
        title: '谈谈Markdown',
        date: 20191010,
        tag: ['互联网科技']
      },
      {
        id: 2,
        mainWords: Arti03,
        title: 'JS杂谈-从古代到现代之浅谈网页设计之路',
        date: 20191218,
        tag: ['互联网科技', 'JavaScript', '编程']
      },
      {
        id: 3,
        mainWords: Arti04,
        title: 'JS进阶-Promise对象',
        date: 20200229,
        tag: ['JavaScript', '编程']
      },
      {
        id: 4,
        mainWords: Arti05,
        title: '我做出了第一版的“手工”博客！',
        date: 20200408,
        tag: ['编程', '互联网科技', 'JavaScript']
      },
      {
        id: 5,
        mainWords: Arti06,
        title: '一个NIH患者的自白',
        date: 20200303,
        tag: ['互联网科技']
      },
      {
        id: 6,
        mainWords: Arti07,
        title: '我为什么要写博客',
        date: 20200406,
        tag: ['互联网科技']
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
