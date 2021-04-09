function toggleText(bioId) {
  var x = document.getElementById(bioId);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}