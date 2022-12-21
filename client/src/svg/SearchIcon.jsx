import React from 'react'

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
      viewBox="0 0 25 25"
    >
      <g
        fillRule="evenodd"
        stroke="#01D1FF"
        strokeOpacity="0.49"
        strokeWidth="0.5"
        clipRule="evenodd"
        filter="url(#filter0_d_160_74)"
      >
        <path
          fill="#fff"
          strokeLinejoin="round"
          d="M15.707 13.293l7.5 7.5-1.414 1.414-7.5-7.5 1.414-1.414z"
        ></path>
        <path
          fill="#F7EEEC"
          d="M10 3a6 6 0 100 12 6 6 0 000-12zM2 9a8 8 0 1116 0A8 8 0 012 9z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_160_74"
          width="23.707"
          height="23.707"
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
          <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.00416666 0 0 0 0 0.82075 0 0 0 0 1 0 0 0 0.44 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_160_74"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_160_74"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default SearchIcon