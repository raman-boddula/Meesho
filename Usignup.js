let otp_arr = [];
function signin(){
    var all_User = JSON.parse(localStorage.getItem('bussiness_users'))
    console.log(all_User);

let count = 0
   
   let myForm = document.getElementById('myForm');

   let name = myForm.name.value;
   let email = myForm.email.value;
   let password = myForm.password.value;
  if ( all_User === null){
      return false;
  }
   for (let i = 0; i < all_User.length; i++){
       if ( email == all_User[i].email){
         return true;
       }
   }

 return false;
}



let btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    btn.innerText = "Resend"
    let otp_no = mathrandom();
   otp_arr.push(otp_no);
   //console.log(otp_no);
   swal("Thank You!", `This is your otp ${otp_no}`, "success")
   //console.log(isCheck());
})


function mathrandom(){
   return Math.floor(Math.random()*1000000)
}

let verify = document.getElementById('verify');

function verify_otp(){
let otp = document.getElementById('otp');   
if ( otp_arr[otp_arr.length - 1] == otp.value ){

   return true;
}
else {
   return false;
}
}


function isCheck(){
let otp = document.getElementById('otp');

verify.addEventListener('click',function(){
  //console.log(otp);
  
    if (otp_arr[otp_arr.length - 1] == otp.value) {
      swal("congratulations!","Otp is Verified","success")
      otp.style.borderColor = 'green';
      


  }
  else {
      ///alert('otp is incorrect');
      swal("Oops!", "incorrect otp", "warning")
  }
})
}
isCheck();



// console.log(mathrandom());



function signup(e){
    e.preventDefault();
  
    
    let myForm = document.getElementById('myForm');

    let name = myForm.name.value;
    let email = myForm.email.value;
    let password = myForm.password.value;

    if ( signin() && verify_otp()){
        swal("Oops!",'You have already registered',"error");
    }
    else if ( !verify_otp()){
        swal("Oops!",'Your otp is incorrect',"error");
    }
   else {
    if ( localStorage.getItem('bussiness_users') === null){
   localStorage.setItem('bussiness_users',JSON.stringify([]));

}

    let user = {
        name:name,
        email:email,
        password:password,
        product : [],
    }
    console.log(user);
   
     let arr = JSON.parse(localStorage.getItem('bussiness_users'));
     //console.log(arr);

     arr.push(user);
     console.log(arr);
    localStorage.setItem('bussiness_users',JSON.stringify(arr));
    swal("Congratulations!", "You have registered successfully!", "success")
    window.location.href = 'messho_login.html'
}

  // console.log(name,email,password);
}

let login = document.getElementById('login');
login.addEventListener('click',function(){
    window.location.href = 'messho_login.html';
})