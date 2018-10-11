import { ajaxFunc } from '@/request/tool'

const element = {}
// 商家信息
element.fetchSeller = ajaxFunc('/seller')

// 商品信息
element.fetchGoods = ajaxFunc('/goods')

// 评论信息
element.fetchRatings = ajaxFunc('/ratings')

element.fetchDemo = ajaxFunc('/seller')

export default element
