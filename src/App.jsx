import { createSignal, createResource, Show } from 'solid-js'

import { fetchItemModel } from './util'
import Header from './component/Header.jsx'
import Container from './component/Container.jsx'
import Footer from './component/Footer.jsx'

function App() {

  const [cartItems, setCartItems] = createSignal([])
  const [listItems] = createResource(fetchItemModel)

  const addToCart = (item) => {
    const newCartItems = cartItems().slice()
    newCartItems.push(item)
    setCartItems(newCartItems)
  }

  const removeFromCart = (idx) => {
    const newCartItems = cartItems().slice()
    newCartItems.splice(idx, 1)
    setCartItems(newCartItems)
  }

  return (
    <div>
      <Header />
      <Show
        when={!listItems.loading}
        fallback={<div>Loading...</div>}
      >
        <Container
          listItems={listItems().data}
          cartItems={cartItems()}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </Show>
      <Footer />
    </div>
  )
}

export default App
