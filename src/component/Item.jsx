const Item = (props) => {
  return (
    <div className="Item">
      <h3 className="Item__title">{props.title}</h3>
      <span className="Item__author">{props.author}</span>
      <p className="Item__desc">{props.desc}</p>
      <p className="Item__price">{props.price}円</p>
      <div className="Item__btnWrap">
        <button type="button" className="Btn" onClick={props.onClickBtn}>{props.btnLabel}</button>
      </div>
    </div>
  );
};

export default Item
