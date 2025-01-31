/**
 * array functions
 * scope [local , global , block]
 * var , let , const
 * hoisting
 * destructure
 * spread operator
 * default values
 * reset params
 */


// ****************************** array functions **********************
// var arr=[1,2,3,15,12,18,4]
// var arr2=["ayaat","Ahmed","Mahmoud","nada","Youmna"]

// sort array ==>  effect on basic array => arrName.sort()
// document.writeln(arr2.sort(),"<br>");// string
// document.writeln(arr.sort((a, b) => a - b),"<br>") // numbers

// document.writeln(arr,"<br>",arr2)

 
//  reverse array  ==> arrName.reverse()==> effect in basic array

// document.writeln(arr2.reverse(),"<br>");
// document.writeln(arr2.sort().reverse(),"<br>");
// document.writeln(arr.sort((a,b)=>(a-b)).reverse(),"<br>");
// document.writeln(arr,"<br>")
      // 0 1 2 3  4   5 6
// var arr=[1,2,3,15,12,18,4]
// slice , splice
/**
 * 1- slice ==> (strat,end) => return new array => doesn't effect on main array
 *  take specific elemt from array==> start (index),(end-1)
 */

// document.writeln(arr.slice(1,3),"<br>");
// document.writeln(arr);

// var arr=[1,2,3,15,12,18,4]
/**
 * splice ==> add , remove
 * affect on main array
 * remove===> arrName.splice(start Index,countElemennt Remove)
 * add ===>arrName.splice(startIndex,0,elemnet to  Add )
 * 
 */
// // document.writeln(arr.splice(1,3),"<br>");  // 2,3,15
// document.writeln(arr); //1,12,18,4

// document.writeln(arr.splice(1,1),"<br>");// 2
// document.writeln(arr); // 1,3,15,12,18,4


// console.log(arr.splice(1,0,"ayaat","mahmoud","nada","mohammed"),"<br>");//
// // console.log(arr.splice(1,0,["ayaat","mahmoud","nada","mohammed"]));
// console.log(arr); // 

// console.log(arr.splice(0,0,["ayaat","mahmoud","nada","mohammed"]));
// console.log(arr);

// var arr=[1,2,3,15,12,18,4]
// // get Length of array
// console.log(arr.length)

/***********************   scope [function , global , block]    */

// var x=10;  // global scope
// console.log(x);//10 
// if(true)
// {
//    var  x=15;
//     console.log(x);//15     /// over ride
    
// }
// console.log(x);//15
// function test()
// {
//     var x=2;   // function scope  ==> variable ==> function
//     console.log(x);//2  
    
// }
// test();
// console.log(x);//15


/////////////////////////

// var x=10;  // global
// console.log(x);//10                         /// memory x===> 2
// if(true)
// {
//      x=15;
//     console.log(x);//15     /// over ride
    
// }
// console.log(x);//15
// function test()
// {
//     var x=2;   // function scope                // memory =>function test ==> var x=2
//      x=2 ;                                        // x ==> global ==> override 2
//     console.log(x);//2  
    
// }
// test();
// console.log(x);//2


/////////////////////   var ==> deprecated ==> not used ==> let , const

// var y=10;   
// y=13;   /// reasign
// var y=20;   // redecleration


// let x=5; 
// x=15;   // reasign
// // let x=12; //can't accept redecleration 

// // PI=3.14
// // connection  DB ==>

// const Z=10;   /// constant can't change 
// Z=12;  //can't accept reasign and can't accept redecleration
// console.log(Z);


//  hoisting ==> access variable before initialization (decleration)
// var ======> accept
// let   ===> doesn't accept hoisting
// const ===> doesn't accept hoisting

 // context file ===> var x =undefined   ==> x=12

// console.log(x);  // undefined
// var x=12;
// console.log(x);   // 12
// console.log(x);  // can't access variable before intialization  ==>
// var x=12;
// console.log(x);   // 12

//****************
//             var              let                       const
// redeclare   accept            not                       not
// resasign     accept           accept                     not
// hoisting     accept           no                         no
// scope         global scope ==>exept with function => funtion scope
//  let          block scope
//  const         block scope
//  */

// if(true)
// {
//     // let x=5;
//     // console.log(x);  // block scope

//     var y=13;   // global scope
//     // console.log(y);
//     const W=12;    // block scope
//     console.log(W);
    
    
    
// }
// // console.log(y);
// console.log(W);
// // console.log(x);



// ***************************** destructure ***********************

// let arr=[1,2,3,4];
// let x=arr[0];
// let y=arr[1];
// console.log(x,y);

////desctrure 

// let[z,w]=arr;
// console.log(z,w);
// let[,,x,y]=arr
// console.log(x,y);

/// 
// function useArr()
// {
//     return [10,12,13,5];
// }

// let[x,y]=useArr(); // [10,12,13,5]
// console.log(x,y);  // 10 12


// function sum(x,y)  // x, y ==> paramters
// {
//    return(x+y);
    
// }
// sum(5,2) // x=5  y=2

// function useArr(temp)
// {
//     return [temp, function(){console.log("welcome");},true]
// }
// let[x,y]=useArr("ziad");
// console.log(x,y); // x=ziad y=function



//***   desctrucre on object  */

// let person={name:"ayaat",age:24}
// let x=person.name;  // ayaat
// let y=person.age;   // 24
     // key : variable
// let{name:x,age:y}=person;
   // key:variable
// let{name:name,age:age}=person;   // variables expressive

// syntax sugar ==>  simple way in writing code  ==> key ang variable are same name

// let {name,age}=person;  // ======> // let{name:name,age:age}=person;

// console.log(age,name);



//  spread operator
// data type ==> primitive data types(int,bool,number) , refrence data type(arr ,object)
// let arr=[1,2,3];
// let y=arr; // [1,2,3]
// // console.log(y);  // [1,2,3]
// y.push(15);
// console.log(y); // 1,2,3,15
// console.log(arr);  // 1,2,3,15
// arr.pop()    /// 1,2,3
// arr.push("hassan")   // 1,2,3,"hassan"

// console.log(y);     // 1,2,3,"hassan"
// console.log(arr);   // 1,2,3,"hassan"


// let y=[];
// y=arr;
// console.log(y);
// console.log(arr);
// y.push(15);
// arr.push("hassan") 
// arr.pop() 
// console.log(y);
// console.log(arr);
//////////////////////////// spread operator (...)
let arr=[1,2,3,18];
let y=[...arr];

// console.log(y);
// console.log(arr);
// y.push(15); //  1,2,3,15
// arr.push("hassan")  //1,2,3,hassa
// arr.pop()   //1,2,3
// console.log(y);
// console.log(arr);

// let z=[...arr,...y]
// let test=["ayaat",...arr,"mec"]
// console.log(test); // ayaat ,1,2,3,18,mec




///////////////////////////// default values => default values==> nan
/// reset params ==> reset parameters ===> ...x
// function test(x=0,y=0,...w)  // ..w (any character )==> garbage data store in array
// {
//     console.log(x+y); 
//     console.log(w);
    
// }
// // test(12,13); //> override on default values ==> x=12 , y=13


// test(12,15,18,19,22,102,147,"trtyrh","jhjkhyu")


// string api ==> methods declred with sting

// concat string ==> concat

let str1="mec"
let str2="academy";
let str3=str1.concat(" ",str2 ," for programming "); //mec academy for programming 
console.log(str3);

// search for " programming"  in string  ==> include => true , false

console.log(str3.includes("programming"));

//  check on specific index==> indexof
console.log(str3.indexOf("mec"));
console.log(str3.indexOf("for"));
// console.log(str3.charAt(4));
// let str4=str3.repeat(2)
// console.log(str4);
// console.log(str3);

















