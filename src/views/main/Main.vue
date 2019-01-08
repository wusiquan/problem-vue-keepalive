<template>
  <Layout style="height: 100%" class="main">
    <Sider :width="256" class="left-sider" :style="{overflow: 'hidden'}">
      <side-menu></side-menu>
    </Sider>
    <Layout>
      <Header class="header-con">
      </Header>
      <Content class="main-content-con">
        <Layout class="main-layout-con">
          <div class="tag-nav-wrapper">
            <tags-nav :value="$route" @input="handleClick" :list="tagNavList" @on-close="handleCloseTag"/>
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
import SideMenu from './side-menu'
import TagsNav from './tags-nav'

export default {
  components: {
    SideMenu,
    TagsNav
  },

  data() {
    return {
      tagNavList: [],
      cacheList: []
    }
  },

  methods: {
    handleClick() {

    },

    handleCloseTag() {

    }
  }
}
</script>

<style lang="less" src="./main.less"></style>
