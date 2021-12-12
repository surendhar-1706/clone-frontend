export const ModalReducer = (state, action) => {
  switch (action.type) {
    case "setopen":
      console.log("set open triggered");
      return {
        ...state,
        isOpen: true,
      };
    case "setclose":
      console.log("set close triggered");
      return {
        isOpen: false,
      };
  }
};
