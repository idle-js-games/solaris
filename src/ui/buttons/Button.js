import ButtonBase from './ButtonBase'
import ButtonLabel from './ButtonLabel'

export default class Button {
  createButton ({ game, x, y, asset, callback, callbackContext, overFrame, outFrame, downFrame, upFrame, height, width, anchorX, anchorY, text, style, textAnchorX, textAnchorY }) {
    let buttonBase = new ButtonBase({
      game: game,
      x: x,
      y: y,
      asset: asset,
      overFrame: overFrame,
      outFrame: outFrame,
      downFrame: downFrame,
      upFrame: upFrame,
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

    let button = game.add.group()
    button.add(buttonBase)
    button.add(buttonLabel)

    return button
  }
}
