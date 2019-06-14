// const getEmailSetting = JSON.parse(localStorage.getItem('emailSave'));
// const getProfileSetting = JSON.parse(localStorage.getItem('profileSave'));
// document.getElementById("localSaveEmail").checked = getEmailSetting;
// document.getElementById("localSaveProfile").checked = getProfileSetting;

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

//Dispays notification message box using Jquery
  $(".bell-alert").click(function() {
    $(".notify-message-box").slideDown(900);
  });

//When user clicks this function, it will remove the li elements (alert notifications) from the screen
  const closeNotes = (noteId) => { 
    let note = document.getElementById(noteId); 
    note.style.display = "none";
  }

//Once user clicks any of the alerts in the message container the green notify dot disappears
  const notesClose = document.getElementById("message-container");
  const greenCircle = document.querySelector(".notification-circle");
  
  notesClose.addEventListener("click", () =>{
      greenCircle.style.display ="none";
  })
  
//LOCAL STORAGE

//setting up shell functions that will be called in the event listeners below

//function that checks if any browser supports local storage
const supportsLocalStorage = () => {
  try {
  return 'localStorage' in window && window['localStorage'] !== null;
  }
  catch(e){
    return false;
  }
}

// function that first grabs the on/off toggle input for email setting and checks if user turns it on or off
// this function will be called inside the saveButton event listener
const saveEmailSettings = () => {
  let emailSave = document.getElementById("localSaveEmail");
  if(emailSave.checked){
    localStorage.setItem("emailSave", "true");
    return true;
  } else if (!emailSave.checked) {
    localStorage.setItem("emailSave", "false");
    return false;
  }
}

// function that first grabs the on/off toggle input for the profile setting and checks if user turns it on or off
// this function will be called inside the saveButton event listener
const saveProfileSettings = () => {
  let profileSave = document.getElementById("localSaveProfile");
  if(profileSave.checked){
    localStorage.setItem("profileSave", "true");
    return true;
  } else if (!profileSave.checked) {
    localStorage.setItem("profileSave", "false");
    return false;
  }
}

const timeZoneSetting = () =>{
  let timeZoneSave = document.getElementById("localSaveTz");
   localStorage.setItem('timeZoneSave', timeZoneSave.selectedIndex);
}

const getSetingsStorage =() => {
  const getEmailSetting = JSON.parse(localStorage.getItem('emailSave'));
  const getProfileSetting = JSON.parse(localStorage.getItem('profileSave'));
  const getTimeZoneSetting = JSON.parse(localStorage.getItem('timeZoneSave'));
  document.getElementById("localSaveEmail").checked = getEmailSetting;
  document.getElementById("localSaveProfile").checked = getProfileSetting;
  document.getElementById("localSaveTz").selectedIndex = getTimeZoneSetting;
}



// function that is called in when user clicks the cancel button & it removes saved settings
const clearSettings = () => {
  localStorage.removeItem("emailSave");
  localStorage.removeItem("profileSave");
}

window.onload =() =>{
//check to see if we can use local storage once page loads
  if(supportsLocalStorage()){
  const saveButton = document.getElementById("setLocalSettings");
  const cancelButton = document.getElementById("clearLocalSettings");
  getSetingsStorage();

    saveButton.addEventListener("click", ()=> {
      saveEmailSettings();
      saveProfileSettings();
      timeZoneSetting();
    });

    cancelButton.addEventListener("click", ()=> {
      clearSettings();
    });
    
  }
  
}



 
  


