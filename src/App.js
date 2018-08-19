import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './listItems';
import CreateItem from './createItem';
import DeleteItem from './deleteItem';

class App extends React.Component {
  state = {

    items: [],
  };

 


 addItemNew = (query) => {
    this.setState(oldState => ({
      items: [...oldState.items, query],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };


  render() {
     const {items} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
		<CreateItem addItemNew={this.addItemNew}/>
		<DeleteItem delete={this.deleteLastItem} items={items}/>
       

        <p className="items">Items</p>
		<ListItems items={items}/>
       
      </div>
    );
  }
}

export default App;
