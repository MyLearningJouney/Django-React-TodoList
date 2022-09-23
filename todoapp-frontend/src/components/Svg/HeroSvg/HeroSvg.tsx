import style from '../HeroSvg/HeroSvg.module.scss'

function HeroSvg (){
  
    return (
            <svg
              viewBox="0 0 738.22 557.747"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              className={style.heroSvg}
            >
              <g id={style.animationBigCheck}> {/* Big Check*/}
                <path
                  d="M304.284 386.44c0 19.25-14.948 34.854-33.388 34.854s-33.388-15.604-33.388-34.854c0-.436.007-.87.025-1.302.338-19.246 15.563-34.555 34-34.196s33.101 16.253 32.757 35.498z"
                  fill="#5aac44"
                  data-name="Path 2429"
                />
                <path
                  d="M259.139 401.92l-9.617-12.823 2.278-1.709 7.834 10.446 30.844-25.233 1.804 2.204z"
                  fill="#fff"
                  data-name="Path 2431"
                />
              </g>
              <path
                d="M0 555.747h738.22v2H0z"
                fill="#e6e6e6"
                data-name="Rectangle 256"
              />
              <g> {/* First "write" line */}
                <path
                  className={style.pathFirstLine}
                  fill="#FFF"
                  fillOpacity="0"
                  d="M161.13 45.552 h226.858 M161.13 64.195 H304.54"
                  stroke="#ccc"
                  stroke-width="6"
                  stroke-linecap="round"
                />
              </g>
              <g id={style.animationFirstCheck}> {/* First check ball */}
                <path
                  d="M385.145 21.8c0 7.534-5.85 13.641-13.068 13.641s-13.069-6.107-13.069-13.642c0-.17.003-.34.01-.51.133-7.532 6.092-13.525 13.308-13.384s12.956 6.361 12.821 13.894z"
                  fill="#5aac44"
                  data-name="Path 2429"
                />
                <path
                d="M367.475 27.858l-3.764-5.019.891-.669 3.067 4.089 12.072-9.877.706.863z"
                fill="#fff"
                data-name="Path 2431"
                />
              </g>
              <g>{/* Second "write" line */}
                <path
                  className={style.pathSecondLine}
                  d="M161.13 159.552h226.858M161.13 178.195H304.54"
                  fill="#ccc"
                  stroke="#ccc"
                  stroke-width="6"
                  stroke-linecap="round"
                />
              </g>
              <g id={style.animationSecondCheck}>{/* Second check ball */}
                <path
                  d="M384.145 135.8c0 7.534-5.85 13.641-13.068 13.641s-13.069-6.107-13.069-13.642c0-.17.003-.34.01-.51.133-7.532 6.092-13.525 13.308-13.384s12.956 6.361 12.821 13.894z"
                  fill="#5aac44"
                  data-name="Path 2429"
                />
                <path
                  d="M366.475 141.858l-3.764-5.019.891-.669 3.067 4.089 12.072-9.877.706.863z"
                  fill="#fff"
                  data-name="Path 2431"
                />
              </g>
              <g>{/* Third "write" line */}
                <path
                  className={style.pathThirdLine}
                  d="M161.13 273.552h226.858M161.13 292.195H304.54"
                  fill="#ccc"
                  stroke="#ccc"
                  stroke-width="6"
                  stroke-linecap="round"
                />
              </g>
              <g id={style.animationThirdCheck}>{/* Third check ball */}
                <path
                  d="M384.145 249.8c0 7.534-5.85 13.641-13.068 13.641s-13.069-6.107-13.069-13.642c0-.17.003-.34.01-.51.133-7.532 6.092-13.525 13.308-13.384s12.956 6.361 12.821 13.894z"
                  fill="#5aac44"
                  data-name="Path 2429"
                />
                <path
                  d="M366.475 255.858l-3.764-5.019.891-.669 3.067 4.089 12.072-9.877.706.863z"
                  fill="#fff"
                  data-name="Path 2431"
                />
              </g>
              <g data-name="Group 24">
                <g>{/* Right Arm */}
                  <path
                    className={style.rightArmMoviment}
                    d="M486.058 195.957a14.211 14.211 0 011.987 1.108l63.154-26.954 2.253-16.636 25.235-.155-1.491 38.158-83.357 22.047a14.94 14.94 0 01-.631 1.7 14.411 14.411 0 11-7.151-19.265z"
                    fill="#a0616a"
                    data-name="Path 552"
                  />
                </g>
                <path
                  d="M587.864 541.718h-17.263l-8.212-66.584h25.477z"
                  fill="#a0616a"
                  data-name="Path 553"
                />
                <path
                  d="M558.271 536.786h33.292v20.955h-54.254a20.962 20.962 0 0120.962-20.962z"
                  fill="#2f2e41"
                  data-name="Path 554"
                />
                <path
                  d="M655 536.84l-17.178 1.69-14.7-65.458 25.355-2.491z"
                  fill="#a0616a"
                  data-name="Path 555"
                />
                <path
                  d="M625.056 534.836l33.126-3.263 2.054 20.857-53.981 5.317a20.958 20.958 0 0118.8-22.911z"
                  fill="#2f2e41"
                  data-name="Path 556"
                />
                <path
                  d="M566.743 528.252a6.3 6.3 0 01-6.217-5.21c-8.929-49.59-38.141-211.772-38.84-216.268a1.99 1.99 0 01-.023-.312v-12.094a2.1 2.1 0 01.393-1.228l3.858-5.4a2.082 2.082 0 011.611-.88c22-1.031 94.036-4.054 97.516.294 3.495 4.365 2.253 17.61 1.971 20.22l.014.272 32.366 206.982a6.353 6.353 0 01-5.233 7.23l-20.214 3.33a6.366 6.366 0 01-7.076-4.355c-6.252-19.978-27.216-87.184-34.482-113.19a.7.7 0 00-1.381.2c.363 24.79 1.24 88.036 1.549 109.88l.032 2.354a6.362 6.362 0 01-5.763 6.387l-19.492 1.766a5.875 5.875 0 01-.589.022z"
                  fill="#2f2e41"
                  data-name="Path 557"
                />
                <path
                  d="M570.721 96.45c-6.035 3.588-9.647 10.18-11.719 16.9a160.073 160.073 0 00-6.877 38.24l-2.191 38.86-27.113 103.029c23.5 19.883 37.053 15.363 68.686-.9S626.753 298 626.753 298l6.325-87.663 9.037-95.793a42.487 42.487 0 00-6.846-6.581 69.923 69.923 0 00-59.761-12.673z"
                  fill="#5aac44"
                  data-name="Path 99"
                />
                <path
                  d="M561.915 216.764a14.828 14.828 0 012.112.986l62.447-31.26 1.036-16.932 25.759-1.776 1.38 38.6-83.45 27.6a14.784 14.784 0 11-9.283-17.223z"
                  fill="#a0616a"
                  data-name="Path 558"
                />
                <path
                  d="M641.665 114.976c15.363 5.422 18.071 64.17 18.071 64.17-18.075-9.94-39.765 6.327-39.765 6.327s-4.518-15.365-9.941-35.246a34.54 34.54 0 017.229-32.535s9.041-8.141 24.406-2.716z"
                  fill="#5aac44"
                  data-name="Path 101"
                />
                <path
                  d="M623.672 57.41c-4.309-3.446-10.187 2.817-10.187 2.817l-3.447-31.016s-21.543 2.58-35.334-.862-15.943 12.5-15.943 12.5a110.654 110.654 0 01-.431-19.391c.862-7.756 12.064-15.512 31.885-20.683s30.162 17.236 30.162 17.236c13.796 6.889 7.609 42.85 3.295 39.4z"
                  fill="#2f2e41"
                  data-name="Path 102"
                />
                <circle
                  cx="592.669"
                  cy="48.268"
                  fill="#a0616a"
                  r="34.583"
                  data-name="Ellipse 84"
                />
              </g>
            </svg>
          );

}

export default HeroSvg
