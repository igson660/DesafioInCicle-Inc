import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LikeContext = createContext();

export default function LikeContextProvider({ children }) {
  const [like, setLike] = useState();

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
