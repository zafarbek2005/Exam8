import React from 'react';
import Not_found from './404.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
<> 
    <div style={{ display: 'flex', 
        justifyContent: 'center',
         alignItems: 'center',
         padding:"30px" }}>
      <img 
        src={Not_found} 
        alt="not_found.svg" 
        style={{ maxWidth: "801px",
             width: "100%" }} 
      />
     
    </div>
    <div style={{ display: 'flex',
         justifyContent: 'center',
          alignItems: 'center',
          padding:"10px"
           }}>
        <p style={{color:"#454545"}}>Похоже, ничего не нашлось :(</p>
    </div>
    <div style={{ display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding:"10px"
         }}>
      <Link to={`/`}>
      <button 
        style={{width:"216px",
        height:"50px",
        borderRadius:"100px",
        background:"#454545",
        color:"#fff"
        }}>На главную</button>
     </Link>
    </div>
    </>
  );
}

export default NotFound;
