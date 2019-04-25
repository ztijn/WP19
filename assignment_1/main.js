window.onload = function() {
    indexJS();
    //secondJS();
}

function indexJS(){
    document.title = "Webprogramming (LIX019P05) - Index";

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

    let thirdLI = document.getElementsByTagName("footer")[0].getElementsByTagName("li")[2].getElementsByTagName("a")[0];
    thirdLI.href = "https://google.com";

    let typ = document.createAttribute("target");
    typ.value = "_blank";
    thirdLI.attributes.setNamedItem(typ);
}

function secondJS(){
    document.title = "Webprogramming (LIX019P05) - Second";
}
