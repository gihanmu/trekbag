import Select from "react-select";
import EmptyView from "./EmptyView";
import { useMemo, useState } from "react";
import { useItemStore } from "../store/itemStore";

const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  }, 
];

export default function ItemList() {
  const items = useItemStore((state) => state.items);
  
  const handleDeleteItem = useItemStore((state) => state.deleteItem);
  const handleToggleItemCompletion = useItemStore((state) => state.toggleItem);
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        } else if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }
        return;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {sortedItems.length === 0 && <EmptyView />}
      {sortedItems.length > 0 && (
        <section className="sorting">
          <Select
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      )}
      {sortedItems.map((it) => (
        <Item
          key={it.id}
          item={it}
          onDeleteItem={handleDeleteItem}
          onToggleItemCompletion={handleToggleItemCompletion}
        />
      ))}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItemCompletion }) {
  return (
    <li className="item">
      <label onClick={() => onToggleItemCompletion(item.id)}>
        <input type="checkbox" value={item.packed} checked={item.packed} />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
