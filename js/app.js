
// Alert Box 
const xAlert = document.querySelector(".xbox");

xAlert.addEventListener("click", () => {
  let alertBox = document.querySelector(".alert-wrapper");
  alertBox.style.display = "none";
})

//Form Controls
const form = document.getElementById("form");

const validate = () => {
    let input = form.querySelector("#userField").value;
    let msgField = form.querySelector("#messageField").value;
        if(input == "" || msgField == ""){
                input = "";
                let errorMessage = document.getElementById("errorMsg");
                errorMessage.style.display = "flex"; 
                errorMessage.style.justifyContent = "center";
                errorMessage.style.color = "red";
                errorMessage.innerHTML = "All Fields are Required!!" ; 
            }else if(input !== "" && msgField !== "") {
                    let errorMessage = document.getElementById("errorMsg"); 
                    errorMessage.innerHTML = "Your Message has been Sent";
                    errorMessage.style.display = "flex"; 
                    errorMessage.style.alignItems = "center";
                    errorMessage.style.justifyContent = "center";
                    errorMessage.style.width= "100%"; 
                    errorMessage.style.height= "70%"; 
                    errorMessage.style.color = "Green";
                    form.style.display = "none";   
                    let noform =  form.style.display = "none";       
            }
        return noform;    
}

const resetForm = () =>{
  if(noform){
      errorMessage.style.display = "none";
      form.style.display = "block";
  }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();  
    resetForm();
});

//Notification Message Box using Jquery
  $(".bell-alert").click(function() {
    $(".notify-message-box").slideDown(900);
  });


  const closeNotes  = (noteClass, arr) => {
    let note = document.querySelector(noteClass); 
    let list = document.querySelectorAll('.msg');
  }

  


 
  


