import Phaser from 'phaser'

export default class ButtonLabel extends Phaser.Text {
  constructor ({ game, x, y, text, style, textAnchorX, textAnchorY }) {
    super(game, x, y, text, style)
    this.anchor.setTo(textAnchorX, textAnchorY)
  }
}

