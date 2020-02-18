import default_store from "../default_store";
import CONSTANTS from "../../../constants";

export default (state = default_store.lists, action) => {
  switch (action.type) {
    case CONSTANTS.UPDATE_LIST:
      return {
        ...state,
        text: action.value
      };
    case CONSTANTS.SAVE_LIST:
      return {
        text: "",
        listArray: [...state.listArray, state.text]
      };

    default:
      return state;
  }
};
