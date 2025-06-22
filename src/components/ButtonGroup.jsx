import Button from "./Button";

export default function ButtonGroup({
    onHandleRemoveAllItems,
    onHandleResetToInitial,
    handleMarkAllAsPacked,
    handleMarkAllAsUnpacked,
}) {

    const secondaryButtons = [
        { text: "Remove All Items", action: onHandleRemoveAllItems },
        { text: "Reset to Initial", action: onHandleResetToInitial },
        { text: "Mark All as Complete", action: handleMarkAllAsPacked },
        { text: "Mark All as Incomplete", action: handleMarkAllAsUnpacked },
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
