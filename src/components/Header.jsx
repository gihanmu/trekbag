import Counter from "./Counter";
import Logo from "./Logo";
import { useItemStore } from "../store/itemStore";

export default function Header() {
  const items = useItemStore((state) => state.items);
  const totalNumberOfItems = items.length;
  const totalNumberOfItemsPacked = items.filter((item) => item.packed).length;
  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfItems={totalNumberOfItems}
        totalNumberOfItemsPacked={totalNumberOfItemsPacked}
      />
    </header>
  );
}
