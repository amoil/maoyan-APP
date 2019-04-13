<template>
  <div>
    <CommonHeader :back="true" :title="'影院'"/>
    <CommonFooter :bottomActive="1"/>
    <section class="topbar" style>
      <div class="gray-bg topbar-bg">
        <div class="city-entry">
          <span class="city-name">{{city}}</span>
          <i class="city-entry-arrow"></i>
        </div>
        <div class="search-entry search-input" data-type="cinema">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwFJREFUSA3FVs1qU0EUTibBRQiCRF3UB3BTcFHwJ0XRJ+gDhDaQ5vcJ3PgCfYL80AYSyQP4BIKQiosuhLoQXOjCbqQIJUgoyY3fdzNnmCRzk3uvBQfmzrlzzvm+OTNzz7mJxH9qyTC83W733mQyeTKbzbbQc8lk8hL9Ip1OfyqVSr/CYCzbBBKDQHU6nX2MZfQ8HNWyM949LOAU/bharb7F6DlsnFNOYhDmp9NpGx7bTi/35HkqlaphAadu9eLsCjFIS57nNRHlLct0AnmIiL5ivETPQf8Q4y56Gt1v0F8rpRog78pc0LhATFJEemIZXwHoKJvNNguFwm9r3hcHg8Gd0WjUwEJfY+K26BH54SZyQ8ztBcB7K9IzAO01Go2fAhg0NpvNB9C9Q9+hjY781bpt9y8MyBTP1CZFpC/CkJKIdrSHyMUmiKPxXBeSJvOb2mq1DiDLRbqCvFer1f7QIGzT9nuwpz/bNnZxfy6uPv0VYWvKouKZho1UfGTUkR/JOyI3uDIno2JygMEzPTHhRRJlnFH78yvglueJ78JRzEhQyFkMXbfX5Rg0p/2HWi/4K+YKq9qSWf2dymvs0cax8W1AEuesCSaHm2gGZwnfYCuszhhh1l6EMYohGJwlfANF4gt5w+qYBv+52Tg2vg2sWNowIVVll2nQNogqa3/mcDZP48/frKdiPcWqpKKkmXstfWRR+/uFg7hB9VpSpikMTPg690YmpR/834gjiI9FXh79IoEzUUibn6GUtHnG3Bslbbbb7QxIfwDjriY5r9frj0Aux7jALSnTYxGH0bXW7gDkQ9jIdaRfLFLCfEefUXA1UxapvKl6bBF1EXUZAa0sYIFYyBFt7D8QHBu/kuebyFeINXnsf65KpfIR94WXqrSO3ElMB33hDrBNh5DX/mVCf4It7ctFwntyE3kgsbXaRL/fvz8ejx8DMPR/9SbyUMT2IqLIa8mjAMWxdZB/y2QyT80/cRzQMD78lNDKOHOa84fwZbFYtCtiGJj4Noy81+uZcvkXH+aXwmK6+EsAAAAASUVORK5CYII="
          >
          <span>搜影院</span>
        </div>
      </div>
    </section>
    <div class="nav-wrap filter-nav-wrap">
      <div class="tab mb-line-b">
        <div class="item" data-tab=".region">
          全城
          <span class="drop"></span>
        </div>
        <span class="haha">|</span>
        <div class="item" data-tab=".brand">
          品牌
          <span class="drop"></span>
        </div>
        <span class="haha">|</span>
        <div class="item" data-tab=".special">
          特色
          <span class="drop"></span>
        </div>
      </div>
    </div>
    <!--主题内容-->
    <div class="ocontent">
      <Scroll class="wrap_content">
        <div>
          <div class="cinema" v-for="(cinema,index) of cinemaList" :key="index">
            <div class="title">
              <span>{{ cinema.nm }}</span>
              <span class="price-block">
                <span class="price">{{ cinema.sellPrice }}</span>
                <span class="q">元起</span>
              </span>
            </div>
            <div class="location">
              <span class="address">{{ cinema.addr.join('')}}</span>
              <span class="distance">{{ cinema.distance.join('') }}</span>
            </div>
            <div class="label-block">
              <span class="label endorse">改签</span>
              <span class="label snack">小吃</span>
            </div>
            <div class="discount-block">
              <span class="discount-label-icon">卡</span>
              <span class="discount-label-text">开卡特惠，首单2张立减3元</span>
            </div>
          </div>
        </div>
      </Scroll>
    </div>
  </div>
</template>

<script>
import CommonHeader from "@/components/common/CommonHeader";
import CommonFooter from "@/components/common/CommonFooter";
import { mapState } from "vuex";
import Scroll from "@/components/scroll/Scroll";
import { getCinema } from "@/api/cinema";
export default {
  name: "Cinema",
  data() {
    return {
      cinemaList: []
    };
  },
  components: {
    CommonHeader,
    CommonFooter,
    Scroll
  },
  computed: {
    ...mapState({
      city: stat => stat.city.cityName
    })
  },
  mounted() {
    getCinema().then(res => {
      if (res.code == 1) {
        console.log(res.data);
        this.cinemaList = res.data;
      }
    });
    console.log(this.cinemaList);
  }
};
</script>

<style lang="stylus" scope>
.haha {
  color: #e6e6e6;
  vertical-align: middle;
  line-height: 40px;
}

.topbar {
  border-bottom: 1px solid #e6e6e6;
  height: 44px;

  .search-input {
    -webkit-box-flex: 1;
    flex-grow: 1;
  }
}

.gray-bg {
  background: #f5f5f5;
}

.city-entry {
  padding-left: 15px;
  font-size: 15px;
  color: #666;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  .city-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 70px;
    max-width: 19.2vw;
  }
}

.topbar-bg {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 44px;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.city-entry-arrow {
  margin-right: 5px;
  width: 0;
  height: 0;
  border: 4px solid #b0b0b0;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  display: inline-block;
  margin-left: 4px;
  margin-top: 5px;
}

.search-input {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 28px;
  font-size: 13px;
  color: #b2b2b2;
  margin-left: 18px;
  border: 0.5px solid #e6e6e6;
  border-radius: 5px;
  margin-right: 15px;
  width: 225px;
  background: #fff;

  img {
    width: 14px;
    height: 14px;
    margin-left: 3px;
    margin-right: 4px;
  }
}

.mb-line-b {
  border-bottom: 1px solid #e6e6e6;
}

.nav-wrap.filter-nav-wrap {
  width: 100%;
  height: 40px;
  z-index: 10;
  background-color: #fff;
  position: relative;

  .tab {
    display: -webkit-box;
    display: flex;

    .item {
      -webkit-box-flex: 1;
      flex: 1;
      text-align: center;
      line-height: 40px;
      position: relative;
      white-space: nowrap;
      overflow: hidden;
      font-size: 13px;
      text-overflow: ellipsis;

      .drop {
        display: inline-block;
        position: absolute;
        top: 18px;
        width: 0;
        height: 0;
        margin-left: 4px;
        border: 4px solid transparent;
        border-top-color: #b0b0b0;
      }
    }
  }
}

.loading {
  margin-top: 12px;
}

.ocontent {
  position: fixed;
  width: 100%;
  top: 136px;
  bottom: 56px;

  .wrap_content {
    overflow: hidden;
    min-height: 328px;
    margin-top: 0px;
    margin-bottom: 54px;

    .cinema {
      padding: 13px 15px 13px 0;
      margin-left: 15px;
      background-color: #fff;
      position: relative;
      overflow: hidden;

      .title {
        height: 23px;
        line-height: 23px;
        font-size: 16px;
        color: #000;

        .price-block {
          padding-top: 9px;
          padding-left: 3px;
          color: $bgColor;
          color: #e54847;

          .price {
            font-size: 18px;
          }

          .q {
            margin-left: 3px;
          }
        }
      }

      .location {
        margin-top: 6px;
        font-size: 13px;
        color: #666;

        .distance {
          margin-left: 5px;
        }
      }

      .label-block {
        height: 17px;
        line-height: 17px;
        margin-top: 6px;
        margin-bottom: 4px;
        overflow: hidden;
        font-size: 0;
        flex-shrink: 0;

        .label {
          position: relative;
          display: inline-block;
          padding: 0 3px;
          height: 15px;
          line-height: 15px;
          border-radius: 2px;
          font-size: 12px;
          margin-right: 6px;

          &.endorse {
            color: #589daf;
            border: 1px solid #589daf;
          }

          &.snack {
            color: #f90;
            border: 1px solid #f90;
          }
        }
      }

      .discount-block {
        color: #999;
        margin-bottom: 4px;

        .discount-label-icon {
          padding: 0 2px;
          height: 14px;
          line-height: 14px;
          border-radius: 2px;
          font-size: 12px;
          margin-right: 6px;
          display: inline-block;
          color: $bgColor;
          border: 1px solid $bgColor;
        }

        .discount-label-text {
          margin-left: 0;
          font-size: 11px;
        }
      }
    }
  }
}
</style>