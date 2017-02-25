import Phaser from 'phaser'
import WebFont from 'webfontloader'

let loadingText

export default class Boot extends Phaser.State {
  init () {
    this.fontsReady = false
    this.assetsReady = false
    this.fontsLoaded = this.fontsLoaded.bind(this)
  }

  preload () {
    this.game.stage.backgroundColor = '#09172A'
    this.loadFonts()
  }

  create () {
    this.game.renderer.renderSession.roundPixels = true
    this.game.load.onFileComplete.add(this.fileComplete, this)
    this.game.load.onLoadComplete.add(this.assetsLoaded, this)
  }

  loadFonts () {
    WebFont.load({
      google: {
        families: ['Muli', 'Montserrat:300']
      },
      active: this.fontsLoaded
    })

    loadingText = this.add.text(this.world.centerX, this.world.centerY, 'Loading fonts', { font: '16px Arial', fill: '#dddddd', align: 'center' })
    loadingText.anchor.setTo(0.5, 0.5)
  }

  fontsLoaded () {
    this.fontsReady = true
    this.loadAssets()
  }

  loadAssets () {
    loadingText.setText('loading assets')
    this.game.load.pack('game', './resources/configs/assetPack.json', null, this)
    this.game.load.start()
  }

  fileComplete (progress, cacheKey, success, totalLoaded, totalFiles) {
    loadingText.setText('Loading assets\n File Complete: ' + progress + '% - ' + totalLoaded + ' out of ' + totalFiles)
  }

  assetsLoaded () {
    this.assetsReady = true
  }

  render () {
    if (this.fontsReady && this.assetsReady) {
      this.state.start('MainMenu')
    }
  }
}
