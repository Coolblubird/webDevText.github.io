
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
  var x = document.getElementById("storyDetailsOne");
  if (x.style.display === "block") {
    document.getElementById("storyOptionOne").innerHTML="&#9660;";
    x.style.display = "none";
    
  } else {
    x.style.display = "block";
	  document.getElementById("storyOptionOne").innerHTML="&#9650;";
    x.animate(
		{
			opacity: [0, 1],
			transform: ["translateX(-200px)", "translateX(0px)"],
		},
		{
			fill: "both",
			duration:1000});
  }
}

function dropStoryTwo() {
  var x = document.getElementById("storyDetailsTwo");
  if (x.style.display === "block") {
    document.getElementById("storyOptionTwo").innerHTML="&#9660;";
    x.style.display = "none";
    
  } else {
    x.style.display = "block";
	  document.getElementById("storyOptionTwo").innerHTML="&#9650;";
    x.animate(
		{
			opacity: [0, 1],
			transform: ["translateX(-200px)", "translateX(0px)"],
		},
		{
			fill: "both",
			duration:1000});
  }
  
function dropStoryThree() {
  var x = document.getElementById("storyDetailsThree");
  if (x.style.display === "block") {
    document.getElementById("storyOptionThree").innerHTML="&#9660;";
    x.style.display = "none";
    
  } else {
    x.style.display = "block";
	  document.getElementById("storyOptionThree").innerHTML="&#9650;";
    x.animate(
		{
			opacity: [0, 1],
			transform: ["translateX(-200px)", "translateX(0px)"],
		},
		{
			fill: "both",
			duration:1000});
  }
    
function dropStoryFour() {
  var x = document.getElementById("storyDetailsFour");
  if (x.style.display === "block") {
    document.getElementById("storyOptionFour").innerHTML="&#9660;";
    x.style.display = "none";
    
  } else {
    x.style.display = "block";
	  document.getElementById("storyOptionFour").innerHTML="&#9650;";
    x.animate(
		{
			opacity: [0, 1],
			transform: ["translateX(-200px)", "translateX(0px)"],
		},
		{
			fill: "both",
			duration:1000});
  }
  
 function dropStoryFive() {
  var x = document.getElementById("storyDetailsFive");
  if (x.style.display === "block") {
    document.getElementById("storyOptionFive").innerHTML="&#9660;";
    x.style.display = "none";
    
  } else {
    x.style.display = "block";
	  document.getElementById("storyOptionFive").innerHTML="&#9650;";
    x.animate(
		{
			opacity: [0, 1],
			transform: ["translateX(-200px)", "translateX(0px)"],
		},
		{
			fill: "both",
			duration:1000});
  }
function dropStorySix() {
  var x = document.getElementById("storyDetailsSix");
  if (x.style.display === "block") {
    document.getElementById("storyOptionSix").innerHTML="&#9660;";
    x.style.display = "none";
    
  } else {
    x.style.display = "block";
	  document.getElementById("storyOptionSix").innerHTML="&#9650;";
    x.animate(
		{
			opacity: [0, 1],
			transform: ["translateX(-200px)", "translateX(0px)"],
		},
		{
			fill: "both",
			duration:1000});
  }
function dropStorySeven() {
  var x = document.getElementById("storyDetailsSeven");
  if (x.style.display === "block") {
    document.getElementById("storyOptionSeven").innerHTML="&#9660;";
    x.style.display = "none";
    
  } else {
    x.style.display = "block";
	  document.getElementById("storyOptionSeven").innerHTML="&#9650;";
    x.animate(
		{
			opacity: [0, 1],
			transform: ["translateX(-200px)", "translateX(0px)"],
		},
		{
			fill: "both",
			duration:1000});
  }
function dropStoryEight() {
  var x = document.getElementById("storyDetailsEight");
  if (x.style.display === "block") {
    document.getElementById("storyOptionEight").innerHTML="&#9660;";
    x.style.display = "none";
    
  } else {
    x.style.display = "block";
	  document.getElementById("storyOptionOneEight").innerHTML="&#9650;";
    x.animate(
		{
			opacity: [0, 1],
			transform: ["translateX(-200px)", "translateX(0px)"],
		},
		{
			fill: "both",
			duration:1000});
  }
