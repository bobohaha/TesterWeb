<template>
    <div>
      <hr/>
      <div>
        <ul>
          <!--for循环用法，:key="key", getList通过data中获得 -->
          <li v-for="item in getList" :key="item">
            <!--引用全局函数， 通过{{}}方式显示变量 -->
            <span>{{$utils.formatDate(item.create_at)}}</span>
            <!--router-link:to 方式定义链接-->
            <router-link :to="'/content/'+item.id" :target="'_blank'">
              {{item.title}}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import Footer from './Common/Footer'
import Header from './Common/Header'
export default {
  name: 'Index',
  // 传递数据
  data () {
    return {
      getList: []
    }
  },
  mounted () {
    this.getTopics()
  },
  methods: {
    getTopics () {
      /* 调用接口 */
      this.$http.get('https://cnodejs.org/api/v1/topics')
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
