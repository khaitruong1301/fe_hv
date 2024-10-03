import React from "react";
import { Collapse, Space } from "antd";

const timelineData = [
  {
    date: "Near Future",
    events: [
      {
        icon: "fas fa-address-card",
        title: "Updated 5.0",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        icon: "fas fa-archive",
        title: "Fixed bug",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        icon: "fas fa-address-book",
        title: "Reach 1k Users",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
    ],
  },
  {
    date: "2020",
    events: [
      {
        icon: "fas fa-briefcase",
        title: "Updated 4.4.0",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        icon: "fas fa-desktop",
        title: "Fixed bug",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
    ],
  },
  {
    date: "2019",
    events: [
      {
        icon: "fas fa-id-card",
        title: "Updated 4.0",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        icon: "fas fa-desktop",
        title: "Fixed bug",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        icon: "fas fa-picture-o",
        title: "Reach 500 Users",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
    ],
  },
];

const DetailRoadmap = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-lg-6">
            {/* Section Heading */}
            <div className="section_heading text-center pb-3">
              <h6>BC-01 Dot net</h6>
              <h3>Chi tiết lộ trình</h3>
              <div className="line" />
            </div>
          </div>
        </div>

        {/* Collapse Panel chứa toàn bộ timeline */}
        <Space direction="vertical" style={{ width: "100%" }}>
          <Collapse
            collapsible="header"
            items={[
              {
                key: "1",
                label: "C# Core",
                children: (
                  <>
                    {timelineData.map((section, index) => (
                      <div key={index} className="single-timeline-area">
                        <div className="timeline-date">
                          <p>{section.date}</p>
                        </div>
                        <div className="row">
                          {section.events.map((event, i) => (
                            <div key={i} className="col-12 col-md-6 col-lg-4">
                              <div className="single-timeline-content d-flex">
                                <div className="timeline-icon">
                                  <i className={event.icon} />
                                </div>
                                <div className="timeline-text">
                                  <h6>{event.title}</h6>
                                  <p>{event.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </>
                ),
              },
            ]}
          />
          <Collapse
            collapsible="header"
            items={[
              {
                key: "1",
                label: "DB SQL Server",
                children: <p>collapse 2</p>,
              },
            ]}
          />
          <Collapse
            collapsible="header"
            items={[
              {
                key: "1",
                label: "HTML5 CSS3",
                children: <p>Collapse 3</p>,
              },
            ]}
          />
          <Collapse
            collapsible="header"
            items={[
              {
                key: "1",
                label: "Git",
                children: <p>Collapse 4</p>,
              },
            ]}
          />
          <Collapse
            collapsible="header"
            items={[
              {
                key: "1",
                label: ".Net core",
                children: <p>Collapse 5</p>,
              },
            ]}
          />
        </Space>
      </div>
    </div>
  );
};

export default DetailRoadmap;
