// let request = new XMLHttpRequest();
// request.open('get','https://baike.baidu.com/item/%E6%96%87%E5%AD%97',true);
// request.send();
// request.onreadystatechange = function () {
//     if (request.readyState==4 &&request.status==200) {
//      //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
//  　　　　console.log(request.responseText);//输入相应的内容
//    　　}
//  }

// let ajax = new XMLHttpRequest();
// ajax.open('请求方式',"请求的URl", true)//true是异步请求， false是同步请求
// if(ajax){
//     ajax.onreadystatechange = function(){
//         if(ajax.readyState ===4 || ajax.status ===200 ){
//             console.log(ajax.responseText)
//         }
//     }
// }

// let req = new XMLHttpRequest()
// req.open('get',"url",true)
// req.send();
// req.onreadystatechange  = function(){
//     if(req.readyState===4 || req.status === 200){
//         console.log(req.responseText)
//     }
// }

// let rea = new XMLHttpRequest();
// rea.open('post','url',true);
// rea.send(param);
// rea.onreadystatechange = function(){
//     if(rea.status===200 || rea.readyState===4){
// console.log(rea.responseText)
//     }
// }