 export default class AppDashboard {
  /**=-=-=-=-CLASS PROPERTIES/VARIABLES=-=-=-=- */
  constructor(){
    // long blue alert Box 
    this.xAlert = document.querySelector(".xbox");
    // Form Controls
    this.form = document.getElementById("form");
    // Alert message conatiner
    this.removeMsgContainer = document.getElementById("message-container"); 
    // green notification alert on the bell
    this.alertBell = document.querySelector(".bell-alert");
    this.events();
  }

/**=-=-=-=-CLASS EVENT LISTENERS=-=-=-=- */
  events(){
    // Dispays notification message box when user clicks on bell
    this.alertBell.addEventListener("click", this.displayMessage);
   
    this.xAlert.addEventListener("click", this.closeAlert);
     // Once user clicks any of the alerts in the message container the green notify dot disappears 
    this.removeMsgContainer.addEventListener("click", this.removeAlerts);
     
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.validateForm();  
      // Once the form is successfully sent, the form field will return again
      setTimeout(function () {
        let errorMessage = document.getElementById("errorMsg"); 
        let input = form.querySelector("#userField");
        input.value = "";
        let msgField = form.querySelector("#messageField");
        msgField.value = "";
        errorMessage.style.display = "none";
        form.style.display = "block"; 
        }, 1500);
  });

 // LOCAL STORAGE EVENT
  document.addEventListener('DOMContentLoaded', ()=>{
    if(this.supportsLocalStorage()){
      const saveButton = document.getElementById("setLocalSettings");
      const cancelButton = document.getElementById("clearLocalSettings");
      this.getSetingsStorage();
    
        saveButton.addEventListener("click", ()=> {
          this.saveEmailSettings();
          this.saveProfileSettings();
          this.timeZoneSetting();
        });
    
        cancelButton.addEventListener("click", ()=> {
          this.clearSettings();
        }); 
      } 

  });
  
  }
  /**=-=-=-=-CLASS METHODS/FUNCTIONS=-=-=-=- */

// Removes all remaining alerts
// Removes green alert circle when first alert is removed 
  removeAlerts(e){
    let targetElement = e.target.parentElement;
    let greenCircle = document.querySelector(".notification-circle");
    if(targetElement.classList.contains("hideMe")){
      targetElement.remove();
      greenCircle.style.display ="none";
    }
  }

// Closes opening long blue alert headline
  closeAlert(){
    let alertBox = document.querySelector(".alert-wrapper");
    alertBox.style.display = "none";
  }
  
// Dispays notification message box at the top of dashboard
  displayMessage(){
    let alertMsg = document.querySelector(".notify-message-box");
    alertMsg.style.display ="flex";
  }

// Checks user input and alerts users if with message
  validateForm(){
    let input = form.querySelector("#userField").value;
    let msgField = form.querySelector("#messageField").value;
      if(input == "" || msgField == ""){
         input = "";
         let errorMessage = document.getElementById("errorMsg");
         errorMessage.classList.add("error-msg-1");
         errorMessage.style.display = "flex";
         errorMessage.innerHTML = "All Fields are Required!!" ; 
      }else if(input !== "" && msgField !== "") {
         let errorMessage = document.getElementById("errorMsg"); 
         errorMessage.classList.add("error-msg-2");
         errorMessage.style.display = "flex";
         errorMessage.innerHTML = "Your Message has been Sent";
         form.style.display = "none";        
      } 
  }

// LOCAL STORAGE METHODS/FUNCTIONS

// function that checks if any browser supports local storage
 supportsLocalStorage (){
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
    }
    catch(e){
      return false;
    }
 }

// get on/off toggle input for email setting and checks if user turns it on or off
// sets the toggle input of on or off in local storage
saveEmailSettings (){
  let emailSave = document.getElementById("localSaveEmail");
  if(emailSave.checked){
    localStorage.setItem("emailSave", "true");
    return true;
  } else if (!emailSave.checked) {
    localStorage.setItem("emailSave", "false");
    return false;
  }
 }

// gets on/off toggle input for the profile setting & checks if user turns it on or off
// sets the toggle input of on or off in local storage
 saveProfileSettings(){
  let profileSave = document.getElementById("localSaveProfile");
  if(profileSave.checked){
    localStorage.setItem("profileSave", "true");
    return true;
  } else if (!profileSave.checked) {
    localStorage.setItem("profileSave", "false");
    return false;
  }
 }
 
 // grabs the select element that hold all timezone settings
 // sets the selected timezone in local storage
 timeZoneSetting(){
  let timeZoneSave = document.getElementById("localSaveTz");
  localStorage.setItem('timeZoneSave', timeZoneSave.selectedIndex);
 }

 // Get the values of the specified local storage items:
 getSetingsStorage(){
  const getEmailSetting = JSON.parse(localStorage.getItem('emailSave'));
  const getProfileSetting = JSON.parse(localStorage.getItem('profileSave'));
  const getTimeZoneSetting = JSON.parse(localStorage.getItem('timeZoneSave'));
  document.getElementById("localSaveEmail").checked = getEmailSetting;
  document.getElementById("localSaveProfile").checked = getProfileSetting;
  document.getElementById("localSaveTz").selectedIndex = getTimeZoneSetting;
 }

 // User clicks the cancel button & it removes all saved settings
 clearSettings(){
  document.getElementById("localSaveTz").selectedIndex = 0;
  localStorage.clear();
  location.reload();
 }
}

 





 
  


