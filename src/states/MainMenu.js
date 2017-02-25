/* globals __DEV__ */
import Phaser from 'phaser'
import Button from '../ui/buttons/Button'

let game
let stars

export default class MainMenu extends Phaser.State {

  preload () {
    game = this.game
    this.load.json('menuConfig', './resources/configs/mainMenu.json')
    this.bg = game.add.tileSprite(0, 0, 1280, 720, 'bg')
    stars = game.add.tileSprite(0, 0, 1280, 720, 'stars')
    stars.alpha = 0.2
    let logo = game.add.sprite(game.world.centerX - 285, game.world.centerY - 232, 'logo-white')
    logo.scale.setTo(0.75)
  }

  create () {
    let button = new Button()
    let menuPanel = game.add.group()

    const menuConfig = game.cache.getJSON('menuConfig')
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

    menuPanel.x = game.world.centerX
    menuPanel.y = game.world.centerY + 20

    const info = new Phaser.Text(game, game.world.centerX, game.world.centerY + 340, 'Version 0.0.1a', {
      font: '14px Muli',
      fill: 'white',
      align: 'center'
    })
    info.anchor.setTo(0.5)
    game.add.existing(info)
    game.time.advancedTiming = true
  }

  update () {
    stars.tilePosition.x += 0.25
  }

  render () {
    if (__DEV__) {
      game.debug.text(game.time.fps || '--', 2, 14, '#00ff00')
    }
  }
}
