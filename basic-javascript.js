const a = [ 1, 2, 3 ]
a.forEach(function (v, i, arr) {
    console.log(v, i, arr, this)
}, [ 10, 11, 12 ])


//new
const arr = [ 1, 2, 3 ];
const res = arr.reduce(function (p, c, i, arr) {
  console.log(p, c, i, arr, this);
  return p + c;
}, 10);

//new
function a (a=1, b=c+1, c=3){
    let _a;
    let _b=_c+1;
    let _c;
    console.log(_a, _b, _c);
}

//new
const notValid= function(){
    console.error('notValid Called');
    return 10;
}
const sum=function(x, y= notValid()){
    console.log(x+y);
}

//new
const a = function(a=1, b=2, c=3){
    console.log(argument); //유사배열객체 {0:1, 1:2, 2:3, length:3, call}
    console.log(a,b,c);
}

//new
let a = () => new Date()
let b = a => a * a
let c = (a, b) => a + b
let d = (a, b) => {
  console.log( a * b )

  const a = function(){
    var x=10;
  }
  console.log(x);

  //new
  function sum(...arg){
    console.log(this);
    return arg.reduce((p,c)=> p+c);
  }
  sum(1,2,3,4,5)
  sum.call({},1,2,3,4,5);

const sum2 = (...arg) =>{
    console.log(this);
    return arg.reduce((p,c)=> p+c);
  }
  sum2(1,2,3,4,5);
  sum2.call({},1,2,3,4,5);

  //new
  function G(){};
  G.method1=function(){};
  G.prototype.method2=function(){};

  const g= new G();
  console.log(G.method1.name, g.method2.name);


  //new
  a.call({}, 1,2,3)
  a.apply({}, [1,2,3]);

  const b = a.bind({}, 1,2);

  
  function a(x,y,z){console.log(this, x,y,z);}
  const b = a.bind({}, 1,2);
  b(3);
  
  //result
  {} 1 2 3


