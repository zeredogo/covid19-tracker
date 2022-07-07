import React from 'react';
import {Cards, Chart, CountryPicker} from './components';
import {fetchData} from './api';


class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({data: fetchedData})
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({data: fetchedData, country: country});
  }

  render() {
    const {data, country} = this.state;
  return (
    <div className="container">
      <Cards data={data}/>
      <Chart data={data} country={country}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
    </div>
  );
}
}

export default App;
