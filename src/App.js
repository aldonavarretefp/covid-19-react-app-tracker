import React from 'react';

import  { Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
    async componentDidMount(){
        const data = await fetchData();
        console.log(data)
    }
    render(){
        return(
            // In order not to confuse, classNames are written as below
            <div className ={styles.container}>
                {/* Display the data in de Cards */}
                <Cards/>
                <Chart/>
                <CountryPicker/>
            </div>
        )
    }
}

export default App;