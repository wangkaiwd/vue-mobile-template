import { ajaxFunc } from '@/request/tool'
class Element {
  static fetchSeller = ajaxFunc('/seller')
  static fetchGoods = ajaxFunc('/goods')
  static fetchRatings = ajaxFunc('/ratings')
}
export default Element

const element = {
  fetchGoods: ajaxFunc('/seller'),
  fetchGoods: ajaxFunc('/goods'),
  fetchRatings: ajaxFunc('/ratings')
}