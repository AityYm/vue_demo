<template>
    <ul>
      <li>id:{{message.id}}</li>
      <li>title:{{message.title}}</li>
      <li>content:{{message.content}}</li>
    </ul>
</template>
<script>
    export default{
      data () {
        return {
          message: {
            id: '',
            title: '',
            content: ''
          }
        }
      },
      mounted () {
        //在一个组件对象里面只执行一次
        setTimeout(() => {
          const messages=[
            {
              id: 1,
              title: 'message001',
              content: 'Tins is message001......'
            },
            {
              id: 2,
              title: 'message002',
              content: 'Tins is message002......'
            },
            {
              id: 3,
              title: 'message003',
              content: 'Tins is message003......'
            },
            {
              id: 4,
              title: 'message004',
              content: 'Tins is message004......'
            },
            {
              id: 5,
              title: 'message005',
              content: 'Tins is message005......'
            }
          ]
          this.messages=messages
          const id=this.$route.params.id*1
          this.message=messages.find(message => message.id===id)
        },1000)
      },
      watch: {
        $route: function (value) {
          const id=this.$route.params.id*1
          this.message=this.messages.find(message => message.id===id)
        }
      }

    }
</script>

<style>

</style>
