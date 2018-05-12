import React, { Component } from 'react';
import './App.css';



class App extends Component {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React!!!!!</h1>
        </header>
        {myLayout}
      </div>
    );
  }
}

export default App;

//class App extends Component{
//	constructor(){
//		super();
//		this.state={
//				articles:[
//				          { title: "React Redux Tutorial for Beginners", id: 1 },
//				          { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }
//				]
//		}
//	}
//	render(){
//		const {articles} = this.state;
//		return(
//				<ul>{articles.map((article)=> {return <li id={article.id}>{article.title}</li>})}</ul>
//		);
//	}
//}
//export default App;