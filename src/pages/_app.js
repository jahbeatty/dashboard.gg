import React, {useState, useEffect} from 'react';
import ChampionList from '../components/ChampionList'
import axios from 'axios'
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';


const App = () => {
  const [championData, setChampionData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        const result = await axios('https://ddragon.leagueoflegends.com/cdn/10.21.1/data/en_US/champion.json')
        console.log(result.data.data);
        setChampionData(result.data.data);
        setLoading(false);
      }
      fetchData();
    }, [])

  return (
    <>
      <Header/>
      <SearchBar />
      <ChampionList loading={loading} championData={championData}/>
    </>
  )
}

export default App
