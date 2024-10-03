import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Card, Col } from "antd";
import React from "react";

const notifications = [
  {
    id: 1,
    type: "info",
    message:
      "Video dotnet01 collection type list.mp4 buổi học 7 đã được upload hệ thống rồi nhé, các bạn nhớ xem và làm lại để nắm kiến thức nhé.",
  },
  {
    id: 2,
    type: "warning",
    message:
      "Bạn có khó khăn gì không nhỉ? Đã 7 ngày rồi bạn chưa vào hệ thống học tập, bạn nhớ trao đổi mentor nhé!",
  },
  {
    id: 3,
    type: "info",
    message: "Đừng quên tham gia buổi học trực tuyến vào thứ 6 tuần này.",
  },
  {
    id: 4,
    type: "warning",
    message: "Thông báo: Hạn nộp bài tập cuối kỳ là ngày 20-12-2024.",
  },
  {
    id: 5,
    type: "info",
    message: "Video hướng dẫn sử dụng hệ thống mới đã được cập nhật.",
  },
  {
    id: 6,
    type: "info",
    message: "Nhớ kiểm tra lịch học của bạn để không bỏ lỡ buổi học nào.",
  },
  {
    id: 7,
    type: "warning",
    message: "Có một buổi hội thảo về phát triển cá nhân vào ngày 15-11-2024.",
  },
  {
    id: 8,
    type: "info",
    message:
      "Hãy nhớ tham gia khảo sát ý kiến học viên để cải thiện chương trình học.",
  },
];

const Notification = () => {
  return (
    <Col
      xs={24}
      sm={24}
      md={16}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Card bordered={false} style={{ flex: 1 }}>
        <h5 className="pb-3 card-title">
          <NotificationOutlined /> Thông báo
        </h5>
        <div style={{ maxHeight: "320px", overflowY: "auto" }}>
          {notifications.map((notification) => (
            <p key={notification.id}>
              {notification.type === "info" ? (
                <CheckCircleOutlined style={{ color: "blue" }} />
              ) : (
                <ExclamationCircleOutlined style={{ color: "red" }} />
              )}
              {` ${notification.message}`}
            </p>
          ))}
        </div>
      </Card>
    </Col>
  );
};

export default Notification;
