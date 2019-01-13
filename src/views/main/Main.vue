<template>
  <Layout style="height: 100%" class="main">
    <Sider :width="256" class="left-sider" :style="{overflow: 'hidden'}">
      <side-menu :active-name="currentRouteName" @on-select="turnToPage"></side-menu>
    </Sider>
    <Layout>
      <Header class="header-con">
      </Header>
      <Content class="main-content-con">
        <Layout class="main-layout-con">
          <div class="tag-nav-wrapper">
            <tags-nav :value="currentRouteName" @input="handleClick" :list="tagNavList" @on-close="handleCloseTag"/>
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
      cacheList: [],
      currentRouteName: this.$route.name
    }
  },

  computed: {
    tagNavList() {
      return this.$store.state.app.tagNavList
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

    turnToPage(name) {
      this.$router.push(name)
    },

    handleClick() {
      console.log('tag click')
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

      // 为了给它tag加enter transition所以搞了个nextTick
      this.$nextTick(() => {
        this.currentRouteName = to.name
      })
    }
  }
}
</script>

<style lang="less" src="./main.less"></style>
