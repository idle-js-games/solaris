/* globals __DEV__ */
import Phaser from 'phaser'

let game

export default class Game extends Phaser.State {
  preload () {
    game = this.game
    this.bg = game.add.tileSprite(0, 0, 1280, 720, 'bg')
    this.logo = game.add.sprite(5, 5, 'logo-white')
    this.logo.scale.setTo(0.2)
    this.logo.smoothed = true
  }

  create () {
    this.game.time.advancedTiming = true
  }

  render () {
    if (__DEV__) {
      this.game.debug.text(this.game.time.fps || '--', 2, 14, '#00ff00')
    }
  }
}
