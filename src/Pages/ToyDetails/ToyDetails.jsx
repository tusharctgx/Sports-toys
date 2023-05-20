import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ToyDetails = () => {
 

 const {Url,name,Seller,Category,Email,Price,Rating,Quantity,Details} = useLoaderData();
 console.log(Url,name,Seller,Category,Email,Price,Rating,Quantity,Details);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/toyscollection/${_id}`)
  //   .then((res) => res.json())
  //   .then((data) => setAllDetails(data))
  // }, []);

  // console.log(toyDetails)

    return(
      
        
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={Url} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-center text-5xl font-bold">TOY NAME #{name}</h1>
          <h4 className="text-center text-3xl">SELLER NAME : {Seller}</h4>
          <h4 className="text-center text-3xl">SELLER EMAIL : {Email}</h4>
          <h4 className="text-center text-xl">PRICE : ${Price}</h4>
          <h4 className="text-center text-xl">RATING : {Rating}</h4>
          <h4 className="text-center text-xl">QUANTITY : {Quantity}</h4>
          <p className="text-center text-xl  py-6"> DESTRICPTION :
            {Details}
          </p>
          
        </div>
      </div>
    </div>
       
    )
   
  
};

export default ToyDetails;