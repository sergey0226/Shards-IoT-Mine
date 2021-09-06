import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Modal, ModalBody, ModalHeader } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
import TemperatureControl from "../components/blog/TemperatureControl";
import UsersOverview from "./../components/blog/UsersOverview";
import Scheduler from "../components/blog/Scheduler";

const BlogOverview = ({ smallStats }) => {

  const [open, setOpen] = useState(false);
  const [modalHeader, setModalHeader] = useState('');

  const openModal = (label) => {
    setModalHeader(label);
    setOpen(true)
  };

  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle
          title="Welcome Sierra"
          subtitle="Dashboard"
          className="text-sm-left mb-3"
        />
      </Row>

      {/* Small Stats Blocks */}
      <Row>
        {smallStats.map((stats, idx) => (
          <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
            <SmallStats
              id={`small-stats-${idx}`}
              variation="1"
              chartData={stats.datasets}
              chartLabels={stats.chartLabels}
              label={stats.label}
              value={stats.value}
              buttonClick={openModal}
              unit={stats.unit}
              increase={stats.increase}
              decrease={stats.decrease}
            />
          </Col>
        ))}
      </Row>

      <Row>
        {/* Users by Device */}
        <Col lg="4" md="6" sm="12" className="mb-4">
          <TemperatureControl buttonClick={openModal}/>
        </Col>

        {/* Users Overview */}
        <Col lg="8" md="12" sm="12" className="mb-4">
          <Scheduler />
        </Col>
      </Row>

      {/* modal body */}
      <div>
        <Modal size="lg" open={open} toggle={()=>setOpen(!open)} position="center" >
          <ModalHeader>{modalHeader}</ModalHeader>
          <ModalBody>
            <UsersOverview />
          </ModalBody>
        </Modal>
      </div>
    </Container>
  );
};

BlogOverview.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array
};

BlogOverview.defaultProps = {
  smallStats: [
    {
      label: "Pressure",
      value: "2,390",
      unit: "Bar",
      increase: true,
      buttonIcon: "thermostat",
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(0, 184, 216, 0.1)",
          borderColor: "rgb(0, 184, 216)",
          data: [1, 2, 1, 3, 5, 4, 7]
        }
      ]
    },
    {
      label: "UV Index",
      value: "182",
      unit: "_",
      increase: true,
      buttonIcon: "local_drink",
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(23,198,113,0.1)",
          borderColor: "rgb(23,198,113)",
          data: [1, 2, 3, 3, 3, 4, 4]
        }
      ]
    },
    {
      label: "Energy Consumption",
      value: "8,147",
      unit: "kW",
      increase: false,
      decrease: true,
      buttonIcon: "bolt",
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,180,0,0.1)",
          borderColor: "rgb(255,180,0)",
          data: [2, 3, 3, 3, 4, 3, 3]
        }
      ]
    },
    {
      label: "Water Consumption",
      value: "17,281",
      unit: "Litre",
      increase: false,
      decrease: true,
      buttonIcon: "opacity",
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgb(0,123,255,0.1)",
          borderColor: "rgb(0,123,255)",
          data: [3, 2, 3, 2, 4, 5, 4]
        }
      ]
    }
  ]
};

export default BlogOverview;
