import React,{ useState } from "react";
import { Form, Input, Button, notification } from "antd";
import axios from "axios";
import { MailOutlined } from "@ant-design/icons"

const ForgotPassword = () => {
    const [loading, setLoading] = useState(false);
  
    const onFinish = async (values) => {
      setLoading(true);
      try {
        const response = await axios.post('/forgot-password', values);
        notification.success({
          message: 'Success',
          description: response.data.message,
        });
      } catch (error) {
        notification.error({
          message: 'Error',
          description: error.response?.data?.message || 'Something went wrong!',
        });
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
        <Form name="forgot_password" onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  };
  
  export default ForgotPassword;