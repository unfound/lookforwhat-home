<template>
  <section class="canvas-wrap">
    <div class="canvas-content">
    </div>
    <div id="canvas" class="gradient"></div>
  </section>
</template>

<style>
body {
  background-color: #fff;
  margin: 0px;
  /*overflow: hidden;*/
  font-family: arial;
  color: #fff;
}

a {
  color: #0078ff;
}

#canvas {
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #1a1724;
}

.canvas-wrap {
  position: relative;
}

div.canvas-content {
  position: relative;
  z-index: 2000;
  color: #fff;
  text-align: center;
  padding-top: 30px;
}
</style>

<script>
import { LinesAnimation } from '../utils/3d-lines-animation.js'
import { colorAnimation } from '../utils/color.js'

export default {
  mounted () {
    this.$nextTick(() => {
      LinesAnimation()
      colorAnimation()
    })
  }
}
</script>
