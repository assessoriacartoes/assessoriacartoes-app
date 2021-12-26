import React from 'react';
import './index.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import * as S from './styles'
import { toast } from 'react-toastify'
import { Typography } from 'antd';
import axios from 'axios'
const { Title } = Typography;

export default function ForgotPassword() {
  async function onFinish(e: React.FormEvent) {

    await axios.post(`api`).then(function (response) {
      toast.success("E-mail de recuperção foi emviado para sua conta")
    })
      .catch(function (error) {
        toast.error(`Um erro inesperado aconteceu ${error.response.status}`)
      });
  }

  return (
    <S.Container>
      <S.ContainerTitle>
        <Title level={3}>Encontre sua conta</Title>
        <p>Insira seu E-mail para recuperação</p>
      </S.ContainerTitle>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={(e) => onFinish(e)}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Insira seu E-mail',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" type="email" />
        </Form.Item>

        <Form.Item>
          <Button style={{ borderRadius: '4px' }} type="primary" htmlType="submit" className="login-form-button">
            Recuperar Senha
          </Button>
        </Form.Item>
      </Form>
    </S.Container>
  );
};
