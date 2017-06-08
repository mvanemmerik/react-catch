import React from 'react';

class StorePicker extends React.Component {
  render() {
    // comments outside return
    return (
      <form className="store-selector">
    { /* Comments within return, inside a single parent */ }
        <h2>Enter a Store</h2>
        <input type="text" placeholder="Store Name" required />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;
