import { useState } from 'react';
import { Layout, Breadcrumb } from 'antd';
import * as S from './styles'
import { Upload, Form, Input, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import api from '../../service/api';
import { toast } from 'react-toastify'
import Table from '../../components/Table'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const { Title } = Typography;

const { Header, Content } = Layout;

export type SaveNewClientForm = {
  email: string,
  password: string,
  powerBi: boolean,
  clientImage: any,
  img: any,
  id: any
}

export default function Adm() {
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [cliente, setCliente] = useState<SaveNewClientForm|null>(null);

  async function onFinish(values: SaveNewClientForm) {
    await api.post(`/api/cliente`, values).then(function (response) {
      SaveLogo(response.data.id)
    }).catch(function (error) {
      toast.error(`Um erro inesperado aconteceu ${error.response.status}`)
    });
  };

  async function SaveLogo(id: any) {
    const archive = new FormData();
    archive.append("arquivo", selectedFile);

    await api.post(`/api/cliente/uploadLogo/${id}`, archive).then(function (response) {
      toast.success(`Cliente criado com sucesso`)
      setCliente(response.data);
      //navigate("/")
    }).catch(function (error) {
      toast.error(`Um erro inesperado aconteceu ${error.response.status}`)
    });
  }

  const handleupload = (file: any, fileList: any) => {
    setSelectedFile(file);
  }

  return (
    <Layout className="layout">
      <Header
        style={{
          backgroundColor: "#f0f2f5",
          display: 'flex',
          height: "auto",
          maxHeight: "60px",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <S.ContainerImage>
          <img src="assessoria.png" alt="logo" />
        </S.ContainerImage>
      </Header>
      <Content style={{ backgroundColor: "white", padding: '50px 50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>
        <S.ContainerImage>
          <img src={"data:image/png;base64," + cliente?.img} alt="logo" />
        </S.ContainerImage>
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
                  beforeUpload={handleupload}
                  accept=".png"
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
        <Table></Table>
      </Content>
    </Layout>
  )
}
