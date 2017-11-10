<template>
<div class="container">
  <h1>{{mes}}</h1>
  <table class="table table-hover table-striped">
      <thead><tr>
        <!-- <td>图书</td> -->
        <td>编号</td>
        <td>书名</td>
        <td>作者</td>      
        <td>出版日期</td>
        <td>操作</td>
      </tr></thead>
      <tbody id="tbody">
       <tr v-for="(book,index) in books":key="book.id">
        <!-- <td><img src="../image/"+{{1}}+".jpg"alt="图片"></td> -->
        <td>{{book.id}}</td>
        <td>{{book.name}}</td>
        <td>{{book.author}}</td>
        <td>{{book.created_date}}</td>
        <td>
          <button class="btn btn-success">修改</button>
          <button class="btn btn-info"@click="deleted(book.id,book.name)">删除</button></td>
      </tr>
     </tbody>
    </table>
    <div><button class="btn btn-danger"@click="add_book">添加图书</button></div>
  </div>
</template>
<script>
// import a from '../'
import router from '../router/index';
import axios from "axios";
export default {
  name:'BOOK',
  data(){
    return {
      mes:"星期三书店",
      books:[],
      images:[]
    }
  },
  created(){
    this.fetchdate1();//加载云端数据
  },
  methods:{
    fetchdate1(){
      axios.get("http://127.0.0.1:3000/book").then((Response)=>{
        this.books=Response.data;
        // $("#img1").attr("src", url);
        // var url=""
        // $("#img2").attr("src", url);
        // this.images=Response.data[0].image;
        // console.log(this.images)
        console.log(this.books);
      }).catch((error)=>{
        console.log(error);
      })
    },
    add_book(){
      router.push({ name: "addbook" });
      console.log("运行图书添加")
    },
    deleted(id,name){
      if(confirm("确认删除"+name+"?")){ 
      var quertstring=require('querystring');
      axios.post("http://127.0.0.1:3000/delete",
      quertstring.stringify({id:id})).then((Response)=>{
        console.log(Response.data+"1");
        window.location.href="index.html"
      }).catch((error)=>{
        console.log(error);
      })
      }// alert(id);
    }
    }
}
</script>
<style>
img{
  border-radius: 10px;
  width:100px;
  height: 100px;
}
</style>