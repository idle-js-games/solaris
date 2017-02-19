/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'

export default class Game extends Phaser.State {
  create () {
    const bannerText = 'GAME SCREEN'
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    banner.font = 'Muli'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#263238'
    banner.smoothed = false
    banner.anchor.setTo(0.5)

    this.mushroom = new Mushroom({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'button'
    })

    this.game.add.existing(this.mushroom)
  }

  render () {
    if (__DEV__) {
      this.game.debug.text(this.game.time.fps || '--', 2, 14, '#00ff00')
    }
  }
}
