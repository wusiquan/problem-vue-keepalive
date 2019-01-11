<template>
  <Layout style="height: 100%" class="main">
    <Sider :width="256" class="left-sider" :style="{overflow: 'hidden'}">
      <side-menu @on-select="turnToPage"></side-menu>
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
      currentRouteName: ''
    }
  },

  computed: {
    tagNavList() {
      return this.$store.state.app.tagNavList
    }
  },

  methods: {
    ...mapMutations([
      'addTag'
    ]),

    turnToPage(name) {
      this.$router.push(name)
    },

    handleClick() {
      
    },

    handleCloseTag() {

    }
  },

  watch: {
    $route(to) {
      this.addTag({
        route: to
      })

      this.$nextTick(() => {
        this.currentRouteName = to.name
      })
    }
  }
}
</script>

<style lang="less" src="./main.less"></style>
