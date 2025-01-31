// functions 
// array 
// object

//===========
// function ==> block of code 
/**
 * use more than one time   ==> function nameFunction(){}
 * to use function ==> call   ==>nameFunction()
 * ==> parametic ==> parameters ($a,$b) , non paramtic ()
 * 
 * function expresstion==> var result= function nameFunction(){}
 * function expression ==> function store in varaiable
 * ===> deal with variable as function
 */

// var x=+prompt("Entser X")
// var y=+prompt("Entser y")
// var z=+prompt("Entser z")
// // avg=sum/3
// function sum (x,y,z)
// {
//  return x+y+z;  
//  // store
// // document.writeln(x+y+z);// out put
// }
// function avg(x,y,z)
// {
// //  document.writeln("Avg:",sum(x,y,z)/3)
// return sum(x,y,z)/3;

// }
// avg(x,y,z)


// function callAvg()
// {
//    document.writeln(avg(50,30,40))   //==> 120/3=40
// }

// callAvg()
//===================================== function expression
// var x=+prompt("Entser X")
// var y=+prompt("Entser y")
// var z=+prompt("Entser z")
// avg=sum/3
// function sum (x,y,z)
// {
//  return x+y+z;  

// }
// var average=function avg(x,y,z)
// {
// return sum(x,y,z)/3;

// }

// document.writeln(average) // body of function
// document.writeln(average(5,10,15))  // out put of function ==> call function

///////////////=============================== Array

// on dimension array
// var arr=["ayaat",12,true];  /// value , index ==>0 (first element of array) , length ==> number of values in array ==4
// document.writeln(arr);
// print any element in array ==> arrName[index of element]
// document.writeln(arr[0],"<br>");
// document.writeln(arr[1],"<br>");
// document.writeln(arr[2],"<br>");


//  two dimenssion array
//   //     0  =>arr       1
// var arr2=[
//     [1,2,4],   // 0
//     [5,6,7]    // 1
// ]  


//==== index[[]]==> [][]

// document.writeln(arr2[0],"<br>");
// document.writeln(arr2[0][1],"<br>");
// document.writeln(arr2[1][2],"<br>");
// document.writeln(arr2[0][0],"<br>");

//// print elemnts of single  array
// var arr=[1,2,3,4,"hamza","hassan",6,"muntaha"]

// // document.writeln(arr)

// for(var index=0; index<arr.length;index++)
// {
//   document.writeln(arr[index],"<br>")
// }

// print elements of two dimenssion array

// var arr2=[
//     [1,2,4],    //0
//     [5,6,7]    ///1 
// ] 

// for ( var i=0;i<arr2.length;i++)  // row
// {
//     // document.writeln(arr2[i]);  // [1,2,4]   [5,6,7]
// for(var j=0;j<arr2[i].length;j++)  // col
// {
//     document.writeln(arr2[i][j],"<br>")
// }
// document.writeln("<br>******************<br>")
// }

// 

// var userInput;  // 10

// var userData=[];

// for (let index = 0; index < 10; index++) {
    
//     userInput=prompt("Enter your data") 
//     userData[index]=userInput;
// }

// // document.writeln(userData);


// for (let index = 0; index < userData.length; index++) {
    
//     document.writeln(userData[index],"<br>");
// }


//====  function 5 var from user , summation

// function getUserData()
// {
//     var userInput;
//     var sum=0;
//     var arr=[];
//     for (let index = 0; index < 5; index++) {
//        userInput= +prompt('Enter your number')
//        sum=sum+userInput;
//        // array
//        /**
//         * arr[index]=userInput
//         * // push
//         */
//        arr.push(userInput)
        
//     }
//     document.writeln(arr);
//     document.writeln("<br> ********************* <br>");
//   document.writeln(sum);
// }

// getUserData();

// var users=["ayaat","nada"];
// users[2]="eman";  //["ayaat","nada","eman"]
// users[2]="hamza";//["ayaat","nada","hamza"]
// users.push("ameena");  // Inserts new elements at the end of an array
// document.writeln(users);
// document.writeln("<br> *****************  <br>");
// // Inserts new elements at the start of an array
// users.unshift("mahmoud")//["mahmoud","ayaat","nada","hamza"]
// document.writeln(users);
// document.writeln("<br> *****************  <br>");
// // remove element from array  ==> 
//     users.pop();  //Removes the last element from an array ["mahmoud","ayaat","nada"]
// document.writeln(users);
// document.writeln("<br> *****************  <br>");
//     users.shift();  //Removes the first element from an array
// document.writeln(users);//["ayaat","nada"]

// object ==> data type   => key : value

// var user={
// //   key : value
//     name:"ayat",
//     age:24,
// }

// document.writeln(user.name,"<br>")
// document.writeln(user['age'],"<br>")

var users=[
    {
    name:"ayat",
    age:24,
    },
    {
    name:"eman",
    age:24,
    },
    {
    name:"nada",
    age:24,
    },
]
// for (let index = 0; index < users.length; index++) {
  
//     document.writeln("name :",users[index].name,"<br>")
//     document.writeln("age :",users[index]['age'],"<br>")
// }


for (var element of users) {  // for loop ==> value of array
    document.writeln(element.name)
    document.writeln(element.age)
}

for (var index in users) {   /// key index
//   document.writeln(index);
  document.writeln(users[index]['name']);
}

var user={
    // key :value
    name:"ayat",
    age:24,
}
// user['name'] ==> ayaat

for (var key in user) {  // key 
 document.writeln(user[key])  // value ==> "ayaat" , 24
 document.writeln(key) // key ==> name , age
}


