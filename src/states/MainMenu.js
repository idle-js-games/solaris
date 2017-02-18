import Phaser from 'phaser'
import Button from '../ui/buttons/Button'

export default class MainMenu extends Phaser.State {
  preload () {
    this.load.json('menuConfig', './src/ui/configs/main-menu.json')
  }

  create () {
    let button = new Button()
    let menuPanel = this.game.add.group()

    const title = new Phaser.Text(this.game, this.game.world.centerX, this.game.world.centerY - 200, 'Main Menu', {
      font: '64px Muli',
      fill: 'white',
      align: 'center'
    })
    title.anchor.setTo(0.5)
    this.game.add.existing(title)

    const menuConfig = this.game.cache.getJSON('menuConfig')
    menuConfig.components.forEach((component) => {
      menuPanel.add(
        button.createButton({
          game: game,
          x: component.x,
          y: component.y,
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
      )
    })

    menuPanel.x = this.game.world.centerX
    menuPanel.y = this.game.world.centerY

    console.log(menuPanel)

    const info = new Phaser.Text(this.game, this.game.world.centerX, this.game.world.centerY + 340, '(Game - v0.0.1)', {
      font: '14px Muli',
      fill: 'white',
      align: 'center'
    })
    info.anchor.setTo(0.5)
    this.game.add.existing(info)
  }
}
