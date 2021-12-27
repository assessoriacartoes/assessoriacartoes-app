import { Layout, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import * as S from './styles'

const { Header, Content, Footer } = Layout;
export default function Home() {
  const year = new Date();

  return (
    <Layout className="layout" >
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
        <S.MenuContainer>
          <span><Link to="/">CONCILIADOR</Link></span>
        </S.MenuContainer>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        </Breadcrumb>
        <S.SiteLayoutContent>
          <S.Iframe title="Dashboard_Brasbol_Recuperado 2" src="https://app.powerbi.com/view?r=eyJrIjoiMjRmZDVlZDYtZDM0MS00ODI1LTgxZTYtYjc2YWVjYWIyYzFhIiwidCI6IjQ2NTg4OGU5LWQzMjUtNDc5MC05ZTU3LTE1NGVhOWJhMWYxYiJ9&pageName=ReportSection" frameBorder="0" allowFullScreen={true} />
          {/* <S.HideBar /> */}
        </S.SiteLayoutContent>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          position: "fixed",
          bottom: '0',
          left: '0',
          right: '0',
          fontSize: "1rem",
          fontWeight: "700"
        }}
      >
        Assessoria Carrões © {year.getFullYear()}
      </Footer>
    </Layout>
  )

}
