import React from 'react'

function Car() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 28 26"
    >
      <g
        fill="#FFEDED"
        fillRule="evenodd"
        stroke="#01D1FF"
        strokeLinejoin="round"
        strokeOpacity="0.5"
        strokeWidth="0.5"
        clipRule="evenodd"
        filter="url(#filter0_d_45_170)"
      >
        <path
          strokeLinecap="round"
          d="M8.155 6.293A.75.75 0 018.75 6h8a.75.75 0 010 1.5H9.726l1.6 6h8.848l1.6-6H20.75a.75.75 0 010-1.5h2a.75.75 0 01.725.943l-2 7.5a.75.75 0 01-.725.557h-10a.75.75 0 01-.725-.557l-2-7.5a.75.75 0 01.13-.65z"
        ></path>
        <path
          strokeLinecap="round"
          d="M5 4.75A.75.75 0 015.75 4h2.5a.75.75 0 01.728.568l.5 2a.75.75 0 01-1.456.364L7.664 5.5H5.75A.75.75 0 015 4.75z"
        ></path>
        <path d="M11.25 17.5a.75.75 0 100 1.5.75.75 0 000-1.5zM9 18.25a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM20.25 17.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z"></path>
      </g>
      <defs>
        <filter
          id="filter0_d_45_170"
          width="27"
          height="25"
          x="0.75"
          y="0.75"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="1"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.00392157 0 0 0 0 0.819608 0 0 0 0 1 0 0 0 0.19 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_45_170"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_45_170"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
    }


export default Car