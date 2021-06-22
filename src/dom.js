window.dom={
    create (string){
        const container =document.createElement("template");
        container.innerHTML=string.trim();
        return container.content.firstChild;        
    },
    after(node,node2){
       node.parentNode.insertBefore(node2, node.nextSibling);
    },
    before(node,node2){
        node.parentNode.insertBefore(node2,node);        
    },
    append(parent,node){
        parent.appendChild(node);
    },
    wrap(parent,node){
        dom.before(node,parent);
        dom.append(parent,node);
        //先给a添加一个哥哥，然后把哥哥变成爸爸
        dom.before(node, parent)
    }


}
