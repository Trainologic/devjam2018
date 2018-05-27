import React from 'react';
import { List } from 'react-virtualized';
import ListItem from './ListItem';

class ListV extends React.Component {
  rowRenderer = ({
    key,         // Unique key within array of rows
    index,       // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible,   // This row is visible within the List (eg it is not an overscanned row)
    style        // Style object to be applied to row (to position it)
  }) => {
    return (
      <ListItem
        key={key}
        style={style}
        item={this.props.data[index]}
        starsCount={this.props.starsCount}
      />
    )
  }

  componentWillMount() {
    console.log('Will mount');
  }
  componentDidMount() {
    console.log('Did mount');
  }

  render() {
    return (
      <List
        width={300}
        height={300}
        rowCount={this.props.data.length}
        rowHeight={20}
        rowRenderer={this.rowRenderer}
        style={{border: '2px solid blue'}}
      />
    )
  }
}

export default ListV;
