import { Card, Col, Table } from "antd";
import React from "react";

const rankingData = [
  { key: 1, name: "Vũ Thanh Thuận" },
  { key: 2, name: "Hồ Thị Phương Nga" },
  { key: 3, name: "Trương Thiên Bảo" },
  { key: 4, name: "Ngô Vỹ Khang" },
  { key: 5, name: "Nguyễn Thị Huỳnh Nhi" },
];

const columns = [
  { title: "Thứ Hạng", dataIndex: "key", key: "key", width: 80 },
  { title: "Tên Học Viên", dataIndex: "name", key: "name" },
];

const RankingStudent = () => {
  return (
    <Col xs={24} sm={24} md={16}>
      <Card title="Thứ Hạng" bordered={false} style={{ minHeight: "280px" }}>
        <Table dataSource={rankingData} columns={columns} pagination={false} />
      </Card>
    </Col>
  );
};

export default RankingStudent;
