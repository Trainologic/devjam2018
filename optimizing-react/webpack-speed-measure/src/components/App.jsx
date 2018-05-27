import React from 'react';
import Counter from './Counter';
import Title from './Title';
import moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Title text={'Just a moment please'} />
        <div>{moment().format('dddd')}</div>
        <Counter />
      </div>
    )
  }
}

export default App;
