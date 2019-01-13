<template>
  <div>
    <h4>a-page</h4>
    <Counter />
  </div>
</template>

<script>
import Counter from '@/components/Counter'

export default {
  name: 'APage',
  
  components: {
    Counter
  },
  
  created() {
    console.log('a-page created')
  },

  destroyed() {
    console.log('a-page destroyed')
  },

  beforeRouteLeave(to, from, next) {
    // NOTE: 似乎也可以写到route.meta里
    let keepAliveMap = {
      'a-child-page': 1
    }

    if (!keepAliveMap[to.name]) {
      // destroy...
      let vnode = this.$vnode
      let parentVnode = vnode.parent
      
      if (parentVnode.componentInstance.cache) {
        var key = vnode.key == null
          ? vnode.componentOptions.Ctor.cid + (vnode.componentOptions.tag ? `::${vnode.componentOptions.tag}` : '')
          : vnode.key;
        var cache = parentVnode.componentInstance.cache;
        var keys  = parentVnode.componentInstance.keys;

        if (cache[key]) {
          this.$destroy()
          // remove key
          if (keys.length) {
            var index = keys.indexOf(key)
            if (index > -1) {
                keys.splice(index, 1)
            }
          }

          cache[key] = null
        }
      }
    }

    next()
  }
}
</script>
