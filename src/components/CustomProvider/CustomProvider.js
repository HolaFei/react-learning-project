import { useNumber, useNumberDispatch, NumberProvider } from "./NumberContext";
export default function CustomProvider() {
  return (
    <NumberProvider>
      <AddNumber />
    </NumberProvider>
  );
}

function AddNumber() {
  const num = useNumber();
  const dispatch = useNumberDispatch();

  const handleClick = () => {
    dispatch({
      type: 'add'
    });
  }

  return (
    <button onClick={handleClick}>{ num }</button>
  );
}