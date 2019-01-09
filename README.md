# problem-vue-keepalive

基于iview-admin
https://github.com/iview/iview-admin/

## 使用

目前想到四种解决方式:
* remove后this.$nextTick add
* 需要缓存的组件名始终在include中，然后根据情况如在 beforeRouteLeave时 强制从cache中删除
* 需要缓存的组件名始终在include中，然后在组件的 activated, deactivated 生命周期去搞
* 自己写个keep-alive-wrapper组件