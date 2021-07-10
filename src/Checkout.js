import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { useHistory } from "react-router-dom";
export default function Checkout(){
    const history = useHistory()
   
    var loc=localStorage.getItem("location");
    console.log(loc)
    var cart=JSON.parse(localStorage.getItem("CartItems"))
       var child = []
    for(var item in cart){
        child.push(cart[item])
     }
     var sum=0;
     child.map(k =>{
        sum=sum+k.price;

    })
     console.log(child)
    return( 
    <div>
      <div><h3> Order Items</h3></div><br></br>
      <div className="item_style1">        
        {       
            child.map(k =>{
                return(
                    <div>
                        {console.log(k.name)}
                    <Card style={{ width: '15rem', height:'350px'}}>
                    <Card.Img variant="top" src={k.img} height="150px" />
                    <Card.Body>
                    <Card.Title>{k.name}</Card.Title>
                    <Card.Text>
                        {k.desc}
                        <br></br>
                        Price:{k.price}
                    </Card.Text>
                     </Card.Body>
                    </Card>  
                    </div> 
                    )
                }
            )
        }
        </div>
        <div>
        <h2>Payment Details</h2>
        <table border="1" width="100%" align="center">
        <tr><td><h5>Product</h5></td><td><h5>Price</h5></td></tr>{
        child.map(k =>{ 
            return(
        <tr>
        <td>
        {k.name}
        </td>
        <td>
        {k.price}
        </td>
        </tr>
        )
        })
        }
        <tr ><td>Total Amount:   </td><td><h6>{sum}</h6></td></tr>
        </table>
        <p className="col">please make sure the items selected are correct*</p>
        <Button variant="primary">Proceed to pay</Button>
        </div>     
        </div>
    )
}
