import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({
  totalNumberOfItems,
  totalNumberOfItemsPacked,
}) {
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
