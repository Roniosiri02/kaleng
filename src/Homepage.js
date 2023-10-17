import ProfilSIK from "./Homepage/ProfilSIK";
import Aside1 from './Homepage/Aside1';
import Aside2 from './Homepage/Aside2';

const Homepage = () =>{
    return(
        <div className="bg-slate-200 pt-20" id="main-container" >
            <ProfilSIK/>
            <Aside1/>
            <Aside2/>
        </div>
    )
}
export default Homepage