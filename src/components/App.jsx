import React from 'react';
import Menu from './Menu';
import MenuButton from './MenuButton';
import Footer from './Footer';
import MenuItem from './MenuItem';
import TopContent from './TopContent'; // Adjust the path as needed

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      menuOpen:false,
    }
  }
  
  handleMenuClick() {
    this.setState({menuOpen:!this.state.menuOpen});
  }
  
  handleLinkClick() {
    this.setState({menuOpen: false});
  }
  
  render(){
    const styles= 
      {
        container:{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: '99',
          opacity: 0.9,
          display:'flex',
          alignItems:'center',
          background: 'black',
          width: '100%',
          color: 'white',
          fontFamily:'Lobster',
        },
        body: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100vw',
          height: '100vh',
          filter: this.state.menuOpen ? 'blur(2px)':null,
          transition: 'filter 0.5s ease',
        },
      }
    const menu = ['Who Am I?','What I Had Done?','What Can We Do?','What I Am Doing?','How To Reach Me?', 'What Is My Company?']
    const menuItems = menu.map((val,index)=>{
      return (
        <MenuItem 
          key={index} 
          delay={`${index * 0.1}s`}
          onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>)
    });
    
    return(
      <div>
        <div style={styles.container}>
          <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
        </div>
        <Menu open={this.state.menuOpen}>
          {menuItems}
        </Menu>
        <TopContent />
        <div style={styles.body}>
          <Footer name='Menu'/>
        </div>
      </div>
    )
  }
}

export default App;
