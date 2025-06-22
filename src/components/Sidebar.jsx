import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  handleAddItem,
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsPacked,
  handleMarkAllAsUnpacked,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        onHandleRemoveAllItems={handleRemoveAllItems}
        onHandleResetToInitial={handleResetToInitial}
        handleMarkAllAsPacked={handleMarkAllAsPacked}
        handleMarkAllAsUnpacked={handleMarkAllAsUnpacked}
      />
    </div>
  );
}
