import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  goToStore(event) {
    event.preventDefault();
    const storeId = this.storeInput.value;
    this.context.router.transitionTo(`/store/${storeId}`);
  }
  render() {
    // comments outside return
    return (
      <form className="store-selector" onSubmit={(x) => this.goToStore(x)}>
    { /* Comments within return, inside a single parent */ }
        <h2>Enter a Store</h2>
        <input type="text" placeholder="Store Name" defaultValue={ getFunName() }
          ref={(input) => { this.storeInput = input }} required />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
