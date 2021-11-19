/* Create a password checker web app. If password is lesser than 10 characters then show an error to user otherwise show success. Someone can ask to make the submit button disabled. Some can ask to make the input field green or red depending on input. */
const input = document.querySelector(".inputText");
const btnCheck = document.querySelector(".check");
const output = document.querySelector(".output");

const check = () => {
  const pass = input.value.split("");
  const ch = input.value;
  if (ch !== "") {
    if (pass.length < 10) {
      input.style.backgroundColor = "red";
      input.style.color = "white";
      output.innerText = `Password in less than 10 characters 🙁,\nplease add ${
        10 - pass.length
      } more character`;
    } else {
      input.style.backgroundColor = "green";
      input.style.color = "white";
      output.innerText = "Good Password 🤩";
    }
  } else {
    output.innerText = "Enter some input! 😒";
  }
};

btnCheck.addEventListener("click", check);
