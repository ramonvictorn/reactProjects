import React from 'react';


// class Button extends React.Component {
//    constructor(props) {
//       super(props);
//       this.state = { 
//          click: this.props.click, 
//          txt: this.props.txt, 
//       };
//       this.handleClick = this.handleClick.bind(this);
//    }

//    handleClick(e) {
//       this.props.onClick()
//      console.log('Clicado no Button state->1', this.state,'props ->',  this.props);
//    }

//    render() {
//     console.log('Clicado no Button state2->', this.state,'props ->',  this.props);
//       return (
//          <div>
//          <button onClick={() => this.handleClick()} className="text">{this.state.txt}-{this.props.click}</button>
//          </div>
//       );
//    }
// }

const Button = ({ clickHandler, txt, qtdClicks}) => {

    return (
        <button onClick={() => clickHandler()} >{txt}-{qtdClicks}</button>
    )

}

export default Button;