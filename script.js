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
    username.value = "simon";
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
