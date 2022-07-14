// form validation event listener
document.getElementById("name").addEventListener("blur", validateName);

document.getElementById("zip").addEventListener("blur", validateZip);

document.getElementById("email").addEventListener("blur", validateEmail);

document.getElementById("phone").addEventListener("blur", validatePhone);

function validateName() {
  const name = document.getElementById("name");
  const re = /^[a-zA-Z]{1,15}[ ]?[a-zA-Z]{1,15}$/i;
  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
    console.log(name.value);
  } else {
    name.classList.remove("is-invalid");
  }
}

function validateZip() {
  const zip = document.getElementById("zip");
  const re = /^[0-9]{1,9}$/i;
  if (!re.test(zip.value)) {
    zip.classList.add("is-invalid");
    console.log(zip.value);
  } else {
    zip.classList.remove("is-invalid");
  }
}

function validateEmail() {
  const phone = document.getElementById("phone");
  const re = /^\(?\.?\d{3}\)?[,. ]?\(?\.?\d{4}\)?$/;
  if (!re.test(phone.value)) {
    phone.classList.add("is-invalid");
    console.log(phone.value);
  } else {
    phone.classList.remove("is-invalid");
  }
}

function validatePhone() {}
