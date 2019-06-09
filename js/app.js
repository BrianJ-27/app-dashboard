
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
                let errorMessage = document.getElementById("errorMsg");
                errorMessage.style.display = "flex"; 
                errorMessage.style.justifyContent = "center";
                errorMessage.style.color = "red";
                errorMessage.innerHTML = "All Fields are Required!!" ; 
            }else if(input !== "" && msgField !== ""){
                let errorMessage = document.getElementById("errorMsg"); 
                    errorMessage.style.display = "flex"; 
                    errorMessage.style.alignItems = "center";
                    errorMessage.style.justifyContent = "center";
                    errorMessage.style.width= "100%"; 
                    errorMessage.style.height= "70%"; 
                    errorMessage.style.color = "Green";
                    errorMessage.innerHTML = "Thank You Message Sent";
                    form.style.display = "none"; 
            }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
      validate();
});

