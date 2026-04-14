
// Display the dropdown menu when the user clicks on the hamburger icon
function dropMenu() {
  var x = document.getElementById("navLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 

//Display the story when the user clicks the down icon for each of the stories

function dropStoryOne() {
  var x = document.getElementById("storyDetailOne");
  if (x.style.display === "block") {
    x.animate([
      { transform: 'translateX(0px)' },
      { transform: 'translateX(-300px)'}
    ], {
      duration:1000});
    x.style.display = "none";
    
  } else {
    x.style.display = "block";
    x.animate([
      { transform: 'translateX(-300px)' },
      { transform: 'translateX(0px)'}
    ], {
      duration:1000});
  }
}
