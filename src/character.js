export default class Character {
  constructor(spriteName) {
    this.width = 64;
    this.height = 64;

    this.position = {
      x: 1,
      y: 1
    };

    this.spriteName = spriteName;
  }

  draw(context, tileWidth, tileHeight) {
    var charSprite = document.getElementById(this.spriteName);

    context.drawImage(
      charSprite,
      this.position.x * tileWidth + 20,
      this.position.y * tileHeight + 13,
      60,
      80
    );
  }
}
