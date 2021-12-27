import { Layout, Breadcrumb } from 'antd';
import * as S from './styles'
import { Upload, Form, Input, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */
const { Title } = Typography;

const { Header, Content, Footer } = Layout;

export type SaveNewClientForm = {
  email: string,
  password: string,
  powerBi: boolean
  ClientImage: string
}

export default function Adm() {
  const navigate = useNavigate();

  const year = new Date();

  async function onFinish(values: SaveNewClientForm) {
    console.log("values new clieent", values);
    await axios.post(`api`, values).then(function (response) {
      toast.success(`Cliente criado com sucesso`)
      navigate("/")
    })
      .catch(function (error) {
        toast.error(`Um erro inesperado aconteceu ${error.response.status}`)
      });
  };

  return (
    <Layout className="layout">
      <Header
        style={{
          backgroundColor: "white",
          display: 'flex',
          height: "auto",
          maxHeight: "80px"
        }}>
        <S.ContainerImage>
          <img src="cliente.jpeg" alt="logo" />
        </S.ContainerImage>
        < S.MenuContainer >
          <span><Link to="/" > Home </Link></span >
        </S.MenuContainer>
      </Header>
      <Content style={{ padding: '50px 50px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100vh" }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        </Breadcrumb>
        <S.SiteLayoutContent>
          <S.ContainerTitle>
            <Title level={3}>Cadastre um novo cliente</Title>
          </S.ContainerTitle>
          <S.FormContainer>
            <Form {...layout} name="nest-messages" onFinish={(values) => onFinish(values)} >
              <Form.Item
                name='email'
                label="E-mail"
                rules={[{ required: true, message: 'Por favor insira o E-mail' }]}
              >
                <Input type="text" />
              </Form.Item>
              <Form.Item
                name='password'
                label="Senha"
                rules={[{ required: true, message: 'Por favor insira a senha' }]}
              >
                <Input type="email" />
              </Form.Item>

              <Form.Item
                name='powerBi'
                label="Power BI"
                rules={[{ required: true, message: 'Por favor insira o Power Bi' }]}
              >
                <Input type="text" />
              </Form.Item>
              <Form.Item
                name='conciliador'
                label="Link Conciliador"
                rules={[{ required: true, message: 'Por favor insira o Link Do Conciliador' }]}
              >
                <Input type="text" />
              </Form.Item>
              <Form.Item
                name='clientImage'
                label="Imagem Cliente"
                rules={[{ required: true, message: 'Por favor insira uma imagem' }]}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end"
                }}
              >
                <Upload
                  listType="picture"
                >
                  <Button icon={<UploadOutlined />}>Upload </Button>
                </Upload>
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  salvar
                </Button>
              </Form.Item>
            </Form>
          </S.FormContainer>
        </S.SiteLayoutContent>
      </Content>
      <Footer style={{
        textAlign: 'center', position: 'fixed', bottom: '0', left: '0', right: '0', fontSize: "1rem",
        fontWeight: "700"
      }}>Assessoria Cartões © {year.getFullYear()}</Footer>
    </Layout>
  )
}
