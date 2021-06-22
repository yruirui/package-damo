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
    },
    remove(node){
        node.parentNode.removeChild(node);
        return node;
    },
    empty(node){
        let arr=[];
        let  x=node.firstChild;
        while(x){
          arr.push(dom.remove(node.firstChild));
          x=node.firstChild;
        }
        return arr;
    },
    attr(node,name,vale){//重载
        if(arguments.length===3){
            node.setAttribute(name,vale);
        }else if(arguments.length=2){
            return node.getAttribute(name);
        }
    },
    text(node,string){//适配
        if(arguments.length===2){
            if( 'innerTEXT' in node){
                node.innerTEXT=string;
            }else{
                node.textContent=string;
            } 
        if(arguments.length===1){
            if( 'innerTEXT' in node){
                return node.innerTEXT;
            }else if(textContent in node){
                return node.textContent;
            }
        }
       }
    },
    html(node,string){
        if(arguments.length=== 2){
            node.innerHTML=string;}
        else if(arguments.length === 1){
            return node.innerHTML;
        }   
    },
    style(node,name,vale){
        if(arguments.length===3){
            node.style[name]=vale;
        }else if(arguments.length===2){
            if(typeof name==='string'){
                //dom.style(div,'color')
                return node.style[name];
            }else if(name instanceof Object){
                let object=name;
                for(key in object){
                    node.style[key]=object[key];
                }
            }
        }
    },
    class:{
        add(node,className){
            node.classList.add(className);
        },
        remove(node,className){
            node.classList.remove(className);
        },
        has(node,className){
            return node.classList.contains(className);
        }
    },
    on(node,eventName,fn){
        node.addEventListener(eventName,fn)
    },
    off(node,eventName,fn){
        node.removeEventListener(eventName,fn)
    },
    find(selector,scope){
        return (scope || document).querySelectorAll(selector)        
    },
    parent(node){
        return node.parentNode
    },
    child(node){
        return node.children
    },
    sibling(node){
        return Array.from(node.parentNode.children)
        .filter(n=>n!==node)//filter过滤
    },
    next(node){
        let x=node.nextSibling
        while(x&&x.nodeType===3){
            x=x.nextSibling;
        }
        return x;
    },
    previous(node){
        let x=node.previousSibling;
        if(x&&x.nodeType===3){
            x=node.previousSibling
        }
        return x;
    },
    each(nodeList,fn){
        for(let i=0;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }

    },
    index(node){
        const list=dom.child(node.parentNode)
        let i=0
        for(i=0;i<list.length;i++){
            if(list[i]===node){
                break;
            }
        }
        return i;
    }


}
