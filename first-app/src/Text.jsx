import React from 'react';

class Text extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <Content/>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1 className="text">Componente Header</h1>
         </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Component Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}
export default Text;