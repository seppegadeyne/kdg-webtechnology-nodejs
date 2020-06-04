// insert before
function init() {
    let blueSpan = document.createElement("span");
    let tekst = document.createTextNode("blabla");
    blueSpan.appendChild(tekst);
    blueSpan.style.color = "blue";
    let para = document.getElementById("p1");
    para.appendChild(blueSpan);
    let redSpan = document.createElement("span");
    redSpan.setAttribute("id", "newSpan");
    let content = document.createTextNode("Nieuwe tekst komt ");
    redSpan.appendChild(content);
    redSpan.style.color = "red";
    let child = document.getElementById("childSpan");
    let parentDiv = child.parentNode;
    parentDiv.insertBefore(redSpan, child);
}

// append example
function init() {
    let blueSpan = document.createElement("span");
    blueSpan.append("blabla"); // create tekst node + append
    blueSpan.style.color = "blue";
    let para = document.getElementById("p1");
    para.append(blueSpan);
    let redSpan = document.createElement("span");
    redSpan.id = "newSpan";
    redSpan.append("Nieuwe tekst komt ");
    redSpan.style.color = "red";
    document.getElementById("childSpan").before(redSpan); // parentNode niet nodig
}

// className
let h3 = document.querySelector("h3");
console.log(h3.className);
h3.className += " toe";
console.log(h3.className);

// classList
document.getElementById("ptest").addEventListener("click", () => {
        document.querySelectorAll("p.test").forEach ( p => p.classList.add("schuin"))
    }
);

document.getElementById("test").addEventListener("click", () => {
        [...document.getElementsByClassName("test")].forEach( p => p.classList.toggle("red"))
    }
);

