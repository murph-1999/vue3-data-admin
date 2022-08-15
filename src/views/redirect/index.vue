<!--
 * @Description:重定向
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-11 14:37:57
 * @LastEditTime: 2022-08-11 14:49:02
-->

<script lang='ts' setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const { params, query } = route
const { path } = params
console.log(path)
router.replace({ path: '/' + path, query }).catch((err) => {
  console.warn(err)
})
</script>
<style lang='scss' scoped>
</style>
