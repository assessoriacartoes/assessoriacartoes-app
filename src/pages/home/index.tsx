import { Layout } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as S from './styles'

const { Header, Content, Footer } = Layout;
export default function Home() {

  const [data, setData] = useState()

  const year = new Date();
  const powerBi = `https://app.powerbi.com/view?r=eyJrIjoiMjRmZDVlZDYtZDM0MS00ODI1LTgxZTYtYjc2YWVjYWIyYzFhIiwidCI6IjQ2NTg4OGU5LWQzMjUtNDc5MC05ZTU3LTE1NGVhOWJhMWYxYiJ9&pageName=ReportSection`
  useEffect(() => {
    async function getPowerBi() {
      await axios.get(`api`).then(function (response) {
        // setData(response)
        // toast.success(`Cliente criado com sucesso`)
      })
        .catch(function (error) {
          // toast.error(`Um erro inesperado aconteceu ${error.response.status}`)
        });
    }
    getPowerBi()
  }, [])


  return (
    <Layout className="layout" >
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
          <img src="cliente.png" alt="logo" />
        </S.ContainerImage>
        <S.MenuContainer>
          <span><Link to="/">CONCILIADOR</Link></span>
        </S.MenuContainer>
      </Header>
      <Content style={{ backgroundColor: "white" }}>
        <S.SiteLayoutContent>
          <S.Iframe title="Dashboard_Brasbol_Recuperado 2" src={powerBi} frameBorder="0" allowFullScreen={true} />
          {/* <S.HideBar /> */}
        </S.SiteLayoutContent>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          bottom: '-10.2%',
          left: '0',
          right: '0',
          fontSize: "1rem",
        }}
      >
        Assessoria Cartões © {year.getFullYear()}
      </Footer>
    </Layout>
  )
}
