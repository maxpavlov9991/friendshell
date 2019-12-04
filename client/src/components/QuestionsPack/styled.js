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
  @media (min-width: 992px) {
    width: 800px;
  }

  @media (max-width: 991px) and (min-width: 480px) {
    width: 80%;
  }

  @media (max-width: 479px) {
    width: 90%;
  }
  margin: 0 auto;
  text-align: center;
  color: white;
  
`

export const QuestWrap = styled.div`

    @media (min-width: 992px) {
      width: 800px;
    }

    @media (max-width: 991px) and (min-width: 480px) {
      width: 80%;
    }

    @media (max-width: 479px) {
      width: 90%;
    }

  margin: 0 auto;
`