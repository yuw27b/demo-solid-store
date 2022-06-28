import { calcTotalByItems } from '../util'

import Cart from './Cart.jsx'
import ItemList from './ItemList.jsx'

const Container = (props) => {
  return (
    <main className="Container">
      <div className="ItemListArea Container__flex">
        <h2>商品一覧 / 品数: {props.listItems.length}</h2>
        <ItemList
          items={props.listItems}
          addToCart={props.addToCart}
        />
      </div>

      <div className="CartArea">
        <h4>カート</h4>
        <Cart
          items={props.cartItems}
          removeFromCart={props.removeFromCart}
        />
        <div className="Total">
          計{props.cartItems.length}点
          <span className="Total__price">{calcTotalByItems(props.cartItems)}円</span>
        </div>
      </div>
    </main>
  )
}

export default Container
