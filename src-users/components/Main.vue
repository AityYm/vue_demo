<template>
  <div>
  <h1 v-if="firstView">请输入用户名搜索</h1>
  <h1 v-if="loading">LOADING......</h1>
  <h1 v-if="errorMsg">errorMsg......</h1>
  <div class="row">
    <div class="card" v-for="(user,index) in users" :key="index">
      <a :href="user.url" target="_blank">
        <img :src="user.headImg" style='width: 100px'/>
      </a>
      <p class="card-text">{{user.name}}</p>
    </div>
    <!--<div class="card">
      <a href="https://github.com/reactjs" target="_blank">
        <img src="static/img/tb.png" style='width: 100px'/>
      </a>
      <p class="card-text">reactjs</p>
    </div>
    <div class="card">
      <a href="https://github.com/reactjs" target="_blank">
        <img src="static/img/tb.png" style='width: 100px'/>
      </a>
      <p class="card-text">reactjs</p>
    </div>
    <div class="card">
      <a href="https://github.com/reactjs" target="_blank">
        <img src="static/img/tb.png" style='width: 100px'/>
      </a>
      <p class="card-text">reactjs</p>
    </div>
    <div class="card">
      <a href="https://github.com/reactjs" target="_blank">
        <img src="static/img/tb.png" style='width: 100px'/>
      </a>
      <p class="card-text">reactjs</p>
    </div>-->
  </div>
</div>
</template>
<script>
  import axios from 'axios'
  import PubSub from 'pubsub-js'
    export default{
      data () {
       return{
         firstView: true,
         loading: false,
         users: null,// [{}]
         errorMsg: ''
       }
      },
      mounted () {
        PubSub.subscribe("search",(msg,searchName) => {
          this.firstView=false
          this.loading=true
          this.users=null
          this.errorMsg=''
          const url=`https://api.github.com/search/users?q=${searchName}`
          axios.get(url).then(response =>{
            const result=response.data
            const users=result.items.map(item => ({
              url: item.html_url,
              headImg: item.avatar_url,
              name: item.login
            }))
            this.loading=false
            this.users=users;

          }).catch(error =>{
            this.loading=false
            this.errorMsg='请求失败'
          })

        })
        //.
      }
    }
</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
