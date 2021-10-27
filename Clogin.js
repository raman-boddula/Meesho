var consumer_user = JSON.parse(localStorage.getItem('consumer_users'))
console.log(consumer_user);

function signin(e){
   let count = 0;
   let istrue = false;
   e.preventDefault();

   
   let myForm = document.getElementById('myForm');

   let name = myForm.name.value;
   let email = myForm.email.value;
   let password = myForm.password.value;
   consumer_user.forEach(function(user) {
       count = 0;
       if ( email == user.email && password == user.password) {
           istrue = true;
           localStorage.setItem('current_user',JSON.stringify(email));
           
       }

       
  
   })
  console.log(istrue);
  if ( istrue){
    window.location.href = 'meesho_cart.html';
  }
  else if ( !istrue){
      alert('Invailed email and password!');
  }
}
let signup = document.getElementById('signup');
signup.addEventListener('click',function(){
window.location.href = 'consumer_signup.html';
})