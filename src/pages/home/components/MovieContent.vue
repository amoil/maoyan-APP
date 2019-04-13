<template>
  <div class="content">
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>
<script>
import HotMovies from "./HotMovies";
import CommingMovies from "./CommingMovies";
export default {
  name: "MovieContent",
  props: {
    menuIndex: {
      type: Number,
      default: 0
    }
  },
  components: {
    HotMovies,
    CommingMovies
  },

  computed: {
    currentComponent() {
      return this.menuIndex === 0 ? "HotMovies" : "CommingMovies";
    }
  }
};
</script>
<style lang="stylus" scoped>
.content {
  position: fixed;
  width: 100%;
  top: 96px;
  bottom: 56px;

  .wrap_content {
    overflow: hidden;
    height: 100%;
  }
}
</style>
