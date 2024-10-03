import { UserOutlined } from "@ant-design/icons";
import { Button, Card, Col, Statistic } from "antd";
import React from "react";

const ProfileCard = () => {
  return (
    <Col
      xs={24}
      sm={24}
      md={8}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Card bordered={false} style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <UserOutlined style={{ fontSize: "64px", color: "#ccc" }} />
          <h3>Nguyễn Trung Hiếu</h3>
          <p>Lớp: Bootcamp .Net 01</p>
          <p>Ngày bắt đầu: 05-09-2024</p>
          <p>Ngày kết thúc: 13-03-2025</p>
          <Statistic title="Điểm tích cực" value={0} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "10px",
            }}
          >
            <Button type="primary" style={{ margin: "5px" }}>
              Xem report
            </Button>
            <Button style={{ margin: "5px" }}>Token</Button>
            <Button style={{ margin: "5px" }}>Đánh giá</Button>
            <Button style={{ margin: "5px" }}>Xem chứng nhận</Button>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default ProfileCard;
