import React from 'react';
import Text from './Text.jsx';
import Button from './Button.jsx';

class Contador extends React.Component{
    constructor(props){
        super(props);        
        this.state = { 
            click: 0, 
            inverted:false,
         };
        this.btClicked = this.btClicked.bind(this);
        this.toggleInverted = this.toggleInverted.bind(this);
    }
    
    toggleInverted() {
        this.setState({inverted: !this.state.inverted});
      }

    btClicked(){
        this.toggleInverted()
        this.setState({click:this.state.click+1})
        //var newClass;
        //if(this.state.class == 'text') {
        //    newClass = 'warn' 
        //}else{ 
        //    newClass = 'text';
        //}
        //this.setState({class:newClass})
        console.log('Clicado aqui no contador',this.state);
    }
    render(){
        return(
            <div>
                <Text className={this.state.inverted ? 'flag1' : 'flag2'} txt="veja o botao abaixo aqui no contador" click={this.state.click}></Text>
                <Button onClick={() => this.btClicked()} txt="Clique aqui"></Button>
            </div>
        );
    }
}


export default Contador;