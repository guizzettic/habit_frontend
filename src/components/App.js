import React, { Component } from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import { request } from 'superagent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newHabit: "",
      list: [], 
    }
  }
  componentDidMount() {
    document.body.style.backgroundColor = "aquamarine";
  }
  updateInput(key, value) {
    // update react state
    this.setState({
      [key]:value,
    })
  }

  addHabit() {
    // createitem with unique id
    const newHabit={
      id: 1 + Math.random(),
      value: this.state.newHabit.slice()
    };
    // copyt f current list of items
    const list =[...this.state.list];

    // add new item to list
    list.push(newHabit)

    // / update state with new list and reset newitem input
    this.setState({
      list,
      newHabit:""
    })

    // request
    //   .post('api/items')
    //   .send(data)
    //   .set('Accept', 'application/json')
    //   .end((err, res) => {
    //     if (err|| !res.ok) {
    //       console.log('errrrrrrrrror monnstteerrrrr');
    //     } else {
    //       console.log('Success')
    //     }
    //   });
    
  }
  deleteItem(id) {
    //copy current list of items
    const list = [...this.state.list];

    //filter out item being deleted
    const updatedList = list.filter(item=> item.id!==id);

    this.setState({list: updatedList});
  }

  render() {
    return (
    <div style={{
      position: 'absolute', left: '50%', top: '30%',
      transform: 'translate(-50%, -50%)'
  }}>
      <h1 >To Do List:</h1>
      <br/>
      <input
        type="text"
        placeholder="Enter here..."
        value={this.state.newHabit}
        onChange={e => this.updateInput("newHabit", e.target.value)}
      />
      <button
        onClick={() => this.addHabit()}
      > Add ToDo </button>
      <br/>
      <ul>
        {this.state.list.map(item => {
          return(
            <li key={item.id}>
              {item.value}
              <button
                onClick={()=>this.deleteItem(item.id)}
              > 
               X
              </button>
            </li>
          )
        })} 
      </ul>
      {/* <h1>Habits Tracker</h1>
      <habitsTotal />
      <habits /> */}
    </div>
    );
  }
}

class habitsTotal extends Component {
  

}







export default App;