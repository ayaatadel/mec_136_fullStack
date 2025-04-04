// function getAllUsers()
// {
//     let users=[]
//     // let users=[{id:1,name:"ayaat"},{id:2,name:"eman"}]
//     setTimeout(() => {
//         users=[{id:1,name:"ayaat"},{id:2,name:"eman"}]
//         console.log("usersApi",users);
//         // getSingleUser(1,users);
//         let user;
//         setTimeout(() => {
//            user= users.filter((user)=>user.id==1
//             )
//             console.log("userData",user);
//         }, 0);

//     }, 1000);
//     console.log(users);
// }
// function getSingleUser(id,users)
// {
//     let user;
//     setTimeout(() => {
//        user= users.filter((user)=>user.id==id
//         )
//         console.log("userData",user);
//     }, 0);
//     // console.log("userData",user);
// }
// getAllUsers()

let promise = new Promise((fun1, fun2) => {
  let name = "mec";
  if (name) {
    // fun1(name)// fullfilled
    fun1({ name: name, message: "sussess request" }); // fullfilled
  } else {
    // fun2("error")    // reject
    fun2({ name: name, message: "failed request" }); // reject
  } // pending
});
console.log(promise);
promise
  .then((x) => {
    console.log(x);
    // console.log(x.name);
  })
  .catch((error) => {
    console.log(error);
  });

function allUsersByPromise() {
  let users = [];
  let promise = new Promise((resolve, reject) => {
    // fun1==> resolve
    // fun2 ==> reject
    users = [
      { id: 1, name: "ayaat" },
      { id: 2, name: "eman" },
    ];
    if (users.length > 0) {
      resolve(users);
    } else {
      reject("failed to get users");
    }
  });
  promise
    .then((response) => {
      console.log("users", response);
    })
    .catch((error) => {
      console.log(error);
    });
}
// allUsersByPromise();

fetch('https://fakestoreapi.com/products')
  .then(response => console.log(response)
  )
  .catch(error => console.log(error));

fetch('https://fakestoreapi.com/products')
  .then(response => console.log(response.json())
  )
  .catch(error => console.log(error));

fetch("https://fakestoreapi.com/products")
  .then((response) => {
    let responseResult = response.json();
    responseResult
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => console.log(error));
