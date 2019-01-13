<template>
  <div class="tags-nav">
    <transition-group name="taglist" tag="div">
      <Tag
        class="tag-item"
        type="dot"
        v-for="(item, index) in list"
        ref="tagsPageOpened"
        :key="`tag-nav-${item.name}`"
        :name="item.name"
        :closable="true"
        :color="item.name == value ? 'primary' : 'default'"
        @click.native="handleClick(item.name)"
      >
        {{ item.meta.title }}
      </Tag>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },

  methods: {
    handleClick(routeName) {
      console.log(123)
      this.$emit('handle-click', routeName)
    }
  }
}
</script>

<style lang="less">
.tag-item {
  transition: transform  .5s;

  .ivu-tag-dot-inner {
    transition: background 1  s;
  }
}

.taglist-enter, .taglist-leave-to {
  // opacity: 0;
  transform: translateY(10px);
}
</style>
