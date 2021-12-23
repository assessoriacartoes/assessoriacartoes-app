import { Layout, Breadcrumb } from 'antd';
import * as S from './styles'
import { Upload, Form, Input, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const { Header, Content, Footer } = Layout;

export default function SaveNewClient() {

  const year = new Date();

  function onFinish(values: any) {
    console.log(values);
  };

  return (
    <Layout className="layout">
      <Header style={{ backgroundColor: "white" }}>
        <S.ContainerImage>
          <img src="assessoria.png" alt="logo" />
        </S.ContainerImage>
      </Header>
      <Content style={{ padding: '50px 50px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100vh" }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        </Breadcrumb>
        <S.SiteLayoutContent>
          <Form {...layout} name="nest-messages" onFinish={(values) => onFinish(values)} validateMessages={validateMessages}>
            <Form.Item
              name='email'
              label="E-mail"
              rules={[
                {
                  type: 'email',
                },
              ]}
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              name='password'
              label="Senha"
              rules={[
                {
                  type: 'email',
                },
              ]}
            >
              <Input type="email" />
            </Form.Item>

            <Form.Item
              name='powerBi'
              label="Power BI"
              rules={[
                {
                  type: 'number',
                  min: 0,
                  max: 99,
                },
              ]}
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
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
        </S.SiteLayoutContent>
      </Content>
      <Footer style={{ textAlign: 'center', position: 'fixed', bottom: '0', left: '0', right: '0' }}>e-Assessoria Financeira © {year.getFullYear()}</Footer>
    </Layout>
  )
}
