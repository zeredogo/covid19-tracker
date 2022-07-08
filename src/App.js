import React from 'react';
import {Cards, Chart, CountryPicker, Map, Table} from './components';
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
    const {data} = this.state;
  return (
    <div className="container">
      <div className='app-left'>
      <img className='image' src='https://i.ibb.co/7QpKsCX/image.png' alt='COVID-19'/>
      <Cards data={data}/>
      <Chart />
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Map />
      </div>
      <div className='app-right'>
        <Table/>
      </div>
    </div>
  );
}
}

export default App;
