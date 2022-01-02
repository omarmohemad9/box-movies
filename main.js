"use strict";
window.onload = function() {
    setTimeout(() => {
        let filterPage = document.querySelector(".filter_Page");
        filterPage.classList.add("disable");
    }, 1000);
};
//

// lis
let lis = document.querySelectorAll(".navContent ul li");
let lisArr = Array.from(lis);

lisArr.forEach((e) => {
    e.addEventListener("click", function(e) {
        lisArr.forEach((el) => {
            el.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        history.pushState({ a: 1 }, "none", e.currentTarget.textContent);
    });
});

//

let inputSearch = document.getElementById("searchInput");
let parentsChildrens = document.querySelectorAll(".box-C .box");

inputSearch.onfocus = function() {
    inputSearch.setAttribute("placeholder", "");
};
inputSearch.onblur = function() {
    inputSearch.setAttribute("placeholder", "Search");
};

inputSearch.onkeyup = function() {
    for (let i = 0; i < parentsChildrens.length; i++) {
        let txtcontent = document.querySelectorAll(".contextBox h2");
        let txtV = txtcontent[i].innerHTML || txtcontent[i].innerText;
        let result = inputSearch.value;

        if (txtV.toUpperCase().indexOf(result.toUpperCase()) > -1) {
            parentsChildrens[i].style.display = "";
            console.log(result.toUpperCase());
        } else {
            parentsChildrens[i].style.display = "none";
            console.log("false");
        }
        console.log("ok");
    }
};

// scroll section
const parents = document.querySelector(".box-C");
let boo = false;
let point, un, offs, scrollLeft;

parents.addEventListener("mousedown", function startE(e) {
    boo = true;

    if (boo) {
        // parents.style.cursor = "grabbing";
        point = e.pageX - parents.offsetLeft;
        scrollLeft = parents.scrollLeft;
    }
});
parent.addEventListener("mousemove", (e) => {
    if (!boo) return;
    // parents.style.cursor = "grab";
    moveE(e);
});
parent.addEventListener("mouseup", () => {
    boo = false;
});

function moveE(e) {
    parents.scrollLeft = scrollLeft - (point - e.pageX - parents.offsetLeft);
}

let prev = document.getElementById("prev");
let next = document.getElementById("next");
let count = 2;

next.onclick = function() {
    // moveE(e);
    count++;

    if (parents.scrollLeft == parents.scrollWidth) {
        count = 4;
        parents.scrollLeft = parents.scrollWidth;
        console.log(count);
    }
    if (count > 4) {
        count = 4;
    }

    parents.scrollLeft = 200 * count;

    console.log(count);
};

prev.onclick = function() {
    count--;
    if (parents.scrollLeft == 0 && count <= -1) {
        parents.scrollLeft = 0;
        count = 0;
    }
    parents.scrollLeft = 200 * count;

    console.log(count);
};