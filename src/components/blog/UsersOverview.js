import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Button, ButtonGroup, Container } from "shards-react";

import Chart from "../../utils/chart";

class UsersOverview extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
    this.state = {
      date: new Date(),
      viewStyle: 'month'
    };
  }

  componentDidMount() {
    const { viewStyle } = this.state;
    let newChartData = {};

    switch(viewStyle) {
      case 'day':
        newChartData.labels = Array.from(new Array(24), (_, i) => (i));
        newChartData.datasets = [
          {
            fill: "start",
            data: [
              50.0,
              80.0,
              32.0,
              18.0,
              24.0,
              32.0,
              23.0,
              65.0,
              59.0,
              280.0,
              320.0,
              320.0,
              340.0,
              291.0,
              310.0,
              425.0,
              59.0,
              280.0,
              320.0,
              320.0,
              340.0,
              291.0,
              310.0,
              425.0
            ],
            backgroundColor: "rgba(0,123,255,0.1)",
            borderColor: "rgba(0,123,255,1)",
            pointBackgroundColor: "#ffffff",
            pointHoverBackgroundColor: "rgb(0,123,255)",
            borderWidth: 1.5,
            pointRadius: 0,
            pointHoverRadius: 3
          }
        ]
        break;
      case 'week':
        newChartData.labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        newChartData.datasets = [
          {
            fill: "start",
            data: [
              50.0,
              80.0,
              32.0,
              320.0,
              320.0,
              310.0,
              425.0
            ],
            backgroundColor: "rgba(0,123,255,0.1)",
            borderColor: "rgba(0,123,255,1)",
            pointBackgroundColor: "#ffffff",
            pointHoverBackgroundColor: "rgb(0,123,255)",
            borderWidth: 1.5,
            pointRadius: 0,
            pointHoverRadius: 3
          }
        ]
        break;
      case 'month':
        newChartData.labels = ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        newChartData.datasets = [
          {
            fill: "start",
            data: [
              50.0,
              80.0,
              320.0,
              32.0,
              320.0,
              320.0,
              310.0,
              425.0,
              320.0,
              320.0,
              310.0,
              425.0
            ],
            backgroundColor: "rgba(0,123,255,0.1)",
            borderColor: "rgba(0,123,255,1)",
            pointBackgroundColor: "#ffffff",
            pointHoverBackgroundColor: "rgb(0,123,255)",
            borderWidth: 1.5,
            pointRadius: 0,
            pointHoverRadius: 3
          }
        ]
        break;
      case 'year':
        newChartData.labels = ['2015', '2016', '2017', '2020', '2021',];
        newChartData.datasets = [
          {
            fill: "start",
            data: [
              50.0,
              80.0,
              320.0,
              32.0,
              320.0,
            ],
            backgroundColor: "rgba(0,123,255,0.1)",
            borderColor: "rgba(0,123,255,1)",
            pointBackgroundColor: "#ffffff",
            pointHoverBackgroundColor: "rgb(0,123,255)",
            borderWidth: 1.5,
            pointRadius: 0,
            pointHoverRadius: 3
          }
        ]
        break;
      default: break;
    }

    const chartOptions = {
        responsive: true,
        legend: {
          display: false
        },
        elements: {
          line: {
            // A higher value makes the line look skewed at this ratio.
            tension: 0.9
          },
          point: {
            radius: 0
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: false,
              ticks: {
                callback(tick, index) {
                  // Jump every 7 values on the X axis labels to avoid clutter.
                  switch(viewStyle) {
                    case 'day':
                      return tick;
                    case 'week':
                      return tick;
                    case 'year':
                      return tick;
                    case 'month':
                      return tick;
                      default: break;
                  }

                }
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                suggestedMax: 45,
                callback(tick) {
                  if (tick === 0) {
                    return tick;
                  }
                  // Format the amounts using Ks for thousands.
                  return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
                }
              }
            }
          ]
        },
        hover: {
          mode: "nearest",
          intersect: false
        },
        tooltips: {
          custom: false,
          mode: "nearest",
          intersect: false
        }
    };

    const BlogUsersOverview = new Chart(this.canvasRef.current, {
      type: 'bar',
      data: newChartData,
      options: chartOptions
    });

    // They can still be triggered on hover.
    const buoMeta = BlogUsersOverview.getDatasetMeta(0);
    buoMeta.data[0]._model.radius = 0;
    buoMeta.data[
     newChartData.datasets[0].data.length - 1
    ]._model.radius = 0;

    // Render the chart.
    BlogUsersOverview.render();
  };

  refreshGraph(style) {
    let newChartData = {};

    switch(style) {
      case 'day':
        newChartData.labels = Array.from(new Array(24), (_, i) => (i));
        newChartData.datasets = [
          {
            fill: "start",
            data: [
              50.0,
              80.0,
              32.0,
              18.0,
              24.0,
              32.0,
              23.0,
              65.0,
              59.0,
              280.0,
              320.0,
              320.0,
              340.0,
              291.0,
              310.0,
              425.0,
              59.0,
              280.0,
              320.0,
              320.0,
              340.0,
              291.0,
              310.0,
              425.0
            ],
            backgroundColor: "rgba(0,123,255,0.1)",
            borderColor: "rgba(0,123,255,1)",
            pointBackgroundColor: "#ffffff",
            pointHoverBackgroundColor: "rgb(0,123,255)",
            borderWidth: 1.5,
            pointRadius: 0,
            pointHoverRadius: 3
          }
        ]
        break;
      case 'week':
        newChartData.labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        newChartData.datasets = [
          {
            fill: "start",
            data: [
              50.0,
              80.0,
              32.0,
              320.0,
              320.0,
              310.0,
              425.0
            ],
            backgroundColor: "rgba(0,123,255,0.1)",
            borderColor: "rgba(0,123,255,1)",
            pointBackgroundColor: "#ffffff",
            pointHoverBackgroundColor: "rgb(0,123,255)",
            borderWidth: 1.5,
            pointRadius: 0,
            pointHoverRadius: 3
          }
        ]
        break;
      case 'month':
        newChartData.labels = ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        newChartData.datasets = [
          {
            fill: "start",
            data: [
              50.0,
              80.0,
              320.0,
              32.0,
              320.0,
              320.0,
              310.0,
              425.0,
              320.0,
              320.0,
              310.0,
              425.0
            ],
            backgroundColor: "rgba(0,123,255,0.1)",
            borderColor: "rgba(0,123,255,1)",
            pointBackgroundColor: "#ffffff",
            pointHoverBackgroundColor: "rgb(0,123,255)",
            borderWidth: 1.5,
            pointRadius: 0,
            pointHoverRadius: 3
          }
        ]
        break;
      case 'year':
        newChartData.labels = ['2015', '2016', '2017', '2020', '2021',];
        newChartData.datasets = [
          {
            fill: "start",
            data: [
              50.0,
              80.0,
              320.0,
              32.0,
              320.0,
            ],
            backgroundColor: "rgba(0,123,255,0.1)",
            borderColor: "rgba(0,123,255,1)",
            pointBackgroundColor: "#ffffff",
            pointHoverBackgroundColor: "rgb(0,123,255)",
            borderWidth: 1.5,
            pointRadius: 0,
            pointHoverRadius: 3
          }
        ]
        break;
      default: break;
    }

    const chartOptions = {
        responsive: true,
        legend: {
          display: false
        },
        elements: {
          line: {
            // A higher value makes the line look skewed at this ratio.
            tension: 0.9
          },
          point: {
            radius: 0
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: false,
              ticks: {
                callback(tick, index) {
                  // Jump every 7 values on the X axis labels to avoid clutter.
                  switch(style) {
                    case 'day':
                      return tick+1;
                    case 'week':
                      return tick;
                    case 'year':
                      return tick;
                    case 'month':
                      return tick;
                      default: break;
                  }

                }
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                suggestedMax: 45,
                callback(tick) {
                  if (tick === 0) {
                    return tick;
                  }
                  // Format the amounts using Ks for thousands.
                  return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
                }
              }
            }
          ]
        },
        tooltips: {
          custom: false,
          mode: "nearest",
          intersect: false
        }
    };

    const BlogUsersOverview = new Chart(this.canvasRef.current, {
      type: 'bar',
      data: newChartData,
      options: chartOptions
    });

    // They can still be triggered on hover.
    const buoMeta = BlogUsersOverview.getDatasetMeta(0);
    buoMeta.data[0]._model.radius = 0;
    buoMeta.data[
     newChartData.datasets[0].data.length - 1
    ]._model.radius = 0;

    // Render the chart.
    BlogUsersOverview.render();
    this.setState({viewStyle: style});
  };

  render() {
    return (
      <Container>
        <Row className="border-bottom py-2 bg-light">
          <Col className="d-flex mb-2 mb-sm-0">
            {/* <RangeDatePicker viewStyle={this.state.viewStyle} date={this.state.date}/> */}
          </Col>
          <Col className="ml-0">
            <ButtonGroup className="d-flex btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0">
              <Button theme="white" active={this.state.viewStyle==='day'} 
                onClick={()=>{this.refreshGraph('day')}}>
                Today
              </Button>
              <Button theme="white" active={this.state.viewStyle==='week'} 
                onClick={()=>{this.refreshGraph('week')}}>
                Week
              </Button>
              <Button theme="white" active={this.state.viewStyle==='month'} 
                onClick={()=>{this.refreshGraph('month')}}>
                Month
              </Button>
              <Button theme="white" active={this.state.viewStyle==='year'} 
                onClick={()=>{this.refreshGraph('year')}}>
                Year
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
        <canvas
          height="120"
          ref={this.canvasRef}
          style={{ maxWidth: "100% !important" }}
        />
      </Container>
      //   </CardBody>
      // </Card>
    );
  }
}

UsersOverview.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The chart dataset.
   */
  chartData: PropTypes.object,
  /**
   * The Chart.js options.
   */
  chartOptions: PropTypes.object
};

UsersOverview.defaultProps = {
  title: "Users Overview",
  chartData: {
    labels: Array.from(new Array(30), (_, i) => (i === 0 ? 1 : i)),
    datasets: [
      {
        label: "Temperature",
        fill: "start",
        data: [
          50.0,
          80.0,
          32.0,
          18.0,
          24.0,
          32.0,
          23.0,
          65.0,
          59.0,
          120.0,
          75.0,
          94.0,
          142.0,
          120.0,
          96.0,
          145.0,
          182.0,
          280.0,
          210.2,
          192.0,
          392.0,
          320.2,
          314.0,
          280.0,
          320.0,
          320.0,
          340.0,
          291.0,
          310.0,
          425.0
        ],
        backgroundColor: "rgba(0,123,255,0.1)",
        borderColor: "rgba(0,123,255,1)",
        pointBackgroundColor: "#ffffff",
        pointHoverBackgroundColor: "rgb(0,123,255)",
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 3
      }
    ]
  }
};

export default UsersOverview;
