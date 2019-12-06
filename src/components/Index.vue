<template>
    <div>
      <header></header>
      <hr/>
      <div>
        <ul>
          <li v-for="item in getList" :key="item">
            <!--引用全局函数 -->
            <span>{{$utils.formatDate(item.create_at)}}</span>
            <router-link :to="'/content/'+item.id" :target="'_blank'">
              {{item.title}}}
            </router-link>
          </li>
        </ul>
      </div>
      <footer></footer>
    </div>
</template>

<script>
import Footer from './Common/Footer'
import Header from './Common/Header'
export default {
  name: 'Index',
  data () {
    return {
      getList: []
    }
  },
  /* mounted () {
    this.$http.get('https://unpkg.com/axios@0.18.0/dist/axios.min.js')
      .then(res => (
        console.log(res)
      ))
  }, */
  mounted () {
    this.getTopics()
  },
  methods: {
    getTopics () {
      /* 调用接口 */
      this.$http.get('/topics')
      // res =>  es6的箭头函数, 等同于function (res)
        .then(res => {
          console.log(res)
          res.data.success && (this.getList = res.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  components: {Header, Footer}
}
</script>

<style scoped>

</style>
