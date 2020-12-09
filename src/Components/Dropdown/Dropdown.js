import React from 'react';

import './Dropdown.css';

class Dropdown extends React.Component {
    constructor(){
     super();
    
     this.state = {
           displayMenu: false,
         };
    
      this.showDropdownMenu = this.showDropdownMenu.bind(this);
      this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    
    };
    
    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
      }
    
      hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu);
        });
    
      }
    
      render() {
        return (
            <div  className="dropdown" style = {{ width:"200px"}} >
             <div className="button" onClick={this.showDropdownMenu} style={{width: "780px", fontSize: "22px",fontStyle: "oblique"}}> <strong><b>{this.props.content.title}</b></strong></div>

              { 
              this.state.displayMenu ? (
              <div dangerouslySetInnerHTML={{__html: this.props.content.body}} />
              ):null
            }
    
           </div>
    
        );
      }
    }

export default Dropdown;