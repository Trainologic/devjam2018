import React from 'react';

class ListItem extends React.Component {
  componentDidUpdate() {
    // console.log('ListItem did update');
  }

  componentDidMount() {
    // console.log('ListItem did mount');
  }

  render() {
    return (
      <div style={this.props.style}>
        {JSON.stringify(this.props.item)}
        {Array(this.props.starsCount).fill(0).map((item, idx) => <span key={idx}>*</span>)}
      </div>
    )
  }
};

export default ListItem;
