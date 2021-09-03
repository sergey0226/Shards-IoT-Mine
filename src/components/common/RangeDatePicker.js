import React from "react";
import classNames from "classnames";
import {
  InputGroup,
  DatePicker,
  InputGroupAddon,
  Button
} from "shards-react";
import moment from 'moment';

import "../../assets/range-date-picker.css";

class RangeDatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Date: new Date()
    };

    this.handleDateChange = this.handleDateChange.bind(this);
  }
  handleDateChange(value) {
    this.setState({
      ...this.state,
      ...{ Date: new Date(value) }
    });
  }

  componentDidMount() {
    const { date } = this.props;
    this.setState({
      Date: new Date(date)
    });
  }

  render() {
    const { className, viewStyle } = this.props;
    const classes = classNames(className, "d-flex", "my-auto", "date-range");

    return (
      <InputGroup className={classes}>
        <InputGroupAddon type="prepend">
          <Button size="sm" theme="white"
            onClick={()=> {this.setState({
              Date: new Date(moment(this.state.Date).subtract(viewStyle==='month'?7:1, 
              viewStyle==='day'?'hour':viewStyle==='week'?'day':viewStyle==='month'?'days':viewStyle==='year'?'month':'days'))})}}>
            <i className="material-icons">navigate_before</i>
          </Button>
        </InputGroupAddon>
        <DatePicker
          size="sm"
          selected={this.state.Date}
          onChange={this.handleDateChange}
          dateFormat="hh:mm MM/dd/yyyy"
          placeholderText="Date"
          disabled={true}
          className="text-center"
        />
        <InputGroupAddon type="append">
          <Button size="sm" theme="white"
            onClick={()=> {this.setState({
              Date: new Date(moment(this.state.Date).add(viewStyle==='month'?7:1, 
              viewStyle==='day'?'hour':viewStyle==='week'?'day':viewStyle==='month'?'days':viewStyle==='year'?'month':'days'))})}}>
            <i className="material-icons">navigate_next</i>
          </Button>
        </InputGroupAddon>
      </InputGroup>
    );
  }
}

export default RangeDatePicker;
