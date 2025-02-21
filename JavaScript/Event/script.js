/**
 * Types of functions'
 * callback function
 * arrow function
 * self invoked function
 * Event types
 */

// types of functions
/**
 * function ==> has return => out put ==> result of function
 * has noy retrn ==> output ==>  result of function ,+ undefined
 * regular function
 * function expression  ==> variable
 * arrow function ==> function expression with out name ==> anonmous function
 */

// // function x(x)  /// function expression
// // {
// //     // console.log(x);
// //     return x

// // }
// // console.log(x(12));

// // let result=function x(x)  /// function expression
// // {
// //     // console.log(x);
// //     return x

// // }
// // // // call ==> funName(p)
// // // // console.log(result); // function ==> body
// // // console.log(result(5)); // call function ==> result ==> output

// // let result6= (x)=>  /// arrow function
// // {
// //     // console.log(x);
// //     return x

// // }

// // /// ********************* if code is single line
// // // let result2= (x)=>  x ;
// // // console.log(result2(5));
// // let result3= x=>  x ;  //   if code is single line + parameters is one parameter
// // console.log(result3(5));
// // // let result4= ()=>  x ;
// // // console.log(result3(5));

// // /** if code is single line + parameters is No  parameter */
// // let result4= _ =>  console.log("group 136"); // has no return ==>group 136 + undefined
// // let result5= _ =>  "group 136"; // group 136
// // ;
// // console.log("function 3 :",result3(5));
// // console.log("function 4 :",result4());
// // console.log("function 5 :",result5());

// /*******************   Self Invoked function ==> function call it self  */
// // code ==> run at first
// // (function () {
// //     console.log("group full stack");

// // })();

// //** callback funtion ==> function call by another function */

// // function textCall()
// // {
// //     console.log("Hello from call back function");

// // }

// // function print(trackName,fun)
// // {
// //     fun();
// //    return trackName
// // }

// // console.log(print("Computer Scinece",textCall));

// /**************** Event ==> action user do on elemnt */
// // button ==> click ==> print hello

// /**
//  * function ==> html
//  * js
//  * event ==> event name , function
//  */

// //** Selcet elemnt in html */



// /***
//  * element.onevent(eventName)=functionName
//  */
// // btn.onclick=printHello;
// // function printHello(){
// //     console.log("Hello");

// // }

// // btn.onclick=function () {
// //     console.log("click");

// // }
// // btn.onclick= ()=> {
// //     console.log("click");

// // }

// // btn.onclick= ()=>console.log("click");
// // btn.onclick= _=>console.log("hello");

// // addEventlistener

// // btn.addEventListener('click',function()
// // {
// //     console.log("hello");
// // })
// /**
//  * onEvent  ==>  (function)==> action ==> if elemnt has more than action ==> last Action
//  * addEventListener ==>  (Call back Functionfunction)==> action ==> if elemnt has more than action ==> execute all Actions
//  *
//  * //prefer use ==>  addEventListener==> clever in errors
//  */

// // btn.addEventListener('click',()=>console.log("Hello from add Event Listener")

// // )

// /**
//  * click , dbclick ,
//  * mouse ,
//  */
// // console.log(pValue.innerText);
// // console.log(pValue.value);
// // btn.addEventListener('click',()=>{

// //     let pValue=document.getElementById("text");
// //     console.log(pValue.innerText);
// //     console.log(userName.value);

// // }

// // )
// // let inputData = document.getElementById("userName");
// // let pValue = document.getElementById("text");
// // var header = document.getElementById("headertext");
// // inputData.addEventListener('mouseout',()=>{
// //     let pValue=document.getElementById("text");
// //     // pValue.innerText=userName.value;
// //     pValue.textContent=userName.value;
// // })
// // btn.addEventListener('click',()=>{

// //     // pValue.innerText=userName.value;
// //     pValue.textContent=userName.value;
// // })

// // btnClear.addEventListener('click',()=>{
// // // pValue.innerText="";
// // pValue.textContent="";
// // })
// // let toggle=true
// // btnShow.addEventListener('click',()=>{

// // if(toggle)// input==> type(password)
// // {
// //     password.type="text";
// //     btnShow.innerText="Hidden";
// //     // btnShow.classlist.add(" btn","btn-info");

// //      toggle=!toggle;// false ==> type => text
// // }else{
// //     password.type="password";
// //     btnShow.innerText="Show";
// //     // btnShow.classlist.add("btn-warning");
// //     toggle=!toggle;
// // }
// // })

// // mouse ==> mouseenter , mouseleave
// // header.addEventListener("mouseenter", () => {
// //   header.style=`
// //   text-align:center;
// //   padding:3px;
// //   color:blue;
// //   `

// // //   console.log("header");
// // });
// // header.addEventListener("mousemove", () => {
// //     header.style=`
// //     text-align:center;
// //     padding:3px;
// //     color:blue;
// //     `
  
// //   //   console.log("header");
// //   });
// // header.addEventListener("mouseleave", () => {
// //     header.style=`
// //     text-align:center;
// //     padding:3px;
// //     color:blue;
// //     `
  
// //   //   console.log("header");
// //   });


// // browser
// // window.addEventListener('load',()=>{
// //     document.body.style=`
// //     background-color: coral;
// //     `
// //     alert("Welcome")
// // })

// // btnClear.addEventListener('click',(event)=>{
// //     // console.log(event);
// //     console.log(event.target);
// //     btnClear.removeEventListener();
    
// // // pValue.innerText="";
// // // pValue.textContent="";
// // })

  
//     // btnClear.removeEventListener('click');

// /************************************************************** */
     ///// array api ==> functions ==> iteration on array
     /**
      * find (and) ==> return first elemnt confirm condition 
      * findIndex (and) ==> return first index confirm condition 
       * for each ==> log ==> elements in array
       * map
       * filter
       * every  || == all elements match condition 
     */

//     let arr2=["html","css","js"]

    // for (let index = 0; index < arr2.length; index++) {
    //     // console.log(index);
    //     // console.log(arr2[index]);
    //     // console.log(arr2);

    //     // if(arr2[index].startsWith("c"))
    //     // {
    //     //     // console.log(arr2[index]);
    //     //     console.log(index);
            
            
    //     // }
        
    // }
    

//     let result=function find(arr,element) {
   
//        for (let index = 0; index < arr.length; index++) {
//        if(element.startsWith("c"))
//        {
//         return(element);
        
//        }
//        }

        
//     //    return element
//     }

// console.log(result(arr,arr[1]));

// let arr=["html","css","js","c#"];
// let result =arr.find((value,index,arr)=>{
// console.log(value);
// console.log(index);
// console.log(arr);
// if(value.startsWith("c"))
// {
//     console.log(value);
    
// }
// console.log("********************************");
// return value.startsWith("c")
// }
// )

// console.log(result);

// let indexValue=arr.findIndex((value,index,arr)=>{
//     return value.startsWith("c")
// })
// console.log(indexValue);

///*******************  look  */
// let data=document.getElementById("search");
// btnSearch.addEventListener('click',()=>{
//     arr.find((value,index,arr)=>{
       
//         if(value===data.value)
//         {
//             data.value="";
//            console.log(`your product is ${value}`);
          

         
           
//         }else{
//             console.log(data.value);
            
//             // data.value="";
//             // console.log(`sorrey your product is not exist`);
         
//         }
//     })
// })


// arr.forEach(element => {
//     console.log(element);
    
// });
let arr=["html","css","js","c#"];
// arr.every(value=>{  // || == all elements match condition 
// if(value.startsWith("c"))
// {
//     console.log(value);
    
// }
// return true;
// })

let result=arr.map((value)=>{
    // console.log("mec");
    if(value=="html")
    {
       return(value);
        
    }
})

let result2=arr.filter((value)=>{ // search
    // console.log("mec");
    if(value=="html")
    {
       return(value);
        
    }
})

// console.log(result2);


let products=[
    {
        id:1,
        name:"lap",
        price:25000
    },
    {
        id:2,
        name:"computer",
        price:30000
    },
    {
        id:1,
        name:"phone",
        price:10000
    },
]


products.filter((value)=>{
// console.log(value);
if(value.price>100000)
{
    console.log(value);
    
}
else{
    console.log("Not found");
    
}

})

