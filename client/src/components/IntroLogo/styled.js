import styled from 'styled-components'

export const Logo = styled.div`
  .ellipse1 {
  position: absolute;
  z-index: 1;
  left: calc(50% - 250px);
  top: calc(50% - 250px);
  -webkit-animation: 60s ease-in-out 3s infinite normal rotate1;
  -moz-animation: 60s ease-in-out 3s infinite normal rotate1;
  -o-animation: 60s ease-in-out 3s infinite normal rotate1;
  animation: 60s ease-in-out 3s infinite normal rotate1;
}

> .ellipse2 {
  position: absolute;
  z-index: 2;
  top: calc(50% - 200px);
  left: calc(50% - 200px);
  transform: rotate(-150deg);
  -webkit-animation: 60s ease-in-out 3s infinite normal rotate2;
  -moz-animation: 60s ease-in-out 3s infinite normal rotate2;
  -o-animation: 60s ease-in-out 3s infinite normal rotate2;
  animation: 60s ease-in-out 3s infinite normal rotate2;
}

> .ellipse3 {
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
	position: absolute;
  z-index: 4;
  width: 700px;
  height: 150px;
  left: calc(50% - 350px);
  top: calc(50% - 75px);
	background-color: rgba(47,49,54,0.9);
	
	> .logotext {
		position: absolute;
    left: calc(50% - 350px);
    top: calc(50% - 60px);
    opacity: 100%;
    transition: 1s;
	}

	> .logotext:hover {
   transform: scale(1.05);
	}
`