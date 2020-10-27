import React from 'react';
import ChampionItem from './ChampionItem'

const ChampionList = ({ championData, loading }) => {

    const championDataArray = Object.entries(championData);
    return loading ? (
        <h1>Loading...</h1>
    ) : (
        <section>
            {Object.values(championData).map((item) =>(
                <>
                <ChampionItem key={item.id} item={item}></ChampionItem>
                </>
            ))}
        </section>
    )
}


export default ChampionList;
