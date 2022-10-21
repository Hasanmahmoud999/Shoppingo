import React from 'react';
import j from '../../../Images/Jacket.webp';
import { Favorite, Star } from '@material-ui/icons';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

export const SellerButton=styled.button`
background:#F4C444;
color:#11324D;
border:none;
border-radius:12px;
width:45%;    
&:hover{
    color:#F4C444;
    background:#11324D;
}
`


function ProductCard(props) {

    const route=useNavigate();
    // console.log(productCateg);
    return (
        <div className='card' style={{width:'250px' ,marginInline:'10px',height:"350px",marginBottom:'20px',paddingBottom:'20px',borderRadius:'20px',boxShadow:'5px 5px 5px 5px rgba(0,0,0,0.25)'}}>
            <div style={{height:"300px",maxHeight:"300px",overflow:"hidden"}}>
            <img src={`http://localhost:5000/${props.imgUrl}`} alt="product img" className="card-img-top" style={{borderRadius:'20px' ,width:"100%",height:"100%"}} />
            </div>
           

            <h4 className='text-center'  style={{color:'#0D065E'}}>{props.productCateg}</h4>

            <h5 className='text-center' style={{color:'#7D6A06'}}>{props.newPrice}</h5>

            <div style={{width:"100%",display:"flex",justifyContent:"space-around"}}>
                <SellerButton > Delete </SellerButton>
                <SellerButton> Update </SellerButton>
            </div>
        </div>
            
    );
}

export default ProductCard;