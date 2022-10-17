<template>
  <div class="container">
    <button type="button" @click="doCopy">Copy!</button>
  </div>
</template>

<script>
import { copyText } from 'vue3-clipboard'

export default {
  setup() {
    const doCopy = () => {
      copyText('Hello Clipborad', undefined, (error, event) => {
        if (error) {
          alert('Can not copy')
          console.log(error)
        } else {
          alert('Copied')
          console.log(event)
        }
      })
    }

    return { doCopy }
  },
}
</script>