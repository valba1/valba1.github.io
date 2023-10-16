// gets location button from HTML
let giveLocation = document.getElementById("location");

// mouse in to change location button styling
giveLocation.addEventListener("mouseover", function emailStyling() {
  giveLocation.style.background = "#EFE7D3";
  giveLocation.style.fontWeight = "bold";
  }
);

// mouse out to revert location button styling
giveLocation.addEventListener("mouseout", function revertEmailStyling() {
  giveLocation.style.background = "#d1bbda";
  giveLocation.style.fontWeight = "normal";
  }
);

// current location alert
giveLocation.addEventListener("click" , function firstAlert () {
  alert("Viviana is in Los Angeles, California.");
});