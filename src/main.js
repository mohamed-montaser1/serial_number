import "./main.css";
const generateBtn = document.querySelector(".generate");
const serialNumber = document.querySelectorAll(".serial-number span");

generateBtn.onclick = function () {
  let serial_letters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let serial = "";
  for (let i = 0; i < serialNumber.length; i++) {
    for (let i = 0; i < 5; i++) {
      serial +=
        serial_letters[Math.floor(Math.random() * serial_letters.length)];
    }
    if (i == 3) {
      serialNumber[i].textContent = `${serial}`;
      serial = "";
    } else {
      serialNumber[i].textContent = `${serial}-`;
      serial = "";
    }
  }
};
