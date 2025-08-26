import React from 'react';

const Icon = ({ id, className }) => (
  <svg className={className}>
    <use href={`/icons.svg#${id}`} />
  </svg>
);

export default Icon;
