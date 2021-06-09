import React from 'react';

const Address = (props) => {
  const data = props.data;

  return (
    <p>
      {data.ulice} {data.mesto} {data.psc}
    </p>
  );
};

export default Address;
