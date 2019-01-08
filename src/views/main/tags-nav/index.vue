<template>
  <div class="tags-nav">
    <transition-group name="taglist-moving-animation">
      <Tag
        type="dot"
        v-for="(item, index) in list"
        ref="tagsPageOpened"
        :key="`tag-nav-${index}`"
        :name="item.name"
        :data-route-item="item"
        color="default"
      >aaa</Tag>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },

  created() {
    console.log('tagsNav created')
  }
}
</script>
