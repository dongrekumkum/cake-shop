


function showOffer() {
  alert("🎉 Get 20% OFF on your first order!");
}

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;

  if (name === "" || email === "" || mobile === "") {
    alert("All fields are required");
    return false;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Invalid Email");
    return false;
  }

  if (mobile.length !== 10 || isNaN(mobile)) {
    alert("Invalid Mobile Number");
    return false;
  }

  alert("Form Submitted Successfully!");
  return true;
}
