import Phaser from 'phaser'

export default class Splash extends Phaser.State {
  preload () {
    this.load.spritesheet('button', './assets/images/button.png', 500, 250, 3)
    this.load.image('bg', './assets/images/bg.png')
    this.load.image('logo-white', './assets/images/logo-white.png')
  }

  create () {
    this.state.start('MainMenu')
  }
}
