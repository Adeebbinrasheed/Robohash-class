import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchdata: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) =>
        this.setState(() => {
          return { data: result };
        })
      );
  }

  render() {
    const filteredData = this.state.data.filter((names) => {
      return names.name.toLocaleLowerCase().startsWith(this.state.searchdata);
    });

    return (
      <div className="main">
        <div className="header">
          <h1>ROBOHASH</h1>
          <input
            type="search"
            placeholder="search"
            onChange={(event) => {
              const searchString = event.target.value.toLocaleLowerCase();

              {
                this.setState(() => {
                  return { searchdata: searchString };
                });
              }
            }}
          />
        </div>
        <div className="cards">
          {filteredData.map((data) => (
            <div className="card">
              <h3>{data.name}</h3>
              <img src={`https://robohash.org/${data.id}?set=set3`} width={140} alt="" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
