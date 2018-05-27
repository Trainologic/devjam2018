import React from 'react';
import ListContainer from './ListContainer';
import Measurer from './Measurer';
import Title from './Title';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Title text={'Runtime Demo'} />
        <Measurer
          component={ListContainer}
        />
      </div>
    )
  }
}

export default App;
