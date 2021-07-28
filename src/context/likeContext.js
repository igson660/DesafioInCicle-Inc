import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LikeContext = createContext();

export default function LikeContextProvider({ children }) {
  const [like, setLike] = useState([1, 2]);

  return (
    <LikeContext.Provider
      value={ { like, setLike, } }
    >
      {children}
    </LikeContext.Provider>
  );
}

LikeContextProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
