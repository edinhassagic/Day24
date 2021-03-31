import React, { Component } from 'react';

class App extends Component {
setMystorage = () => {
  document.cookie = "Year=2021";
  localStorage.setItem('Paragon', 'yes, but Arena first');
  sessionStorage.setItem('frontend', 'React');
};
getMystorage = () => {
  let myCookieData = document.cookie.match(new RegExp('(^| )Year=([^;]+)'))[2];
  console.log(myCookieData);
  let myLocalStorageData = localStorage.getItem("Paragon");
  console.log(myLocalStorageData);
  let mySessionStorageData = sessionStorage.getItem("frontend"); 
  console.log(mySessionStorageData);
  return [myCookieData, myLocalStorageData, mySessionStorageData];
  
};



render() {
  return (
<div className="App">
<button onClick={this.setMystorage}>Set my Storage</button>
<button onClick={this.getMystorage}>Get my Storage</button>
</div>

  );
}
}
export default App;