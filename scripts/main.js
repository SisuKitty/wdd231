// determine the year for footer
const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = ` <span class="highlight">&copy;${today.getFullYear()}</span>`;

// determines date last modified for footer
let aLastModif = new Date(document.lastModified);

const lastModified = document.querySelector("#lastModified");

lastModified.innerHTML = `<span class="highlight">Last Update: ${aLastModif.getMonth()}/${aLastModif.getDay()}/${aLastModif.getFullYear()} ${aLastModif.toLocaleTimeString()}</span>`;

//course completion check
const courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
    technology: ["HTML", "CSS"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
    technology: ["C#"],
    completed: false,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: true,
  },
];

// Get the class element
const course = document.querySelectorAll(".course");

//
// course.forEach((classes) => {
//   const isCompleted = classes.getAttribute("completed") === "true";

//   // Apply styling based on the "completed" status
//   if (isCompleted) {
//     item.style.backgroundColor = "lightgreen";
//   }
// });

//filter classes
const filter_CSE = document.getElementById("CSEfilter");
const filter_WDD = document.getElementById("WDDfilter");
const filter_All = document.getElementById("allFilter");

filter_WDD.addEventListener("click", function () {
  filter_cat_cars.classList.toggle("active");
  for (let i = 0; i < category.length; i++) {
    if (category[i].classList.contains("WDD")) {
      category[i].classList.add("hide");
    } else {
      category[i].classList.toggle("hide");
    }
  }
});

const hamButton = document.getElementById("hamburger");
const mainNav = document.getElementById("nav");

hamButton.addEventListener("click", () => {
  mainNav.classList.toggle("show");
});

//display class ids
const courseDetails = document.querySelector("#course_details");
const displayCourse = document.querySelector(".classids");

for (let i = 0; i < courses.length; i++) {
  let newCourse = document.createElement(`li`);
  newCourse.innerHTML = `<li id="courseID">${courses[i].subject} ${courses[i].number}`;
  displayCourse.appendChild(newCourse);
  newCourse.addEventListener("click", () => {
    displayCourseDetails(courses[i]);
  });
}

//display modal
function displayCourseDetails(course) {
  courseDetails.innerHTML = "";
  console.log(course);
  courseDetails.innerHTML = `
  <button id="closeModal">x</button>
  <h2>${course.subject} ${course.number}</h2>
  <h3>${course.title}</h3>
  <p><strong>Credits</strong>: ${course.credits}</p>
  <p><strong>Technologies</strong>: ${course.technology}</p>
  `;

  displayCourse.addEventListener("click", () => {
    courseDetails.showModal();
  });

  const closeModal = document.querySelector("#closeModal");
  closeModal.addEventListener("click", () => {
    courseDetails.close();
  });
}
