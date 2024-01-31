import './Type.css'


const Type = ({name, url}) => {
    console.log(name);                          {/*try putting them in alphebtical order, make name capital, add image*/}
    return(
        <div className = "type-container">
        <h2> {name} </h2>       
  {/* <img src=            //add image try with link and naming then passing it as an argument  ?  */}   
        <h3> info: {url} </h3>
        </div>
    )
}

export default Type