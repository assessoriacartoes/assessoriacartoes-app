import { Layout } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as S from './styles'
import api from '../../service/api'

const { Header, Content } = Layout;
export default function Home() {

  const [data, setData] = useState()

  const year = new Date();
  localStorage.setItem('meuGato', 'Tom');

  const powerBi = `https://app.powerbi.com/view?r=eyJrIjoiMjRmZDVlZDYtZDM0MS00ODI1LTgxZTYtYjc2YWVjYWIyYzFhIiwidCI6IjQ2NTg4OGU5LWQzMjUtNDc5MC05ZTU3LTE1NGVhOWJhMWYxYiJ9&pageName=ReportSection`
  useEffect(() => {
    async function getPowerBi() {
      await api.get(`/assessoria`).then(function (response) {
        // setData(response)
        console.log("response", response)
        // toast.success(`Cliente criado com sucesso`)
      })
        .catch(function (error) {
          toast.error(`Um erro inesperado aconteceu ${error.response.status}`)
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
        <S.ContainerWord>
          Análise de dados
        </S.ContainerWord>
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
    </Layout>
  )
}
