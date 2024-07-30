function validatePAN() {
    const panNumber = document.getElementById("panNumber").value.toUpperCase();
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
  
    const resultElement = document.getElementById("result");
  
    if (panRegex.test(panNumber)) {
      resultElement.textContent = "Valid PAN card number";
    } else {
      resultElement.textContent = "Invalid PAN card number";
    }
  }
  