

// Display the dropdown menu when the user clicks on the hamburger icon
function dropMenu() {
  var x = document.getElementById("navLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
	x.animate(
    	{
    	opacity: [0, 1],
    	transform: ["translateY(-200px)", "translateY(0px)"],
    	},
    	{	
   		fill: "both",
    	duration:1000});
  }
} 

//Display the story when the user clicks the down icon for each of the stories

function dropStory(storyID) {
  var x = document.getElementById("storyDetails" + storyID);
  if (x.style.display === "block") {
    document.getElementById("storyOption" + storyID).innerHTML="&#9660;";
    x.style.display = "none";
    
  } else {
    x.style.display = "block";
	  document.getElementById("storyOption" + storyID).innerHTML="&#9650;";

    //randomize which direction to come from
    let randomNum = Math.random(); //returns a number between 0 and 1, for those who dont know

    if(randomNum < 0.5){
      x.animate(
      {
        opacity: [0, 1],
        transform: ["translateX(-200px)", "translateX(0px)"],
      },
      {
        fill: "both",
        duration:1000});
    }
    else{
      x.animate(
      {
        opacity: [0, 1],
        transform: ["translateX(200px)", "translateX(0px)"],
      },
      {
        fill: "both",
        duration:1000});
    }
  }
}
