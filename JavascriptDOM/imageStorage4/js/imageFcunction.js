function imageFunction(node){
    var source = node.getAttribute("href")
    var imageIdNode = document.getElementById('imageId');
    imageIdNode.setAttribute("src",source);
    var text = node.getAttribute('title');
    var description = document.getElementById('description');
    description.firstChild.nodeValue = text
}