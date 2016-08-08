import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Search from './search'

class App extends Component{
  render(){
    return(
    <div>
    <Search/>
    </div>
  );
  }
}
ReactDOM.render(<App/>,document.getElementById('app'));
