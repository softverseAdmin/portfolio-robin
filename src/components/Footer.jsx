// App.jsx
import React from 'react';
import PropTypes from 'prop-types';


function Footer(props) {
    const styles = {
      footer: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        marginTop: '1rem',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        color: props.color,
      },
      line: {
        height:'1px',
        width:'90%',
        background: props.color,
      },
      text: {
        padding: '0.5rem',
      }
    }  
    
    return (
      <div style={styles.footer}>
        <div style={styles.line}>
        </div>
        <div style={styles.text}><br />{props.title}All rights reserved &copy; 2023
        </div>
      </div>
    )
  }
  
  Footer.defaultProps = {
    color: 'white',
    title: 'Powered by Softverse Co. Ltd '
  }

  // Before
  Footer.propTypes = {
    someProp: PropTypes.string,
  };
  

  // After
  Footer.propTypes = {
    someProp: PropTypes.string,
  };
  
export default Footer;
