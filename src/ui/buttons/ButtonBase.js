import Phaser from 'phaser'

export default class ButtonBase extends Phaser.Button {
  constructor ({ game, x, y, asset, callback, callbackContext, height, width, anchorX, anchorY }) {
    super(game, x, y, 'button', callback, callbackContext, 0, 0, 0, 0)

    this.height = height
    this.width = width
    this.anchor.setTo(anchorX, anchorY)
  }
}
