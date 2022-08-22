<template>
  <div id="app-container">
    123
  </div>
</template>
<script setup>
import { nextTick, ref, onMounted } from "@vue/runtime-core";
onMounted(()=>{
  let videoDoorEl = new OGVPlayer({});
  document.getElementById('app-container').appendChild(videoDoorEl);
  videoDoorEl.muted = true;
  videoDoorEl.src = 'static/file/movie.ogv';
  videoDoorEl.play()
})
</script>