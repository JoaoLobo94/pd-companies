const ModelViewer = require('@metamask/logo')

// To render with fixed dimensions:
const AnimatedMetamaskLogo = ModelViewer({

  // Dictates whether width & height are px or multiplied
  pxNotRatio: true,
  width: 50,
  height: 40,
  // pxNotRatio: false,
  // width: 0.9,
  // height: 0.9,

  // To make the face follow the mouse.
  followMouse: false,

  // head should slowly drift (overrides lookAt)
  slowDrift: false,

})

// look at something on the page
AnimatedMetamaskLogo.lookAt({
  x: 100,
  y: 100,
})

// enable mouse follow
AnimatedMetamaskLogo.setFollowMouse(true)

// deallocate nicely
AnimatedMetamaskLogo.stopAnimation()

export default AnimatedMetamaskLogo;