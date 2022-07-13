import { Button, Card, Checkbox, Col, Divider, Form, Input, Row } from 'antd';
import React from 'react';

const AddFoodForm = ({ createFood }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
    form.resetFields();
    createFood(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Row justify='center'>
      <Form
        style={{ justifyContent: 'center', padding: 50, width: "clamp(350px, 60%, 800px)" }}
        layout="vertical"
        name="basic"
        initialValues={{
          remember: true,
        }}
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Divider>CREATE NEW FOOD</Divider>

        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Calories"
          name="calories"
          rules={[
            {
              required: true,
              message: 'Please input your calories!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Servings"
          name="servings"
          rules={[
            {
              required: true,
              message: 'Please input your servings!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Image"
          name="image"
          rules={[
            {
              required: true,
              message: 'Please input your image!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default AddFoodForm;
