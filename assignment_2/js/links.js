$(function() {
    let url=location.href;
    let urlFilename = url.substring(url.lastIndexOf('/')+1);

    // only use this script on the links page
    if (urlFilename==="links.php"){
        showlinks();
        submitpage();
        deletemode();
    }
});


function showlinks(){
    // show/hide the ul with the links and change the text of the button accordingly
    $("#showLinks").on('click', function() {
        if ($("#showLinks").text() === "Hide links"){
            $("#showLinks").text("Show links");
        } else {
            $("#showLinks").text("Hide links");
        }

        $("#linkList").fadeToggle("slow");
    });
}

function submitpage(){
    // add a custom website to the ul by filling in the form
    $("#confirm").on('click', function() {
        let webname = $('#website').val();
        let weburl = $('#url').val();

        if (webname === "" || weburl === ""){
            $("#web-alert").show();
        } else {
            $("#web-alert").hide();
            $("#weblist").append('<li><a href="#"></a></li>');
            $("#weblist li").last().children().text(webname).attr('href', weburl).attr('target', '_blank');
            $('#website').val("");
            $('#url').val("");
        }
    });
}

function deletemode(){
    // start/stop delete mode. if delete mode is on, all elements clicked will be removed from the page
    let deletemodus = false;
    $("#delete").on('click', function(){
        if (deletemodus === false){
            deletemodus = true;
            $("#delete").text("Stop delete mode");
        } else {
            deletemodus = false;
            $("#delete").text("Start delete mode");
        }
    });

    // prevent the delete mode button from being removed and prevent links to redirect the user
    $( "body" ).click(function( event ) {
        if (deletemodus === true && event.target.id !== "delete"){
            event.preventDefault();
            event.target.remove();
        }
    });
}

