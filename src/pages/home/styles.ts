import styled from 'styled-components'

export const SiteLayoutContent = styled.div`
  min-height: 280px;
  background: #fff;
  height: 100vh;
  iframe{
    width: 100%;
    height: 100vh;
  }
}
`

export const ContainerImage = styled.div`
  /* margin-right: auto; */
  margin-left: 10%;
  width: fit-content;
  img{
    width: 160px;
  }
`
export const Iframe = styled.iframe`
  width: 100%;
  height: 100vh;
`
export const HideBar = styled.div`
  z-index: 1000;
  height: 60px;
  transform: translateY(-54px);
  background-color: white;
`
export const MenuContainer = styled.div`
  margin-right: 10%;
width: fit-content;
  span{
    margin-left: 20px;
    font-size: 0.8rem;
    font-weight: 700;
  }
`
export const ContainerWord = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: fit-content;
  font-weight: 700;
  font-size: 24px;

`
