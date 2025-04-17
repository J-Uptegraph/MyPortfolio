window.onscroll = function () {
  const header = document.querySelector(".navbar");
  var top = window.scrollY;
  if (top >= 340) {
    header.classList.add("navbarDark");
  } else {
    header.classList.remove("navbarDark");
  }
};

window.onload = function () {
  const navLinks = document.querySelectorAll(".nav-item");
  const menuToggle = document.getElementById("navbarSupportedContent");
  const typingText = document.getElementById("typingText");
  const cursor1 = document.getElementById("cursor1");
  const heroDesc = document.querySelector(".hero_desc");
  const typingText2 = document.getElementById("typingText2");
  const cursor2 = document.getElementById("cursor2");

  cursor1.style.visibility = "hidden";
  cursor2.style.visibility = "hidden";

  let i = 0;
  cursor1.style.left = typingText.offsetWidth + "px";

  const type = () => {
    if (i < "Johnathan Uptegraph".length) {
      cursor1.style.visibility = "visible";
      typingText.innerHTML += "Johnathan Uptegraph".charAt(i);
      cursor1.style.left = typingText.offsetWidth + "px";
      i++;
      setTimeout(type, 100);
    } else {
      cursor1.style.visibility = "hidden";
      cursor2.style.visibility = "visible";
      let j = 0;
      const typeHeroDesc = () => {
        if (j < " Robotics | Computer Science | Emerging Tech".length) {
          typingText2.innerHTML += " Robotics | Computer Science | Emerging Tech".charAt(
            j
          );
          if (j === " Robotics | Computer Science | Emerging Tech".length - 5) {
            cursor2.style.left = typingText2.offsetWidth + "px";
          }
          j++;
          setTimeout(typeHeroDesc, 100);
        } else {
          const blinkCursor2 = setInterval(() => {
            cursor2.style.visibility =
              cursor2.style.visibility === "hidden" ? "visible" : "hidden";
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
    title: "Cerebral Palsy Cup Prototype",
    info:
      "This independent research project I participated in a cup project aimed at improving the lives of patients with Spastic Dysphagia and other forms of Cerebral Palsy through the development of hardware for safe eating and drinking. I was responsible for development, programming, soldering, and troubleshooting. The successful prototype I created supported the research efforts of graduate students in the field.",
    link: "#",
    github: "https://github.com/J-Uptegraph/SDSmartCup",
    skills: ["3D Printing", "Prototyping"],
    imgSource: "https://juportfolio.com/media/img/SD_Prototype.webp"
  },
  2: {
    title: "Art Gallery Artificial Assistant",
    info:
      "I was part of a team that worked on the development of an AI-powered assistant for a Miami art gallery. The assistant was designed to help visitors navigate the gallery and provide information about the exhibitions, artists, and artworks. I was involved in the design, development, and implementation of the AI algorithms, including natural language processing and computer vision.",
    link: "https://juportfolio.com/media/papers/MME375%20Final%20Report.pdf",
    github: "#",
    skills: [
      "Artificial Intelligence","Natural Language Processing","Computer Vision"],
    imgSource: "https://juportfolio.com/media/img/pepper.webp"
  },
  3: {
    title: "GPS with Dijkstra's Algorithm",
    info:
      "I built a simulated Java-powered GPS that utilized Dijkstra's algorithm for efficient navigation. Avoiding traffic, taking the shortest route and avoiding stoplights. I was responsible for coding and implementing the Dijkstra's algorithm, as well as integrating it with the GPS system. The end result was a comprehensive navigation system that provided accurate and efficient directions to users.",
    link: "#",
    github: "#",
    skills: ["Algorithms", "Java", "GPS Navigation"],
    imgSource: "https://juportfolio.com/media/img/DijkstraGPS.webp"
  },
  4: {
    title: "Forms That Accept STL & GCode Submissions",
    info:
      "This project is by far one of my oldest. It may not look great, but the PHP submissions allowed me to create a 3D print requests that could be used to store data in a SQL Server. I was responsible for the design and implementation of the forms, as well as the integration with the SQL Server. The end result was a user-friendly forms site that made it easy for users to submit and store data.",
    link: "https://juportfolio.com/PrintManager/RequestPrint.php",
    github:
      "https://github.com/J-Uptegraph/Web-Interaction-Design-and-Dev/tree/main/MyInterest",
    skills: ["HTML", "CSS", "Javascript", "PHP", "SQL", "Web Development"],
    imgSource: "https://juportfolio.com/media/img/print_request.webp"
  },
  5: {
    title: "OctoPrint Mobile App with Swift and XCode",
    info:
      "I developed an OctoPrint mobile app that could be used to control 3D printers from a mobile device through the OctoPrint API. I was responsible for the design, development, and implementation of the app using Swift and XCode; as well as the backend connections built with jQuery. The end result was a revolutionizing app that made it easy for users to control their 3D printers from anywhere.",
    link: "#",
    github: "#",
    skills: ["Mobile App Development", "Storyboard", "Swift", "SwiftUI","XCode"],
    imgSource: "https://juportfolio.com/media/img/Octoprint2.webp"
  },
  6: {
    title: "Custom Javascript Calculator",
    info:
      "I developed a Javascript calculator that was both functional and intuitive. I was responsible for the design and implementation of the calculator, as well as ensuring that it was easy for users to use. The end result was a calculator that made mathematical calculations quick and effortless.",
    link: "https://juportfolio.com/Calculator%20App/UptegrjwCalculatorApp.html",
    github:
      "https://github.com/J-Uptegraph/Advanced-Web-App-Development/tree/main/Calculator%20App",
    skills: ["Javascript", "Web Development", "UI/UX Design"],
    imgSource: "https://juportfolio.com/media/img/calc.webp"
  },
  7: {
    title: "10 Mile Solutions: Accessible Website Re-Design",
    info:
      "For this project I re-designed the website for a computer repair shop to make it more accessible to a variety of user personas. I was responsible for conducting user research, as well as implementing design changes that improved the accessibility and overall user experience of the website. The end result was a website that provided an excellent user experience for people with disabilities.",
    link: "",
    github: "https://codepen.io/JU2tegraph/pen/VwPONaB",
    skills: ["User Research", "UI/UX Design", "Web Accessibility"],
    imgSource: "https://juportfolio.com/media/img/10MileSolutions.webp"
  },
  8: {
    title: "UX/UI Research for Graeter's Ice Cream",
    info:
      "In this project, I was responsible for the gamification, design, and testing the prototype to ensure its usability through the use of Figma. The end result was a more user-friendly and effective loyalty program that helped Graeter's increase customer engagement and satisfaction. Feel free to try out my <b>interactive</b> mock-up.",
    link:
      "https://www.figma.com/proto/qusSs9wCAESBtzVLBEdgxe/UI-Gamification-Mock-Up-Drafts-(Copy)?node-id=2%3A1142&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A1017",
    github:
      "https://www.canva.com/design/DAE_quKAskQ/YcoRLggkCAEKmriM8SOaBA/view?utm_content=DAE_quKAskQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    skills: ["Canva", "Figma", "Prototyping", "UX/UI Research"],
    imgSource: "https://juportfolio.com/media/img/Graeter's.webp"
  },
  9: {
    title: "UX/UI Research for Special Olympics Website",
    info:
      "In this project, I conducted UX/UI research for a non-profit organization to redesign their website for the Special Olympics. My responsibilities included conducting user interviews, creating personas, and designing the website to be more accessible and user-friendly. The end result was a website that better supported the mission of the Special Olympics and provided a better experience for users.",
    link: "#",
    github: "#",
    skills: ["UX/UI Research", "Web Design", "Persona Creation"],
    imgSource: "https://juportfolio.com/media/img/SpecialOlympics.webp"
  },
  10: {
    title: "Pith: First Person Boss Rush Game UE4",
    info:
      "In this project, my team and I began to flesh out a first person boss rush game using Unreal Engine 4. My responsibilities included creating game concepts, designing levels and characters, and implementing game mechanics. The end result was a fun and challenging game that provided players with a unique gaming experience.",
    link:
      "https://www.canva.com/design/DAFAZzbocp4/y2URPZ-rceCS26A-aIzC5Q/view?utm_content=DAFAZzbocp4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    github: "#",
    skills: ["Game Design", "Unreal Engine 4", "3D Modeling"],
    imgSource: "https://juportfolio.com/media/img/pith.webp"
  },
  11: {
    title: 'NDD and Text Adventure Game Concept "Rapture"',
    info:
      "In this project, I crafted a 50-60 page narrative design for a cyberpunk-western game called Rapture. This concept is entirely original, therefore my role included creating a story and world-building, designing characters, and writing dialogue. The end result was a compelling and immersive game world that provided players with a unique story-telling experience.",
    link:
      "https://www.canva.com/design/DAE3n5XvLO0/PpEQcUxY-odddKCPI1wuTg/view?utm_content=DAE3n5XvLO0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    github: "#",
    skills: ["Narrative Design", "World-Building", "Character Design"],
    imgSource: "https://juportfolio.com/media/img/Rapture.webp"
  },
  12: {
    title: "Train Like a Jedi: 3D Unity Simulator",
    info:
      "In this project, I developed a first-person Star Wars game using Unity Game Engine. My responsibilities included designing and coding the simulator, testing and debugging it, and ensuring that it was user-friendly and accessible. The end result was a simulator that helped Padawans-in-Training improve their skills and knowledge in the Jedi arts, and can be pretty fun too.",
    link: "#",
    github: "#",
    skills: ["Development", "Programming", "User Interface Design"],
    imgSource: "https://juportfolio.com/media/img/jediTrainingUnity.webp"
  },
  13: {
    title: "Spider-Man 3D Model in Maya",
    info:
      "This project involved modeling the iconic Marvel character, Spider-Man, in 3D using Autodesk Maya. The goal was to create a highly detailed and accurate representation of the character. The final model was used for various staged-shots in several projects, bringing the character to life in a dynamic and convincing manner. This project showcased my ability to work with 3D modeling software and create assets for animation and visual effects.",
    link: "#",
    github: "#",
    skills: ["3D Modeling", "Character Design", "Asset Creation","Animation and Visual Effects"],
    imgSource: "https://juportfolio.com/media/img/Spider-Man_Model.webp"
  },
  14: {
    title:
      "Animating Disney's Baby Grogu from Disney's \"The Mandalorian\" with Maya",
    info:
      "This project was a challenge to bring the beloved Baby Yoda to life with 3D animation. Using Autodesk Maya, I was able to create a photorealistic animation of the Mandalorian helmet and Baby Grogu, which was used in the Disney+ series, The Mandalorian. I was responsible for rigging, animating, and rendering the asset which added realism to the project.",
    link:
      "https://juportfolio.com/media/videos/Uptegrjw_Final_Render_Mandalorian2.mp4",
    github: "#",
    skills: ["3D Modeling", "3D Animating", "3D Rendering"],
    imgSource: "https://juportfolio.com/media/img/babyYodaAnimation.webp"
  },
  15: {
    title:
      "3D Model of the Razorcrest Ship from Disney's Mandalorian with Maya",
    info:
      "This project was a challenge to recreate one of the most iconic ships from the Star Wars universe: The Razor Crest. Using Autodesk Maya, I was able to create a highly detailed 3D model of the ship, which was used in the Disney+ series, The Mandalorian. I was responsible for the detailed texturing, and lighting of the asset which added realism to the project.",
    link: "#",
    github: "#",
    skills: ["3D Modeling", "Texturing", "Lighting"],
    imgSource: "https://juportfolio.com/media/img/RazorcrestLandscape.webp"
  },
  16: {
    title: "Entertainment Design for Avatar Flight of Passage",
    info:
      "I worked on prototyping the entertainment experience for Avatar Flight of Passage at Animal Kingdom's Pandora. Collaborated with Disney Imagineers to research and gather insights, then built a successful prototype conveying the story and theme, used as a design template.",
    link: "#",
    github: "#",
    skills: ["Research", "Design", "Prototyping", "Collaboration"],
    imgSource: "https://juportfolio.com/media/img/avatar.webp"
  },
  17: {
    title: "Cybersecurity Grand Challenge",
    info:
      "This project was a challenge to raise awareness of the importance of cybersecurity in the modern world. I created a comprehensive guide to digital safety, which covers topics such as password security, online privacy, data encryption, and more. This article explores the importance of cybersecurity in the digital age and provides useful tips to stay safe online.",
    link: "#",
    github: "#",
    skills: ["Research", "Design", "Prototyping", "Collaboration"],
    imgSource: "https://juportfolio.com/media/img/grandchallenge.webp"
  },
  18: {
    title: "Data-Driven Marketing Micro-Center",
    info:
      "This project was a challenge to raise awareness of the importance of cybersecurity in the modern world. I created a comprehensive guide to digital safety, which covers topics such as password security, online privacy, data encryption, and more. This article explores the importance of cybersecurity in the digital age and provides useful tips to stay safe online.",
    link: "#",
    github: "#",
    skills: ["Research", "Design", "Prototyping", "Collaboration"],
    imgSource: "https://juportfolio.com/media/img/microcenter.webp"
  }
};

// Get the modal
var modal = document.getElementById("preview");

// button that opens the modal
var btn = document.getElementsByClassName("button");

// button that opens the modal
var span = document.getElementsByClassName("close");

// open modal
function openModal() {
var selectedProject = this.parentElement.id;  
fillOut(selectedProject);
modal.style.display = "block";
document.getElementsByClassName("modal-content")[0].classList.add("scale");
}

function fillOut(selectedProject, currentImg) {
  document.getElementById("title").innerHTML = modalInfo[selectedProject].title;
  document.getElementById("info").innerHTML = modalInfo[selectedProject].info;
  document.getElementById("modalImg").src = modalInfo[selectedProject].imgSource;
  document.getElementById("skills").innerHTML =
    "Skill: " + modalInfo[selectedProject].skills + " ";
  document.getElementById("live").onclick = function () {
    window.open(modalInfo[selectedProject].link, "_blank");
  };
  document.getElementById("github").onclick = function () {
    window.open(modalInfo[selectedProject].github, "_blank");
  };
}

document.addEventListener("click", function(event) {
  var span = document.getElementsByClassName("close")[0];
  if (event.target.matches(".button")) {
    console.log("clicked");
  }

  if (event.target == span) {
    modal.style.display = "none";
  }
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

for (let i = 0; i < btn.length; i++) {
btn[i].addEventListener("click", openModal);
}