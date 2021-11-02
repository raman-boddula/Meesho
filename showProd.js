let saree = document.getElementById("products");
let kurthis = document.getElementById('Kurthis');
let kids = document.getElementById("Kids");
let others = document.getElementById("other");
var hardCoded =[{
   Product_Img : "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/6/29/0e8572b7-f5fd-4995-843f-2c1dae6655461624950815660-1.jpg",
   Product_Price : 1299,
   Product_Name : "Peach Baluchari Saree",
   Product_Code: 110,
   Product_Cat:"saree"
},{
   Product_Img :"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14984834/2021/8/27/9244a227-c9c4-4a1c-b049-b84938aea6a01630043068462-Saree-Mall-Yellow-Georgette-Ethnic-Solid-Party-Wear-Saree-wi-1.jpg",
   Product_Price:1199,
   Product_Name : "Poly Georgette Saree",
   Product_Code: 109,
   Product_Cat:"saree"

},
{
   Product_Img :"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14975358/2021/7/29/9e1484a0-92f8-4871-9b98-fc9f389406691627570339977KALINIWomenBlackPrinted1.jpg",
   Product_Price  :799,
   Product_Name :"Ethnic Motifis Saree",
   Product_Code: 108,
   Product_Cat:"saree",

},
{
   Product_Img :"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15228356/2021/10/5/4870b0fd-4012-49c5-a14f-609ce42918c21633432278312-Mitera-Off-White--Orange-Silk-Blend-Patola-Saree-94163343227-1.jpg",
   Product_Price : 979,
   Product_Name: "Patola Silk Saree",
   Product_Code: 107,
   Product_Cat:"saree"
},
{
   Product_Img : "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13903168/2021/4/17/638f7420-e644-462e-a484-d6b87e146ee51618644035247-Anouk-Sea-Green-Pure-Georgette-Printed-Dark-Floral--Daily-We-1.jpg",
   Product_Price: 999,
   Product_Name :"Floral Printed Saree",
   Product_Code: 106,
   Product_Cat:"saree"
},
{
   Product_Img :"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12386522/2020/11/4/e235b404-6ab8-4854-b804-ab76f12f6c531604481803887-Inddus-Blue-Printed-Organza-Saree-1671604481801133-2.jpg",
   Product_Price:2199,
   Product_Name :"Baluchari Saree",
   Product_Code: 105,
   Product_Cat:"saree"
},
{
   Product_Img :"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15097656/2021/8/10/d06bf589-dc9f-4046-a6d0-f1d32c1d77591628603220141Sarees2.jpg",
   Product_Price :1499,
   Product_Name :'Women Embleshed Saree',
   Product_Code: 104,
   Product_Cat:"saree"
},{
   Product_Img : "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12631352/2020/10/23/34ef4663-7378-41f5-b386-698417913b7c1603435727535-Inddus-Women-Sarees-1371603435725076-1.jpg",
   Product_Price :1379,
   Product_Name : "Banarasi Saree",
   Product_Code: 103,
   Product_Cat:"saree"
},
{
   Product_Img :"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15510428/2021/9/17/6c672e43-9617-4ff7-96b6-23cfa2ca62771631873924449KALINIWomenWhitePrinted1.jpg",
   Product_Price: 1299,
   Product_Name :"Floral Bagh Saree",
   Product_Code: 102,
   Product_Cat:"saree"
},
{
   Product_Img : "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/8/11/35643372-9a6a-45b5-a18a-af056a97b6e51565465392383-1.jpg",
    Product_Price:1498,
   Product_Name :"Banarasi Saree",
   Product_Code: 101,
   Product_Cat:"saree"
},
{
   Product_Img :"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15340064/2021/9/2/33beabeb-05f3-466c-b9db-994702cd0a371630568241712AASI-HOUSEOFNAYOWomenGreenEthnicMotifsPrintedKeyholeNeckMirr1.jpg",
   Product_Price :998,
   Product_Name : "Motifis Printed Kurthi",
   Product_Code: 120,
   Product_Cat:"kurthi"
   },
   {
      Product_Img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10513948/2019/9/4/e515a887-a59f-48bf-a53b-0181c4381a431567580918498-Anubhutee-Women-Kurtas-991567580917526-1.jpg" ,
      Product_Name:"Mustard Yellow & Brown Screen Printed Kurthi" ,
      Product_Price:1299 ,
      Product_Code: 121,
      Product_Cat : "kurthi",
   },{
      Product_Img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13823542/2021/3/26/3dec22cc-0cd1-4838-83b0-c9a7ff0f6daa1616750240069-Sbo-Fashion-Women-Turquoise-Blue--White-Quirky-Printed-Cotto-1.jpg" ,
      Product_Name:"Blue & White Quirky Printed Kurthi" ,
      Product_Price:999 ,
      Product_Code: 128,
      Product_Cat : "kurthi",
   },

   {
      Product_Img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11351716/2021/2/15/e1fbdef3-1762-4bb4-89a1-f1d67e83ea121613394818324-Lakme-Women-Eyeshadow-1081613394817920-2.jpg" ,
      Product_Name:"Lakme Foundation Creame" ,
      Product_Price:696 ,
      Product_Code: 122,
      Product_Cat : "other",
   },
   {
      Product_Img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/10/17/090f9dc1-781d-43ed-a77b-80eb0675a50f1602890526587-1.jpg" ,
      Product_Name:"Peach-Coloured & Green Printed Top with Palazzos" ,
      Product_Price:999 ,
      Product_Code: 123,
      Product_Cat : "kids",
   },
      
   {
      Product_Img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/5911028/2021/8/26/3e51e145-aef8-47f6-a580-b31ad37fb3a51629994063490-VEGA-VHSCC-01-3-in-1-Hair-Styler---Black--Gold-Toned-2151629-1.jpg" ,
      Product_Name:"Vega Hair Straightener" ,
      Product_Price:2199 ,
      Product_Code: 124,
      Product_Cat : "other",
   }
   ,
   {
      Product_Img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13471916/2021/2/9/a9a87e2a-f8c8-4953-9e5f-b8c1b8f4ff201612846540076-boAT-Unisex-Black-Storm-Smart-Watch-621612846538704-1.jpg" ,
      Product_Name:"Boat Extend Smart Watch" ,
      Product_Price:3199 ,
      Product_Code: 125,
      Product_Cat : "other",
   },

   {
      Product_Img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15362118/2021/9/4/fb8e05ee-c124-4c78-9839-1064da6d8c7c1630771867178HELLCATBoysYellowTypography2PrintedAppliqueT-shirt1.jpg" ,
      Product_Name:"HELLCAT Cotton Tshirts Pack of 2" ,
      Product_Price:1299 ,
      Product_Code: 126,
      Product_Cat : "kids",
   },

   {
      Product_Img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10285643/2021/2/18/173013c4-72bc-4979-a177-007e5d2e68651613641054894-LilPicks-Girls-Green--White-Solid-Top-with-Dhoti-Pants-48916-1.jpg" ,
      Product_Name:"Girls Green & White Solid Top with Dhoti Pants" ,
      Product_Price:699 ,
      Product_Code: 127,
      Product_Cat : "kids",
   }
];
console.log('hardCoded',hardCoded)
for(var i=0;i<hardCoded.length;i++){
showProduct(hardCoded[i])
}

let bussiness_user = JSON.parse(localStorage.getItem("bussiness_users"));
let consumer_user = JSON.parse(localStorage.getItem("consumer_users"));
let current_users = JSON.parse(localStorage.getItem("current_user"));
// console.log(consumer_user);
// console.log(current_users);

function cart(consumer_product, product_code) {
for (let i = 0; i < consumer_product.length; i++) {
 if (consumer_product[i].Product_Code == product_code) {
   return true;
 }
}
return false;
}

//console.log("items:-",items);



function retrieve_users() {
bussiness_user.forEach(function (person) {
 let list_product = person.product;

 list_product.forEach(function (product) {
   console.log(product);
   showProduct(product);
 });
});
}

retrieve_users();

function showProduct(product) {
let div = document.createElement("div");

let img = document.createElement("img");
img.src = product.Product_Img;
let productCode = document.createElement("p");
productCode.textContent = product.Product_Code;
let productPrice = document.createElement("h6");
productPrice.textContent = product.Product_Price;
let productName = document.createElement("h6");
productName.textContent = product.Product_Name;

let addToCart = document.createElement("button");
addToCart.innerText = "Add To Cart";
div.id = 'shopping'
let detail = document.createElement('div');
detail.id = 'detail';
addToCart.onclick = function () {
 sign(product);
};

detail.append(productName,productPrice,addToCart);
   div.append(img, detail);
   if (product.Product_Cat == "Saree" || product.Product_Cat == "saree" || product.Product_Cat == "SAREE") {
      saree.append(div);
   }
   if (product.Product_Cat == "Kurthi" || product.Product_Cat == "kurthi" || product.Product_Cat == "KURTHI") {
      kurthis.append(div);
   }
   if (product.Product_Cat == "Kids" || product.Product_Cat == "kids" || product.Product_Cat == "KIDS") {
      kids.append(div);
   }
   if (product.Product_Cat == "other" || product.Product_Cat == "Other" || product.Product_Cat == "OTHER") {
      others.append(div);
   }

}

function sign(cart_product) {
consumer_user.forEach(function (person) {
 if (person.email == current_users) {
   if (!cart(person.product, cart_product.Product_Code)) {
     console.log(person.product, cart_product.Product_Code);
    swal('Congratulations!','product have added to cart','success')
     person.product.push(cart_product);
     localStorage.setItem("consumer_users", JSON.stringify(consumer_user));
   }
   else{
       swal("Oops", "Already Added to cart!", "error");
   }
 } else if (current_users === null) {
   window.location.href = "consumer_login.html";
 }
});
let carts = document.getElementById('cart');
carts.addEventListener('click',function(){
if ( current_users === null){
 window.location.href = 'consumer_login.html';
}
else {
 window.location.href = 'meesho_cart.html';
}
})
}