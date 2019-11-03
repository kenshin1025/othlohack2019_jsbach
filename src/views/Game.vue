<template>
  <div class="game">
    {{ $store.state.selecting_chords }}
    <score></score>
  </div>
</template>

<script>
import Score from "../components/Score";

export default {
  name: "Game",
  components: {
    Score
  }
};
</script>

<style scoped></style>
