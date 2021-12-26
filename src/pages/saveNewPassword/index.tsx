import { Form, Input, Button } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import * as S from './styles'
import { toast } from 'react-toastify';
import './index.css';
import { Typography } from 'antd';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

export type NewPassword = {
  password: string;
  password2: string;
}

export default function SaveNewPassword() {
  const { Title } = Typography;
  const navigate = useNavigate();

  async function onFinish(value: NewPassword) {
    if (value.password === value.password2) {
      toast.success("opa")
      await axios.post(`api`, value).then(function (response) {
        toast.success(`Nova senha salva com sucesso!`)
        navigate("/login")
      })
        .catch(function (error) {
          toast.error(`Um erro inesperado aconteceu ${error.response.status}`)
        });
    }
    toast.error("Inrsira Senhas iguais")

  };

  return (
    <S.Container>
      <S.ContainerTitle>
        <Title level={3}>Insira sua nova senha</Title>
        <br />
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
