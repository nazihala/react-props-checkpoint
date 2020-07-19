import React from 'react';
import PropTypes from 'prop-types';

const Profile=(props)=>{
  
        const HandleClick=e=> {
            e.preventDefault();
            alert ("I am naziha LAHRACH");
        }
       
    return(
        <div style={{textAlign:"center"}}>
            <p style={{color:"#3498DB"}}>Full Name:{props.fullName}</p>
            <p style={{color:"#F5B041 "}}>Bio: {props.bio}</p>
            <p style={{color:" #D81B60"}}>Profession: {props.profession}</p>  
            <div>
                <img src={props.src} width={props.width} alt={props.alt}/>
                {props.children}       
            </div> 
            <a href="/" onClick={HandleClick} style={{color:"#17202A"}}>name of profile user </a>
            
        </div> 
       
    ); 
    };
export default Profile;

Profile.protoTypes={fullName:PropTypes.string,
                    bio:PropTypes.string,
                    profession:PropTypes.string,
                    src:PropTypes.any,
                    width:PropTypes.any,
                    handleClick:PropTypes.func,
}
