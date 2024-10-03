import React from "react";
import { Button, Card, Col, Row, Statistic, Table } from "antd";
import { Pie } from "@ant-design/charts";
import {
  UserOutlined,
  NotificationOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import ProfileCard from "../../Component/ProfileCard";
import Notification from "../../Component/Notification";
import PieChart from "../../Component/PieChart";
import RankingStudent from "../../Component/RankingStudent";

const HomeStudent = () => {
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

  return (
    <div>
      <Row gutter={16} style={{ display: "flex" }}>
        {/* Profile Card */}
        <ProfileCard/>

        {/* Notifications */}
        <Notification/>
      </Row>

      {/* Pie Chart and Ranking */}
      <Row gutter={16} style={{ marginTop: 20 }}>
        {/* PieChart */}
        <PieChart/>

        {/* Ranking */}
        <RankingStudent/>
      </Row>
    </div>
  );
};

export default HomeStudent;
