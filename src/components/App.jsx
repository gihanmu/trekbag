import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { initialItems } from "../lib/contants";

function App() {
  const [items, setItems] = useState(initialItems);
  const totalNumberOfItems = items.length;
  const totalNumberOfItemsPacked = items.filter(
    (item) => item.completed
  ).length;

  const handleAddItem = (itemText) => {
    const newItem = {
      id: crypto.randomUUID(),
      name: itemText,
      completed: false,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, completed: true }))
    );
  };
  const handleMarkAllAsIncomplete = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, completed: false }))
    );
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  const handleToggleItemCompletion = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header
          totalNumberOfItems={totalNumberOfItems}
          totalNumberOfItemsPacked={totalNumberOfItemsPacked}
        />
        <ItemList
          items={items}
          setItems={setItems}
          handleDeleteItem={handleDeleteItem}
          handleToggleItemCompletion={handleToggleItemCompletion}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
