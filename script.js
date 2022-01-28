// menu popup

const menu1 = document.querySelector('.nav-btn');
const menu2 = document.querySelector('.close-drawer-btn');
const navBars = document.querySelector('.open-nav');

function disappear() {
  const menuDis1 = document.querySelector('.navbar');
  menuDis1.classList.toggle('disappear');
  const menuDis2 = document.querySelector('.open-nav');
  menuDis2.classList.toggle('disappear');
  menuDis2.classList.toggle('menu-drawer-height');
}

function closeOnAtag(e) {
  const anchor = e.target.closest('a');
  if (anchor !== null) {
    disappear();
  }
}
menu1.addEventListener('click', disappear);
menu2.addEventListener('click', disappear);
navBars.addEventListener('click', closeOnAtag, false);

// client side data saving

const userName = document.getElementById("name");
const email = document.getElementById("mail");
const textArea = document.getElementById("msg");
const form = document.getElementById("contact_form");

function saveData() {
  let updatedData = [
    { name: document.getElementById("name").value },
    { mail: document.getElementById("mail").value },
    { text: document.getElementById("msg").value },
  ];
  const stringData = JSON.stringify(updatedData);
  localStorage.setItem("data", stringData);
}

function retrieveData() {
  const dataRetrieved = localStorage.getItem("data");
  const dataParced = JSON.parse(dataRetrieved);
  document.getElementById("name").value = dataParced[0].name;
  document.getElementById("mail").value = dataParced[1].mail;
  document.getElementById("msg").value = dataParced[2].text;
}

if (!localStorage.getItem("data")) {
  saveData();
} else {
  retrieveData();
}

form.onchange = saveData;