import defaulStore from "../default_store";
import CONSTANTS from "../../../constants";

export default (state = defaulStore.numbers, action) => {
  switch (action.type) {
    case CONSTANTS.INCREMENT:
      console.log(typeof state.numberValue.number);
      return {
        ...state,
        numberValue: {
          ...state.numberValue,
          number: state.numberValue.number + 1
        }
      };

    case CONSTANTS.CHANGE:
      return {
        ...state,
        tempValue: {
          ...state.tempValue,
          number: action.value
        }
      };

    case CONSTANTS.DECREMENT:
      return {
        ...state,
        numberValue: {
          ...state.numberValue,
          number: state.numberValue.number - 1
        }
      };

    case CONSTANTS.RESET:
      return {
        ...state,
        numberValue: {
          ...state.numberValue,
          number: 0
        }
      };

    case CONSTANTS.SAVE:
      return {
        ...state,
        numberValue: {
          ...state.numberValue,
          number: state.tempValue.number
        }
      };

    default:
      return state;
  }
};
