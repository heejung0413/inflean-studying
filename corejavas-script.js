
//1
var obj={ a:1, b:'bbb'};

var obj;
obj={a:1, b:'bbb'};

var obj ={
    x:3, arr:[3,4]
}


//2
var a=1;
function outer(){
    console.log(a);
    function inner(){
        console.log(a);
        var a=3;
    }
    inner();

    console.log(a);
}
outer();
console.log(a);


//연습 
var a=10;
var obj ={
    a:20,
    b: function(){
        var self = this; //2. self는 this다
        console.log(this.a); //3. b에서 this를 찾을 것이다
        function c(){
            console.log(self.a); //1. self는 this를 가리킴
        }
        c();
    }
}
obj.b; //b의 this는 점 앞의 obj 

//3
function a(x,y,z){
    console.log(this, x,y,z);
}
var b = {
    bb:'bbb'
};

a.call(b, 1,2,3);
a.apply(b, [1,2,3]);

var c = a.bind(b);
c(1,2,3);

var d = a.bind(b, 1,2);
d(3);

//4
var callback=function(){
    console.dir(this); //3.이때의this도 obj
};
var obj = {
    a:1,
    b:function(cb){cb.call(this);} //1/ call this를 한다
};
obj.b(callback); //2. this는 obj 
//4.이 callback 함수의 this는 obj가 되면서 callback함수에 obj객체를 넣어 결과 출력


var callback = function(){
    console.dir(this); //따로 this를 지정한 값이 없어서 전역객체로 나옴
};
var obj = {
    a:1
};
setTimeout(callback, 100);

//this의 값을 지정할려면
setTimeout(callback.bind(this), 100); 

//5

document.body.innerHTML += '<div id="a"> 클릭하세요 </div';

document.getElementById('a').addEventListener(
    'click',
    function(){
        console.dir(this);
    }.bind(obj)
);


//6
function Person(n, a){
    this.name=n;
    this. age = a;
}
var roy = new Person ('재남', 30);
console.log(roy);

var cd= function(){
    console.log('1초 마다 실행될 겁니다')
};
setInterval(cd, 1000);

var arr = [1,2,3,4,5];
var entries = [];
arr.forEach(function(v, i){
    entries.push([i, v, this[i]]);
},[10,20,30,40,50]);
console.log(entries);


//7
document.body.innerHTML = '<div id="a">abc</div>';
function cbFunc(x){
    console.log(this, x);
}

document.getElementById('a').addEventListener('click',cbFunc.bind(obj));

// addEventListener(type, callback, option);