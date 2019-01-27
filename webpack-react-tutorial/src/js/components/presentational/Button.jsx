import React from 'react';


class Button extends React.Component {
   constructor(props) {
      super(props);
      this.state = { 
         click: this.props.click, 
         txt: this.props.txt, 
      };
      //this.props = 'n deu';
      //this.handleClick = props.onClick ? props.onClick.bind(this) : this.handleClick.bind(this);
      this.handleClick = this.handleClick.bind(this);
   }

   handleClick(e) {
      this.props.onClick()
      //e.preventDefault();
      //this.setState({name:'Foi clicado'})
      //this.setState({click:this.state.click+1})
      console.log('Clicado no Button state->', this.state,'props ->',  this.props);
   }

   render() {
      return (
         <div>
         <button onClick={() => this.handleClick()} className="text">{this.state.txt}-{this.props.click}</button>
         </div>
      );
   }
    

}

export default Button;