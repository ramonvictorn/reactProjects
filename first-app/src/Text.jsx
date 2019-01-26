import React from 'react';

class Text extends React.Component {
   constructor(props) {
      super(props);
      this.state = { 
         name: this.props.txt, 
         class: `${this.props.class}`,
         inverted: `${this.props.inverted}`,
      };
   }
   
   
   render() {
      return (
         <div>
            <h1  v='1' className={this.props.className}>{this.state.name}{this.props.click}</h1>
         </div>
      );
   }
}
export default Text;