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

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById(imgId);
    var modalImg = document.getElementById("imgBlock");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
    modal.style.display = "none";
    }
}