let personalsequence = "";
let attemptsequence = "";
let state = 0; // 0 = locked mode, 1 = setting passcode

const unlockButton = document.getElementById("unlock");
const lockButton = document.getElementById("lock");
const clearButton = document.getElementById("clear");
const imgInput = document.getElementById("imgInput");
const imgDisplay = document.getElementById("img");

lockButton.onclick = () => {
  if (!imgInput.value) {
    alert("⚠Please enter an image URL before locking!");
    return;
  }

  imgDisplay.src = imgInput.value;
  personalsequence = "";
  attemptsequence = "";
  state = 1; // now setting password
  alert("Lock mode actived. Set your passcode using the keypad.");
};

unlockButton.onclick = () => {
  if (personalsequence === "" || attemptsequence === "") {
    alert("No passcode set or no attempt made.");
    return;
  }

  if (personalsequence === attemptsequence) {
    alert("Image unlocked!");
    attemptsequence = "";
  } else {
    alert("Wrong passcode. Try again.");
    attemptsequence = "";
  }
};

clearButton.onclick = () => {
  if (state === 1) {
    personalsequence = "";
    alert("Passcode cleared.");
  } else {
    attemptsequence = "";
    alert("Attempt reset.");
  }
};

function pressDigit(digit) {
  if (state === 1) {
    personalsequence += digit;
  } else {
    attemptsequence += digit;
  }
}

for (let i = 0; i <= 9; i++) {
  document.getElementById("b" + i).onclick = function () {
    pressDigit(i.toString());
  };
}
