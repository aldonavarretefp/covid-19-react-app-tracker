import React from 'react';

import  { Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
    state = {
        data: {},
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }
    render(){
        const {data} = this.state;
        return(
            // In order not to confuse, classNames are written as below
            <div className ={styles.container}>
                {/* Display the data in de Cards */}
                <Cards data = {data}/>
                <Chart/>
                <CountryPicker/>
            </div>
        )
    }
}

export default App;