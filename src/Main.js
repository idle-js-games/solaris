import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/Boot'
import SplashState from './states/Splash'
import GameState from './states/Game'
import MainMenuState from './states/MainMenu'

import Config from './Config'

class Game extends Phaser.Game {
  constructor () {
    const docElement = document.documentElement
    const width = docElement.clientWidth > Config.gameWidth ? Config.gameWidth : docElement.clientWidth
    const height = docElement.clientHeight > Config.gameHeight ? Config.gameHeight : docElement.clientHeight
    super(width, height, Phaser.CANVAS, 'content', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Splash', SplashState, false)
    this.state.add('MainMenu', MainMenuState, false)
    this.state.add('Game', GameState, false)
    this.state.start('Boot')
  }
}

window.game = new Game()
