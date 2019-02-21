// import React from 'react';

// export default function() {
//     return (
//         <div>
//             Counter
//         </div>
//     );
// }

import React from 'react';

export default class Counter extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }

    this.handleCount = this.handleCount.bind(this)
  }
  handleCount(num) {
    this.setState({
      count: this.state.count + num
    })
  }
 
  render() {
    return(
      <div className = 'counter'>

        <h3>Counter</h3>

        <div>
          The value of count is {this.state.count}
        </div>

        <button onClick={() => this.handleCount(1)}>Add</button>
        <button onClick={() => this.handleCount(-1)}>Subtract</button>
      </div>
    )
  }
}