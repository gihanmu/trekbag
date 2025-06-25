import { useItemStore } from "../store/itemStore";
import Button from "./Button";

export default function ButtonGroup() {
    const removeAllItems = useItemStore(state => state.removeAllItems);
    const resetToInitial = useItemStore(state => state.resetToInitial);
    const markAllAsComplete = useItemStore(state => state.markAllAsComplete);
    const markAllAsIncomplete = useItemStore(state => state.markAllAsIncomplete);
    

    const secondaryButtons = [
        { text: "Remove All Items", action: removeAllItems },
        { text: "Reset to Initial", action: resetToInitial },
        { text: "Mark All as Complete", action: markAllAsComplete },
        { text: "Mark All as Incomplete", action: markAllAsIncomplete },
    ];
  return (
    <section className="button-group">
      {secondaryButtons.map((btn, index) => (
        <Button key={index} type="secondary" onBtnClick={btn.action}>
          {btn.text}
        </Button>
      ))}
    </section>
  );
}
