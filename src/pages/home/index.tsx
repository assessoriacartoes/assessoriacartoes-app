import { Layout } from 'antd';
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
  const currentUser: any | string = JSON.parse(localStorage.getItem('cliente') || '{}')
  const user: any = localStorage.getItem('user')
  console.log("user", user)
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
          {user == 1 ? (
            <span><a href={`/admin`} >Cadastre um novo cliente</a></span>
          ) : (<img src={"data:image/png;base64," + currentUser?.img} alt="logo" />)}
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
      </Content>
    </Layout>
  )
}

export default Home;
