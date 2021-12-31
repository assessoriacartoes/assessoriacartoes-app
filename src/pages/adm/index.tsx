import { useState } from 'react';
import { Layout, Breadcrumb } from 'antd';
import * as S from './styles'
import { Upload, Form, Input, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { toast } from 'react-toastify'
import Table from '../../components/Table'
import api from '../../service/api'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
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
  powerBi: string,
  clientImage: any,
  img: any,
  id: any
}

const Adm: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [cliente, setCliente] = useState<SaveNewClientForm | null>(null);
  const [isSpinning, setIsSpinning] = useState<boolean>(false)
  const [indexArray, setIndexArray] = useState<any>()

  async function onFinish(values: SaveNewClientForm) {
    const bi = values.powerBi.split('"')
    const urlYoutube = values.powerBi.replace('src="', 'next ')
    const temporario = urlYoutube.split(' ')
    temporario.forEach((elemento, index) => {
      if (elemento === "next") {
        console.log(temporario[index + 1].replace('"', ''))
        values.powerBi = temporario[index + 1].replace('"', '')
      }
    })

    setIsSpinning(true)
    await api.post(`/api/cliente`, values).then(function (response) {
      console.log("response", response)
      SaveLogo(response.data.cliente.id)
    }).catch(function (error) {
      toast.error(`Um erro inesperado aconteceu ${error.response.status}`)
    });
  };

  // useEffect(() => {
  //   async function getget() {
  //     await api.get(`/api/cliente`).then(function (response) {
  //       console.log("response table", response)
  //       setTableData(response.data)
  //     }).catch(function (error) {

  //       toast.error(`Um erro inesperado aconteceu ${error.response.status}`)
  //     });
  //   };
  //   getget()
  // }, [])


  async function SaveLogo(id: any) {

    const archive = new FormData();
    archive.append("arquivo", selectedFile);

    await api.post(`/api/cliente/uploadLogo/${id}`, archive).then(function (response) {
      setIsSpinning(false)
      window.location.reload();
      toast.success(`Cliente criado com sucesso`)
      setCliente(response.data);

    }).catch(function (error) {
      toast.error(`Um erro inesperado aconteceu ${error.response.status}`)
    });
  }

  const handleupload = (file: any, fileList: any) => {
    setSelectedFile(file);
  }

  const antIcon = <LoadingOutlined style={{ fontSize: 34, color: "#2ce414" }} spin />

  return (
    <Spin indicator={antIcon} spinning={isSpinning}>
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
                  <Input type="password" />
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
          <Table />
        </Content>
      </Layout>
    </Spin>

  )
}

export default Adm;