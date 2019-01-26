import React from 'react';


class Button extends React.Component {
   constructor(props) {
      super(props);
      this.state = { 
         click: 0, 
         name: this.props.txt, 
      };
      //this.props = 'n deu';
      this.handleClick = props.onClick ? props.onClick.bind(this) : this.handleClick.bind(this);
   }

   handleClick(e) {
      //e.preventDefault();
      this.setState({name:'Foi clicado'})
      this.setState({click:this.state.click+1})
      console.log('Click happened', this.state, this.props);
   }

   render() {
      return (
         <div>
         <button onClick={() => this.handleClick()} className="text">{this.state.name}-{this.state.click}</button>
         </div>
      );
   }
    

}

export default Button;