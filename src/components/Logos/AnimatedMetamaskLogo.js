// This needs to be converted into a react component. Here only or MVP
const ModelViewer = require('@metamask/logo')
const AnimatedMetamaskLogo = ModelViewer({
  pxNotRatio: true,
  width: 110,
  height: 110,
  followMouse: false,
  slowDrift: false,
})
AnimatedMetamaskLogo.setFollowMouse(true)

export default AnimatedMetamaskLogo;