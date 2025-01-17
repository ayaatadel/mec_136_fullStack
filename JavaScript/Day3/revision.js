// var confirmation=confirm("are you sure delete element");
// document.writeln(confirmation);

// var alrt=alert("deleteing Element");
// var UserName=prompt("Enter your name");
// // document.writeln(UserName);
// // var userAge=+prompt("Enter your Age");   //
// var userAge=Number(prompt("Enter your Age"));   //
// document.writeln(typeof(userAge))

// js isloosely typed language

// var number1=10;
// document.writeln(typeof(number1))
// var userName="ayat";
// document.writeln(typeof(userName))

// undefined  ====>   null ==>value
// var test=null;
// document.writeln(test)

// arethamic operator ==> +,-,*,/,%

// declartion variable (var x;) , assignment variable (x=10)
// var x=15;
// var y=2;
// // x%y  ==> 15%10  ===>5    ==> 15/10 = 1 ==> 5
// // x%y  ==> 10%3  ====>1  ===> 10/3 =>3 ==>1
// // x%y  ==> 5%3  ====>2  ===>5/3=> 1 ==>2

// document.writeln(x%y);

// document.writeln(x**y); //15^2==>15*15
// //10^3==>10*10*10

//============  comparison operators  ===> > < != ==  === !==   <= >=

// ==(value) ===(datatype , value)

// document.writeln(5=='5')   //>>>>>>>>> value ==> true
// document.writeln("<br>",5==='5');   // value type  ==> false

// != >====> value !==   .>=======> value , datatype
// document.writeln(5!='5')   //==  value ==>  false
// document.writeln("<br>",5!=='5')  //== value , datatype ==> true

// logical operator
/** &&   ==> true true ==> true   => true false ==> false  f && t=>f
 *  ||   ==> true false ==> true , false false => false
 *  !   => true => false , false => true
 *  */
// var x=10
// var y=12
// var z=3
// ==============================  &&
// (x>y)&&(y<z)// 10>12 ==>f  && 12<3==>f

// (x<y)&&(y<z)//   10<12 => t &&  12<3 => f ========> f
// (x>y)&&(y>z)   //  10>12 => f && 12 >3 => t  ==> f
// (x<y)&&(y>z)   // 10<12=> t && 12 > 3 => =======> true
// =============================   ||
// (x<y)||(y<z)//   10<12 => t ||  12<3 => f ========> t
// (x>y)||(y>z)   //  10>12 => f || 12 >3 => t  ==> t
// (x<y)||(y>z)   // 10<12=> t ||12 > 3 => t =======> true
// (x>y)||(y<z)   // 10>12=> f ||12 < 3 => f =======> false

// =================== !
// !( (x<y)||(y<z))   //==> t  || f ==> t  =>>!t=f
// !((x>y)&&(y>z))   //==> f && t => f ==>!f =>t
// !((x<y)&&(y>z))  // ==> t && t => t => !t =>f

// ==  assignment opertators  => = != ++ -- (preIncrement , postIncrement)
// var x=10
// // ++x  => 11   ==>  + then =>store ==> 11 ==> 11
// // x++   => 11  ==> 11 ==> 12
// // --x => 11
// // x--  ==> 11
//                              // =>out ==> store
// document.writeln("<br>",x++) //==>10  ==> 11
// document.writeln("<br>",++x) //==>12  ==> 12
// document.writeln("<br>",--x) //==> 11 ==>11
// document.writeln("<br>",x--)//==> 11 ==>10

// ==> can you swim ==> yes ==>  are you want to join competition ==> y ==> you will join
// ==> can you swim ==> yes ==>  are you want to join competition ==> n ==> you will not join
// ==> can you swim ==> no ==>are you want to join competition running ==> y ==> you will join
// ==> can you swim ==> no ==>are you want to join competition running ==> n ==> you will not join

// var descission =confirm("can you swim"); // true , fasle
// if(descission)
// {
//   var competition=confirm(" are you want to join competition ")
//   if(competition)
//   {
//     document.writeln("you will join with us ")
//   }else{
//     document.writeln("you will  not join with us ")
//   }
// }else{
//  var running=confirm("are you want to join competition running")
//  if(running)
//  {
//     document.writeln("you will   join with us ")

//  }else{
//     document.writeln("you will  not join with us ")
//  }
// }

// if(5>3)
// {
//     document.writeln("5 > 3")
// }else {
//     document.writeln("5  <3")
// }
// ternary operator (condition)?true : false
// (5>3)? document.writeln("5 > 3"):document.writeln("5  <3")  // if else
//   // if                              else if
// (2>3)? document.writeln("2 > 3"):(5>3)?document.writeln("5  >3"): document.writeln("5 <3");

// if(2>3)
// {
//     document.writeln("2 > 3")

// } else if(2<3){
//     document.writeln("2 <3")
// }else{
//     document.writeln("2=3")
// }

// var x=prompt("Enter you fail or success")
// switch (x) {
//     case "success":
//         document.writeln("success")
//         break;
//         case "fail":
//             document.writeln("fail")
//             break;
//     default:
//         document.writeln("not defined")
//         break;
// }

//========================== loops
///  for , while , do while , foreach ,for/in

// for(intialValue ; Condition (iterations numbers) ; increment,dexrement)
/**
 * intial then condition then  body then(increment,decrement)  // first step
 *  condition  then body => increment,decrement
 */

// print numbers from 1 to 5
// document.writeln(1,"<br>")
// document.writeln(2,"<br>")
// document.writeln(3,"<br>")
// document.writeln(4,"<br>")
// document.writeln(5,"<br>")

// for(var i=1;i<=5;i++)
// {
//     document.writeln(i,"<br>")
// }
// var i=1;
// for(;i<=5;)
// {
//     if(i==3)
//     {
//         document.writeln("i = 3")
//     }
//     document.writeln(i,"<br>")
//     i++
// }

// for(;;){}==> infinity loop

// print numbers from 5 to 1
// for(var i=5;i>=1;i--)
// {
//     document.writeln(i,"<br>")
// }

// while
// initial  ==> first time
// while(condition){
//     body
//   incremet, decrement
// }

// var i=1;
// while(i<=5)
// {
//     document.writeln(i,"<br>")
//     i++;

// }

// print numbers from 5 to 1
// var i=5
// while(i<=1)
// {
//     if(i==5)
//     {
//         document.writeln("i =5");
//     }
//     document.writeln(i,"<br>")
//     i--
// }

// =========  do while  ==> execute then loop
/**
 * initial
 * do ==> execute then condition (while)  ==> do
 */
// var i=5;
// do {
//     document.writeln(i,"<br>")  //5   4   3  2  1
//     i--   //5    => 4   3  2 1

// } while (i>=1);

// / break  , continue
// var i=1;
// for(;i<=5;)
// {
//     if(i==3)
//     {
//         document.writeln("i = 3")
//         break;   // stop loop
//     }
//     document.writeln(i,"<br>")
//     i++
// }

// document.writeln("<br>",i,"<br>")
// document.writeln("After loop")

//================== continue  ==> skip , execute after it

// for(var i=1 ; i<=5; i++)
// {
//     if(i==3)
//     {
//         continue;   // skip this step
//     }
//     document.writeln(i,"<br>")   //1  2 4  5
// }
// document.writeln("After loop","<br>")
// document.writeln("<br>",i,"<br>")

// ===========fizBuz Game
//
// for (
//   var i = 1;
//   i <= 100;
//   i++ //1 2 fizz 4 Buzz fizz 7 8 fizz Buzz 11 fizz 13 14 FizzBuzz 16
// ) {
//   if (i % 5 == 0 && i % 3 == 0) {
//     document.writeln("FizzBuzz", "<br>");
//   } else if (i % 5 == 0) {
//     document.writeln("Buzz", "<br>");
//   } else if (i % 3 == 0) {
//     document.writeln("Fizz", "<br>");
//   } else {
//     document.writeln(i, "<br>");
//   }
// }

//======================>print numbers form 1 : 15 number : odd
// for(var i=1;i<=15;i++)
// {
//     // if(i%2 ==0)
//     // {
//     //     continue;
//     // }
//     // document.writeln(i,":","odd", "<br>");

//     if(i%2 !=0)
//     {
//         document.writeln(i,":","odd", "<br>");
//     }
// }

//========================  function   ==> block of code can use in any way of program ==> call
///>   function  nameFunction() {}  ==> not parametesr
///>   function  nameFunction(parameters) {}  ==>  parametesr
// return value ==> function return , function void
// function parametarized , function ==> not parametarized

// var i=+prompt("Enter number to check odd ");
// function checkOdd()
// {
// if(i%2 !=0)
//     {
//         document.writeln(i,":","odd", "<br>");
//     } else{
//         document.write(i,":","odd", "<br>")
//     }

// }
// checkOdd()

// sum two numbers====>  function with  no  parameters
// function ==> return  ==> void function ===> print 

// var x = +prompt("Enter first Number");
// var y =  +prompt("Enter Second Number");

// function sum() {
//   document.writeln(x +  y);

// }
// document.writeln("Summantion of first parameters : ")
// sum()
// //========================================
// var x = +prompt("Enter first Number");   //5
// var y =  +prompt("Enter Second Number");   //3

// function sum(n1,n2) {  //n1=5 n2=3
//   document.writeln(n1 +  n2);

// }
// document.writeln("Summantion of first parameters : ")
// sum(x,y)  //== call function 
// //===============================================================

// var n3 = +prompt("Enter first Number");
// var n4 =  +prompt("Enter Second Number");
// document.writeln("<br>","Summantion of second parameters : ")
// sum(n3,n4)



//==== function return  with parameters
// var x = +prompt("Enter first Number");   //5
// var y =  +prompt("Enter Second Number");   //3

// function sum(n1,n2) {  //n1=5 n2=3
//   return (n1 +  n2);

// }
// document.writeln("Summantion of first parameters : ")
// // document.writeln(sum(x,y))  //== call function  return and print it
// var result=sum(x,y)
// document.writeln(result)

//==== function return  with  no parameters

// function printHello()
// {
//     return "Hello"
// }
// // document.writeln(printHello())
// var result=printHello()
// document.writeln(result)
