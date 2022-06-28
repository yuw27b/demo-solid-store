import Item from './Item.jsx'

const ItemList = (props) => {
  return (
    <ul className="ItemList">
      <For each={props.items}>{(item) =>
       <li className="ItemList__item">
        <Item
          {...item}
          btnLabel="カートに入れる"
          onClickBtn={() => { props.addToCart(item) }}
        />
      </li>
      }</For>
    </ul>
  )
}

export default ItemList
