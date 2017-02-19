import Phaser from 'phaser'

export default class ButtonBase extends Phaser.Button {
  constructor ({ game, x, y, asset, callback, callbackContext, height, width, anchorX, anchorY }) {
    super(game, x, y, asset, callback, callbackContext, 1, 0, 2)

    this.height = height
    this.width = width
    this.anchor.setTo(anchorX, anchorY)
  }
}
