// let numbers=[1,2,3,4,5,6];

// let output=numbers.filter((num)=>{
//     return num %2 !=0
// })
// //console.log(output);


// let products=[
//     {
//         name:"laptop",
//         price:1000,
//         quantity:2,
//         category:"electronics"
//     },
//     {
//         name: "cap",
//         price:90,
//         quantity: 5,
//         category:"clothes"
//     },
//     {
//         name: "phone",
//         price: 500,
//         quantity: 3,
//         category:"electronics"
//     },
//     {
//         name: "shoes",
//         price: 200,
//         quantity: 6,
//         category:"clothes"
//     },
//     {
//         name: "t-shirt",
//         price: 500,
//         quantity: 10,
//         category:"clothes"
//     },
//     {
//         name: "headphones",
//         price: 150,
//         quantity: 8,
//         category:"electronics"
//     },
//     {
//         name: "jacket",
//         price: 120,
//         quantity: 2,
//         category:"clothes"
//     },
//     {
//         name: "tablet",
//         price: 300,
//         quantity: 4,
//         category:"electronics"
//     },
//     {
//         name: "monitor",
//         price: 700,
//         quantity: 1,
//         category:"electronics"
//     }
// ]
// //      .map(c)
// products.forEach((ele)=>{
//     console.log(ele.name);
//     console.log(ele.quantity);
// });

// let total=products.filter((ele)=>{
//     return ele.category=="clothes";
// }).reduce(function(sum,c){
//     return sum + c.price
// },0)

// console.log(`total = ${total}`);
console.log("anyy")
let productsContaner=document.querySelector(".products-container")
let total=document.querySelector(".count")

function getData(url){
let r= new XMLHttpRequest();
r.onload=()=>{
    productsContaner.innerHTML=""
    total.innerHTML=""
if(r.readyState==4 && r.status==200){
    let data=JSON.parse(r.responseText);
    let product= data.products;
    console.log(product);
    console.log(data);
    total.innerHTML+= data.total;

    product.forEach((ele)=> {
        productsContaner.innerHTML+=`
    <div class="products-container">
        <div class="product-card">
            <img class="product-img" src="${ele.thumbnail}" alt="">
            <div class="data">
                <h3 class="title">
                    ${ele.title} 
                </h3>

                <p class="description">
                ${ele.description}                  
                </p>

                <p class="price">
                    price : <span class="value">${ele.price} </span> $
                </p>

                <div class="btns">
                    <button class="add-btn">
                        <i class="fa-solid fa-cart-shopping"></i>  add to cart
                    </button>
                    <button class="view-btn">
                        <i class="fa-solid fa-eye"></i>  view
                    </button>
                </div>
            </div>
        </div>
    </div>
    `
    });
    

}else{
    console.log("error 404");
}
}
r.open("GET",url,true);
r.send();
}

let baiseLink="https://dummyjson.com/products"
let categoryLink="https://dummyjson.com/products/categories"
getData(baiseLink);

//--------------------------------
let select=document.querySelector("select")
let cr= new XMLHttpRequest();
cr.onload=()=>{
if(cr.readyState==4 && cr.status==200){
    let response=JSON.parse(cr.responseText);
    console.log(response);

    response.forEach((ele)=> {
    select.innerHTML+=`
    <option value='${ele.url}'>${ele.name}</option>
    `
    });
    

}else{
    console.log("error 404");
}
}
cr.open("GET",categoryLink,true);
cr.send();

select.addEventListener("change",(e)=>{
    getData(e.target.value);
})
//--------------------------------
let search=document.querySelector(".search")

search.addEventListener("input",()=>{
let newLink=`https://dummyjson.com/products/search?q=${search.value}`
    getData(newLink);
})