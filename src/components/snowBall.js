function throwSnowball() {
  var snowball = document.getElementById("snowball");
  var target = document.getElementById("target");

  // Get the bottom center position of the screen
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  var screenHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  var centerX = screenWidth / 2;
  var bottomY = screenHeight;

  // Move the snowball to the bottom center position
  snowball.style.transform = `translate(${centerX}px, ${bottomY}px)`;

  // Get the target position
  var targetRect = target.getBoundingClientRect();
  var targetX = targetRect.left + targetRect.width / 2;
  var targetY = targetRect.top + targetRect.height / 2;

  // Move the snowball to the target position
  setTimeout(() => {
    snowball.style.transform = `translate(${targetX}px, ${targetY}px)`;
  }, 0); // Use a small delay to separate the initial position and the target position

  // Reset the snowball position after the animation
  setTimeout(() => {
    snowball.style.transform = "translate(0, 0)";
  }, 500); // Adjust the duration based on your animation timing
}

export default throwSnowball;
