const numbersList = document.getElementById("numbers-list");
const newNumberInput = document.getElementById("new-number");
const addButton = document.getElementById("add-button");

let numbers = [];

// Load numbers from local storage
if (localStorage.getItem("numbers")) {
  numbers = JSON.parse(localStorage.getItem("numbers"));
}

addButton.addEventListener("click", addNumber);

function addNumber() {
  const newNumber = newNumberInput.value.trim();
  if (newNumber) {
    // Check if the number already exists in the list
    if (!numbers.find((item) => item.number === newNumber)) {
      numbers.push({ number: newNumber, clicked: false });
      newNumberInput.value = "";
      renderNumbers();
      // Save numbers to local storage
      localStorage.setItem("numbers", JSON.stringify(numbers));
    } else {
      alert("Number already exists in the list!");
    }
  }
}

numbersList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    const number = event.target.textContent;
    const index = numbers.findIndex((item) => item.number === number);
    if (index !== -1) {
      numbers[index].clicked = true;
      event.target.classList.add("clicked");
      openWhatsAppChat(number);
      // Save numbers to local storage
      localStorage.setItem("numbers", JSON.stringify(numbers));
    }
  }
});

function openWhatsAppChat(number) {
  const whatsappUrl = `whatsapp://send?phone=92${number}&text=Sorry!%0AContacted+from+**GC+Group**.%0A%0AAre+you+interested+in+online+earning%3F%0A%0AWith+**ZERO+INVESTMENT**+%E2%9D%8C%0AAdd+your+profit+on+wholesale+products+and+start+earning.%0A%0AType+**YES**+if+you+are+interested.%0A%0A**جزاک+اللہ**`;

  // Check if WhatsApp Business app is installed on mobile
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    window.location.href = whatsappUrl;
  } else {
    // Open WhatsApp Web on laptop
    window.open(whatsappUrl, "_blank");
  }
}

function renderNumbers() {
  numbersList.innerHTML = "";
  numbers.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item.number;
    listItem.style.marginBottom = "10px"; // Add margin between numbers
    if (item.clicked) {
      listItem.classList.add("clicked");
    }
    numbersList.appendChild(listItem);
  });
}

// Add the numbers to the list
numbers.push({ number: "0343 0109923", clicked: false });
numbers.push({ number: "0343 9471766", clicked: false });
numbers.push({ number: "0347 0742055", clicked: false });
numbers.push({ number: "0347 5650784", clicked: false });
numbers.push({ number: "0348 5579420", clicked: false });
numbers.push({ number: "0348 7158973", clicked: false });
numbers.push({ number: "0348 8778615", clicked: false });
numbers.push({ number: "0370 4064098", clicked: false });
numbers.push({ number: "0370 4142611", clicked: false });
numbers.push({ number: "0341 1740399", clicked: false });
numbers.push({ number: "0341 1766085", clicked: false });
numbers.push({ number: "0341 4035506", clicked: false });
numbers.push({ number: "0341 5124424", clicked: false });
numbers.push({ number: "0341 5396911", clicked: false });
numbers.push({ number: "0341 8096912", clicked: false });
numbers.push({ number: "0342 4233292", clicked: false });
numbers.push({ number: "0342 4249680", clicked: false });
numbers.push({ number: "0342 5590295", clicked: false });
numbers.push({ number: "0342 7467603", clicked: false });
numbers.push({ number: "0343 0051279", clicked: false });
numbers.push({ number: "0335 5241714", clicked: false });
numbers.push({ number: "0335 7950100", clicked: false });
numbers.push({ number: "0336 1239708", clicked: false });
numbers.push({ number: "0336 4692903", clicked: false });
numbers.push({ number: "0336 5565510", clicked: false });
numbers.push({ number: "0340 4996594", clicked: false });
numbers.push({ number: "0340 7312162", clicked: false });
numbers.push({ number: "0340 7824601", clicked: false });
numbers.push({ number: "0340 8484864", clicked: false });
numbers.push({ number: "0340 8810294", clicked: false });
numbers.push({ number: "0330 3159555", clicked: false });
numbers.push({ number: "0330 4075759", clicked: false });
numbers.push({ number: "0331 1445440", clicked: false });
numbers.push({ number: "0331 4227432", clicked: false });
numbers.push({ number: "0332 4024306", clicked: false });
numbers.push({ number: "0332 5730467", clicked: false });
numbers.push({ number: "0333 4310565", clicked: false });
numbers.push({ number: "0333 8451835", clicked: false });
numbers.push({ number: "0334 1444025", clicked: false });
numbers.push({ number: "0334 6935033", clicked: false });
numbers.push({ number: "0334 7748113", clicked: false });
numbers.push({ number: "0328 7345834", clicked: false });
numbers.push({ number: "0328 7468049", clicked: false });
numbers.push({ number: "0328 8003324", clicked: false });
numbers.push({ number: "0328 8021334", clicked: false });
numbers.push({ number: "0328 8025835", clicked: false });
numbers.push({ number: "0328 8054180", clicked: false });
numbers.push({ number: "0328 8105126", clicked: false });
numbers.push({ number: "0328 8630589", clicked: false });
numbers.push({ number: "0328 9412646", clicked: false });
numbers.push({ number: "0329 4734399", clicked: false });
numbers.push({ number: "0327 9736608", clicked: false });
numbers.push({ number: "0328 4239280", clicked: false });
numbers.push({ number: "0328 4336869", clicked: false });
numbers.push({ number: "0328 4547591", clicked: false });
numbers.push({ number: "0328 5862568", clicked: false });
numbers.push({ number: "0328 5862868", clicked: false });
numbers.push({ number: "0328 6423811", clicked: false });
numbers.push({ number: "0328 6567696", clicked: false });
numbers.push({ number: "0328 6630936", clicked: false });
numbers.push({ number: "0328 6824193", clicked: false });
numbers.push({ number: "0327 1647371", clicked: false });
numbers.push({ number: "0327 4106127", clicked: false });
numbers.push({ number: "0327 4974812", clicked: false });
numbers.push({ number: "0327 4993779", clicked: false });
numbers.push({ number: "0327 5860098", clicked: false });
numbers.push({ number: "0327 6870067", clicked: false });
numbers.push({ number: "0327 7176550", clicked: false });
numbers.push({ number: "0327 8532092", clicked: false });
numbers.push({ number: "0327 8715789", clicked: false });
numbers.push({ number: "0327 8857991", clicked: false });
numbers.push({ number: "0324 5621784", clicked: false });
numbers.push({ number: "0325 2548189", clicked: false });
numbers.push({ number: "0325 4095352", clicked: false });
numbers.push({ number: "0325 4164734", clicked: false });
numbers.push({ number: "0325 4708701", clicked: false });
numbers.push({ number: "0325 6008929", clicked: false });
numbers.push({ number: "0325 6593765", clicked: false });
numbers.push({ number: "0325 8869978", clicked: false });
numbers.push({ number: "0326 0130972", clicked: false });
numbers.push({ number: "0326 1510733", clicked: false });
numbers.push({ number: "0326 1662136", clicked: false });
numbers.push({ number: "0323 6315436", clicked: false });
numbers.push({ number: "0323 7232560", clicked: false });
numbers.push({ number: "0323 8934548", clicked: false });
numbers.push({ number: "0324 0151378", clicked: false });
numbers.push({ number: "0324 2274934", clicked: false });
numbers.push({ number: "0324 5173384", clicked: false });
numbers.push({ number: "0324 5608033", clicked: false });
numbers.push({ number: "0324 5621784", clicked: false });
numbers.push({ number: "0325 2548189", clicked: false });
numbers.push({ number: "0321 7060663", clicked: false });
numbers.push({ number: "0321 8853157", clicked: false });
numbers.push({ number: "0322 1194703", clicked: false });
numbers.push({ number: "0322 3787368", clicked: false });
numbers.push({ number: "0322 5502930", clicked: false });
numbers.push({ number: "0322 7360265", clicked: false });
numbers.push({ number: "0322 7818963", clicked: false });
numbers.push({ number: "0322 8048367", clicked: false });
numbers.push({ number: "0323 0511611", clicked: false });
numbers.push({ number: "0323 3798759", clicked: false });
numbers.push({ number: "0319 4625816", clicked: false });
numbers.push({ number: "0319 7446949", clicked: false });
numbers.push({ number: "0319 8064944", clicked: false });
numbers.push({ number: "0320 6452690", clicked: false });
numbers.push({ number: "0320 6867022", clicked: false });
numbers.push({ number: "0320 7186814", clicked: false });
numbers.push({ number: "0320 7277595", clicked: false });
numbers.push({ number: "0320 7499711", clicked: false });
numbers.push({ number: "0321 2462140", clicked: false });
numbers.push({ number: "0321 6584251", clicked: false });
numbers.push({ number: "0321 6655881", clicked: false });

renderNumbers();
