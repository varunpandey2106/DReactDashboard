import { Typography, Row, Col, Card } from "antd";

function Dashboard() {
  return (
    <div>
      <Typography.Title level={2}></Typography.Title>

      <Row gutter={16} justify="space-around">
        <Col span={8}>
          <Card title="Field" hoverable>
            <Typography.Text>10 fields</Typography.Text>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Accuracy" hoverable>
            <Typography.Text>100% Accuracy</Typography.Text>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Energy Needs" hoverable>
            <Typography.Text>Growing Needs</Typography.Text>
          </Card>
        </Col>
      </Row>

      <Row gutter={16} justify="center">
        <Col span={16}>
          <Card title="Visualization" hoverable>
            <img
              src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*-KAa3RzWvyW4jwQ2l9YfdQ.png" // Replace with the URL of your visualization image
              alt="Visualization"
              style={{ width: "100%" }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
