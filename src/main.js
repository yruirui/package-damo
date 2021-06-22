console.log('hi');

const div1=dom.create('<span>1往后添加</span>');
console.log(div1);

dom.after(child, div1);

const div2=dom.create('<span>往前添加</span>');
dom.before(child,div2);

const div3=dom.create("<div id='1'></div>");
dom.before(dog,div3);

const div5=dom.create("<span></span>");
 dom.wrap(div3,dog);

 dom.remove(remove);

 const nodes=dom.empty(window.empty);
 console.log(nodes);

 dom.attr(add,'title','hi,i am yr');
 const title =dom.attr(add,'title');
 console.log(`title:${title}`);

 dom.text(text1,'这是新内容');

 //dom.html(add2, '<span>hi</span>');

 dom.style(style, {border: '1px solid red', color: 'blue'})
 console.log(dom.style(style, 'border'))
 dom.style(style, 'border', '1px solid black')

dom.class.add(text6,'red')
dom.class.add(text6,'blue')
dom.class.remove(text6,'blue')
console.log(dom.class.has(text6,'red'))

const fn=()=>{
    console.log('点击了')
}
dom.on(ye,'click',fn)
dom.off( ye, 'click', fn)

  const testDiv=dom.find('#travel')[0]
  console.log(testDiv)
  const test8=dom.find('#t1',)[0]
  console.log(test8)

  const s2=dom.find('#s2')[0]
  console.log(dom.sibling(s2))
  console.log(dom.next(s2))
  console.log(dom.previous(s2))

  const t= dom.find('#travel')[0]
  dom.each(dom.child(t),(n)=>dom.style(n,'color','red'))
  

  console.log(dom.index(s2))
//   const t = dom.find('#travel')[0]
//   dom.each(dom.children(t), (n)=> dom.style(n, 'color', 'red'))
  
//   console.log(dom.index(s2))

