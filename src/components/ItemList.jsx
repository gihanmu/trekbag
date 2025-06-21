import EmptyView from "./EmptyView";

export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItemCompletion,
}) {
  return !items.length ? (
    <EmptyView />
  ) : (
    <ul>
      {items.map((it) => (
        <Item key={it.id} item={it} onDeleteItem={handleDeleteItem} onToggleItemCompletion={handleToggleItemCompletion} />
      ))}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItemCompletion }) {
  return (
    <li className="item">
      <label onClick={() => onToggleItemCompletion(item.id)}>
        <input type="checkbox" />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
