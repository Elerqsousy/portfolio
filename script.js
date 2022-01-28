// menu popup

const menu1 = document.querySelectorAll(".nav-btn");
const menu2 = document.querySelector(".close-drawer-btn");
const navBars = document.querySelector(".open-nav");

function disappear() {
  const menuDis1 = document.querySelector(".navbar");
  menuDis1.classList.toggle("disappear");
  const menuDis2 = document.querySelector(".open-nav");
  menuDis2.classList.toggle("disappear");
  menuDis2.classList.toggle("menu-drawer-height");
}

function closeOnAtag(e) {
  const anchor = e.target.closest("a");
  if (anchor == null) {
    disappear();
  }
}
menu1.addEventListener("click", disappear);
menu2.addEventListener("click", disappear);
navBars.addEventListener("click", closeOnAtag, false);

// client side data saving

// const userName = document.getElementById("name");
// const email = document.getElementById("mail");
// const textArea = document.getElementById("msg");
// const form = document.getElementById("contact_form");

// function saveData() {
//   let updatedData = [
//     { name: document.getElementById("name").value },
//     { mail: document.getElementById("mail").value },
//     { text: document.getElementById("msg").value },
//   ];
//   const stringData = JSON.stringify(updatedData);
//   localStorage.setItem("data", stringData);
// }

// function retrieveData() {
//   const dataRetrieved = localStorage.getItem("data");
//   const dataParced = JSON.parse(dataRetrieved);
//   document.getElementById("name").value = dataParced[0].name;
//   document.getElementById("mail").value = dataParced[1].mail;
//   document.getElementById("msg").value = dataParced[2].text;
// }

// if (!localStorage.getItem("data")) {
//   saveData();
// } else {
//   retrieveData();
// }

// form.onchange = saveData;

// dinamiclly load projects section

const section2 = [
  [
    "images/image_dots-smaller.svg",
    "images/image-geometry_2.svg",
    "images/Group1.svg",
    "images/Group2.svg",
    "images/image-geometry_5.svg",
    "images/image-geometry_4.svg",
  ],
  { h2: "Projects" },
  {
    articles: [
      {
        img: "images/Rectangle21.png",
        div: {
          h3: "Project name goes here",
          ul: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
          button: "See this project &#160;",
        },
      },
      {
        img: "images/Rectangle21(1).png",
        div: {
          h3: "Project name goes here",
          ul: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
          button: "See this project &#160;",
        },
      },
      {
        img: "images/Rectangle21(2).png",
        div: {
          h3: "Project name goes here",
          ul: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
          button: "See this project &#160;",
        },
      },
      {
        img: "images/Rectangle21(3).png",
        div: {
          h3: "Project name goes here",
          ul: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
          button: "See this project &#160;",
        },
      },
      {
        img: "images/Rectangle21(4).png",
        div: {
          h3: "Project name goes here",
          ul: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
          button: "See this project &#160;",
        },
      },
      {
        img: "images/Rectangle21(5).png",
        div: {
          h3: "Project name goes here",
          ul: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
          button: "See this project &#160;",
        },
      },
    ],
  },
];

const projectSection = document.getElementById("projects");
function projectCreation() {
  // add bg images
  for (i = 0; i < section2[0].length; i++) {
    const bgImage = document.createElement("img");
    bgImage.src = section2[0][i];
    bgImage.classList.add("wi", `wi${i + 1}`);
    bgImage.alt = "#";
    projectSection.appendChild(bgImage);
  }
  // add title
  const title = document.createElement("h2");
  title.appendChild(document.createTextNode(section2[1].h2));
  title.classList.add("heading" ,"heading-works")
  projectSection.appendChild(title);

  // add articles
  for (i = 0; i< section2[2].articles.length; i++) {
    const article = document.createElement('article');
    article.classList.add('dark-bg', `project${i+1}`);
    // adding article image
    const articleImg = document.createElement('img');
    articleImg.src = section2[2].articles[i].img;
    // articleImg.classList.add("wi", `wi${i+1}`);
    articleImg.alt = `project ${i+1} preview image`;
    article.appendChild(articleImg);

    // appending articl into section
    projectSection.appendChild(article);
  }
}

projectCreation();
