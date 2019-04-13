<template>
  <div>
    <CommonHeader :back="false" :title="'首页'"/>
    <CommonFooter/>
    <NavMenu :actived-index="activedMenuIndex" @change="changeActivedMenuIndex"></NavMenu>
    <MovieContent :menu-index="activedMenuIndex"/>
  </div>
</template>
<script>
import CommonHeader from "@/components/common/CommonHeader";
import CommonFooter from "@/components/common/CommonFooter";
import NavMenu from "./components/NavMenu";
import MovieContent from "./components/MovieContent";

export default {
  name: "Home",
  components: {
    CommonHeader,
    CommonFooter,
    NavMenu,
    MovieContent
  },
  data() {
    return {
      activedMenuIndex: 0
    };
  },
  methods: {
    changeActivedMenuIndex(index) {
      this.activedMenuIndex = index;
    }
  }
};
</script>