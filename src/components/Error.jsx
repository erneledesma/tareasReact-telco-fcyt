const Error = ({mensaje}) => {
  
    return ( 

      <div className="alert alert-primary" role="alert">
       <p>{mensaje}</p>
      </div>
       
     );
}
 
export default Error;