document.writeln("<h1> welcome in java script day 1 </h1>")
// document.writeln("<h1> welcome in java script day 1 </h1>")
/** multi line
 * comment ==> single line (//)
 */


// consle 
console.log("hello day1 js");
// alert("hello")  ==> show message to user

// confirm("Are you sure to delete")
// print message to take confirmation from user (true , fale) 


// variable ==> place in memory i can store value in it
// var name="ayaat";
// console.log(name);
// document.writeln(name)

// var result=confirm("Are sure to delete");  
// document.writeln(result)


/***
 * java script is loosely typed language
 * know data type of variable from value
 * 
 * number 
 * string  ""  , ''
 * var userAge='15'
 * console.log(typeof(userAge));
 * boolean => true(1) , false(0)
 * array
 * object
 * null
 * undefined
 */
// var userNameData
// var userName="ayaat";
// var userAge=25;
// var users=["ayaat",25]
// var usersDate={"name":"ayaat"}
// typeof => function make me to know data type of variable
// console.log(typeof(userName));
// console.log(typeof(userAge));


// alert("Welcome to our site!");
document.writeln("<h2 style='color:red; text-align:center'>Hamza</h2>");
// console.log("name : muntaha humoda");
// console.log("age :",22);
// var x=10;  //== x  => 10
// var x=15;  //== x  => 10 xxxxxxxx====> x=15
// var X=25;  
// console.log(x);
// console.log(X);

// var flag=true
// var x=25
// var xy='25'
// var userName="ayaat"
// console.log(typeof(flag));
// console.log(typeof(xy));
// // console.log(typeof(x));
// console.log(z);

// console.log(typeof(userName));


var n1=3;
// var n2=10;
// console.log(n1+n2);
// console.log(n1-n2);
// console.log(n1*n2);
// console.log(n2**n1);
// console.log(n2/n1);
// console.log(n2%n1);

// var n3=n1+1;  // n1=3 + 1=4
// console.log(n3);  

// var n3=++n1;// 4
// var n3=n1++;// 4

// console.log(n3);

// var fName="ayaat";
// var lName="adel";
// // concatination 
// var fullName="Name : "+fName+" "+lName;
// console.log(fullName);


// take vaues , message from user
// var num1=+prompt("enter first number")  // string==> number
// var num2=+prompt("enter first number")
// sum=num1+num2;
// console.log(sum);

// var arr=[1,2,3,4]
// for (const key in arr) {
//     console.log(key);
    
// }


/**
 * in array
 * for of ==> value of index
 * for in ==> index
 * 
 * object
 * 
 * for of ==> value of key
 * for in ==> key
 */


// var a=200;
var assarr = {
    "UserName": "Aly",
    "Age": 21,
    "Address": "Cairo"
  };
//   var associativeArray = {
//       "UserName": "Aly",
//       "Age": 21,
//       "Address": "Cairo"
//     };
    function showdata(){
      for (i=0; i<assarr.length-1; i++){
      var key = assarr[i].split(':')[0]
      var value = assarr[i].split(':')[1]
      console.log(key);
      console.log(value);
      
      
      }
      }
      showdata()
    // //   showdata(key, value);
    //   console.log(showdata());


