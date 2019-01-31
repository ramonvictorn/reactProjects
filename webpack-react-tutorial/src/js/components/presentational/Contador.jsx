import React from 'react';
import Text from './Text.jsx';
import Button from './Button.jsx';

class Contador extends React.Component{
    constructor(props){
        super(props);        
        this.state = { 
            qtdClicks: 0, 
            inverted:false,
         };
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(){
        this.setState({
            qtdClicks:this.state.qtdClicks+1,
            inverted: !this.state.inverted
        })
    }
    render(){
        //console.log('Clicado no contador -> state',this.state);
        return(
            <div>
                <Text className={this.state.inverted ? 'flag1' : 'flag2'} txt="veja o botao abaixo aqui no contador velho" click={this.state.qtdClicks}></Text>
                <Button clickHandler={this.onClickHandler } txt='clique aqui' qtdClicks={this.state.qtdClicks}></Button>
            </div>
        );
    }
}


export default Contador;