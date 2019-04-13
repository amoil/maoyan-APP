<template>
    
    <div class="nav-menu scale-1px">
    <router-link to="/city">
      <div class="left">
        <span>{{city}}</span>
        <span class="iconfont icon-xiala"></span>
      </div>
    </router-link>

    <div class="center">
      <span
        class="menu"
        
        v-for="(m, i) in menus"
        :key="m.index"
        @click="changeMenu(i)"
        :class="{active: activedIndex === i }"

        
        
      >{{m.title}}</span>
    </div>
    <div class="right" @click="goSearch">
      <span class="iconfont icon-sousuo"></span>
    </div>
  </div>
</template>
<script>
import {mapState} from "vuex"
export default {
    name:"NavMenu",
    props: {
            activedIndex: {
                type: Number,
                default: 0
            }   
    },
    computed: {
      ...mapState({
        city: state => state.city.cityName
      })
    },
    data() {
      return {
          
        menus: [{ index: 0, title: "正在热映" }, { index: 1, title: "即将上映" }]
      };
    },
    methods:{
      changeMenu(index){
        this.$emit("change",index)
       
      },
      goSearch(){
        this.$router.push({path:"/search", query: { searchtype: "movie" }})
      }
    }
}
</script>
<style lang="stylus">
@import '~stylus/variable.styl';

.nav-menu {
  height: 44px;
  display: flex;

  .left {
    width: 80px;
    float: left;
    line-height: 44px;
    color: #666;
    text-align: center;

    .icon-xiala {
      font-size: 14px;
    }
  }

  .center {
    flex: 1;
    text-align: center;
    line-height: 44px;
    padding: 0 20px;
    position: relative;

    .menu {
      display: inline-block;
      color: #666;
      font-weight: 700;
      width: 50%;
      float: left;
      box-sizing: border-box;

      &.active {
        color: $bgColor;

        &:after {
          content: '';
          display: block;
          position: absolute;
          bottom: -1px;
          width: calc(50% - 20px);
          height: 2px;
          background-color: $bgColor;
        }
      }
    }
  }

  .right {
    float: right;
    width: 50px;
    color: $bgColor;
    line-height: 44px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }
}

html {
  touch-action: none;
}
</style>
