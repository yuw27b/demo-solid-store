## Available Scripts

In the project directory, you can run:

### `npm dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)

---

## デモについて

### デモに含んでるもの

- コンポーネント
- createSignal
    - createEffectも足せそう（カートに追加されました！ってtoast出すとか）
- createResource(非同期処理の扱い)
- For (Index)
- Show
- props
    - 分割代入はNG（マウント時しか代入されないので更新されなくなる）
    - mergeProps/splitProps
- イベント処理（onClick）

### 入れたい
ネストの深いところのデータを更新したときに、再レンダリングコストが低いのが特徴なので、そういう例を入れたい（ややこしくなりそうだけど）。
カートに数量を表示する→同じ商品を入れたら数量だけが1→2になるとか？

### 入れる？
- createMemo
- Store
- ErrorBoundary
