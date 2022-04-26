import React from 'react'
const CategoryInfo = ({country,category}) => {

    
  return (
      <>
    {/* <h2 className="categoryinfo" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>{category.toUpperCase()} NEWS - {
        <span style={{color:"#922a44",lineHeight:"25px"}}>
            &nbsp;
           <img src={flagUrl} alt="" style={{width:"45px",lineHeight:"20px"}} className="flag"/>
        </span>
     }</h2> */}
     <h5 className="categoryinfo" style={{marginTop:"20px",textAlign:"center"}}>programing ninjas</h5>
     </>
  )
}

export default CategoryInfo