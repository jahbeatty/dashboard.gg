import React, { useState, useEffect } from "react";
import ChampionList from "../components/ChampionList";
import axios from "axios";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const App = ({ Component, ...pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
