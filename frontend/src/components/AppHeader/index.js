import React from "react";
import { MailOutlined, BellOutlined, GithubOutlined } from "@ant-design/icons";
import { Badge, Space, Typography } from "antd";

function AppHeader() {
  return (
    <div className="AppHeader">
        <img
        src="/blackcofferlogo.jpeg" // Replace with the path to your custom icon
        alt="Dashboard Icon"
        style={{ width: 80, height: 40, marginRight: 16 }} // Adjust the width and height as needed
      />
      <Typography.Title  href="https://blackcoffer.com/" level={5} style={{ flex: 1, textAlign: "center" }}>
        BlackCoffer Dashboard
      </Typography.Title>
      <Space>
        <Badge count={9} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={8}>
          <BellOutlined style={{ fontSize: 24 }} />
        </Badge>
        <a href="https://github.com/varunpandey2106">
          <GithubOutlined style={{ fontSize: 24 }} />
        </a>
      </Space>
    </div>
  );
}

export default AppHeader;
