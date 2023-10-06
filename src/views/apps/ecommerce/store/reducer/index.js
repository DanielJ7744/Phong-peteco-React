const initialState = {
  products: [],
  wishlist: [],
  wishlistList: [],
  cart: [],
  productDetail: {},
  prodcutReview: [],
  params: {},
  totalProducts: 0,
  relatedProduct: [],
  filters: [],
  categories: [],
  orders: [],
  orderDetail: {},
  adresses: [],
  reviewCounter: [],
  groups: [], 
  companies: []
}

const ecommerceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return { ...state, products: action.data.data, params: action.params, totalProducts: action.data.total, filters: action.data.meta }
    case 'GET_WISHLIST':
      return { ...state, wishlist: action.data }
    case 'GET_WISHLIST_LIST':
        return { ...state, wishlistList: action.data }
    case 'DELETE_WISHLIST_ITEM':
      return { ...state }
    case 'GET_CART':
      return { ...state, cart: action.data.data}
    case 'DELETE_CART_ITEM':
      return { ...state }
    case 'ADD_TO_WISHLIST':
      return { ...state }
    case 'ADD_TO_CART':
      return { ...state }
    case 'GET_RELATED_PRODUCT' :
      return { ...state, relatedProduct: action.data }
    case 'GET_PRODUCT':
      return { ...state, productDetail: action.data }
    case 'GET_CATEGORIES':
      return {...state, categories: action.data}
    case 'GET_PRODUCT_REVIEW':
      return {...state, prodcutReview: action.data}
    case 'ADD_PRODUCT_REVIEW':
      return {...state }
    case 'GET_ALL_ORDERS':
      return {...state, orders: action.data}
    case 'GET_ORDER_DETAIL':
        return { ...state, orderDetail: action.data }
    case 'GET_ALL_ADRESSES':
      return {...state, adresses: action.data}
    case 'GET_ALL_REVIEWS_COUNTER':
     return {...state, reviewCounter: action.data}
    case 'GET_ALL_GROUPS':
     return {...state, groups: action.data}
    case 'GET_ALL_COMPANIES':
     return {...state, companies: action.data} 
        
    default:
      return state
  }
}

export default ecommerceReducer
