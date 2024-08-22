function qualquercoisa() {
    let contact_name = document.getElementById("contact_name").textContent;
    let button = document.getElementById("button");
  
    if (contact_name == "") {
      alert("Name is a mandatory field");
    } else {
      if (contact_name.length < 5) {
        alert("Name: Minimum 5 characters.");
      }
    }
  
    if (contact_email == "") {
      alert("Email is a mandatory field");
    }
  
    if ((contact_phone = "")) {
      alert("Phone is a mandatory field");
    }
  
    if ((contact_message = "")) {
      alert("Message is a mandatory field");
    }
  }