import Phaser from 'phaser'

export default class Splash extends Phaser.State {
  preload () {
    this.load.spritesheet('button', './assets/images/button.png', 500, 250, 3)
  }

  create () {
    this.state.start('MainMenu')
  }
}
