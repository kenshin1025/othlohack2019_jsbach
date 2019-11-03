<template>
  <div :class="set_bg">
    <div v-if="sound">
      ○
    </div>
    <div v-else>
      X
    </div>
  </div>
</template>

<script>
export default {
  name: "BeatsNode",
  props: ["sound", "is_active"],
  computed: {
    set_bg() {
      return {
        not_active: !this.is_active,
        active: this.is_active
      };
    }
  }
};
</script>

<style scoped>
.not_active {
  background-color: silver;
}

.active {
  background-color: white;
}
</style>
