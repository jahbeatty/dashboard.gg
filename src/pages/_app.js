import React, {useState, useEffect} from 'react';
import ChampionList from '../components/ChampionList'
import axios from 'axios'
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';


const App = () => {
  const [championData, setChampionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        const result = await axios(`https://ddragon.leagueoflegends.com/cdn/10.21.1/data/en_US/champion${query}.json`)
        // console.log(result.data.data);
        setChampionData(result.data.data);
        setLoading(false);
      }
      fetchData();
    }, [query])

  return (
    <>
      <Header/>
      <SearchBar getQuery={(q) => setQuery(q)}/>
      <ChampionList loading={loading} championData={championData} />
    </>
  )
}

export default App
