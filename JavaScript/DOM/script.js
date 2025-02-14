// // DOM ==> Document Object Model ===> object in js ==> document ==> index
// // Create elemnt in html
// // select elemnt in html ==> controll
// // handle style
// // action (event)

// /**
//  * 1- select elemnt in html ==>
//  * id ,  ==> single elemnt
//  *  class , ==> html collection ==> array ==> index=> value
//  * tag name  ==> p,  ==> html collection
//  * name ==> attribute name="text" ==> node list ==>array ==> index
//  *  query selector==> single elment ==> first
//  *
//  * , query delectorr all  ==> node list of all elemnts
//  *
//  */
// // id
// // let text=document.getElementById("pg");
// // console.log(text);
// // class
// // let text=document.getElementsByClassName("pag")
// // console.log(text[1]);
//  // tag name
// // let text=document.getElementsByTagName("p")
// // console.log(text[1]);

// // name attribute
// // let text=document.getElementsByName("text")
// // console.log(text[0]);

// // query selector
// // let text=document.querySelector("#pg")
// // console.log(text);

// // let text2=document.querySelector(".pag")
// // console.log(text2);

// // let text3=document.querySelector("p")
// // console.log(text3);

// // query selector all
// // let text=document.querySelectorAll("#pg")
// // console.log(text[1]);

// // let text2=document.querySelectorAll(".pag")
// // console.log(text2[0]);

// // let text3=document.querySelectorAll("p")
// // console.log(text3[1]);

// // dom ==> forms , links , images , title,body
// /// ============== html collection ==> index
// // let link=document.links[0];
// // console.log(link);

// // let images=document.images
// // console.log(images[0]);

// // let forms=document.forms
// // console.log(forms[0]);

// // let pageTitle=document.title
// // console.log(pageTitle);

// // let body=document.body;
// // console.log(body);

// //======================= id  ==>

// // console.log(header);

// // ================= tags attributes
// /**
//  * set attribute ==> add attribute
//  * remeove attribute
//  * update attribute
//  * get attribute
//  */

// // get attribute

// let images=document.images  // collection ==> index
// // console.log(images);

// // let imgSrc=images.getAttribute("src")
// // let imgAlt=images.getAttribute("alt")
// // console.log(imgSrc);
// // console.log(imgAlt);

// // let link=document.links;
// // link[0].setAttribute("href","https://google.com");

// // console.log(link.getAttribute('href'));
// // console.log(link);
// // link.setAttribute("href","google.com")
// // link.setAttribute("href","google.com") ????????///

// // set attribute ==> add attribute (not found) , update attribute ===> chage value

// // attribute exist ===> update ==> change
// images[1].setAttribute('src','https://images.pexels.com/photos/19570337/pexels-photo-19570337/free-photo-of-white-trees-and-road-in-forest-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')

// // attribute not exist ==> add
// images[2].setAttribute('src',"https://images.pexels.com/photos/20603556/pexels-photo-20603556/free-photo-of-reflection-of-hand-holding-camera-in-mirror.jpeg");

// //===========================  set attribute ==> add , update
// images[0].src="https://images.pexels.com/photos/29904627/pexels-photo-29904627/free-photo-of-minimalist-ceramic-cups-in-soft-sunlight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"

// // get attribute ==>

// img_Src=images[0].src
// // console.log(img_Src);

// // remove attribute

// // images[2].removeAttribute('src')

// // check if element has attribute or not

// // console.log(images[2].hasAttribute('src'));
// // console.log(images[0].hasAttribute('src'));

// // if(!images[2].hasAttribute('src'))
// // {
// //     images[2].src="https://images.pexels.com/photos/20603556/pexels-photo-20603556/free-photo-of-reflection-of-hand-holding-camera-in-mirror.jpeg";
// //     // images[2].setAttribute('src',"https://images.pexels.com/photos/20603556/pexels-photo-20603556/free-photo-of-reflection-of-hand-holding-camera-in-mirror.jpeg");

// // }

// // toggle  attribute==>   remove attribute if exist
// //   add attribute ==> if attribute not exist
// // console.log(images[0].toggleAttribute('src'));

// // console.log(images[2].toggleAttribute('src'));

// // style of elemnts
// /// element.style.properity="value"
// /// element.style=`all css code `
// /// element.style.cssText=`all css code `

// // header.style.color="blue";
// // header.style.backgroundColor="gray";

// /////////// ``` == ذ

// // header.style.cssText=`
// // color:white;
// // background-color:black;
// // border:1px solid gray;
// // border-radius:10px;
// // `
// // header.style=`
// // color:white;
// // background-color:black;
// // border:1px solid gray;
// // border-radius:10px;
// // `

// // list all classes ==> classlist

// // let headerClassList=header.classList
// // // add class
// // header.classList.add('hidden','show')
// // // remove class
// // header.classList.remove('show','first')

// // // toggle  ==> add if attribute not exist , remove ==> class exist
// // header.classList.toggle('show')
// // header.classList.toggle('header')
// // console.log(headerClassList);

// /**
//  * toggle ==>  attribute , class
//  * not esixt ==> add
//  * exist ==> remove
//  *
//  * // style ==> h1 ==> header  ==> remove
//  * /// style
//  * // style ==> h1 ==> has not header  ==> add
//  */

// // innerhtml , innertext

// /**
//  * <div>
//  * front End  -- innertext
//  * <p>track </p>
//  * </div>
//  */

// // container.innerText=`front End`
// container.style=`
// width:40%;
// text-align:center;
// border:1px solid gray;
//  border-radius: 10px;
// padding:3px;
// `
// container.innerHTML=`
// <img src="https://images.pexels.com/photos/20603556/pexels-photo-20603556/free-photo-of-reflection-of-hand-holding-camera-in-mirror.jpeg" alt="img add" style='width:100px;height:100px'>
// <p style='color:blue'> Card1 </p>

// <button> Add To Cart</button>

// `

///////////////////// create Elemnets in html

// div  , span ==> price , h ==> name of product , img

// let container= document.createElement('div')
// container.classList.add('container')
// let price=document.createElement('span')
// price.innerText="40$"

// // {/* <h3>prodict1</h3> */}
// let productName=document.createElement('h5')
// productName.innerText="product1"
// productName.style=`
// color:blue;
// `
// let image=document.createElement('img')
// image.src="https://images.pexels.com/photos/20603556/pexels-photo-20603556/free-photo-of-reflection-of-hand-holding-camera-in-mirror.jpeg";
// // image.setAttribute('alt',"productImage")
// image.alt="productImage"

// image.classList.add("imgStyle")

// container.append(image,productName,price)

// document.body.appendChild(container)

function createCard(name, img, productrPrice) {
  let container = document.createElement("div");
  container.classList.add("container");
  let price = document.createElement("span");
  price.innerText = `${productrPrice}`;

  {
    /* <h3>prodict1</h3> */
  }
  let productName = document.createElement("h5");
  productName.innerText = `${name}`;
  productName.style = `
    color:blue;
    `;
  let image = document.createElement("img");
  image.src = `${img}`;
  // image.setAttribute('alt',"productImage")
  image.alt = "productImage";

  image.classList.add("imgStyle");

  container.append(image, productName, price);

  document.body.appendChild(container);
}

// createCard()
// createCard()
// createCard()

let products = [
  {
    name: "product1",
    productrPrice: "30$",
    img: "https://images.pexels.com/photos/20603556/pexels-photo-20603556/free-photo-of-reflection-of-hand-holding-camera-in-mirror.jpeg",
  },
  {
    name: "product2",
    productrPrice: "35$",
    img: "https://images.pexels.com/photos/20603556/pexels-photo-20603556/free-photo-of-reflection-of-hand-holding-camera-in-mirror.jpeg",
  },
  {
    name: "product3",
    productrPrice: "50$",
    img: "https://images.pexels.com/photos/20603556/pexels-photo-20603556/free-photo-of-reflection-of-hand-holding-camera-in-mirror.jpeg",
  },
  {
    name: "product4",
    productrPrice: "70$",
    img: "https://images.pexels.com/photos/20603556/pexels-photo-20603556/free-photo-of-reflection-of-hand-holding-camera-in-mirror.jpeg",
  },
];

for (let index = 0; index < products.length; index++) {
  // console.log(products[index]);

  //   console.log(products[index]['name']);
  //   console.log(products[index].name);
  //   console.log(products[index]['productrPrice']);
  //   console.log(products[index]['img']);

  createCard(
    products[index]["name"],
    products[index]["img"],
    products[index]["productrPrice"]
  );
}
