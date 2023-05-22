import React,{useState} from 'react'


const TotalPrice = () => {
    const [price,setPrice] = useState(0);
    
  return (
    
        <div className="grandTotalContainer">
			<h4 className="grandTotalTitle">TOTAL</h4>
			<h4 className="grandTotal">${price}</h4>
		</div>
    
  )
}

export default TotalPrice