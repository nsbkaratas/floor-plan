import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import Bath from "./Bath"
import LivingRoom from "./LivingRoom"


const FloorPlan = () => {
    const bedrooms={
       bedNum1:1,
       bedNum2:2,
       bedNum3:3
      }
    const bath={
        bathNum1:"Full-Bath",
        bathNum2:"Half-Bath"        
    }
    return (
        <div className="container">
            <Bedroom  bedrooms={bedrooms.bedNum1} />
            <Kitchen />
            <Bath bath={bath.bathNum1}/>
            <LivingRoom />
            <Bedroom  bedrooms={bedrooms.bedNum2}/>
            <Bath bath={bath.bathNum2}/>
            <Bedroom bedrooms={bedrooms.bedNum3}/>
        </div>
    )
}

export default FloorPlan
