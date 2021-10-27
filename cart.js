let count = 0;
let consumer_user = JSON.parse(localStorage.getItem("consumer_users"));
  let current_users = JSON.parse(localStorage.getItem("current_user"));

function sign(person,product) {
    
      if ( person.email == current_users){
          console.log(person.email);
        showProduct(product);
        sum(person.product);
        count++;
        


        // function remove(product){
        //    if ( products.productCode == product.productCode){
        //        console.log(product.productCode);
        //    }
      }
  }

  var sum_price = 0;
   function sum(product){
      
      for ( let i = 0; i < product.length; i++){
          sum_price += Number(product[i].Product_Price);
      }
      console.log('bill',sum_price)
    if ( count == 1)  {
        let b = document.getElementById('before');
        console.log("b",b)
        b.textContent=`${sum_price}`
        let div = document.createElement('div')
      let bill = document.getElementById('bill');
      let h4 = document.createElement('h4');
      let h5 = document.createElement('h4');
      div.className = 'delivery';

      h4.textContent =  + Number(sum_price - 100);
      h5.textContent = 'Total Amount';
      let btn = document.createElement('button');
      btn.innerText = 'Continue';
      div.append(h5,h4);
      let div_btn = document.createElement('div');
      div_btn.append(btn);
      btn.id = 'continue';
      btn.onclick = function(){
          window.location.href = 'address.html';
      }
      bill.append(div,div_btn);

    }
  }

function retrieve_users() {
    consumer_user.forEach(function (person) {
       
      let list_product = person.product;
  
      list_product.forEach(function (products) {
       // console.log(product)
       sign(person,products);
    
       
      
       });
    });
}
let data =[{
        Product_Img : "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/6/29/0e8572b7-f5fd-4995-843f-2c1dae6655461624950815660-1.jpg",
        Product_Price : 1299,
        Product_Name : "Peach Baluchari Saree",
        Product_Code :110
    },{
        Product_Img :"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14984834/2021/8/27/9244a227-c9c4-4a1c-b049-b84938aea6a01630043068462-Saree-Mall-Yellow-Georgette-Ethnic-Solid-Party-Wear-Saree-wi-1.jpg",
        Product_Price:1199,
        Product_Name : "Poly Georgette Saree",
        Product_Code :109
    
    },
    {
        Product_Img :"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14975358/2021/7/29/9e1484a0-92f8-4871-9b98-fc9f389406691627570339977KALINIWomenBlackPrinted1.jpg",
        Product_Price  :799,
        Product_Name :"Ethnic Motifis Saree",
        Product_Code :108
    
    }
];
    var s=0;
    data.forEach((pr)=>{
        showProduct(pr);
      s+=Number(pr.Product_Price);
    })
    console.log('s',s)
    var su =document.getElementById('before');
    s=s+sum_price;
    su.textContent=s;
  retrieve_users();

  function showProduct(product) {
    let parent = document.getElementById('addedProducts');
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = product.Product_Img;
    let productCode = document.createElement("p");
    productCode.textContent = product.Product_Code;
    let productPrice = document.createElement("h6");
    productPrice.textContent = "Rs "+ product.Product_Price;
    let productName = document.createElement("h6");
    productName.textContent = product.Product_Name;
    let detail_product = document.createElement('div');
    detail_product.id = 'detail_product';

    let remove_form_cart = document.createElement("button");
    remove_form_cart.innerText = "Remove";
     remove_form_cart.onclick = function(){
         var rName = product.Product_Name;
         remItem(rName);
         delete product;
     }
   div.id = 'single_product';
    div.append(img);
    detail_product.append(productName,productPrice ,remove_form_cart)
    div.append(detail_product);
    parent.append(div);
  }

  let logout = document.getElementById('logout');
  logout.addEventListener('click',function(){
      window.location.href = 'meesho_homepage.html';
      localStorage.setItem('current_user',JSON.stringify(null));
  })

  function remItem(rName){
      console.log('rName',rName)
      console.log('product',product)
  }