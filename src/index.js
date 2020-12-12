let screenWidth = 800;
let screenHeight = 800;
let tilePerRow = 8;
let tilePerColumn = 8;
let tileWidth = screenWidth / tilePerRow;
let tileHeight = screenHeight / tilePerColumn;
let tileInnerTileWidth = 5;
let tileInnerTileHeight = 5;

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");

// Color the background in goldßß
context.fillStyle = "#e4d00a";
context.fillRect(0, 0, screenWidth, screenHeight);

// Draw the tiles
for (var i = 0; i < tilePerRow / 2; i++) {
  for (var j = 0; j < tilePerColumn / 2; j++) {
    // black tiles
    context.fillStyle = "#000";
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
