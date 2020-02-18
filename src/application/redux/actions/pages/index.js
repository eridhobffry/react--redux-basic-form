import CONSTANTS from "../../../constants";

export const increment = () => {
  return {
    type: CONSTANTS.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: CONSTANTS.DECREMENT
  };
};

export const reset = () => {
  return {
    type: CONSTANTS.RESET
  };
};

export const save = value => {
  return {
    type: CONSTANTS.SAVE,
    value
  };
};

export const change = value => {
  return {
    type: CONSTANTS.CHANGE,
    value
  };
};

export const addTextOnList = value => {
  return {
    type: CONSTANTS.UPDATE_LIST,
    value
  };
};

export const saveList = value => {
  return {
    type: CONSTANTS.SAVE_LIST,
    value
  };
};
