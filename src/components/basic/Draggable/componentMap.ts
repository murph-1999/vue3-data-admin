/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-10-30 17:18:41
 * @LastEditTime: 2022-10-30 17:30:18
 */
/**
 * Component list, register here to setting it in the form
 */

import UserModule from '../../business/user'
import AgencyModule from '../../business/agency'

const componentMap = {
  UserModule,
  AgencyModule
}

export type ComponentMapType = keyof typeof componentMap;

export { componentMap }
