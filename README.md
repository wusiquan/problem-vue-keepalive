# problem-vue-keepalive

基于iview-admin
https://github.com/iview/iview-admin/

## 使用

目前想到四种解决方式:
* remove后this.$nextTick add
  (如果子更新了数据，返回的时候可以在activated和deactivated里处理，但是有时需要在created里做this.$route.meta.keepAlive === false，来区分ka情况和非ka情况...)

* 需要缓存的组件名始终在include中，然后根据情况如在 beforeRouteLeave时 强制从cache中删除
  (如果子更新了数据，返回的时候可以在activated和deactivated里处理)

  A -> A子页面 -> A  结果: A应该被缓存  
  A -> B页面 -> B    结果: A不应该被缓存

* 需要缓存的组件名始终在include中，然后在组件的 activated, deactivated 生命周期去搞
* 自己写个keep-alive-wrapper组件