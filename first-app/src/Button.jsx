import React from 'react';


class Button extends React.Component {
   constructor(props) {
      super(props);
      this.state = { x: 0, y: 0 };
      this.props = 'n deu';
      this.handleClick = this.handleClick.bind(this);
   }

   handleClick(e) {
      //e.preventDefault();
      console.log('Click happened');
   }

   render() {
      return (
         <div>
         <button onClick={() => this.handleClick()} className="text">{this.props.txt}</button>
         </div>
      );
   }
    

}

export default Button;