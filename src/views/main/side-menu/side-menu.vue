<template>
  <Row class="side-menu-wrapper">
    <Col span="6">
      <Menu theme="dark" @on-select="handleSelect">
        <Submenu name="a-submenu">
          <template slot="title">
            <Icon type="ios-book"/>a-submenu
          </template>
          <MenuItem name="a-page">aPage</MenuItem>
          <MenuItem name="a-child-page">aChildPage</MenuItem>
          <MenuItem name="a-parent-page">aParentPage</MenuItem>
        </Submenu>
        <Submenu name="b-submenu">
          <template slot="title">
            <Icon type="ios-book"/>b-submenu
          </template>
          <MenuItem name="b-page">bPage</MenuItem>
        </Submenu>
      </Menu>
    </Col>
  </Row>
</template>

<script>
export default {
  methods: {
    handleSelect(name) {
      this.$emit('on-select', name)
    }
  }
}
</script>
