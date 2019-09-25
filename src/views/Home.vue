<template>
  <div class="home">
    <BodyImage>
      <p class="lead" slot="sub-title">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <p slot="intro">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    </BodyImage>
  </div>
</template>

<script>
import BodyImage from '@/components/BodyImage'
export default {
  components: {
    BodyImage
  }
}
</script>
