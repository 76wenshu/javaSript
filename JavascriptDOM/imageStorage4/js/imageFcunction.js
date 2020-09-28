function imageFunction(node){
    //在点击事件中进行传值this那么就是相当于把这个点击是事件现有的DOM事件传出去
    console.log(node)
    var source = node.getAttribute("href")
    var imageIdNode = document.getElementById('imageId');
    imageIdNode.setAttribute("src",source);
    //将每一个的title属性获取出来会后进行在赋值
    var text = node.getAttribute('title');
    var description = document.getElementById('description');
    description.firstChild.nodeValue = text
}