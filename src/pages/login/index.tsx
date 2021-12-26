import React from 'react';
import './index.css';
import { Form, Input, Button, Checkbox } from 'antd';
import * as S from './styles'
import { Typography } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom"

export type LoginForm = {
  email: string,
  password: string,
}

export default function Login() {
  const navigate = useNavigate();

  const onFinish = async (values: LoginForm) => {

    await axios.post(`api`,).then(function (response) {
      navigate("/")
    })
      .catch(function (error) {
        toast.error(`Um erro inesperado aconteceu ${error.response.status}`)
      });

  };

  const { Title } = Typography;

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <S.Container>
      <Title level={3}>Bem-vindo(a)!</Title>
      <p>Faça login para acessar sua conta</p>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          style={{ display: "flex", justifyContent: "center" }}
          rules={[{ required: true, message: 'Insira seu E-mail' }]}
        >
          <Input placeholder="E-mail" />
        </Form.Item>

        <Form.Item
          name="password"
          style={{ display: "flex", justifyContent: "center" }}
          rules={[{ required: true, message: 'Insira sua senha' }]}
        >
          <Input.Password placeholder="Senha" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          style={{ display: "flex", justifyContent: "center", borderRadius: '2px' }}
        >
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </S.Container>
  );
};
