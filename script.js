// /*
// # Task 1

// const technologies = ["Javascript", "Python", "CSS", "HTML"];

// 1. Get container element
// 2. Create a cycle for sorting array elements
// 3. Create a li tag
// 4. Write the text from the array inside the list items
// 5. Place li inside ul
// 6. Place ul tag with items on the page
// */

const technologies = ["Javascript", "Python", "CSS", "HTML"];
const containerEl = document.querySelector("#container");
// console.dir(containerEl);

const listEl = document.createElement("ul"); //<ul></ul>
// containerEl.append(listEl);

const firstElFromList = document.createElement("li");
firstElFromList.innerText = technologies[0];
listEl.append(firstElFromList);

for (let i = 1; i < technologies.length; i++) {
    const li = document.createElement("li"); // <li></li>
    li.innerText = technologies[i];
    listEl.append(li);
}

// technologies.forEach((technology) => {
//     const li = document.createElement("li");
//     li.innerText = technology;
//     listEl.append(li);
// });

// technologies.forEach((technology) => {
//     const li = document.createElement("li");
//     li.innerText = technology;
//     // debugger;
//     listEl.prepend(li);
// });

// //test example
// const testQuerySelector = document.querySelector("#testId");
// const testQuerySelectorAll = document.querySelectorAll("#testId");
// const testElementById = document.getElementById("testId");
// const testElementByClass = document.getElementsByClassName("testClass");
// const testElementByTag = document.getElementsByTagName("div");

// console.dir(testQuerySelector);

// console.dir(testQuerySelectorAll);

// console.dir(testElementById);

// console.dir(testElementByClass[0]);

// console.dir(testElementByTag);
/*
# Task 2

Starting from this colors array, create buttons dynamically;

1. Iterate trough the array;
2. Create a button and set color for the button; (style.backgroundColor, classList.add(""))
3. Set the text of the button
4. Add the button to the UI
*/

const colors = [
    {
        label: "Primary Button",
        color: "#ff0000",
        isPrimary: true,
    },
    {
        label: "Click Me",
        color: "#0ff00",
        isPrimary: true,
    },
    {
        label: "yellow",
        color: "#fff00f",
        isPrimary: false,
    },
];

colors.forEach((color) => {
    const buttonEl = document.createElement("button"); // <button></button>
    // containerEl.append(buttonEl);
    buttonEl.textContent = color.label;

    if (color.isPrimary) {
        buttonEl.innerHTML = `<span><a href='https://www.google.com/'>${color.label}</a></span>`;
        buttonEl.classList.add("primary-button");
    } else {
        buttonEl.style.backgroundColor = color.color;
        // console.dir(buttonEl);
    }
});

/**
 * Test Example
 */

// const testQuerySelector = document.querySelector('#testId');
// const testQuerySelectorAll = document.querySelectorAll('#testId');
// const testElementById = document.getElementById('testId');
// const testElementByClass = document.getElementsByClassName('testClass');
// const testElementByTag = document.getElementsByTagName('div');

// console.dir(testQuerySelector);
// console.dir(testQuerySelectorAll[0]);
// console.dir(testElementById);
// console.dir(testElementByClass[0]);
// console.dir(testElementByTag);

//lectia 12
//ex 1

const toggleButton = document.querySelector(".toggle-button");
const icon = document.querySelector(".icon");

toggleButton.addEventListener("dblclick", () => {
    icon.classList.toggle("icon-red");
});

// setTimeout(() => {
// toggleButton.removeEventListener('click', ) // nu  functioneaza ca trebuie specificata refetina functiei
// }, 5000);

const handleClick = () => {
    icon.classList.toggle("icon-red");
};

toggleButton.addEventListener("dblclick", handleClick());

setTimeout(
    () => toggleButton.removeEventListener("dblclick", handleClick),
    5000
);

/**
 * Submit FORM
 */

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);

    let username = document.getElementById("username");
    let password = document.getElementById("password");

    if (username.value === "" || password.value === "") {
        alert("te rugam sa introduceti o valoare in ambele campuri");
        // debugger;
    } else {
        // fa o actiune cu informatia din imputuri
        alert("Formularul a fost salvat cu succes");
        console.log(
            `this form has a username of ${username.value} and the password: ${password.value}`
        );
    }

    username.value = "";
    password.value = "";
});

let username = document.getElementById("username");
let password = document.getElementById("password");

setTimeout(() => {
    username.value = "Hi simon";
}, 5000);

// Example 3

const registerForm = document.querySelector("#registerForm");
const registerFormErrors = document.getElementsByClassName("form-errors");

const markFormWithError = () => {
    if (!registerForm.classList.contains("error")) {
        registerForm.classList.add("error");
    }
    registerFormErrors.textContent = message;
};

const handleSuccess = () => {
    registerForm.classList.remove("error");
    registerFormErrors.textContent = "";
    console.log(`Logged in successful!`);
};

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log();
    const { elements } = e.target;
    const username = elements["username-register"].value;
    const password = elements["password-register"].value;

    // if (!username || !password) {
    //     markFormWithError("Username-ul sau parola nu sunt definite");
    // } else if (username.length > 15) {
    //     markFormWithError("Username-ul nu poate avea mai mult de 15 caractere");
    // } else if (password.length < 8) {
    //     markFormWithError("Parola nu poate avea sub 8 caractere");
    // } else {
    //     handleSuccess();
    // }

    if (!username || !password) {
        markFormWithError("Username-ul sau parola nu sunt definite");
        return;
    }
    if (username.length > 15) {
        markFormWithError("Username-ul nu poate avea mai mult de 15 caractere");
        return;
    }
    if (password.length < 8) {
        markFormWithError("Parola nu poate avea sub 8 caractere");
        return;
    }
    handleSuccess();
});

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", (e) => {
    console.log(e);
    nameOutput.innerHTML = e.target.value;
});

// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// select.addEventListener("change", setOutput); //adauga un event listener de tip change la elem.select

// function setOutput(event) {
//     //functia va fi apelata atunci cand evenim. change are loc pe elementul select
//     const selectedOptionValue = event.currentTarget.value;
//     //aici linia de cod reprezinta valoarea optiunii selectate (vegetarian,four meats..)
//     const selectedOptionIndex = event.currentTarget.selectedIndex;
//     //obtine indexul optiunii selectate,aceasta linie de cod am folosit-o pentru a afisa sus ce optine am selectat??
//     //deci pana aici noi am implementat acest cod pentru a putea manipula meniul cu optiunile pentru pizza?/?
//     const selectedOptionText =
//         event.currentTarget.options[selectedOptionIndex].text;
//     /*aici obtinem rezultatul optiunii dorite din meniu,adica se accesează elementul
// 	option corespunzător indexului opțiunii selectate și se obține textul acelei opțiuni.*/
//     textOutput.textContent = selectedOptionText;
//     valueOutput.textContent = selectedOptionValue;
//     //iar aici pentru a putea afisa la Selected option text/Selected option value in functie de optiunea pe care o alegem?
// }

// lectia 13

const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");

colorPalette.addEventListener("click", selectColor);

// This is where delegation «magic» happens
function selectColor(event) {
    if (event.target.nodeName !== "BUTTON") {
        return;
    }

    const selectedColor = event.target.dataset.color;
    output.textContent = `Selected color: ${selectedColor}`;
    output.style.color = selectedColor;
}

// Some helper functions to render palette items
createPaletteItems();

function createPaletteItems() {
    const items = [];
    for (let i = 0; i < 200; i++) {
        const color = getRandomHexColor();
        const item = document.createElement("button");
        item.type = "button";
        item.dataset.color = color;
        item.style.backgroundColor = color;
        item.classList.add("item");
        items.push(item);
    }
    colorPalette.append(...items);
}

function getRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

// End ex
//--------------------------------------------------------------------------//
// const paragraph = document.querySelector(".output");
// const newParagraph = `<p class="newOutput"> New SELECTED COLORES
//  BY NEWPARAGRAPH WITH THE CLASS OF NEWOUTPUT.</p>
//  <a class="output-link" href="#"> READ MORE...</a>`;
// output.innerHTML += newParagraph;

// const newOutput = document.querySelector(".newOutput");
// console.log(newOutput.innerHTML);

// const spanCallById = document.querySelector(".nameOutput");
// console.log(nameOutput.innerHTML);

// const changeContent = document.querySelector(".title .nameOutput");
// const newContent = `<h2 class="new-line">THIS IS MY NEW LINE THAT HAVE
// BEEN CHANGED BY INNER HTML!</h2>
// <p> this will go also!</p>`;
// changeContent.innerHTML += newContent;
//--------------------------------------------------------------------------//
const technologiesNew = ["HTML", "CSS", "JavaScript", "React", "Node"];
const list = document.querySelector(".list");

const markUp = technologiesNew
    .map(
        (technologyy) => `<li class="list-item"> ${technologyy}
</li>`
    )
    .join("");
console.log(markUp);
list.innerHTML = markUp;

const markUpNew = document.querySelector(".list");

const newList = `
<li> new list</li>
<li> new list</li>
<li> new list</li>
<li> new list</li>
<li> new list</li>`;
list.innerHTML = newList;

let newListWithLi = technologiesNew
    .map((technologyy) => `<li>${technologyy}</li>`)
    .join("");
console.log(newListWithLi);
list.innerHTML = newListWithLi;

const listThree = document.querySelector(".list-three");
const threeNewTechnologies = ["Python", "JAVA", "SQL"];
const markUpThree = threeNewTechnologies
    .map((theThreeTechnologies) => `<li> ${theThreeTechnologies}</li>`)
    .join("");
listThree.insertAdjacentHTML("beforeend", markUpThree);
listThree.insertAdjacentHTML(
    "beforebegin",
    "<h5>Added three more programing languages at the end</h5>"
);
listThree.insertAdjacentHTML(
    "afterend",
    "<h5> by this line i end my code here :)</h5>"
);
//--------------------------------------------------------------------------//

const singlebtn = document.querySelector("#single");
const handleClickSingleBtn = () => {
    console.log("click envent listner one time callback");
};
singlebtn.addEventListener("click", handleClickSingleBtn);

const multipleBtn = document.querySelector("#multiple");

const firstCallBack = () => {
    console.log("First callback");
};
const secondCallBack = () => {
    console.log("second callback");
};
const thirdCallBack = () => {
    console.log("third call back");
};
multipleBtn.addEventListener("click", firstCallBack);
multipleBtn.addEventListener("click", secondCallBack);
multipleBtn.addEventListener("click", thirdCallBack);
//-----------------------------------------------------------------------//

const addListenerBtn = document.querySelector(".js-add");
const removeListenerBtn = document.querySelector(".js-remove");

const btnClickMe = document.querySelector(".target-btn");

const handleClickBtn = () => {
    console.log("click event listener CallBack");
};
addListenerBtn.addEventListener("click", () => {
    btnClickMe.addEventListener("click", handleClickBtn);
    console.log("click event listener was added to btn");
});

removeListenerBtn.addEventListener("click", () => {
    btnClickMe.removeEventListener("click", handleClickBtn);
    console.log("click event was removed from btn");
});
//-----------------------------------------------------------------------//
const button = document.querySelector(".eventBtn");

const handleClickEvent = (event) => {
    console.log("event: ", event);
    console.log("event type: ", event.type);
    console.log("currentTarget: ", event.currentTarget);
};

button.addEventListener("click", handleClickEvent);
//-----------------------------------------------------------------------//

//-----------------------------------------------------------------------//

const clearLogBtn = document.querySelector(".js-clear");
const logList = document.querySelector(".log-list");
let keypressCounter = 1;

console.log(clearLogBtn);

document.addEventListener("keydown", logMessage);
document.addEventListener("keyup", logMessage);
clearLogBtn.addEventListener("click", reset);

function logMessage({ type, key, code }) {
    const markup = `<div class="log-item">
    <span class="chip">${keypressCounter}</span>
    <ul>
      <li><b>type</b>: ${type}</li>
      <li><b>Key</b>: ${key}</li>
      <li><b>Code</b>: ${code}</li>
    </ul>
  </div>`;

    logList.insertAdjacentHTML("afterbegin", markup);

    if (type === "keyup") {
        incrementKeypressCounter();
    }
}

function reset() {
    keypressCounter = 1;
    logList.innerHTML = "";
}

function incrementKeypressCounter() {
    keypressCounter += 1;
}
//-----------------------------------------------------------------------//

const select = document.querySelector(".cars-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

select.addEventListener("change", setOutput);

function setOutput(event) {
    const selectedOptionValue = event.currentTarget.value;
    const selectedOptionIndex = event.currentTarget.selectedIndex;
    const selectedOptionText =
        event.currentTarget.options[selectedOptionIndex].text;
    textOutput.textContent = selectedOptionText;
    valueOutput.textContent = selectedOptionValue;
}
//-----------------------------------------------------------------------//

// const textInput = document.querySelector(".text-input-test");
// const outputO = document.querySelector(".output");
// textInput.addEventListener("input", (event) => {
//     outputO.textContent = event.currentTarget.value;
// });

//-----------------------------------------------------------------------//

const textInput = document.querySelector(".text-input");
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener("click", () => {
    textInput.focus();
});

removeFocusBtn.addEventListener("click", () => {
    textInput.blur();
});

textInput.addEventListener("focus", () => {
    textInput.value = "This input has focus";
});

textInput.addEventListener("blur", () => {
    textInput.value = "";
});
//-----------------------------------------------------------------------//

const registerFormEx = document.querySelector(".form");

registerFormEx.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const login = form.elements.login.value;
    const password = form.elements.password.value;

    if (login === "" || password === "") {
        return console.log("Please fill in all the fields!");
    }

    console.log(`Login: ${login}, Password: ${password}`);
    form.reset();
}
//-----------------------------------------------------------------------//

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");

parent.addEventListener("click", () => {
    console.log("click pe parent");
});
child.addEventListener("click", () => {
    console.log("click pe child");
});
descendant.addEventListener("click", () => {
    console.log("click pe toate pana sus");
});
//-----------------------------------------------------------------------//

// import { galleryItems } from "./gallery-items.js";

// console.log(galleryItems);

// galleryItems.forEach((item) => {
//     const galleryItem = document.createElement("li");
//     galleryItem.classList.add("gallery__item");

//     const galleryLink = document.createElement("a");
//     galleryLink.classList.add("gallery__link");
//     galleryLink.href = item.original;

//     const galleryImage = document.createElement("img");
//     galleryImage.classList.add("gallery__image");
//     galleryImage.src = item.preview;
//     galleryImage.alt = item.description;

//     galleryLink.appendChild(galleryImage);
//     galleryItem.appendChild(galleryLink);

//     galleryList.appendChild(galleryItem);
// });

// const lightbox = new SimpleLightbox(".gallery a", {
//     captionsData: "alt",
//     captionDelay: 250,
// });
//-----------------------------------------------------------------------//
// const listEl = document.querySelector(".gallery");

// galleryItems.forEach((item) => {
//     const listItemEl = document.createElement("li");
//     listItemEl.classList.add("gallery__item");
//     listItemEl.innerHTML = `<a class='gallery__link' href='${item.original}'>
//         <img class='gallery__image'
//         src='${item.preview}'
//         data-source='${item.original}'
//         alt='${item.description}'/>
//     </a>`;
//     listEl.append(listItemEl);
// });

// listEl.addEventListener("click", openImageInLightbox);

// function openImageInLightbox(event) {
//     const clickedOn = event.target;

//     if (event.target.nodeName !== "IMG") {
//         return;
//     }

//     event.preventDefault();
//     basicLightbox
//         .create(
//             `<img width='1400' height='900' src='${clickedOn.dataset.source}'/>`
//         )
//         .show();
// }
//-----------------------------------------------------------------------//
// const heading = document.createElement("h1");
// console.log(heading); // <h1></h1>

// heading.textContent = "This is a heading";
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement("img");
// image.src = "https://placeimg.com/640/480/nature";
// image.alt = "Nature";
// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />
//-----------------------------------------------------------------------//
