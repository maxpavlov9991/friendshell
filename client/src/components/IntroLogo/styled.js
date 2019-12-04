import styled from 'styled-components'

export const Logo = styled.div`
  .ellipse1 {

    @media (min-width: 992px) {
      height: 500px;
      width: 500px;
      left: calc(50% - 250px);
      top: calc(50% - 250px);
    }

    @media (max-width: 991px) and (min-width: 480px) {
      height: 400px;
      width: 400px;
      left: calc(50% - 200px);
      top: calc(50% - 200px); 
    }

    @media (max-width: 479px) {
      heigth: 300px;
      width: 300px;
      left: calc(50% - 150px);
      top: calc(50% - 150px);
    }

    position: absolute;
    z-index: 1;

    -webkit-animation: 60s ease-in-out 3s infinite normal rotate1;
    -moz-animation: 60s ease-in-out 3s infinite normal rotate1;
    -o-animation: 60s ease-in-out 3s infinite normal rotate1;
    animation: 60s ease-in-out 3s infinite normal rotate1;
}

  > .ellipse2 {

    @media (min-width: 992px) {
      height: 400px;
      width: 400px;

      left: calc(50% - 200px);
      top: calc(50% - 200px);
    }

    @media (max-width: 991px) and (min-width: 480px) {
      height: 320px;
      width: 320px;

      left: calc(50% - 160px);
      top: calc(50% - 160px); 
    }

    @media (max-width: 479px) {
      heigth: 240px;
      width: 240px;

      left: calc(50% - 120px);
      top: calc(50% - 120px);
    }

    position: absolute;
    z-index: 2;
    transform: rotate(-150deg);
    -webkit-animation: 60s ease-in-out 3s infinite normal rotate2;
    -moz-animation: 60s ease-in-out 3s infinite normal rotate2;
    -o-animation: 60s ease-in-out 3s infinite normal rotate2;
    animation: 60s ease-in-out 3s infinite normal rotate2;
  }

  > .ellipse3 {
    @media (min-width: 992px) {
      height: 300px;
      width: 300px;

      left: calc(50% - 150px);
      top: calc(50% - 150px);
    }

    @media (max-width: 991px) and (min-width: 480px) {
      height: 240px;
      width: 240px;

      left: calc(50% - 120px);
      top: calc(50% - 120px); 
    }

    @media (max-width: 479px) {
      heigth: 180px;
      width: 180px;

      left: calc(50% - 90px);
      top: calc(50% - 90px);
    }

    position: absolute;
    z-index: 3;
    left: calc(50% - 150px);
    top: calc(50% - 150px);
    transform: rotate(30deg);
    -webkit-animation: 60s ease-in-out 3s infinite normal rotate3;
    -moz-animation: 60s ease-in-out 3s infinite normal rotate3;
    -o-animation: 60s ease-in-out 3s infinite normal rotate3;
    animation: 60s ease-in-out 3s infinite normal rotate3;
  }

@-webkit-keyframes rotate1 { from { transform: rotate(0deg) } to { transform: rotate(360deg) }  }
   @-moz-keyframes rotate1 { from { transform: rotate(0deg) } to { transform: rotate(360deg) }  }
     @-o-keyframes rotate1 { from { transform: rotate(0deg) } to { transform: rotate(360deg) }  }
        @keyframes rotate1 { from { transform: rotate(0deg) } to { transform: rotate(360deg) }  }

@-webkit-keyframes rotate2 { from { transform: rotate(-150deg) } to { transform: rotate(-870deg) }  }
   @-moz-keyframes rotate2 { from { transform: rotate(-150deg) } to { transform: rotate(-870deg) }  }
     @-o-keyframes rotate2 { from { transform: rotate(-150deg) } to { transform: rotate(-870deg) }  }
        @keyframes rotate2 { from { transform: rotate(-150deg) } to { transform: rotate(-870deg) }  }

@-webkit-keyframes rotate3 { from { transform: rotate(30deg) } to { transform: rotate(1110deg) }  }
   @-moz-keyframes rotate3 { from { transform: rotate(30deg) } to { transform: rotate(1110deg) }  }
     @-o-keyframes rotate3 { from { transform: rotate(30deg) } to { transform: rotate(1110deg) }  }
        @keyframes rotate3 { from { transform: rotate(30deg) } to { transform: rotate(1110deg) }  }

`

export const LogoText = styled.div`

@media (min-width: 992px) {
    height: 150px;
    width: 700px;
    left: calc(50% - 350px);
    top: calc(50% - 75px);

    > .logotext {
      width: 700px;
      height: 120px;
      left: calc(50% - 350px);
      top: calc(50% - 60px);
    }
  }

  @media (max-width: 991px) and (min-width: 480px) {
    height: 120px;
    width: 420px;
    left: calc(50% - 210px);
    top: calc(50% - 60px);


    > .logotext {
      width: 420px;
      height: 96px;
      left: calc(50% - 210px);
      top: calc(50% - 48px);
    }
  }

  @media (max-width: 479px) {
    height: 90px;
    width: 300px;
    left: calc(50% - 150px);
    top: calc(50% - 45px);

    > .logotext {
      width: 300px;
      height: 72px;
      left: calc(50% - 150px);
      top: calc(50% - 36px);
    }
  }

  min-width: 300px;
  z-index: 4;
	position: absolute;
  background-color: rgba(2, 15, 29, 0.8);
	
	> .logotext {
		position: absolute;
    transition: 1s transform;
	}

	> .logotext:hover {
   transform: scale(1.05);
	}
`