import './index.css';
import { Form, Input, Button } from 'antd';
import * as S from './styles'
import { Typography } from 'antd';
import { toast } from 'react-toastify'
import { Redirect } from 'react-router-dom';
import api from '../../service/api'
import { useHistory } from "react-router-dom"
export type LoginForm = {
  email: string,
  senha: string,
}

const Login: React.FC = () => {
  let history = useHistory();
  const onFinish = async (values: LoginForm) => {
    await api.post(`api/login`, values).then(function (response) {

      if (response.data.cliente.tipoDeUsuario === 1) {

        localStorage.setItem('user', JSON.stringify(response.data.cliente.tipoDeUsuario));
        localStorage.setItem('cliente', JSON.stringify(response.data.cliente));
        history.push("/admin")
        return
      }
      localStorage.setItem('user', JSON.stringify(response.data.cliente.tipoDeUsuario));
      localStorage.setItem('cliente', JSON.stringify(response.data.cliente));
      history.push("/home")
    })
      .catch(function (error) {
        toast.error(`Um erro inesperado aconteceu ${error.response.status}`)
      });
  };

  const { Title } = Typography;

  const onFinishFailed = (errorInfo: any) => {
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: 'center', height: "100vh" }}>
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
            name="senha"
            style={{ display: "flex", justifyContent: "center" }}
            rules={[{ required: true, message: 'Insira sua senha' }]}
          >
            <Input.Password placeholder="Senha" />
          </Form.Item>
          <br />
          <br />
          <Form.Item
            style={{ display: "flex", justifyContent: "center", borderRadius: '2px' }}
          >
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </S.Container>
    </div>
  );
};

export default Login;
