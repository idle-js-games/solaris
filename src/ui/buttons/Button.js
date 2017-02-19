import ButtonBase from './ButtonBase'
import ButtonLabel from './ButtonLabel'

export default class Button {
  createButton ({ game, x, y, asset, callback, callbackContext, height, width, anchorX, anchorY, text, style, textAnchorX, textAnchorY }) {
    let button = game.add.group()
    let buttonBase = new ButtonBase({
      game: game,
      x: x,
      y: y,
      asset: asset,
      callback: callback,
      height: height,
      width: width,
      anchorX: anchorX,
      anchorY: anchorY
    })
    let buttonLabel = new ButtonLabel({
      game: game,
      x: x,
      y: y,
      text: text,
      style: style,
      textAnchorX: textAnchorX,
      textAnchorY: textAnchorY
    })

    console.log(buttonBase)

    buttonBase.onInputOver.add(() => {
      console.log('onInputOver')
    })

    buttonBase.onInputOut.add(() => {
      console.log('onInputOut')
    })

    buttonBase.onInputDown.add(() => {
      console.log('onInputDown')
    })

    buttonBase.onInputUp.add(() => {
      console.log('onInputUp')
    })

    button.add(buttonBase)
    button.add(buttonLabel)

    return button
  }
}
