import { useRef, useState } from "react";
import Button from "./Button";
import { useItemStore } from "../store/itemStore";

export default function AddItemForm() {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef(null);
  const addItem = useItemStore((state) => state.addItem);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemText.trim() === "") {
      alert("Please enter an item name.");
      inputRef?.current.focus();
      return;
    }

    addItem(itemText);
    setItemText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
        ref={inputRef}
      />
      <Button>Add to list</Button>
    </form>
  );
}
