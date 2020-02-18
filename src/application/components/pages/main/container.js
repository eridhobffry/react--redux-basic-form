import { connect } from "react-redux";
import App from "./component";

import {
  decrement,
  increment,
  reset,
  save,
  change,
  addTextOnList,
  saveList
} from "../../../redux/actions/pages";

const mapStateToProps = state => {
  return {
    numbers: state.numbers,
    lists: state.lists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSave: () => dispatch(save()),
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onReset: () => dispatch(reset()),
    onUpdateNumber: value => dispatch(change(value)),
    onUpdateTextOnList: value => dispatch(addTextOnList(value)),
    onSaveList: () => dispatch(saveList())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
