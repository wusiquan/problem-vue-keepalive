<template>
  <Layout style="height: 100%" class="main">
    <Sider :width="256" class="left-sider" :style="{overflow: 'hidden'}">
      <side-menu :active-name="currentRouteName" @on-select="turnToPage"></side-menu>
    </Sider>
    <Layout>
      <Header class="header-con"></Header>
      <Content class="main-content-con">
        <Layout class="main-layout-con">
          <div class="tag-nav-wrapper">
            <tags-nav
              :value="currentRouteName"
              :list="tagNavList"
              @handle-click="handleClick"
              @on-close="handleCloseTag"
            />
          </div>
          <Content class="content-wrapper">
            <keep-alive :include="cacheList">
              <router-view></router-view>
            </keep-alive>
          </Content>
        </Layout>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import fp from 'lodash/fp'  
import { mapMutations } from 'vuex'
import SideMenu from './side-menu/side-menu'
import TagsNav from './tags-nav/tags-nav'

export default {
  components: {
    SideMenu,
    TagsNav
  },

  data() {
    return {
      currentRouteName: this.$route.name
    }
  },

  computed: {
    tagNavList() {
      return this.$store.state.app.tagNavList
    },

    cacheList() {
      // tagNavList一变化这里都得循环一遍...
      return this.tagNavList.map(route => {
        if (route.meta.keepAlive === true) {
          let routeCompName = this.findCompNameByRoute(route)
          return routeCompName
        }
      })
    }
  },

  created() {
    this.addTag({
      route: this.$route
    })
  },

  methods: {
    ...mapMutations([
      'addTag'
    ]),

    findCompNameByRoute(route) {
      let _ = fp
      
      let findProp = _.pipe(
        _.find(o => {
          return o.path === route.path
        }),
        _.prop('components.default.name')
      )

      return findProp(route.matched)
    },

    // handleCachePage(route) {
    //   if (route.meta.keepAlive === true) {
    //     let routeCompName = this.findCompNameByRoute(route)
    //      this.$store.commit('addCachePage', routeCompName)
    //   }
    // },

    turnToPage(name) {
      this.$router.push(name)
    },

    handleClick(routeName) {
      this.turnToPage(routeName)
    },

    handleCloseTag() {
      console.log('tag close')
    }
  },

  watch: {
    $route(to) {
      this.addTag({
        route: to
      })

      // NOTE: 为了给它tag加enter transition所以搞了个nextTick
      this.$nextTick(() => {
        this.currentRouteName = to.name
      })
    }
  }
}
</script>

<style lang="less" src="./main.less"></style>
