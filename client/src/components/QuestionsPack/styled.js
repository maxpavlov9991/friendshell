import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;

  @media (min-width: 992px) {
    padding: 80px 0 10px 0;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    padding: 40px 0 10px 0;
  }

  @media (max-width: 479px) {
    padding: 20px 0 10px 0;
  }
`

export const Label = styled.div`
  width: 800px;
  margin: 0 auto;
  text-align: center;
  color: white;
  
`

export const QuestWrap = styled.div`
  width: 800px;
  padding: 20px;
  margin: 0 auto;
`