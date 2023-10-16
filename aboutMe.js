let research = document.getElementById("research");

// mouse in to change location button styling
research.addEventListener("mouseover", function researchStyling() {
  research.style.background = "#EFE7D3";
  research.style.fontWeight = "bold";
  }
);

// mouse out to revert location button styling
research.addEventListener("mouseout", function revertResearchStyling() {
  research.style.background = "#d1bbda";
  research.style.fontWeight = "normal";
  }
);

research.addEventListener("click" , function secondAlert () {
  alert("Technology that can further advance the fields of psychology and nueroscience.");
});