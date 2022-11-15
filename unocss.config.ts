/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-11-10 15:53:41
 * @LastEditTime: 2022-11-10 17:00:01
 */
import {
  transformerVariantGroup,
  transformerDirectives,
  presetAttributify,
  defineConfig,
  presetMini,
  presetUno
} from 'unocss'
import path from 'path'
export default defineConfig({
  presets: [presetMini({ dark: 'class' }), presetAttributify(), presetUno()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  exclude: [path.resolve(__dirname, 'node_modules/')],
  shortcuts: {
    'wh-full': 'w-full h-full',
    'flex-ac': 'flex justify-around items-center',
    'flex-bc': 'flex justify-between items-center'
  },
  theme: {}
})
