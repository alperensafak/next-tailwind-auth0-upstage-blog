import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'

const WavingHand = () => (
  <motion.div
    style={{
      marginBottom: '-20px',
      marginRight: '-45px',
      paddingBottom: '20px',
      paddingRight: '45px',
      display: 'inline-block'
    }}
    animate={{ rotate: 20 }}
    transition={{
      yoyo: Infinity,
      from: 0,
      duration: 0.2,
      ease: 'easeInOut',
      type: 'tween'
    }}
  >
    👋
  </motion.div>
)

const HeroText = () => {
  const { t } = useTranslation('hero')
  return (
    <>
      <div className="lg:flex-grow  md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
        <h1 className="  xl:text-6xl lg:text-4xl text-3xl mb-4 font-title font-bold text-black dark:text-white">
          {t('h-1')}
          <WavingHand /> {t('h-2')}{' '}
          <span className="relative inline-block  ">
            <span className="absolute  w-full h-[calc(100%-1.3rem)] mt-5  bg-yellow-300 dark:focus: dark:bg-darkblue"></span>
            <span className="relative"> Alperen</span>
          </span>
          ,
          <br className=" inline-block" />
          {t('h-3')}
        </h1>
        <p className="text-xl text-color  mb-8 ">{t('p-1')} </p>
        <p className="text-xl text-color  mb-8 ">{t('p-2')}</p>

        <div className="flex justify-center space-x-4">
          <a href="https://github.com/alperensafak" target="_blank">
            <svg
              className="icon"
              id="Github"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/alperensafak/" target="_blank">
            <svg
              className="icon"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0" />
            </svg>
          </a>
          <a href="https://www.behance.net/alperensafak" target="_blank">
            <svg
              className="icon"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 97.75 97.75"
            >
              <path d="M39.337,38.729c0-4.611-3.137-4.611-3.137-4.611h-1.661H23.294v9.894H35.4C37.492,44.011,39.337,43.342,39.337,38.729z" />
              <path d="M36.201,50.846H23.294v11.85h12.311c1.852-0.053,5.27-0.633,5.27-5.76C40.875,50.784,36.201,50.846,36.201,50.846z" />
              <path d="M69.243,44.011c-6.849,0-7.804,6.835-7.804,6.835h14.565C76.005,50.846,76.092,44.011,69.243,44.011z" />
              <path
                d="M48.875,0C21.882,0,0,21.883,0,48.875S21.882,97.75,48.875,97.75S97.75,75.867,97.75,48.875S75.868,0,48.875,0z
			 M59.531,28.848h18.294v5.46H59.531V28.848z M50.285,57.486c0,13.533-14.084,13.088-14.084,13.088H23.294h-0.379h-9.787V26.236
			h9.787h0.379H36.2c7.012,0,12.547,3.871,12.547,11.805c0,7.935-6.766,8.438-6.766,8.438C50.9,46.479,50.285,57.486,50.285,57.486z
			 M69.33,64.479c7.37,0,7.109-4.77,7.109-4.77h7.803c0,12.659-15.172,11.792-15.172,11.792c-18.207,0-17.036-16.95-17.036-16.95
			S52.02,37.517,69.068,37.517c17.947,0,15.434,19.245,15.434,19.245H61.527C61.527,65.001,69.33,64.479,69.33,64.479z"
              />
            </svg>
          </a>
          <a href="mailto:alperensafak@gmail.com" target="_blank">
            <svg
              className="icon"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M120.202,349.37c-5.859-5.859-15.352-5.859-21.211,0L4.395,443.956c-5.86,5.859-5.86,15.351,0,21.211
			c5.859,5.859,15.352,5.859,21.211,0l94.596-94.586C126.061,364.722,126.061,355.229,120.202,349.37z"
              />

              <path
                d="M77.78,306.934c-5.859-5.859-15.352-5.859-21.211,0l-52.175,52.18c-5.86,5.859-5.86,15.352,0,21.211
			c5.859,5.859,15.352,5.859,21.211,0l52.175-52.18C83.639,322.285,83.639,312.793,77.78,306.934z"
              />

              <path
                d="M162.623,391.791c-5.859-5.859-15.352-5.859-21.211,0l-94.581,94.601c-5.859,5.859-5.859,15.352,0,21.211
			c5.859,5.859,15.352,5.86,21.211,0l94.581-94.601C168.482,407.143,168.482,397.65,162.623,391.791z"
              />

              <path
                d="M205.059,434.213c-5.859-5.859-15.352-5.859-21.211,0l-52.175,52.18c-5.859,5.859-5.859,15.352,0,21.211
			c5.859,5.86,15.351,5.86,21.211,0l52.175-52.18C210.918,449.564,210.918,440.072,205.059,434.213z"
              />

              <path
                d="M311.128,9.953L98.99,222.09c-4.814,4.814-8.245,10.582-10.453,16.816h224.407c8.276,0.001,14.999-6.723,14.999-14.999
			V0.005C321.739,2.098,315.892,5.185,311.128,9.953z"
              />

              <path
                d="M502.039,137.233L374.76,9.954c-4.768-4.772-10.513-7.861-16.716-9.952v153.947h153.952
			C509.788,147.714,506.851,142.045,502.039,137.233z"
              />

              <path
                d="M358.043,184.049v39.858c0,24.814-20.286,45.1-45.1,45.1h-39.858v154.451c6.238-2.208,12.01-5.64,16.816-10.455
			l212.137-212.122c4.816-4.816,7.753-10.591,9.961-16.831H358.043z"
              />

              <path
                d="M88.538,269.007c2.208,6.235,5.64,11.904,10.452,16.716l127.279,127.279c4.812,4.812,10.482,8.244,16.717,10.452V269.007
			H88.538z"
              />
            </svg>
          </a>
        </div>

        <div className="mt-8">
          <a
            href="/cv/Alperen_Safak_cv.pdf"
            className="relative "
            target="_blank"
          >
            <span className="absolute -top-4 left-0 w-full h-14 mt-1 ml-1 bg-yellow-300 rounded dark:bg-darkblue"></span>
            <span className="relative inline-block w-48 h-full px-5 py-3 text-base font-bold font-textfont bg-white border-2 border-black rounded fold-bold hover:bg-yellow-300 hover:text-white dark:hover:text-white dark:hover:bg-darkblue dark:text-black">
              <span className="flex items-center md:justify-start justify-center space-x-3 ">
                <span>{t('cv')}</span>
                <svg
                  className="fill-current  w-6 h-6   "
                  id="Capa_1"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m115 210h20c19.299 0 35-15.701 35-35 0-8.284-6.716-15-15-15s-15 6.716-15 15c0 2.757-2.243 5-5 5h-20c-2.757 0-5-2.243-5-5v-80c0-2.757 2.243-5 5-5h20c2.757 0 5 2.243 5 5 0 8.284 6.716 15 15 15s15-6.716 15-15c0-19.299-15.701-35-35-35h-20c-19.299 0-35 15.701-35 35v80c0 19.299 15.701 35 35 35z" />
                  <path d="m220.486 193.786c1.723 6.606 7.688 11.214 14.514 11.214s12.791-4.608 14.514-11.214l30-115c2.091-8.016-2.712-16.209-10.728-18.301-8.013-2.091-16.209 2.713-18.3 10.729l-15.486 59.361-15.486-59.361c-2.091-8.016-10.285-12.819-18.3-10.729-8.016 2.092-12.819 10.285-10.728 18.301z" />
                  <path d="m210 255c0-8.284-6.716-15-15-15h-120c-8.284 0-15 6.716-15 15s6.716 15 15 15h120c8.284 0 15-6.716 15-15z" />
                  <path d="m165 300h-90c-8.284 0-15 6.716-15 15s6.716 15 15 15h90c8.284 0 15-6.716 15-15s-6.716-15-15-15z" />
                  <path d="m165 360h-90c-8.284 0-15 6.716-15 15s6.716 15 15 15h90c8.284 0 15-6.716 15-15s-6.716-15-15-15z" />
                  <path d="m497 312h-48.787c-9.673 0-18.767-3.767-25.607-10.606-12.505-12.506-29.133-19.394-46.819-19.394h-15.787v-267c0-8.284-6.716-15-15-15h-330c-8.284 0-15 6.716-15 15v422c0 8.284 6.716 15 15 15h209.58c-1.665 4.695-2.58 9.741-2.58 15 0 24.813 20.187 45 45 45h108.787c17.687 0 34.314-6.888 46.82-19.394 6.84-6.84 15.934-10.606 25.607-10.606h48.786c8.284 0 15-6.716 15-15v-140c0-8.284-6.716-15-15-15zm-467-282h300v252h-83c-24.813 0-45 20.187-45 45s20.187 45 45 45h83v50h-300zm222 437c0-8.271 6.729-15 15-15h40c8.271 0 15 6.729 15 15s-6.729 15-15 15h-40c-8.271 0-15-6.729-15-15zm230-15h-33.787c-17.687 0-34.314 6.888-46.82 19.394-6.84 6.84-15.934 10.606-25.607 10.606h-26.366c1.665-4.695 2.58-9.741 2.58-15 0-5.486-.99-10.743-2.795-15.609 6.235-1.819 10.795-7.568 10.795-14.391v-31.035c7.507 3.848 16 6.035 25 6.035 8.284 0 15-6.716 15-15s-6.716-15-15-15c-13.785 0-25-11.215-25-25 0-8.284-6.716-15-15-15h-98c-8.271 0-15-6.729-15-15s6.729-15 15-15h128.787c9.673 0 18.767 3.767 25.607 10.606 12.505 12.506 29.133 19.394 46.819 19.394h33.787z" />
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </>
  )
}

export default HeroText
