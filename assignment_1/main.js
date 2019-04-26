window.onload = function() {
    let url=location.href;
    let urlFilename = url.substring(url.lastIndexOf('/')+1);

    // differentiate between the two html pages
    if (urlFilename==="index.html"){
        indexJS();
    } else {
        secondJS();
    }
    mainJS();
}

function indexJS(){
    // change the title
    document.title = "Webprogramming (LIX019P05) - Index";

    // create a second sidebar
    let elemArt = document.createElement("ARTICLE");
    let elemHead = document.createElement("H1");
    let elemPar = document.createElement("P");
    elemArt.appendChild(elemHead);
    elemArt.appendChild(elemPar);
    let textHead = document.createTextNode("This is my second article");
    let textPar = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget eros ultrices, dapibus lacus ultrices, ultrices tortor. Nam tincidunt blandit neque, at ornare sapien ultricies ut. Integer eget ultricies velit. Cras eu tellus ex. Integer bibendum nisi neque, sed auctor odio blandit sit amet. Aenean augue tellus, tincidunt vel commodo bibendum, rutrum nec augue. Donec pulvinar sem in purus congue sodales. Nam magna urna, maximus ut eros vel, rutrum semper sem. Duis a efficitur mauris. Nunc a aliquam nisi, vel iaculis justo. Donec lacus nulla, sollicitudin vitae lectus vel, tempus vestibulum ipsum. In dignissim consequat pellentesque. Pellentesque eget eleifend velit. Aenean aliquam auctor nibh vitae tristique. Nulla facilisi.");
    elemHead.appendChild(textHead);
    elemPar.appendChild(textPar);
    document.getElementsByClassName("col-md-12")[0].appendChild(elemArt);

    // create a sidebar
    document.getElementsByClassName("col-md-12")[0].className = "col-md-8";
    let elemSide = document.createElement("div");
    elemSide.className = "col-md-4";
    let sideHead = document.createElement("H1");
    elemSide.appendChild(sideHead);
    let textSide = document.createTextNode("Sidebar");
    sideHead.appendChild(textSide);
    document.getElementsByClassName("row")[0].appendChild(elemSide);

    let checkObject = {
        Week1: "Assignment 1",
        Week2: "No lecture",
        Week3: "Assignment 2",
        Week4: "-",
        Week5: "Assignment 3",
        Week6: "-",
        Week7: "Guest Lecture"
    }

    // make a string of the JS object
    let txt = "";
    for (let name in checkObject){
        txt += name + "  =>  " + checkObject[name] + "<br>";
    }

    // display the contents of the object in a "p" element in the sidebar
    let checkElem = document.createElement("p");
    checkElem.innerHTML = txt;
    document.getElementsByClassName("col-md-4")[0].appendChild(checkElem);
}

function secondJS(){
    // change the title
    document.title = "Webprogramming (LIX019P05) - Second";
}

function mainJS(){
    // third li element links to google
    let thirdLI = document.getElementsByTagName("footer")[0].getElementsByTagName("li")[2].getElementsByTagName("a")[0];
    thirdLI.href = "https://google.com";

    // in a new tab
    let newTab = document.createAttribute("target");
    newTab.value = "_blank";
    thirdLI.attributes.setNamedItem(newTab);


    // color all (child elements of) elements with class "nav-item" red
    let navItems = document.getElementsByClassName("nav-item");
    let itemLength = navItems.length;
    for (let i = 0; i < itemLength; i++) {
        navItems[i].children[0].style.color = "red";
    }
}
