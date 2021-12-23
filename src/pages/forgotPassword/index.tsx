import React from 'react';
import './index.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import * as S from './styles'
import { toast } from 'react-toastify'
export default function ForgotPassword() {
  function onFinish(e: React.FormEvent) {
    toast.success("Mm E-mail de recuperção foi emviado para sua conta")
  };

  return (
    <S.Container>
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
