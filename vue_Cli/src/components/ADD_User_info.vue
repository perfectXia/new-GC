<template>
  <div class="container">
    <h1>添加图书页面</h1>
   
    <div class="form-group">
      <label for="username">username</label>
      <input type="text"v-model="user_info.username"placeholder="请输入书名"class="form-control">
    </div>
     <div class="form-group">
      <label for="password">password</label>
      <input type="text"v-model="user_info.password"placeholder="请输入"class="form-control">
    </div>
     <div class="form-group">
      <label for="phone">phone</label>
       <input  type="number"v-model="user_info.phone"placeholder="请输入"class="form-control">
    </div>
      <div class="form-group">
      <label for="email">email</label>
      <input type="text"v-model="user_info.email"placeholder="请输入"class="form-control">
    </div>
       <div class="form-group">
      <label for="titleimage">titleimage</label>
      <input type="text"v-model="user_info.titleimage"placeholder="请输入titleimage"class="form-control">
    </div>
     
   
    <button @click="save_add"class="btn btn-success btn-block">提交</button>
  </div>
</template>
<script>
import router from '../router/index';
import axios from "axios";
export default {
  name:"addbook",
  data(){
    return{
      user_info:[]
    }
  },
  methods:{
    save_add(){
      var quertstring=require('querystring');
      console.log(this.user_info);
      axios.post("http://127.0.0.1:3000/add_user_info",
      quertstring.stringify(this.user_info)).then((Response)=>{
        console.log(Response.data)
      }).catch((error)=>{
        console.log(error);
      })
    }
  }
}
</script>
<style>

</style>
