import { request } from '@/utils/index'
import * as model from './model'

export function getData (params) {
  return request(`${process.env.NODE_ENV}/index/drawing`, 'post', model.getData, params)
}
