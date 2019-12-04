import styled from 'styled-components'

export const Page = styled.div`
  background-color: #031b35;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const LogoWrapper = styled.div`

  overflow: hidden;
  position: relative;
  background-color: #020f1d;
  width: 100%;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
  min-width: 300px;

  @media (min-width: 992px) {
    height: 600px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    height: 420px;
  }

  @media (max-width: 479px) {
    height: 320px;
  }
`

export const Content = styled.div`
  max-width: 935px;
  min-width: 300px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 30px;
`

export const HugeText = styled.h1`
  @media (min-width: 992px) {
    font-size: 24px; 
  }
  @media (max-width: 991px) and (min-width: 480px) {
    font-size: 22px; 
  }
  @media (max-width: 479px) {
    font-size: 18px; 
  }
`

export const Info = styled.div`
  margin: 0 20px;
`

export const ImportantText = styled.span`
  color: ${props => props.styledColor};
`