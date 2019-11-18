import React from 'react';
import './style.css'
import ellipse1 from '../../img/ellipse1.svg'
import ellipse2 from '../../img/ellipse2.svg'
import ellipse3 from '../../img/ellipse3.svg'
import logotext from '../../img/logotext.svg'


function IntroLogo() {
  return (
    <div>
        <svg className='ellipse1' width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M33.4937 375C11.5516 336.995 6.62633e-06 293.884 0 250C-6.62632e-06 206.116 11.5515 163.005 33.4936 125C55.4357 86.9953 86.9951 55.4358 125 33.4937C163.005 11.5516 206.116 2.04023e-05 250 0C293.884 -2.04023e-05 336.995 11.5515 375 33.4936C413.005 55.4356 444.564 86.9951 466.506 125C488.448 163.005 500 206.116 500 250C500 293.884 488.449 336.995 466.506 375L434.03 356.25C452.681 323.946 462.5 287.301 462.5 250C462.5 212.698 452.681 176.054 434.03 143.75C415.38 111.446 388.554 84.6203 356.25 65.9695C323.946 47.3188 287.301 37.5 250 37.5C212.698 37.5 176.054 47.3189 143.75 65.9696C111.446 84.6204 84.6203 111.446 65.9696 143.75C47.3188 176.054 37.5 212.698 37.5 250C37.5 287.302 47.3188 323.946 65.9696 356.25L33.4937 375Z" fill="#FA8258"/>
        </svg>

        <svg className='ellipse2' width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.7949 300C9.24123 269.596 -2.81799e-05 235.107 0 200C2.818e-05 164.892 9.24134 130.404 26.7951 99.9997C44.3488 69.5959 69.5965 44.3483 100 26.7947C130.404 9.24105 164.893 -0.000117601 200.001 1.12211e-09C235.108 0.000117603 269.597 9.24152 300.001 26.7953C330.405 44.3492 355.652 69.5969 373.206 100.001C390.759 130.405 400 164.894 400 200.001C400 235.109 390.758 269.597 373.204 300.001L340.729 281.251C354.991 256.548 362.5 228.526 362.5 200.001C362.5 171.476 354.992 143.454 340.73 118.751C326.467 94.0475 305.954 73.5337 281.251 59.2712C256.547 45.0087 228.525 37.5001 200.001 37.5C171.476 37.4999 143.454 45.0084 118.75 59.2707C94.0472 73.533 73.5334 94.0466 59.271 118.75C45.0086 143.453 37.5 171.475 37.5 200C37.5 228.525 45.0085 256.547 59.2709 281.25L26.7949 300Z" fill="#FE9A2E"/>
        </svg>

        <svg className='ellipse3' width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.0962 225C6.93028 202.196 -0.000688122 176.328 5.12265e-08 149.996C0.000688224 123.664 6.933 97.7966 20.1001 74.9932C33.2672 52.1899 52.2051 33.2544 75.0102 20.0903C97.8153 6.92618 123.684 -0.00275553 150.016 8.21806e-07C176.348 0.00275718 202.215 6.93711 225.017 20.106C247.819 33.2749 266.753 52.2143 279.916 75.0204C293.078 97.8265 300.005 123.696 300 150.027C299.995 176.359 293.059 202.226 279.888 225.027L247.416 206.27C257.294 189.169 262.496 169.769 262.5 150.021C262.504 130.272 257.308 110.87 247.437 93.7653C237.565 76.6607 223.364 62.4562 206.263 52.5795C189.161 42.7028 169.761 37.5021 150.012 37.5C130.263 37.4979 110.861 42.6946 93.7576 52.5677C76.6538 62.4408 62.4504 76.6424 52.5751 93.7449C42.6998 110.847 37.5005 130.248 37.5 149.997C37.4995 169.746 42.6977 189.147 52.5721 206.25L20.0962 225Z" fill="#FACC2E"/>
        </svg>

        <div className='logotext-wrapper'>
          <svg className='logotext' width="700" height="120" viewBox="0 0 816 138" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.0688 10.152L54.8128 10.44C65.4688 10.44 72.6208 9.52799 76.2688 7.70399C75.7888 13.848 74.2528 17.976 71.6608 20.088C69.0688 22.2 64.4128 23.256 57.6928 23.256C50.9728 23.256 41.5168 22.2 29.3248 20.088C29.2288 25.56 27.1648 40.872 23.1328 66.024C41.9488 65.832 54.2848 64.248 60.1408 61.272C59.5648 68.856 57.4048 73.56 53.6608 75.384C51.6448 76.44 49.7248 77.112 47.9008 77.4C46.0768 77.592 43.8688 77.688 41.2768 77.688C38.7808 77.688 32.1568 77.256 21.4048 76.392C19.1008 91.944 17.9488 103.896 17.9488 112.248C17.9488 120.504 19.8208 126.696 23.5648 130.824C20.5888 134.28 17.2768 136.008 13.6288 136.008C6.14081 136.008 2.39681 129.672 2.39681 117C2.39681 111.144 4.12481 97.368 7.58081 75.672C6.04481 75.576 3.54881 75.528 0.092813 75.528C0.572813 71.976 1.34081 69.624 2.39681 68.472C3.45281 67.224 5.70881 66.456 9.16481 66.168C11.7568 48.216 13.0528 36.168 13.0528 30.024C13.0528 23.784 12.3328 18.504 10.8928 14.184C14.2528 11.496 21.6448 10.152 33.0688 10.152ZM94.6018 136.008C87.1138 136.008 83.3698 129.672 83.3698 117C83.3698 111.72 84.3778 102.792 86.3938 90.216C88.4098 77.64 89.4178 67.32 89.4178 59.256C89.4178 51.192 88.4098 45.24 86.3938 41.4C88.7938 39.192 91.7218 38.088 95.1778 38.088C102.186 38.088 105.69 41.736 105.69 49.032C105.69 51.624 105.066 56.952 103.818 65.016C102.666 73.08 101.898 78.6 101.514 81.576C106.698 67.944 112.506 57.048 118.938 48.888C125.466 40.632 130.842 36.504 135.066 36.504C137.466 36.504 139.242 37.656 140.394 39.96C141.642 42.264 142.266 44.616 142.266 47.016C142.266 49.416 141.978 51.864 141.402 54.36C139.962 54.072 138.618 53.928 137.37 53.928C131.226 53.928 125.034 57.528 118.794 64.728C112.65 71.928 107.802 79.848 104.25 88.488C100.794 97.128 99.0658 104.28 99.0658 109.944C99.0658 119.928 100.89 126.888 104.538 130.824C101.562 134.28 98.2498 136.008 94.6018 136.008ZM177.751 13.896C177.751 16.296 177.223 19.224 176.167 22.68C172.615 24.888 169.351 25.992 166.375 25.992C163.495 25.992 161.431 25.464 160.183 24.408C159.031 23.352 158.455 21.864 158.455 19.944C158.455 18.024 158.791 15.048 159.463 11.016C163.015 8.80799 166.327 7.70399 169.399 7.70399C174.967 7.70399 177.751 9.76799 177.751 13.896ZM164.071 136.008C156.583 136.008 152.839 129.672 152.839 117C152.839 111.72 153.847 102.792 155.863 90.216C157.879 77.64 158.887 67.32 158.887 59.256C158.887 51.192 157.879 45.24 155.863 41.4C158.263 39.192 161.191 38.088 164.647 38.088C171.655 38.088 175.159 41.736 175.159 49.032C175.159 51.336 174.055 60.36 171.847 76.104C169.639 91.752 168.535 103.8 168.535 112.248C168.535 120.696 170.359 126.888 174.007 130.824C171.031 134.28 167.719 136.008 164.071 136.008ZM219.659 94.536C217.067 94.536 214.475 94.392 211.883 94.104C211.979 104.76 213.947 112.872 217.787 118.44C221.723 124.008 227.195 126.792 234.203 126.792C244.091 126.792 251.291 121.944 255.803 112.248C258.107 114.456 259.259 117.144 259.259 120.312C259.259 125.688 256.235 129.912 250.187 132.984C244.235 135.96 237.995 137.448 231.467 137.448C219.851 137.448 211.067 133.752 205.115 126.36C199.259 118.968 196.331 109.416 196.331 97.704C196.331 90.696 197.435 83.64 199.643 76.536C201.851 69.336 204.875 62.76 208.715 56.808C212.555 50.76 217.499 45.864 223.547 42.12C229.595 38.376 236.219 36.504 243.419 36.504C250.619 36.504 256.091 38.328 259.835 41.976C263.675 45.624 265.595 50.328 265.595 56.088C265.595 65.4 261.275 74.136 252.635 82.296C244.091 90.456 233.099 94.536 219.659 94.536ZM250.475 60.84C250.475 56.904 249.227 53.688 246.731 51.192C244.331 48.6 240.971 47.304 236.651 47.304C232.427 47.304 228.731 48.504 225.563 50.904C222.491 53.304 220.043 56.52 218.219 60.552C214.955 68.04 212.939 76.152 212.171 84.888C214.475 85.176 216.635 85.32 218.651 85.32C228.443 85.32 236.171 82.824 241.835 77.832C247.595 72.744 250.475 67.08 250.475 60.84ZM336.732 37.08C347.964 37.08 353.58 45.384 353.58 61.992C353.58 66.792 353.004 73.704 351.852 82.728C350.796 91.752 350.268 98.616 350.268 103.32C350.268 116.856 352.38 126.024 356.604 130.824C353.244 134.28 349.884 136.008 346.524 136.008C338.556 136.008 334.572 126.696 334.572 108.072C334.572 101.16 335.34 92.472 336.876 82.008C338.508 71.448 339.324 64.728 339.324 61.848C339.324 58.872 338.748 56.568 337.596 54.936C336.444 53.208 334.428 52.344 331.548 52.344C327.708 52.344 323.1 56.76 317.724 65.592C312.348 74.328 307.788 84.216 304.044 95.256C300.396 106.2 298.572 114.792 298.572 121.032C298.572 127.272 299.388 131.592 301.02 133.992C297.66 135.336 294.444 136.008 291.372 136.008C288.3 136.008 286.092 134.808 284.748 132.408C283.5 129.912 282.876 126.408 282.876 121.896C282.876 117.288 283.788 108.024 285.612 94.104C287.436 80.088 288.348 68.808 288.348 60.264C288.348 51.624 287.34 45.336 285.324 41.4C286.284 40.44 287.724 39.672 289.644 39.096C291.564 38.424 293.292 38.088 294.828 38.088C298.188 38.088 300.684 39.24 302.316 41.544C303.948 43.848 304.764 48.216 304.764 54.648C304.764 60.984 303.372 71.928 300.588 87.48C310.86 62.904 319.596 47.544 326.796 41.4C330.156 38.52 333.468 37.08 336.732 37.08ZM439.403 31.608C439.403 16.632 438.347 7.176 436.235 3.24C438.635 1.128 441.707 0.0719948 445.451 0.0719948C449.195 0.0719948 451.883 1.27199 453.515 3.67199C455.147 6.07199 455.963 10.008 455.963 15.48C455.963 20.856 454.619 32.664 451.931 50.904C449.243 69.144 447.899 83.16 447.899 92.952C447.899 102.744 448.379 110.376 449.339 115.848C450.299 121.32 452.075 126.264 454.667 130.68C451.979 134.232 448.715 136.008 444.875 136.008C436.715 136.008 432.635 125.784 432.635 105.336C432.635 101.016 433.019 95.4 433.787 88.488C428.795 102.504 422.843 114.12 415.931 123.336C409.019 132.456 402.683 137.016 396.923 137.016C391.163 137.016 386.267 134.04 382.235 128.088C378.299 122.04 376.331 112.968 376.331 100.872C376.331 85.416 379.787 71.112 386.699 57.96C389.963 51.624 394.379 46.488 399.947 42.552C405.515 38.52 412.043 36.504 419.531 36.504C427.019 36.504 433.451 39.72 438.827 46.152C439.211 42.696 439.403 37.848 439.403 31.608ZM419.099 46.44C410.651 46.44 403.931 51.336 398.939 61.128C393.947 70.824 391.451 82.872 391.451 97.272C391.451 104.472 392.363 110.376 394.187 114.984C396.011 119.496 398.699 121.752 402.251 121.752C405.803 121.752 410.171 118.056 415.355 110.664C420.635 103.176 425.435 94.056 429.755 83.304C434.075 72.456 436.715 62.664 437.675 53.928C431.051 48.936 424.859 46.44 419.099 46.44ZM537.083 34.92C535.163 30.12 531.947 26.04 527.435 22.68C522.923 19.32 517.883 17.64 512.315 17.64C506.843 17.64 502.331 19.32 498.779 22.68C495.227 25.944 493.451 30.552 493.451 36.504C493.451 39.192 493.643 41.4 494.027 43.128C494.507 44.856 495.659 46.776 497.483 48.888C499.403 50.904 501.227 52.632 502.955 54.072C504.779 55.512 508.091 58.152 512.891 61.992C517.691 65.832 522.587 69.912 527.579 74.232C532.667 78.456 536.555 82.824 539.243 87.336C541.931 91.848 543.275 97.608 543.275 104.616C543.275 113.832 539.579 121.608 532.187 127.944C524.891 134.28 515.579 137.448 504.251 137.448C495.419 137.448 487.691 135.72 481.067 132.264C474.443 128.712 471.131 123.72 471.131 117.288C471.131 114.504 471.755 112.008 473.003 109.8C474.251 107.592 476.075 105.096 478.475 102.312C482.699 119.4 492.539 127.944 507.995 127.944C513.563 127.944 518.459 126.36 522.683 123.192C526.907 120.024 529.019 115.32 529.019 109.08C529.019 105.528 528.587 102.84 527.723 101.016C526.859 99.096 526.139 97.608 525.563 96.552C525.083 95.496 524.171 94.248 522.827 92.808C521.483 91.272 520.379 90.072 519.515 89.208C518.651 88.248 517.163 86.904 515.051 85.176C512.939 83.352 511.259 81.96 510.011 81C508.859 79.944 506.843 78.312 503.963 76.104C501.083 73.8 498.827 71.976 497.195 70.632C491.627 66.12 487.355 61.608 484.379 57.096C481.499 52.584 480.059 47.16 480.059 40.824C480.059 30.168 483.659 21.864 490.859 15.912C498.059 9.95999 507.467 6.98399 519.083 6.98399C525.995 6.98399 531.803 8.32799 536.507 11.016C541.211 13.704 543.563 17.4 543.563 22.104C543.563 26.808 541.403 31.08 537.083 34.92ZM577.76 133.992C574.496 135.336 571.28 136.008 568.112 136.008C565.04 136.008 562.832 134.808 561.488 132.408C560.24 129.912 559.616 125.976 559.616 120.6C559.616 115.224 561.584 100.824 565.52 77.4C572.144 37.368 573.104 12.648 568.4 3.24C570.704 1.128 573.68 0.0719948 577.328 0.0719948C581.072 0.0719948 583.76 1.22399 585.392 3.52799C587.024 5.83199 587.84 10.056 587.84 16.2C587.84 22.248 586.208 34.488 582.944 52.92C579.776 71.352 577.904 82.872 577.328 87.48C587.504 63.096 596.24 47.736 603.536 41.4C606.896 38.52 610.256 37.08 613.616 37.08C624.752 37.08 630.32 45.384 630.32 61.992C630.32 66.792 629.744 73.704 628.592 82.728C627.536 91.752 627.008 98.616 627.008 103.32C627.008 116.856 629.12 126.024 633.344 130.824C629.984 134.28 626.624 136.008 623.264 136.008C615.296 136.008 611.312 126.696 611.312 108.072C611.312 101.16 612.08 92.472 613.616 82.008C615.248 71.448 616.064 64.728 616.064 61.848C616.064 58.872 615.488 56.568 614.336 54.936C613.184 53.208 611.168 52.344 608.288 52.344C604.448 52.344 599.84 56.76 594.464 65.592C589.088 74.328 584.528 84.216 580.784 95.256C577.136 106.2 575.312 114.792 575.312 121.032C575.312 127.272 576.128 131.592 577.76 133.992ZM676.409 94.536C673.817 94.536 671.225 94.392 668.633 94.104C668.729 104.76 670.697 112.872 674.537 118.44C678.473 124.008 683.945 126.792 690.953 126.792C700.841 126.792 708.041 121.944 712.553 112.248C714.857 114.456 716.009 117.144 716.009 120.312C716.009 125.688 712.985 129.912 706.937 132.984C700.985 135.96 694.745 137.448 688.217 137.448C676.601 137.448 667.817 133.752 661.865 126.36C656.009 118.968 653.081 109.416 653.081 97.704C653.081 90.696 654.185 83.64 656.393 76.536C658.601 69.336 661.625 62.76 665.465 56.808C669.305 50.76 674.249 45.864 680.297 42.12C686.345 38.376 692.969 36.504 700.169 36.504C707.369 36.504 712.841 38.328 716.585 41.976C720.425 45.624 722.345 50.328 722.345 56.088C722.345 65.4 718.025 74.136 709.385 82.296C700.841 90.456 689.849 94.536 676.409 94.536ZM707.225 60.84C707.225 56.904 705.977 53.688 703.481 51.192C701.081 48.6 697.721 47.304 693.401 47.304C689.177 47.304 685.481 48.504 682.313 50.904C679.241 53.304 676.793 56.52 674.969 60.552C671.705 68.04 669.689 76.152 668.921 84.888C671.225 85.176 673.385 85.32 675.401 85.32C685.193 85.32 692.921 82.824 698.585 77.832C704.345 72.744 707.225 67.08 707.225 60.84ZM768.138 14.904C768.138 20.184 766.266 35.112 762.522 59.688C758.874 84.264 757.05 101.304 757.05 110.808C757.05 120.216 758.874 126.888 762.522 130.824C759.546 134.28 756.234 136.008 752.586 136.008C745.098 136.008 741.354 129.672 741.354 117C741.354 112.296 743.034 98.28 746.394 74.952C749.85 51.624 751.578 34.872 751.578 24.696C751.578 14.424 750.57 7.272 748.554 3.24C749.61 2.376 751.098 1.65599 753.018 1.07999C755.034 0.407993 756.762 0.0719948 758.202 0.0719948C761.562 0.0719948 764.058 1.22399 765.69 3.52799C767.322 5.83199 768.138 9.62399 768.138 14.904ZM815.951 14.904C815.951 20.184 814.079 35.112 810.335 59.688C806.687 84.264 804.863 101.304 804.863 110.808C804.863 120.216 806.687 126.888 810.335 130.824C807.359 134.28 804.047 136.008 800.399 136.008C792.911 136.008 789.167 129.672 789.167 117C789.167 112.296 790.847 98.28 794.207 74.952C797.663 51.624 799.391 34.872 799.391 24.696C799.391 14.424 798.383 7.272 796.367 3.24C797.423 2.376 798.911 1.65599 800.831 1.07999C802.847 0.407993 804.575 0.0719948 806.015 0.0719948C809.375 0.0719948 811.871 1.22399 813.503 3.52799C815.135 5.83199 815.951 9.62399 815.951 14.904Z" fill="white"/>
          </svg>
        </div>
    </div>
  );
}

export default IntroLogo;
