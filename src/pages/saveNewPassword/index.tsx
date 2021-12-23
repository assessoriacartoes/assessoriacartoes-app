import { Form, Input, Button } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import * as S from './styles'
import { toast } from 'react-toastify';
import './index.css';

export type NewPassword = {
  password: string;
  password2: string;
}

export default function SaveNewPassword() {

  function onFinish({ password, password2 }: NewPassword) {
    if (password === password2) {
      toast.success("opa")
      return
    }
    toast.error("Inrsira Senhas iguais")

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
          name="password"
          rules={[
            {
              required: true,
              message: 'Insira sua nova Senha',
            },
          ]}
        >
          <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Nova Senha" type="password" />
        </Form.Item>
        <Form.Item
          name="password2"
          rules={[
            {
              required: true,
              message: 'Insira sua Nova Senha!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Nova Senha"
          />
        </Form.Item>
        <Form.Item>
          <Button style={{ borderRadius: '4px' }} type="primary" htmlType="submit" className="login-form-button">
            Salvar nova Senha
          </Button>
        </Form.Item>
      </Form>
    </S.Container>
  );
};
