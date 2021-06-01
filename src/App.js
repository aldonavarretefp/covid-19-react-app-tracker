import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <div className = {styles.containertext}>
          <h1>Hi, this is an app created with <span>react</span>, by me, Aldo.</h1>
          <img className={styles.image} src={image} alt="COVID-19" />
          <p className="display-2"><strong>COVID 19 APP</strong></p>
        </div>
        <Cards data={data} />
        <h1>Please select the country that you are interested in.</h1>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;