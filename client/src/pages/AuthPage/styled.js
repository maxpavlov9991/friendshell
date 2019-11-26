import styled from 'styled-components'

export const Page = styled.div`
  background-color: #424242;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const LogoWrapper = styled.div`
  position: relative;
  background-color: #2F3136;
  width: 100%;
  height: 600px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
`

export const Content = styled.div`
  max-width: 935px;
  min-width: 600px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 50px;
  padding-bottom: 50px;
`

export const HugeText = styled.h1`
  font-size: 24px;
`

export const Info = styled.div`

`

export const ImportantText = styled.span`
  color: ${props => props.styledColor};
`