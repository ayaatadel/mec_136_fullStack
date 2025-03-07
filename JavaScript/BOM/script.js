/**
 * DOM ==> DOCUMENT Object Model  ==> Document ==> (Build In Html)
 * 
 * BOM  ==> Browser Object Model  ==> Browser ==> handel
 * 
 * links (MDN)==> https://developer.mozilla.org/en-US/docs/Web/API/Window
 * links (Geeks for Geeks)==> https://www.geeksforgeeks.org/browser-object-model/
 * 
 * ASynchrounous Function
 * Storage
 */
//BOM  ==> Browser Object Model  ==> Browser ==> handel
/**
 * Window object 
 * alert
 * confrirm 
 * prompt
 *====================================================
 * history  ==> show histor of browser  ==> array (all Pages)==> length (index)
 * first page ==> index ==> 0
 * back <-   ==> histrory.back()
 * forward ->   ==> histrory.forward()
 *  go  ==> index of page that you want to go  ==> history.go(index)
 * 
 * =============================================================
 */
// alert("BOM Object")// object ==> window
// window.alert("BOM Object")  
// window.prompt("Enter your name")
// console.log(window);


// confirm("are you student")// ckeck ==> true , false

//======================= open  default targer(blank)  ==> Event  
// window===>  balnk 
// window===>  open specific page (url) 
//======================= close
// window===>  balnk 
// window===>  open specific page (url) 



// ============
// let openBtn=document.getElementById("op")
// let closeBtn=document.getElementById("cl")
// var closePage=true;  // page closed
// // // handle event ===> click
// openBtn.addEventListener('click',()=>{

//     if(closePage)
//     {
//       var jsPage=window.open('https://www.geeksforgeeks.org/window-object-in-javascript/',innerWidth="300px",innerHeight="300px");
//       console.log(jsPage);
//         closePage=true;  // false 

//     }else{
//         closeBtn.addEventListener('click',()=>{
//             closePage=false;
//             jsPage.close();
//         })
//     }

   

//     // livk
//     // <a href='' target='_blank'></a>
//     // window.open('https://www.geeksforgeeks.org/window-object-in-javascript/','_self')
// })




// location ===> move from page to another page
// let goBtn=document.getElementById('gto')  // about ==> null.add
// if (goBtn) {
//     goBtn.addEventListener('click', () => {
//         location.href = "http://127.0.0.1:5500/about.html";
//     });
// }

// // Code for about.html  ==> else
// var BackBtn = document.getElementById("backBtn");
// if (BackBtn) {
//     BackBtn.addEventListener('click', () => {
//         history.back();
//         console.log("Back Button");
//     });
// }


// var TopBtn = document.getElementById("top");
// if(TopBtn)
// {
//     TopBtn.addEventListener('click',()=>{
//         // let height=window.innerHeight;
//         // scrollTo(0,height/2);
//         scrollTo(0,0);
//         // scrollTo(0,200);
       
//     })
// }
// let openBtn=document.getElementById("op");
// if(openBtn)
// {
//  openBtn.addEventListener('click',()=>{
//     window.open('http://127.0.0.1:5500/about.html',innerWidth="300px",innerHeight="300px");
//  })
// }


/**
 * storage  ==> 
 * front ===> client side ==> localStorage , cookies, (has expire date) ====> perimted
 * 
 * local storage ==> has no expire date
 * store data ==> localStorage.setItem('key','value')
 * get data==>localStorage.getItem('key')
 * 
 * 
 *  back ==> client side ==> session , cookies
 * browser ==> 
 */

// localStorage.setItem('name','FullStack 116')
// console.log(localStorage.getItem('name'));

// document.cookie="userName=ayaat"
// document.cookie ="test=Ayaat;path=/about.html;expire=date.toUTCString()";


// //
// let date = new Date();
// date.setTime(date.getTime() + 60 * 1000)
// console.log(typeof(date));
// console.log(date);


// console.log(typeof(date.toUTCString()))
// console.log(date.toUTCString())



/***
 * function synchrouns  ==> line by line
 * function asynchrounous  ==> depend on time  ==>
 *  setinterval , setTimeOut
 * Event ===> action
 */


// function x()
// {
//     console.log("first");
//     // console.log(timeOUT);
    
// setTimeout(() => {
//     console.log("second");
    
//  }, 3000);

//     console.log("third");
    
// }
// x();



//  let interval=setInterval(() => {
//     console.log("repeate");
    
//  }, 1000);

//  setTimeout(() => {
//     clearInterval(interval)  // stop repeat
    
//  }, 3000);


let chicken_repeat=setInterval(() => {
    let container=document.getElementById('checken_planet')
    
    let ch=document.createElement('img');
    ch.src='imgs/chickenBlue.png'
    ch.style.width='50px'
    container.appendChild(ch)
    // document.body.appendChild(ch)
}, 200);

setTimeout(() => {
    clearInterval(chicken_repeat)
    rocket.style.cssText=`display:block;
    width:50px`;
}, 10000);