import React,{useState} from 'react'


const TotalPrice = () => {
    const [price,setPrice] = useState(0);
  return (
    
        <div class="grandTotalContainer">
			<h4 class="grandTotalTitle">TOTAL</h4>
			<h4 class="grandTotal">${price}</h4>
		</div>
    
  )
}

export default TotalPrice