let bussiness_user = JSON.parse(localStorage.getItem('bussiness_users'));
let current_users = JSON.parse(localStorage.getItem('current_bussiness_user'));
console.log(bussiness_user);
console.log(current_users);

function sign(products){
    bussiness_user.forEach(function(person){
        if (person.email == current_users){
          person.product.push(products);
          console.log(products);
          console.log(bussiness_user);
          localStorage.setItem('bussiness_users',JSON.stringify(bussiness_user));
          
            
        }
    })
}
function addProduct(e)
{
   // e.preventDefault();
    let myForm = document.getElementById("Myform");
    
    let prodImg = myForm.productimg.value;
   // console.log("prodImg :",prodImg)
    let prodPrice = myForm.productprice.value;
   // console.log("prodPrice :",prodPrice)
    let prodCode = myForm.productcode.value;
    //console.log("prodCode:",prodCode)
    let prodName = myForm.productname.value;
    //console.log("prodName:",prodName)
    let prodCat = myForm.productcat.value;

    

    let productData ={
            Product_Img :prodImg,
            Product_Price : prodPrice,
            Product_Code : prodCode,
            Product_Name : prodName,
            Product_Cat :prodCat
        };
    
        sign(productData);


}

let logout = document.getElementById('logout');
logout.addEventListener('click',function(){
    localStorage.setItem('current_bussiness_user',JSON.stringify(null));
    window.location.href = 'index.html';
})