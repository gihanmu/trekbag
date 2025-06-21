import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  handleAddItem,
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        onHandleRemoveAllItems={handleRemoveAllItems}
        onHandleResetToInitial={handleResetToInitial}
        onHandleMarkAllAsComplete={handleMarkAllAsComplete}
        onHandleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
      />
    </div>
  );
}
