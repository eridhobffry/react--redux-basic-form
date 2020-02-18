import { connect } from "react-redux";
import App from "./component";

import {
  decrement,
  increment,
  reset,
  save,
  change
} from "../../../redux/actions/pages";

const mapStateToProps = state => {
  return {
    numbers: state.numbers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSave: () => dispatch(save()),
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onReset: () => dispatch(reset()),
    onUpdateNumber: value => dispatch(change(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
