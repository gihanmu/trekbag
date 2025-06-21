import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemText.trim() === "") {
      alert("Please enter an item name.");
      inputRef?.current.focus();
      return;
    }
  
    onAddItem(itemText);
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
