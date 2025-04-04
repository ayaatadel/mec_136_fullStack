/**
 * asychrounus function ===> memory
 * api ==> simulate api
 * fake api ==> handle ===> java script 
 */


/**
 * asychrounus function ==> function ==> time ==> action user
 * ex: setTimeOut , setInterval , action 
 */

// function print()
// {

//     console.log("first");
//     console.log("second");
    
// }
// print()

// setTimeout(() => {
//     console.log("test");
    
// }, 0);
// setTimeout(() => {
//     console.log("test");
    
// }, 2000);



/**
 * front ==> DataBase ===> dynamic ==> api ==> url ==> backEnd developer ==> site
 * 
 * function ==> print allUsersData==> setTimeout
 */
// function allUsersData()
// {
//     let users=[];   //=== memory
//     setTimeout(() => {
//         users=[{id:1,name:"ziad"},{id:2,name:"hamza"},{id:3,name:"lubna"}]
//         console.log("users in timeout",users);
//         getSingleUser(3,users)
//     }, 0);  // wep api   ===> web queue  ==> web stack ==> users[{},{},{}]
//     console.log("users",users);   // web stack ==> users ==> []
// }
// function allUsersData()
// {
//     let users=[]; 
//     setTimeout(() => {
//         users=[{id:1,name:"ziad"},{id:2,name:"hamza"},{id:3,name:"lubna"}]
//         console.log("users in timeout",users);
//         let user;
//         setTimeout(() => {
//             user=users.filter((user)=>user.id==1)
//             console.log("user Data",user);
//         }, 0);
//     }, 0); 
//     console.log("users",users);  
// }

// function getSingleUser(id,usersData)
// {
//     // console.log(usersData);
    
//     let user;
// /** filter , map , find , findOne , reduce */
// setTimeout(() => {
//     user=usersData.filter((user)=>user.id==id)
//     console.log("user Data",user);
// }, 0);

// }
// allUsersData();

/***
 * callback hell ====> settimeout , settimeout , settimeout
 * promise  ==> class in javascript   (object => new ClassName)==> wait
 */

// let promise=new Promise((fun1,fun2)=>{
// // fun1 ===> condition ==> true  ==> status promise ==> fullfilled
// // fun2 ===> condition ==> false==> status promise ==> rejected
// // not true , not false ==> status promise ==> pending
// let name="mec"
// if(name=="mec")
// {
//     fun1(name);  // true
// }else{
//     fun2("error");  // false
// }
// })
// // console.log(promise);
// promise.then((name)=>{
// console.log(name);
// }).catch((error)=>{
// console.log(error);
// });



// function getAllUsersDataByPromise()
// {
//     let users=[];
//     // f1===> resolve
//     // f2 ===> reject 
//     let promise=new Promise((resolve,reject )=>{
//         users=[{id:1,name:"ziad"},{id:2,name:"hamza"},{id:3,name:"lubna"}];
//         if(users.length>0)
//         {
//             resolve(users);  // true ==> then
//         }else{
//             reject("messsage")  // false ==> catche
//         }
//     })


//     promise.then(()=>{
//         console.log("users",users);
        

//     }).catch(()=>{
//         console.log("message");
        
//     })

// }
// getAllUsersDataByPromise()



// fetch ==> promise ==> api===> [{},{}]
/**
 * fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>
 * // https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
 * url ==> request ==> status code ==> 200 ok , 400 ==> url false
 *   500 ==> problem server , 300 bad request
 */
fetch("https://fakestoreapi.com/products?limit=5").then((response)=>{
// console.log(response.json()); // promise ==> then , catch
let result=response.json();
result.then((data)=>{
// console.log(data);
createCard(data)
}).catch((error)=>{
console.log(error);

})

}).catch((error)=>{
console.log(error);

})


/** create card ==> data */


function createCard(data)
{
    console.log(data[2]);
    
    let container=document.getElementsByClassName("products")[0];
    data.forEach(product=> {
    let cartBody=document.createElement("div");
    cartBody.classList.add('cart');
    let cartTitle=document.createElement("span")
    cartTitle.innerText=product["title"]
    let cartImage=document.createElement("img")
    cartImage.src=product["image"]
    let cartDescription=document.createElement("p")
    cartDescription.innerText=product['description']
    let button=document.createElement("button")
    button.innerText="addToCart";
    cartBody.append(cartTitle, cartImage,cartDescription,button);
    container.appendChild(cartBody);

});




}

   
    
