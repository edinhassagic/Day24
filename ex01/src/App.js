import React, { Component } from 'react';

class App extends Component {
setMystorage = () => {
  document.cookie = "Year=2021";
  localStorage.setItem('Paragon', 'yes, but Arena first');
  sessionStorage.setItem('frontend', 'React');
}
render() {
  return (
<div className="App">
<button onClick={this.setMystorage}>Set my Storage</button>
</div>

  );
}
}
export default App;