import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useGlobalStateContext } from '../../utils/globalContext';
const Youtube = ({ iconColor, strokeColor }) => (
  <svg
    width='40'
    height='30'
    viewBox='0 0 112 99'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_dddd)'>
      <path
        d='M102.91 16.5019C101.76 11.1872 98.3718 7.00159 94.0693 5.58113C86.2709 3 55 3 55 3C55 3 23.7293 3 15.9306 5.58113C11.6282 7.00181 8.23968 11.1872 7.0896 16.5019C5 26.1349 5 46.2334 5 46.2334C5 46.2334 5 66.332 7.0896 75.965C8.23968 81.2797 11.6282 85.2909 15.9306 86.7114C23.7293 89.2925 55 89.2925 55 89.2925C55 89.2925 86.2707 89.2925 94.0693 86.7114C98.3718 85.2909 101.76 81.2797 102.91 75.965C105 66.332 105 46.2334 105 46.2334C105 46.2334 105 26.1349 102.91 16.5019V16.5019ZM44.7727 64.4814V27.9855L70.9089 46.2339L44.7727 64.4814V64.4814Z'
        fill={iconColor}
      />
      <path
        d='M55 3C55 2.5 54.9999 2.5 54.9996 2.5L54.9985 2.5L54.9941 2.5L54.977 2.50001L54.9094 2.50008L54.6455 2.50063C54.4141 2.50126 54.0739 2.50253 53.6382 2.50505C52.7668 2.5101 51.5136 2.52019 49.9855 2.54037C46.9295 2.58074 42.7728 2.66147 38.3715 2.82298C33.9711 2.98445 29.3213 3.22683 25.2804 3.59093C21.2564 3.95352 17.7855 4.44062 15.7739 5.10635L55 3ZM55 3C55 2.5 55.0001 2.5 55.0004 2.5L55.0015 2.5L55.0059 2.5L55.023 2.50001L55.0906 2.50008L55.3545 2.50063C55.5859 2.50126 55.9261 2.50253 56.3618 2.50505C57.2332 2.5101 58.4864 2.52019 60.0145 2.54037C63.0706 2.58074 67.2272 2.66147 71.6286 2.82298C76.0289 2.98445 80.6788 3.22683 84.7197 3.59093C88.7436 3.95352 92.2145 4.44062 94.2261 5.10634C98.7329 6.59427 102.22 10.9491 103.399 16.3961C104.454 21.2597 104.977 28.7322 105.238 34.9591C105.369 38.0789 105.435 40.8967 105.467 42.9345C105.484 43.9535 105.492 44.7777 105.496 45.3474C105.498 45.6323 105.499 45.8535 105.499 46.0037L105.5 46.1747L105.5 46.2184L105.5 46.2296V46.2324V46.2332C105.5 46.2333 105.5 46.2334 105 46.2334C105.5 46.2334 105.5 46.2335 105.5 46.2337V46.2345V46.2373L105.5 46.2485L105.5 46.2922L105.499 46.4632C105.499 46.6134 105.498 46.8346 105.496 47.1195C105.492 47.6891 105.484 48.5134 105.467 49.5324C105.435 51.5702 105.369 54.388 105.238 57.5078C104.977 63.7347 104.454 71.2072 103.399 76.0708C102.218 81.5269 98.7254 85.7006 94.2264 87.1861C92.2148 87.8518 88.7438 88.339 84.7196 88.7016C80.6787 89.0657 76.0289 89.3081 71.6285 89.4695C67.2272 89.631 63.0705 89.7118 60.0145 89.7521C58.4864 89.7723 57.2331 89.7824 56.3618 89.7875C55.9261 89.79 55.5859 89.7912 55.3544 89.7919L55.0906 89.7924L55.023 89.7925L55.0059 89.7925H55.0015H55.0004C55.0001 89.7925 55 89.7925 55 89.2925C55 89.7925 54.9999 89.7925 54.9996 89.7925H54.9985H54.9941L54.977 89.7925L54.9094 89.7924L54.6455 89.7919C54.4141 89.7912 54.0739 89.79 53.6382 89.7875C52.7668 89.7824 51.5136 89.7723 49.9855 89.7521C46.9295 89.7118 42.7728 89.631 38.3715 89.4695C33.9711 89.3081 29.3213 89.0657 25.2804 88.7016C21.2562 88.339 17.7851 87.8518 15.7735 87.1861C11.2747 85.7006 7.78172 81.527 6.60096 76.071C5.54595 71.2074 5.02277 63.7348 4.76164 57.5078C4.63081 54.388 4.56541 51.5702 4.53271 49.5324C4.51636 48.5134 4.50818 47.6891 4.50409 47.1195C4.50205 46.8346 4.50103 46.6134 4.50051 46.4632L4.50006 46.2922L4.50001 46.2485L4.5 46.2373L4.5 46.2345L4.5 46.2337C4.5 46.2335 4.5 46.2334 5 46.2334M55 3L5 46.2334M5 46.2334C4.5 46.2334 4.5 46.2333 4.5 46.2332L4.5 46.2324L4.5 46.2296L4.50001 46.2184L4.50006 46.1747L4.50051 46.0037C4.50103 45.8535 4.50205 45.6323 4.50409 45.3474C4.50818 44.7777 4.51636 43.9535 4.53271 42.9345C4.56541 40.8967 4.63081 38.0789 4.76164 34.9591C5.02277 28.732 5.54595 21.2595 6.60096 16.3959C7.77972 10.9491 11.267 6.59469 15.7735 5.10646L5 46.2334ZM70.0355 46.2339L45.2727 63.5225V28.9444L70.0355 46.2339Z'
        stroke={strokeColor}
        stroke-opacity='0.5'
      />
    </g>
    <defs>
      <filter
        id='filter0_dddd'
        x='0'
        y='0'
        width='112'
        height='98.2925'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'
      >
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dx='2' dy='2' />
        <feGaussianBlur stdDeviation='2' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
        />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy='4' />
        <feGaussianBlur stdDeviation='2' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
        />
        <feBlend mode='normal' in2='effect1_dropShadow' result='effect2_dropShadow' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy='4' />
        <feGaussianBlur stdDeviation='2' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
        />
        <feBlend mode='normal' in2='effect2_dropShadow' result='effect3_dropShadow' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy='4' />
        <feGaussianBlur stdDeviation='2' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
        />
        <feBlend mode='normal' in2='effect3_dropShadow' result='effect4_dropShadow' />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect4_dropShadow'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);

const LinkedIn = ({ iconColor, strokeColor }) => (
  <svg
    width='40'
    height='40'
    viewBox='0 0 112 112'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_dddd)'>
      <path
        d='M27.3839 103H6.65179V36.2351H27.3839V103ZM17.0067 27.1278C10.3772 27.1278 5 21.6366 5 15.007C5 11.8225 6.26499 8.7685 8.51668 6.51676C10.7684 4.26502 13.8223 3 17.0067 3C20.1911 3 23.245 4.26502 25.4967 6.51676C27.7484 8.7685 29.0134 11.8225 29.0134 15.007C29.0134 21.6366 23.6339 27.1278 17.0067 27.1278ZM104.978 103H84.2902V70.4993C84.2902 62.7536 84.1339 52.8203 73.5112 52.8203C62.7321 52.8203 61.0804 61.2357 61.0804 69.9412V103H40.3705V36.2351H60.2545V45.3425H60.5446C63.3125 40.0968 70.0737 34.561 80.1607 34.561C101.143 34.561 105 48.3782 105 66.3251V103H104.978Z'
        fill={iconColor}
      />
      <path
        d='M27.3839 103.5H27.8839V103V36.2351V35.7351H27.3839H6.65179H6.15179V36.2351V103V103.5H6.65179H27.3839ZM83.7902 103V103.5H84.2902H104.978H105H105.5V103V66.3251C105.5 57.3409 104.54 49.2734 100.872 43.4466C97.17 37.5667 90.7751 34.061 80.1607 34.061C70.5929 34.061 63.9302 38.9509 60.7545 43.983V36.2351V35.7351H60.2545H40.3705H39.8705V36.2351V103V103.5H40.3705H61.0804H61.5804V103V69.9412C61.5804 65.5976 61.9972 61.43 63.6915 58.3576C64.5321 56.8332 65.6855 55.5824 67.2636 54.7087C68.8446 53.8333 70.8814 53.3203 73.5112 53.3203C76.0871 53.3203 77.983 53.9214 79.3908 54.9035C80.7997 55.8863 81.7624 57.2803 82.4193 58.9393C83.7447 62.2859 83.7902 66.6046 83.7902 70.4993V103ZM4.5 15.007C4.5 21.9066 10.095 27.6278 17.0067 27.6278C23.9161 27.6278 29.5134 21.9066 29.5134 15.007C29.5134 11.6899 28.1957 8.50872 25.8503 6.16321C23.5048 3.8177 20.3237 2.5 17.0067 2.5C13.6897 2.5 10.5086 3.8177 8.16312 6.16321C5.81766 8.50872 4.5 11.6899 4.5 15.007Z'
        stroke={strokeColor}
        stroke-opacity='0.5'
      />
    </g>
    <defs>
      <filter
        id='filter0_dddd'
        x='0'
        y='0'
        width='112'
        height='112'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'
      >
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dx='2' dy='2' />
        <feGaussianBlur stdDeviation='2' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
        />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy='4' />
        <feGaussianBlur stdDeviation='2' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
        />
        <feBlend mode='normal' in2='effect1_dropShadow' result='effect2_dropShadow' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy='4' />
        <feGaussianBlur stdDeviation='2' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
        />
        <feBlend mode='normal' in2='effect2_dropShadow' result='effect3_dropShadow' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy='4' />
        <feGaussianBlur stdDeviation='2' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
        />
        <feBlend mode='normal' in2='effect3_dropShadow' result='effect4_dropShadow' />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect4_dropShadow'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);

const Behance = ({ iconColor, strokeColor }) => (
  <svg
    width='40'
    height='30'
    viewBox='0 0 110 87'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_dddd)'>
      <path
        d='M45.2778 35.4744C50.7986 32.2358 53.6806 27.3352 53.6806 19.7074C53.6806 4.66477 44.5486 1 34.0104 1H5V76.5114H34.8264C46.0069 76.5114 56.5104 69.9276 56.5104 54.5867C56.5104 45.1051 52.8472 38.0952 45.2778 35.4744V35.4744ZM18.5243 13.8906H31.2153C36.0937 13.8906 40.4861 15.5739 40.4861 22.5199C40.4861 28.9332 37.066 31.5114 32.2396 31.5114H18.5243V13.8906V13.8906ZM32.9861 63.6847H18.5243V42.8892H33.2639C39.2187 42.8892 42.9861 45.9361 42.9861 53.6705C42.9861 61.2983 38.4896 63.6847 32.9861 63.6847V63.6847ZM95.2257 12.3991H70.2778V4.96307H95.2257V12.3991V12.3991ZM105 49.9631C105 33.7912 97.2917 20.304 83.316 20.304C69.7396 20.304 60.5208 32.8324 60.5208 49.2386C60.5208 66.2628 69.2535 77.9389 83.316 77.9389C93.9583 77.9389 100.851 72.0582 104.167 59.5511H93.3681C92.2049 64.2173 87.4132 66.6889 83.6979 66.6889C76.5278 66.6889 72.7604 61.5327 72.7604 52.7756H104.896C104.948 51.8807 105 50.9219 105 49.9631ZM72.7778 43.3153C73.1771 36.1349 77.066 31.6392 82.934 31.6392C89.0799 31.6392 92.1701 36.071 92.691 43.3153H72.7778Z'
        fill={iconColor}
      />
      <path
        d='M5 0.5H4.5V1V76.5114V77.0114H5H34.8264C40.5095 77.0114 46.058 75.3382 50.1926 71.6761C54.3376 68.0049 57.0104 62.3798 57.0104 54.5867C57.0104 45.3815 53.5893 38.3286 46.4033 35.3661C48.8065 33.7994 50.6816 31.8696 51.9883 29.4765C53.4479 26.8034 54.1806 23.5844 54.1806 19.7074C54.1806 12.0803 51.8601 7.23539 48.104 4.31784C44.3736 1.4202 39.3211 0.5 34.0104 0.5H5ZM19.0243 31.0114V14.3906H31.2153C33.6133 14.3906 35.7995 14.8075 37.3789 15.9996C38.9303 17.1705 39.9861 19.1597 39.9861 22.5199C39.9861 25.6408 39.1552 27.7422 37.8207 29.0656C36.4849 30.3903 34.5681 31.0114 32.2396 31.0114H19.0243ZM69.7778 12.3991V12.8991H70.2778H95.2257V12.3991H95.7257V4.96307V4.46307H95.2257H70.2778H69.7778V4.96307V12.3991ZM104.65 59.6793L104.817 59.0511H104.167H93.368H92.9774L92.8829 59.4302C91.7902 63.8138 87.2517 66.1889 83.6979 66.1889C80.2453 66.1889 77.6668 64.9549 75.9363 62.7108C74.2584 60.5349 73.3341 57.3521 73.2646 53.2756H104.896H105.368L105.395 52.8046C105.447 51.91 105.5 50.9381 105.5 49.9631C105.5 41.8057 103.557 34.285 99.8121 28.7876C96.0569 23.2751 90.4894 19.804 83.316 19.804C69.3509 19.804 60.0208 32.6842 60.0208 49.2386C60.0208 57.8307 62.2241 65.1236 66.2509 70.2806C70.2871 75.4496 76.1315 78.4389 83.316 78.4389C88.735 78.4389 93.2428 76.9389 96.8179 73.8115C100.385 70.6913 102.976 65.9926 104.65 59.6793ZM32.9861 63.1847H19.0243V43.3892H33.2639C36.1613 43.3892 38.4404 44.1297 40.0002 45.7286C41.5622 47.3298 42.4861 49.8771 42.4861 53.6705C42.4861 57.3838 41.3954 59.7291 39.7249 61.1581C38.0395 62.5997 35.6769 63.1847 32.9861 63.1847ZM92.1485 42.8153H73.3132C73.5797 39.5511 74.602 36.9324 76.1826 35.1125C77.8394 33.2048 80.1388 32.1392 82.934 32.1392C85.8713 32.1392 88.0298 33.1902 89.531 35.0724C90.9725 36.8799 91.8443 39.5001 92.1485 42.8153Z'
        stroke={strokeColor}
        stroke-opacity='0.5'
      />
    </g>
    <defs>
      <filter
        id='filter0_dddd'
        x='0'
        y='0'
        width='110'
        height='86.9389'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'
      >
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy='4' />
        <feGaussianBlur stdDeviation='2' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
        />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy='4' />
        <feGaussianBlur stdDeviation='2' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
        />
        <feBlend mode='normal' in2='effect1_dropShadow' result='effect2_dropShadow' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy='4' />
        <feGaussianBlur stdDeviation='2' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
        />
        <feBlend mode='normal' in2='effect2_dropShadow' result='effect3_dropShadow' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy='4' />
        <feGaussianBlur stdDeviation='2' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
        />
        <feBlend mode='normal' in2='effect3_dropShadow' result='effect4_dropShadow' />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect4_dropShadow'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);

const Icons = () => {
  const { currentTheme } = useGlobalStateContext();
  const iconColor = currentTheme === 'dark' ? '#101010' : 'var(--yellow)';
  const strokeColor = currentTheme === 'dark' ? '#fff' : '#101010';
  return (
    <>
      <a href='/' target='_blank'>
        <Pos1
          initial={{ y: '-20%', opacity: 0.8 }}
          animate={{ y: '20%', opacity: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <Youtube iconColor={iconColor} strokeColor={strokeColor} />
        </Pos1>
      </a>
      <a href='/' target='_blank'>
        <Pos2
          initial={{ y: '-20%', opacity: 0.8 }}
          animate={{ y: '20%', opacity: 1 }}
          transition={{
            damping: 20,
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <LinkedIn iconColor={iconColor} strokeColor={strokeColor} />
        </Pos2>
      </a>
      <a href='/' target='_blank'>
        <Pos3
          initial={{ y: '-20%', opacity: 0.8 }}
          animate={{ y: '20%', opacity: 1 }}
          transition={{
            damping: 30,
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <Behance iconColor={iconColor} strokeColor={strokeColor} />
        </Pos3>
      </a>
    </>
  );
};
const BubbleWrapper = styled(motion.div)`
  position: absolute;
  background-color: ${(props) => props.theme.bigText};
  padding: 0.5rem;
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
`;
const Pos1 = styled(BubbleWrapper)`
  top: 20%;
  left: 5%;
`;
const Pos2 = styled(BubbleWrapper)`
  top: 75%;
  left: 30%;
`;
const Pos3 = styled(BubbleWrapper)`
  left: 75%;
  top: 15%;
`;

export default Icons;
