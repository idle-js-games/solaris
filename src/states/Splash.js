import Phaser from 'phaser'
import { centerGameObjects } from '../Utils'

export default class Splash extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    this.load.image('mushroom', 'assets/images/mushroom2.png')
    this.load.image('button', 'assets/images/button.png')
  }

  create () {
    this.state.start('MainMenu')
  }
}
