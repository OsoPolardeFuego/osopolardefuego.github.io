import React from 'react';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true,
                  dataSource:[]}
  }

/*
async componentDidMount() {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    console.log(json);
    this.setState({ dataSource: json });
  } catch (error) {
    console.log(error);
  }
}*/

async componentDidMount() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const json = await response.json();
    this.setState({ dataSource: json });
   
}
  



    render() {
    return (
      <div>
        <ul>
          {this.state.dataSource.map(el => <li>{el.id}: {el.name}</li>)}
        </ul>
      </div>
    );
  }
}

