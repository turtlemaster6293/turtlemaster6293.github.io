$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(500, 601, 400, 30);
createPlatform(100, 303, 400, 30);
createPlatform(650, 462, 400, 30);
createPlatform(600, 350, 10, 10);
createPlatform(1150, 250, 500, 30, "green");
createPlatform(1130, 280, 20, 10);
createPlatform(500, 169, 400, 30);


    // TODO 3 - Create Collectables
createCollectable("database", 122, 70, 0.5, 0.7);
createCollectable("database", 1294, 200, 0.5, 0.7);
createCollectable("database", 726, 23, 0.5, 0.7);
createCollectable("database", 725, 207, 0.5, 0.7);
createCollectable("database", 425, 123, 0.5, 0.7);
createCollectable("database", 1142, 200, 0.5, 0.7);
createCollectable("database", 915, 113, 0.5, 0.7);


    
    // TODO 4 - Create Cannons
createCannon("right", 100, 12000);
createCannon("right", 300, 12000);
createCannon("right", 500, 12000);
createCannon("right", 700, 12000);
createCannon("right", 900, 12000);
createCannon("top", 250, 4000);
createCannon("top", 450, 4000);
createCannon("top", 650, 4000);
createCannon("top", 850, 4000);
createCannon("top", 1050, 4000);
createCannon("top", 1250, 4000);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
