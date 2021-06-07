import React from 'react';

const Icon = ({ name }) => {
  switch (name) {
    case 'person':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 66 177">
          <path d="M33 0c12.1502 0 22 9.90578 22 22.125 0 12.2192-9.8498 22.125-22 22.125s-22-9.9058-22-22.125C11 9.90578 20.8498 0 33 0zm16.5 49.7812h-3.905c-7.8069 3.6102-17.0466 3.7661-25.19 0H16.5C7.38719 49.7812 0 57.2104 0 66.375v47.016c0 4.582 3.69359 8.297 8.25 8.297h5.5v47.015c0 4.582 3.6936 8.297 8.25 8.297h22c4.5564 0 8.25-3.715 8.25-8.297v-47.015h5.5c4.5564 0 8.25-3.715 8.25-8.297V66.375c0-9.1646-7.3872-16.5938-16.5-16.5938z" />
        </svg>
      );
    case 'check':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 76 76">
          <path
            stroke="currentColor"
            stroke-width="7"
            d="M40.2333 1.5e-7V76M0 35.7666h76m-64.0965 27.823L65.6437 9.84947m-52.8986.00036L66.4853 63.5899"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default Icon;
