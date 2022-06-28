const DATA = [
  {
    title: 'すごいHTML',
    author: 'HTML好き夫',
    desc: 'HTMLのココがすごい！これさえ読めばHTMLのすごい使い方がわかるすごい本です。',
    price: 800
  },
  {
    title: 'すごいCSS',
    author: 'CSS好き子',
    desc: 'CSSってすごいわよね？え？すごさがわからないですって？そんなあなたはこれを読みなさい！',
    price: 1000
  },
  {
    title: 'ふつうのJavaScript',
    author: 'Jv S Cript',
    desc: '俺は・・JavaScriptを・・ふつうに使いたいだけなんだ！！',
    price: 500
  },
  {
    title: '描いて覚えるjQuery',
    author: 'ジェイク & エリー',
    desc: '絵を描いてjQueryを覚えよう！こんな書籍が過去にあっただろうか！前代未聞のこの一冊、ぜひ体験してください。',
    price: 4649
  },
  {
    title: '0からはじめるReact',
    author: '李 亜駆人',
    desc: 'いまReactやるなら間違いなくこの1冊！Reactに精通した筆者がその全てを解説します。',
    price: 3000
  }
]

/**
 *
 * 本来は、サーバーにリクエストをして商品リストを取得する関数です。
 * ただ記事の本筋とは関係ないため、ここでは実際のリクエストをしていません。
 * setTimeoutで「非同期にデータを取得していること」を再現してます。
 *
 * 逐次読み替え && 必要に応じて実装してください。
 * ここではPromiseを使っていますが、コールバックでももちろんOKです。
 *
 */
export function fetchItemModel() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 200, data: DATA })
    }, 1000)
  })
}

export function calcTotalByItems(items) {
  if (items.length === 0) { return 0 }
  return items.map((item) => { return item.price })
              .reduce((prev, ttl) => { return prev + ttl })
}
