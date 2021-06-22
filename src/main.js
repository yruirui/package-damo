console.log('hi');

const div1=dom.create('<span>1往后添加</span>');
console.log(div1);

dom.after(child, div1);

const div2=dom.create('<span>往前添加</span>');
dom.before(child,div2);

const div3=dom.create("<span>添加child</span>");

const div5=dom.create("<span>22</span>");
dom.wrap(a,div5)
