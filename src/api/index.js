import axios from 'axios'; //Make api requests

const url = "https://covid19.mathdro.id/api";

export const fetchData = async()=>{
    try {
        //Catching the response
        const {data: {confirmed,recovered,deaths,lastUpdate} } = await axios.get(url)
        // Using deconstruction
        return {confirmed, recovered, deaths, lastUpdate }
    } catch (error) {
        
    }
}