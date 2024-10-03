import { Pie } from "@ant-design/charts";
import { Card, Col } from "antd";
import React from "react";

const dataPie = [
  { type: "HTML-CSS", value: 29 },
  { type: "BOOTSTRAP", value: 15 },
  { type: "JS", value: 42 },
  { type: "GIT", value: 13 },
];

const pieConfig = {
  appendPadding: 10,
  data: dataPie,
  angleField: "value",
  colorField: "type",
  radius: 0.8, // Adjust radius to reduce chart size
  label: {
    type: "outer",
    content: "{name} {percentage}",
  },
};

const PieChart = () => {
  return (
    <Col xs={24} sm={24} md={8}>
      <Card
        title="Thống kê lộ trình"
        bordered={false}
        style={{ minHeight: "280px" }}
      >
        <Pie {...pieConfig} />
      </Card>
    </Col>
  );
};

export default PieChart;
