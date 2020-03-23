<template>
  <div>
    <div v-if="!repoUrl">Loading</div>
    <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
  </div>
</template>
<script>
import axios from 'axios'
export default{
  data () {
    return{
      repoUrl: "",
      repoName:""
    }
  },
  mounted () {
    // 发送ajaj请求
    const url = `https://api.github.com/search/repositories?q=vue&sort=stars`
    /*this.$http.get(url).then(
      response => {
      const result = response.data
      const mostRepo = result.items[0]
      this.repoUrl=mostRepo.html_url
      this.repoName=mostRepo.name
    },
      reponse => {
        alert("请求失败")
      })*/
    axios.get(url).then(response => {
      const result = response.data
      const mostRepo = result.items[0]
      this.repoUrl=mostRepo.html_url
      this.repoName=mostRepo.name
    }).catch(error => {
      alert("请求失败111"+error)
    })
  }
}
</script>

<style>

</style>
