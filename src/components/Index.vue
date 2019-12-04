<template>
    <div>
      <header></header>
      <hr/>
      <div>
        Index
      </div>
      <footer></footer>
    </div>
</template>

<script>
import Footer from './Common/Footer'
import Header from './Common/Header'
export default {
  name: 'Index',
  mounted () {
    this.$http.get('https://unpkg.com/axios@0.18.0/dist/axios.min.js')
      .then(res => (
        console.log(res)
      ))
  },
  components: {Header, Footer}
}
</script>

<style scoped>

</style>
