/* globals __DEV__ */
import Phaser from 'phaser'
import Button from '../ui/buttons/Button'

let game
let stars

export default class Game extends Phaser.State {
  preload () {
    game = this.game
    this.load.json('gameConfig', './resources/configs/game.json')
    this.bg = game.add.tileSprite(0, 0, 1600, 900, 'bg')
    stars = game.add.tileSprite(0, 0, 1600, 900, 'stars')
    stars.alpha = 0.2
  }

  create () {
    let button = new Button()
    let menuPanel = game.add.group()

    const menuConfig = game.cache.getJSON('gameConfig')
    menuConfig.components.forEach((component) => {
      let menuItem = button.createButton({
        game: game,
        x: component.x,
        y: component.y,
        asset: component.asset,
        callback: () => {
          this.state.start(component.link)
        },
        height: component.height,
        width: component.width,
        anchorX: component.anchorX,
        anchorY: component.anchorY,
        text: component.label.text,
        style: {
          font: component.label.style.font,
          fill: component.label.style.fill,
          align: component.label.style.align
        },
        textAnchorX: component.label.anchorX,
        textAnchorY: component.label.anchorY
      })

      menuPanel.add(menuItem)
    })

    menuPanel.x = 112.5
    menuPanel.y = 35
    this.game.time.advancedTiming = true
  }

  update () {
    stars.tilePosition.x += 0.25
  }

  render () {
    if (__DEV__) {
      this.game.debug.text(this.game.time.fps || '--', 2, 14, '#00ff00')
    }
  }
}
