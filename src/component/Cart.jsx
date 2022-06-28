import { For } from 'solid-js'

import Item from './Item.jsx'

const Cart = (props) => {
  return (
    <div className="Cart">
      <Show
        when={props.items && props.items.length > 0}
        fallback={() => <span>カートに商品がありません</span>}
      >
        <For each={props.items}>{(item, i) =>
          <Item
            {...item}
            btnLabel="カートから出す"
            onClickBtn={() => { props.removeFromCart(i()) }}
          />
        }</For>
      </Show>
    </div>
  )
}

export default Cart
