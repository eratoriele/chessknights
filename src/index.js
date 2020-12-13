import Character from "/src/character.js";

const screenWidth = 800;
const screenHeight = 800;
const tilePerRow = 8;
const tilePerColumn = 8;
const tileWidth = screenWidth / tilePerRow;
const tileHeight = screenHeight / tilePerColumn;
const tileInnerTileWidth = 5;
const tileInnerTileHeight = 5;

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");

// Clear the screen
context.clearRect(0, 0, screenWidth, screenHeight);

// Color the background in goldßß
context.fillStyle = "#e4d00a";
context.fillRect(0, 0, screenWidth, screenHeight);

// Draw the tiles
for (var i = 0; i < tilePerRow / 2; i++) {
  for (var j = 0; j < tilePerColumn / 2; j++) {
    // black tiles
    context.fillStyle = "#737373";
    context.fillRect(
      i * tileWidth * 2 + tileInnerTileWidth,
      j * tileHeight * 2 + tileInnerTileHeight,
      tileWidth - tileInnerTileWidth * 2,
      tileHeight - tileInnerTileHeight * 2
    );
    context.fillRect(
      i * tileWidth * 2 + tileInnerTileWidth + tileWidth,
      j * tileHeight * 2 + tileInnerTileHeight + tileHeight,
      tileWidth - tileInnerTileWidth * 2,
      tileHeight - tileInnerTileHeight * 2
    );

    // white tiles
    context.fillStyle = "#fff";
    context.fillRect(
      i * tileWidth * 2 + tileInnerTileWidth + tileWidth,
      j * tileHeight * 2 + tileInnerTileHeight,
      tileWidth - tileInnerTileWidth * 2,
      tileHeight - tileInnerTileHeight * 2
    );
    context.fillRect(
      i * tileWidth * 2 + tileInnerTileWidth,
      j * tileHeight * 2 + tileInnerTileHeight + tileHeight,
      tileWidth - tileInnerTileWidth * 2,
      tileHeight - tileInnerTileHeight * 2
    );
  }
}

let char1 = new Character("Phantom");
char1.draw(context, tileWidth, tileHeight);
