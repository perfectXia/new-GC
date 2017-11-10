$(() => {
  $.get('/book',(data)=>{
    // console.log(data[0].name)
    $.each(data,(i)=>{
      var books=` 
        <tr id="${data[i].id}">
        <td>${data[i].id}</td>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].author}</td>
        <td>${data[i].created_date}</td>
        <td>
          <button class="btn btn-success">修改</button>
          <button class="btn btn-info">删除</button></td>
      </tr>
     `;
     $("#tbody").append(books);
    })
  })
  // alert("index.js运行");
})