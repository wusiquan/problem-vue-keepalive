<template>
  <div @click="handleClick">
    <button class="btn btn-minus">-</button>
    {{ num }}
    <button class="btn btn-plus">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0
    }
  },

  methods: {
    handleClick() {
      this.num++
    }
  }
}
</script>

<style>
.btn {
  display: inline-block;
  width: 26px;
  height: 26px;
  line-height: 26px;
  font-size: 16px;
  cursor: pointer
}
</style>


