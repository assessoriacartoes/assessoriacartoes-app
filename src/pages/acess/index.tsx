import { Layout } from 'antd';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../service/api';
import * as S from './styles'

const { Header, Content } = Layout;

export type User = {
  conciliador: string
  email: string
  extensaoLogo: string | null
  id: number
  img: string
  nomeArquivoLogo: string | null
  password: string
  powerBi: string
  tipoDeUsuario: number
}


const Home: React.FC = () => {
  let { id } = useParams<{ id: string }>();
  const [currentUser, setCurrentUser] = useState<User>()
  //   async function GetCliente() {
  //     await api.get(`api/cliente/${id}`).then(function (response) {
  //       console.log(response);
  //            setCurrentUser(response.data)
  //     })
  //       .catch(function (error) {
  //         console.log(error);

  //       });
  //   };
  //   GetCliente()
  // }, [])


  const user: any = localStorage.getItem('user')
  return (
    <Layout className="layout" >
      {currentUser &&
        <>
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
              <img src={"data:image/png;base64," + currentUser?.img} alt="logo" />
            </S.ContainerImage>
            <S.ContainerWord>
              Análise de Dados
            </S.ContainerWord>

            <S.MenuContainer>
              <span><a target="_blank" rel="noopener noreferrer" href={`${currentUser.conciliador}`} >CONCILIADOR</a></span>

            </S.MenuContainer>
          </Header>
          <Content style={{ backgroundColor: "white" }}>
            <S.SiteLayoutContent>
              {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
              {currentUser && <S.Iframe title="Dashboard_Brasbol_Recuperado 2" src={currentUser.powerBi} frameBorder="0" allowFullScreen={true} />}
            </S.SiteLayoutContent>
          </Content></>}
    </Layout>
  )
}

export default Home;
