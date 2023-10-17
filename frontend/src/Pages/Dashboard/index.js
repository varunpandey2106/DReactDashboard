import React from 'react'; // Import React
import { Typography, Row, Col, Card, Menu, Divider } from "antd";
import { BarChartOutlined,DatabaseOutlined, CheckCircleOutlined,AppstoreOutlined,Html5Outlined,DatabaseTwoTone } from "@ant-design/icons";
import { useState } from "react";
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [selectedItem, setSelectedItem] = useState('cards'); // Default selection

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      {/* <Typography.Title level={2}>Welcome to our Energy Data Dashboard</Typography.Title> */}
      <Divider />

      <Row gutter={16} justify="space-around">
        {selectedItem === 'cards' && (
          <>
            <Col span={8}>
              <Card
                title="Field"
                hoverable
                headStyle={{ background: '#36cfc9', color: 'white' }}
                style={{ marginBottom: 16 }} // Add margin to create space
              >
                <Typography.Text>
                  <DatabaseOutlined style={{ color: '#00b5ad', marginRight: 8 }} /> 10 fields
                </Typography.Text>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                title="Accuracy"
                hoverable
                headStyle={{ background: '#1890ff', color: 'white' }}
                style={{ marginBottom: 16 }}
              >
                <Typography.Text>
                  <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} /> 100% Accuracy
                </Typography.Text>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                title="Energy Needs"
                hoverable
                headStyle={{ background: '#4caf50', color: 'white' }}
                style={{ marginBottom: 16 }}
              >
                <Typography.Text>
                  <BarChartOutlined style={{ color: '#ff9800', marginRight: 8 }} /> Growing Needs
                </Typography.Text>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                title="Django"
                hoverable
                headStyle={{ background: 'purple', color: 'white' }}
                style={{ marginBottom: 16 }}
              >
                <Typography.Text>
                  <AppstoreOutlined style={{ color: 'cyan', marginRight: 8 }} /> Backend-API
                </Typography.Text>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                title="React"
                hoverable
                headStyle={{ background: 'blue', color: 'white' }}
                style={{ marginBottom: 16 }}
              >
                <Typography.Text>
                  <Html5Outlined style={{ color: 'orange', marginRight: 8 }} /> Dashboard Interface
                </Typography.Text>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                title="Postgres-Railway"
                hoverable
                headStyle={{ background: 'green', color: 'white' }}
                style={{ marginBottom: 16 }}
              >
                <Typography.Text>
                  <DatabaseTwoTone style={{ color: 'blue', marginRight: 8 }} /> Database Management
                </Typography.Text>
              </Card>
            </Col>
          </>
        )}
      </Row>
  
    </div>
  );
}


export default Dashboard;

