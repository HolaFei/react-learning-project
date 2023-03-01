import { createContext, useReducer, useContext } from "react";

const NumberContext = createContext(0);
const NumberDispachContext = createContext(null);

export function NumberProvider({ children }) {
  const [number, dispatch] = useReducer(numberReducer, initNum);

  return (
    <NumberContext.Provider value={number}>
      <NumberDispachContext.Provider value={dispatch}>
        { children }
      </NumberDispachContext.Provider>
    </NumberContext.Provider>
  );
}

export function useNumber() {
  return useContext(NumberContext);
}

export function useNumberDispatch() {
  return useContext(NumberDispachContext);
}

const initNum = 0;

function numberReducer(num, action) {
  switch (action.type) {
    case 'add':
      return num + 1;
    default:
      throw Error('Unknown action: ' + action.type);
  }
}