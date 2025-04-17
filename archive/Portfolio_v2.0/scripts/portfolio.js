window.onscroll = function() {
const header = document.querySelector('.navbar');
var top = window.scrollY;
if (top >= 340) {
header.classList.add('navbarDark');
} else {
header.classList.remove('navbarDark');
}
};

window.onload = function() {
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const typingText = document.getElementById("typingText");
const cursor1 = document.getElementById("cursor1");
const heroDesc = document.querySelector('.hero_desc');
const typingText2 = document.getElementById("typingText2");
const cursor2 = document.getElementById("cursor2");

cursor1.style.visibility = "hidden";
cursor2.style.visibility = "hidden";

let i = 0;
cursor1.style.left = typingText.offsetWidth + 'px';

const type = () => {
if (i < "Johnathan Uptegraph".length) {
cursor1.style.visibility = "visible";
typingText.innerHTML += "Johnathan Uptegraph".charAt(i);
cursor1.style.left = typingText.offsetWidth + 'px';
i++;
setTimeout(type, 100);
} else {
cursor1.style.visibility = "hidden";
cursor2.style.visibility = "visible";
let j = 0;
const typeHeroDesc = () => {
if (j < " Robotics | Computer Science | Emerging Tech".length) {
typingText2.innerHTML += " Robotics | Computer Science | Emerging Tech".charAt(j);
if (j === " Robotics | Computer Science | Emerging Tech".length - 5) {
cursor2.style.left = typingText2.offsetWidth + 'px';
}
j++;
setTimeout(typeHeroDesc, 100);
} else {
const blinkCursor2 = setInterval(() => {
cursor2.style.visibility = cursor2.style.visibility === "hidden" ? "visible" : "hidden";
}, 600);
}
};
typeHeroDesc();
}
};

type();
};
window.onscroll = function() {
const header = document.querySelector('.navbar');
var top = window.scrollY;
if (top >= 340) {
header.classList.add('navbarDark');
} else {
header.classList.remove('navbarDark');
}
};

window.onload = function() {
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const typingText = document.getElementById("typingText");
const cursor1 = document.getElementById("cursor1");
const heroDesc = document.querySelector('.hero_desc');
const typingText2 = document.getElementById("typingText2");
const cursor2 = document.getElementById("cursor2");

cursor1.style.visibility = "hidden";
cursor2.style.visibility = "hidden";

let i = 0;
cursor1.style.left = typingText.offsetWidth + 'px';

const type = () => {
if (i < "Johnathan Uptegraph".length) {
cursor1.style.visibility = "visible";
typingText.innerHTML += "Johnathan Uptegraph".charAt(i);
cursor1.style.left = typingText.offsetWidth + 'px';
i++;
setTimeout(type, 100);
} else {
cursor1.style.visibility = "hidden";
cursor2.style.visibility = "visible";
let j = 0;
const typeHeroDesc = () => {
if (j < " Robotics | Computer Science | Emerging Tech".length) {
typingText2.innerHTML += " Robotics | Computer Science | Emerging Tech".charAt(j);
if (j === " Robotics | Computer Science | Emerging Tech".length - 5) {
cursor2.style.left = typingText2.offsetWidth + 'px';
}
j++;
setTimeout(typeHeroDesc, 100);
} else {
const blinkCursor2 = setInterval(() => {
cursor2.style.visibility = cursor2.style.visibility === "hidden" ? "visible" : "hidden";
}, 600);
}
};
typeHeroDesc();
}
};

type();
};

var modalInfo = {
1: {
title: "3D Printing Prototype",
info: "Prototyping of a dysphagia cup using 3D printing technology.",
link: "#",
github: "#",
skills: ["3D Printing", "Prototyping"]
},
2: {
title: "Artificial Assistant Robotics",
info: "Design and development of an artificial assistant for the Miami Art Gallery using robotics technology.",
link: "#",
github: "#",
skills: ["Robotics", "Artificial Intelligence"]
},
3: {
title: "Java Shortest Path Algorithm",
info: "Implementation of Dijkstra's algorithm in Java for finding the shortest path.",
link: "#",
github: "#",
skills: ["Java", "Algorithm Development", "Software Development"]
},
4: {
title: "Swift Mobile App for 3D Printing",
info: "A Swift-based mobile application for remote control of 3D printers using the OctoPrint API.",
link: "#",
github: "#",
skills: ["Swift", "API Development", "3D Printing", "Mobile App Development"]
},
5: {
title: "PHP and SQL Server 3D Printing Website",
info: "A website developed using PHP and SQL Server for submitting 3D printing jobs.",
link: "#",
github: "#",
skills: ["PHP", "SQL Server", "Web Development", "3D Printing"]
},
6: {
title: "Avatar Flight of Passage Experience Design",
info: "Design of the Avatar Flight of Passage experience.",
link: "#",
github: "#",
skills: ["Entertainment Design"]
},
7: {
title: "3D Modeling and Animation of Spider-Man",
info: "3D modeling and animation of Marvel's Spider-Man using Maya software.",
link: "#",
github: "#",
skills: ["Maya", "3D Modeling and Animation"]
},
8: {
title: "3D Animation of Disney's Mandalorian",
info: "3D animation of Disney's Mandalorian Helmet and Baby Grogu using Maya software.",
link: "#",
github: "#",
skills: ["Maya", "3D Modeling and Animation"]
},
9: {
title: "3D Modeling of Disney's Mandalorian Razor Crest",
info: "3D modeling of Disney's Mandalorian Razor Crest using Maya software.",
link: "#",
github: "#",
skills: ["Maya", "3D Modeling and Animation"]
},
10: {
title: "Javascript Calculator Application",
info: "A Javascript application that performs basic arithmetic operations.",
link: "#",
github: "#",
skills: ["Javascript", "Web Development"]
},
11: {
title: "Accessible Web Design",
info: "Redesign of a computer-repair company website to improve accessibility for users with Cerebral Palsy.",
link: "#",
github: "#",
skills: ["Web Development"],
},
12: {
title: "UX/UI Design Comparison: iOS vs Android",
info: "A comparative study of the UX/UI design principles applied in iOS and Android operating systems.",
link: "#",
github: "#",
skills: ["UX/UI Design"]
},
13: {
title: "UX/UI Research: Special Olympics Website",
info: "An investigation into the user experience and user interface design of the Special Olympics website.",
link: "#",
github: "#",
skills: ["UX/UI Research"]
},
14: {
title: "UX/UI Research: Graeter's Ice Cream Website",
info: "An analysis of the user experience and user interface design of the Graeter's Ice Cream website.",
link: "#",
github: "#",
skills: ["UX/UI Research"]
},
15: {
title: "Game Development: 'Pith' Demo with Unreal Engine 4",
info: "A demonstration of the 'Pith' game developed using the Unreal Engine 4 game engine.",
link: "#",
github: "#",
skills: ["Game Development", "Unreal Engine 4"]
},
16: {
title: "Game Development: AI in 'Oberon Overrun' with Unity",
info: "A showcase of the enemy AI implementation in the 'Oberon Overrun' game developed using the Unity game engine.",
link: "#",
github: "#",
skills: ["Game Development", "Unity"]
},
17: {
title: "Game Development: 'Jedi Training Simulator' with Unity",
info: "A demo of the 'Jedi Training Simulator' game developed using the Unity game engine.",
link: "#",
github: "#",
skills: ["Game Development", "Unity"]
}
}

// Get the modal
var modal = document.getElementById("preview");

// button that opens the modal
var btn = document.getElementsByClassName("button");

// <span> that closes the modal
var span = document.getElementsByClassName("close")[0];

// open modal
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    var project = btn[i].parentElement;
    openModal(project);
  });
}

function openModal(project) {
  var id = project.id;
  var img = project.getElementsByTagName("img")[0].src;
  fillOut(id, img);
  modal.style.display = "block";
  document.getElementsByClassName("modal-content")[0].classList.add("scale");
}

function fillOut(id, img) {
  document.getElementById("title").innerHTML = modalInfo[id].title;
  document.getElementById("info").innerHTML = modalInfo[id].info;
  document.getElementById("img").src = img;
  document.getElementById("skills").innerHTML = "Skill: " + modalInfo[id].skills + " ";
  document.getElementById("live").onclick = function () {
    window.open(modalInfo[id].link, "_blank");
  };
  document.getElementById("github").onclick = function () {
    window.open(modalInfo[id].github, "_blank");
  };
}

// close the modal
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
