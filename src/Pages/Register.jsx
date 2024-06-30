import React from "react";
import { Button, Form, Input, DatePicker,Select } from "antd";


import { UserOutlined, MailOutlined, PhoneOutlined, LockOutlined } from "@ant-design/icons";

const Register = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

 

  return (
    <Form
      style={{ width: "75%" }}
      name="register"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <br />
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="User Name"
          size="large"
          allowClear
        />
      </Form.Item>

      <Form.Item
        label="Full Name"
        name="fullname"
        rules={[{ required: true, message: "Please input your Fullname!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Full Name"
          size="large"
          allowClear
        />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Email"
          size="large"
          allowClear
        />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone"
        rules={[
          {
            required: true,
            message: "Please input your Phone!",
          },
        ]}
      >
        <Input
          prefix={<PhoneOutlined className="site-form-item-icon" />}
          placeholder="Phone"
          size="large"
          allowClear
          type="tel"
        />
      </Form.Item>

      <Form.Item
        name="dob"
        label="Date of birth"
        rules={[
          {
            required: true,
            message: "Please input your Date Of Birth!",
          },
        ]}
      >
        <DatePicker
          style={{ width: "100%" }}
          placeholder="Pick your Date Of Birth"
          size="large"
          allowClear
        />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: "Please input your Gender!",
          },
        ]}
      >
        <Select placeholder="-- select your gender --" size="large" allowClear>
          <Select.Option value="male">Male</Select.Option>
          <Select.Option value="female">Female</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Password"
          size="large"
          allowClear
          type="tel"
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
        <br />
        <div>
        <p style={{color:"red", fontWeight:"bold"}}>
          You have account please 
          <a href="/login" 
          style={
            {
              fontWeight:"bold",
              textDecoration: "none"
            }}> 
            Login Here 😇!!!</a>
        </p>
        </div>
      </Form.Item>

      
    </Form>
  );
};

export default Register;
