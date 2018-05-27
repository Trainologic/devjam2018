import React from 'react';
import Counter from './Counter';
import Title from './Title';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Title text={'Just a moment'} />
        The Count<br />
        <Counter />
      </div>
    )
  }
}

export default App;
