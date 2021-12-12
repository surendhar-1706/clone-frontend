import React, { createContext, useReducer } from "react";
import { useEffect } from "react";
import { ModalReducer } from "../reducers/ModalReducer";
export const ModalContext_Create = createContext();
function ModalContext({ children }) {
  const [GlobalModalState, dispatch] = useReducer(ModalReducer, {
    isOpen: false,
  });
  useEffect(() => {}, [GlobalModalState]);
  return (
    <div>
      <ModalContext_Create.Provider value={{ GlobalModalState, dispatch }}>
        {children}
      </ModalContext_Create.Provider>
    </div>
  );
}

export default ModalContext;
