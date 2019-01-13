<template>
  <Row class="side-menu-wrapper">
    <Col span="6">
      <Menu :active-name="activeName" theme="dark" @on-select="handleSelect">
        <Submenu name="a-submenu">
          <template slot="title">
            <Icon type="ios-book"/>a-submenu
          </template>
          <MenuItem name="a_page" to="a-page">a-page页</MenuItem>
          <MenuItem name="a_child_page" to="a-child-page">a-child-page页</MenuItem>
          <MenuItem name="a_parent_page" to="a-parent-page">a-parent-page页</MenuItem>
        </Submenu>
        <Submenu name="b-submenu">
          <template slot="title">
            <Icon type="ios-book"/>b-submenu
          </template>
          <MenuItem name="b_page" to="b-page">b-page页</MenuItem>
        </Submenu>
      </Menu>
    </Col>
  </Row>
</template>

<script>
export default {
  props: {
    activeName: {
      type: String,
      default: ''
    }
  },

  methods: {
    handleSelect(name) {
      this.$emit('on-select', name)
    }
  }
}
</script>
