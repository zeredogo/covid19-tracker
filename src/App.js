import React from 'react';
import { Header, Cards, Chart, CountryPicker, Map, Footer } from './components';
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
    <div className="">
        <div className='header'>
        <Header/>
      </div>
      <div className='image-container'>
      <img className='image' src='https://i.ibb.co/7QpKsCX/image.png' alt='COVID-19'/>
      </div>
      <div className='container'>
      
      <Cards data={data}/>
      <Chart />
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Map />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}
}

export default App;
