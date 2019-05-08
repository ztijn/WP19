function validateForm(formdata){
    console.log(formdata);
    
    for (let propname in formdata){
        if (formdata[propname]===""){
            $("#form-alert").text("Not all form fields are filled in!").show();
            return false;
        } else {
            $("#form-alert").hide();
        }
    }

    if(!formdata.Name.match(/^[a-zA-Z ]+$/)){
        $("#form-alert").text(formdata.Name + " is not a valid name, please only use letters.").show();
        return false;
    }

    if(!formdata.City.match(/^[a-zA-Z ]+$/)){
        $("#form-alert").text(formdata.City + " is not a valid city, please only use letters.").show();
        return false;
    }

    if(!formdata.Age.match(/^[0-9]+$/)){
        $("#form-alert").text(formdata.Age + " is not a valid age, please only use numbers.").show();
        return false;
    }

    if(!formdata.Email.match(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i)){
        $("#form-alert").text(formdata.Name + " is not a valid email.").show();
        return false;
    }

    if(!formdata.PhoneNumber.match(/^[0-9]+$/)){
        $("#form-alert").text(formdata.Name + " is not a valid phone number, please only use numbers").show();
        return false;
    }

    return true;
}

function writeFormData(){
    $("#submit").on('click', function(){

        let formdata = {
            Name: "",
            Age: "",
            City: "",
            Email: "",
            PhoneNumber: "",
        };

        formdata.Name = $('#name').val();
        formdata.Age = $('#age').val();
        formdata.City = $('#city').val();
        formdata.Email = $('#email').val();
        formdata.PhoneNumber = $('#phone').val();

        if(validateForm(formdata)){
            $("td:eq(0)").text(formdata.Name);
            $("td:eq(1)").text(formdata.Age);
            $("td:eq(2)").text(formdata.City);
            $("td:eq(3)").text(formdata.Email);
            $("td:eq(4)").text(formdata.PhoneNumber);
            $("#form-content").show();
        }
    });

    $("#erase").on('click', function(){
        $('#name').val("");
        $('#age').val("");
        $('#city').val("");
        $('#email').val("");
        $('#phone').val("");
    });
}

function tabs(){
    $("#link-tab").on('click', function(){
        $("#link-tab").addClass("active");
        $("#contact-tab").removeClass("active");
        $("#links").addClass("active");
        $("#contact").removeClass("active");
    });

    $("#contact-tab").on('click', function(){
        $("#link-tab").removeClass("active");
        $("#contact-tab").addClass("active");
        $("#links").removeClass("active");
        $("#contact").addClass("active");
    });
}


$(function() {
    writeFormData();
    tabs();
});