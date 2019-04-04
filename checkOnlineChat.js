var checkIfOnline = setInterval(() => {
  const button = document.querySelector("#gwc-chatAvailable");
  const isOnline = button.getAttribute("style") ? false : true;
  if (isOnline) {
    const newInstanceOfButton = document.querySelector("#gwc-chatAvailable");
    newInstanceOfButton.click();
    clearInterval(checkIfOnline);
    console.error("live chat on!");
  }
  console.log("testing live chat");
}, 1000);