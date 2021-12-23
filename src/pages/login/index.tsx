import React from 'react';
import './index.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import * as S from './styles'

export default function LoginForm() {
  function onFinish(e: React.FormEvent) {
    console.log('Received values of form: ', e);
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
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Insira sua Senha!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Senha"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Lembrar-me</Checkbox>

          </Form.Item>

          <a className="login-form-forgot" href="/#">
            Esqueci minha senha
          </a>
        </Form.Item>

        <Form.Item style={{ marginLeft: "auto" }}>
          <Button style={{ borderRadius: '4px' }} type="primary" htmlType="submit" className="login-form-button">
            Entrar
          </Button>
        </Form.Item>
      </Form>
    </S.Container>
  );
};
