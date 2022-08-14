function validateLogIn(){
    var name = document.forms["contact_form"]["name"].value
    var email = document.forms["contact_form"]["email"].value
    var message = document.forms["contact_form"]["message"].value
    if(name == null || name == ""){
        alert("Name cannot be empty!");
        return false;
    }else if(email == null || email==""){
        alert("Email cannot be empty!");
        return false;
    }else if(message == null || message == ""){
        alert("Message cannot be empty!");
        return false;
    }else{
        alert("Message successfully sent!");
        return true;
    }
}

function displayModal(imgId){
    var modal = document.getElementById("myModal");

    var img = document.getElementById(imgId);
    var modalImg = document.getElementById("imgBlock");
    var modalVid = document.getElementById("vidBlock");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
        modal.style.display = "block";
        if(imgId == "img-2"){
            modalVid.src = this.src; 
            captionText.innerHTML = this.title;
            document.getElementById("imgBlock").style.display = "none";
        }else{
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
            document.getElementById("vidBlock").style.display = "none";
        }   
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
    modal.style.display = "none";
    }
}

function onFocusAnimation(hobby){
    if(hobby == "1"){
        document.getElementById("baking").src="img/hobbies/baking_hover.png";
    }else if(hobby == "2"){
        document.getElementById("lettering").src="img/hobbies/calligraphy_hover.png";
    }else{
        document.getElementById("camera").src="img/hobbies/camera_hover.png";
    }
}

function unfocusAnimation(hobby){
    if(hobby == "1"){
        document.getElementById("baking").src="img/hobbies/baking.png";
    }else if(hobby == "2"){
        document.getElementById("lettering").src="img/hobbies/calligraphy.png";
    }else{
        document.getElementById("camera").src="img/hobbies/camera.png";
    }
}