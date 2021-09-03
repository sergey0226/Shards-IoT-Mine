import React from "react";
import $ from "jquery";
import "round-slider";
import "round-slider/dist/roundslider.min.css";

/** Presentational */
import RoundButton from "../../components/common/RoundButton";

class RoundSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: false
    };
    this.roundSlider = React.createRef();
    this.handleChangeTemperature = this.handleChangeTemperature.bind();
    this.timeOutID = 0;
  }

  componentDidMount() {
    const options = Object.assign(
      { svgMode: true, change: this.handleChangeTemperature },
      this.props
    );

    this.$rsEle = $(this.roundSlider.current);

    this.$rsEle.roundSlider(options);
  }

  // This way, ReactJS will never re-render our component,
  // and jQuery will be responsible for all updates.
  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    // here we have considered the value property alone
    // if you are going to dynamically update any other properties
    // then consider those properties also here

    if (nextProps.value !== this.props.value) {
      this.$rsEle.roundSlider("option", "value", nextProps.value);
    }
  }

  handleChangeTemperature = newValue => {
    this.setState({ value: newValue });
    $(".round-slider-temp__text").text("heating to");

    this.timeOutID = setTimeout(() => {
      $(".round-slider-temp__text").text("now");
      this.$rsEle.roundSlider("setValue", this.props.value);
    }, 3000);
  };

  handleDisable = event => {
    event.preventDefault();

    if (this.state.disabled) {
      this.$rsEle.roundSlider("enable");
      this.setState(state => ({ disabled: !state.disabled }));
    } else {
      this.$rsEle.roundSlider("disable");
      this.setState(state => ({ disabled: !state.disabled }));
    }
  };

  render() {
    return (
      <div style={{ position: "relative" }}>
        <div id="round-slider" ref={this.roundSlider} />
        <RoundButton onClick={this.handleDisable}>
          <i class="material-icons">power_settings_new</i>
        </RoundButton>
        <div style={{ alignItems: 'center' }}>
          <span style={{ position: 'absolute', top: '220px', left: '125px' }}>Celcius</span>
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    this.$rsEle.roundSlider("destroy");
    clearTimeout(this.timeOutID);
  }
}

// Optional: set the default props, in case none are passed
RoundSlider.defaultProps = { value: 0 };

export default RoundSlider;
