function imageFunction(node){
    
    //在点击事件中进行传值this那么就是相当于把这个点击是事件现有的DOM事件传出去
    if(!document.getElementById('imageId')) return false 
    var source = node.getAttribute("href")
    var imageIdNode = document.getElementById('imageId');
    imageIdNode.setAttribute("src",source);
    if(!document.getElementById('description')) {

        //将每一个的title属性获取出来会后进行在赋值
        // if(node.getAttribute('title')){
            //两种方法进行处理，上面是经过ifelse来进行处理的，下边的代码是通过三元运算符进行处理的
            var text = node.getAttribute('title')?node.getAttribute('title'):'';
        // }else{
        //     var text = ''
        // }
        var description = document.getElementById('description');
        //在获取description的子元素中无法获得child中的情况
        if(description.firstChild.nodeType===3){

            description.firstChild.nodeValue = text
        }
    }
    return true
}
function prepareGalery(){
    //在选择元素的时候，先做元素/数据的保护机制，先判断元素是否存在，不能再没有数据的情况下让程序脚本挂掉
    if(!document.getElementById || !document.getElementsByTagName || !document.getElementById("imagegallery")){
        return false
    }
        
    let gallery = document.getElementById("imagegallery")
    let links =gallery.getElementsByTagName('a');
    for(let i=0; i<links.length; i++){
        links[i].onclick = function(){
            return !imageFunction(this);
        }
        // links[i].onkeypress=links[i].onclick
    }
    

}
// window.onload = prepareGalery
function addLoadEvent(func){
    let oldLoad = window.onload;
    if(typeof window.onload != "function"){
        window.onload = func
    }else{
        window.onload = function(){
            oldLoad();
            func();
        }
    }

}
addLoadEvent(prepareGalery);