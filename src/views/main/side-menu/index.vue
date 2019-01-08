<template>
  <Row class="side-menu-wrapper">
    <Col span="6">
      <Menu theme="dark">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-book"/>课程中心
          </template>
          <MenuItem name="1-1">阶段管理</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-book"/>教学管理
          </template>
          <MenuItem name="2-1">学习过程管理(导师)</MenuItem>
          <MenuItem name="2-2">学习过程管理(班主任)</MenuItem>
          <MenuItem name="2-3">学习过程管理(数据)</MenuItem>
        </Submenu>
      </Menu>
    </Col>
  </Row>
</template>

<script>
export default {}
</script>
