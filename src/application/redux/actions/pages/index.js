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
