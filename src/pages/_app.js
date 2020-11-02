import React, { useState, useEffect } from "react";

const App = ({ Component, ...pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
