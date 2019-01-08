# problem-vue-keepalive

## 使用

目前想到三种解决方式:
* remove后this.$nextTick add
* 强制从cache中删除
* 自己写个keep-alive-wrapper组件