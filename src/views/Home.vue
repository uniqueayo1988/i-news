<template>
  <div class="home">
    <BodyImage>
      <p class="lead" slot="sub-title">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <p slot="intro">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    </BodyImage>
    <AllNews/>
  </div>
</template>

<script>
import BodyImage from '@/components/BodyImage'
import AllNews from '@/components/AllNews'
export default {
  components: {
    BodyImage,
    AllNews
  }
}
</script>
