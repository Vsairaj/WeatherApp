import React, { Component } from "react";
import Input from "./components/Input";
import SetUnits from "./components/SetUnits";
import WeatherReport from "./components/WeatherReport"; 
import SearchResults from "./components/SearchResults";
import debounce from "lodash.debounce";


class App extends Component {

  state = {
    location: "",
    scale:"C",
    weather:[""],
    cityList:[""],
    showSearchResults:true,
    isLoading:false,
  }


    setLocation = (newLocation) => {
      this.setState({ location: newLocation })
    }
  

  setShowSearchResults = (bool)=>{
    this.setState({...this.state, showSearchResults:bool })
  }
  setLoading = (bool)=>{
    this.setState({...this.state, isLoading:bool })
  }

  setScale = (newScale)=>{
      this.setState({...this.state, scale:newScale })
  }

  fetchCities = debounce((term) => {
    fetch(`https://api.weatherserver.com/weather/cities/${term}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({...this.state,cityList: data});
      });
  },400);


  fetchWeather = (cityId, units) => {
    fetch(`https://api.weatherserver.com/weather/current/${cityId}/${units}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({...this.state,weather: data, isLoading:false});      
      });
  };


  getWeather = () => {
    try {
      this.fetchWeather(this.state.location, this.state.scale);
    } catch (error) {
      console.log("There was an error", error);
    }
  };

  componentDidUpdate = (prevProps,prevState) => {
    if (this.state.location !== prevState.location || this.state.scale !== prevState.scale) {
      this.getWeather();
    } 
  };



  render() {
return (
      <div className="weather-app">
        <h1>WeatherWatch</h1>
        <Input fetchCity={this.fetchCities} setShowSearchResults={this.setShowSearchResults}/>
        {this.state.showSearchResults && <SearchResults data={this.state.cityList} setLocation={this.setLocation} setShowSearchResults={this.setShowSearchResults} setLoading={this.setLoading}/>}
        <SetUnits setScale={this.setScale} location={this.state.scale}/>
        <WeatherReport data={this.state.weather} isLoading={this.state.isLoading}/>
      </div>
    );
}
}

export default App;
