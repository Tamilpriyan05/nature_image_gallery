

export default function Button({senddata}){

  const buttonarry=[
    {
    btn:"ALL",
    cateogory:"all",
    },
    {
    btn:"FOREST",
    cateogory:"forest",
    },
    {
    btn:"LANDSCAPE",
    cateogory:"landscape",
    },
    {
    btn:"MOUNTAIN",
    cateogory:"mountain",
    },
    {
    btn:"SEA",
    cateogory:"sea",
    },
    {
    btn:"WATERFALLS",
    cateogory:"waterfalls",
    },
  ];

   function handleclick(item){
     senddata(item)
   }

  const button=buttonarry.map((val)=>{
    return(
        <>
        <button className="button"  onClick={()=>{handleclick(val.cateogory)}}>{val.btn}</button>
        </>
    )
  })
        
    return(
        <>
        <div className="container">
            <div className="box">
                <div className="flex">
                   <h1> NATURE IMAGE GALLERY</h1> {button} 
                </div>
                
            </div>
            
        </div>
        </>
    )
}