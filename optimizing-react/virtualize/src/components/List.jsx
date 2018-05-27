import React from 'react';
import ListItem from './ListItem';

// const style = {height: '20px'};

class List extends React.Component {
  componentWillMount() {
    console.log('List Will mount');
  }
  componentDidMount() {
    console.log('List Did mount');
  }
  componentWillUpdate() {
    console.log('List Will update');
  }
  componentDidUpdate() {
    console.log('List Did update');
  }

  render() {
    const { data, starsCount } = this.props;
    return (
      <div style={{height: '300px', width: '300px', overflow: 'auto', border: '2px solid orange'}}>
        {
          data.map(item => (
            <ListItem
              key={item}
              item={item}
              starsCount={this.props.starsCount}
            />
          ))
        }
      </div>
    )
  }
}

export default List;
