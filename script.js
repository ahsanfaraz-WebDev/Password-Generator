//random password generatror code
//function to generate password
function generate() {
  const passwordBox = document.querySelector("#Password");
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()_+";
  const passwordLength = 13;
  let password = "";
  let characterSet = upperCase + lowerCase + numbers + specialCharacters;
  //

  for (let i = 0; i < passwordLength; i++) {
    let characterIndex = Math.floor(Math.random() * characterSet.length);
    password = password + characterSet.charAt(characterIndex);
  }
  passwordBox.value = password;
}

function copyPassword() {
  const passwordBox = document.querySelector("#Password");
  navigator.clipboard
    .writeText(passwordBox.value)
    .then(() => {
      alert("Password copied to clipboard");
    })
    .catch((error) => {
      console.error("Error copying password:", error);
    });
}
