import {Link} from "react-router-dom" 
import "./Section1.css"
import { useNavigate } from "react-router-dom"
export const Section1 = ()=>{
    return(
        <div className="search" >
        <div className="search-main" >
            <div className="search-nav" >
                <div>Stays</div>
                <div>Flights</div>
                <div>Cars</div>
                <div>Packages</div>
                <div>Things to do</div>
                <div>Cruises</div>
            </div>
            <hr></hr>
         <div className="input-container" >
            <div className="input-box" >

                <select style={{fontSize:"22px"}} >
                    <option>Location</option>
                    <option value="bangaloe"><Link to="/bangalore" >Bangalore</Link></option>
                    <option value="delhi"><Link to="/delhi" >Delhi</Link></option>
                    <option value="mumbai"><Link to="mumbai" >Mumbai</Link></option>
                    <option value="kolkata"><Link to="kolkata" >Kolkata</Link></option>
                </select>
                <input type="date" style={{fontSize:"22px"}} ></input>
                <input type="date" style={{fontSize:"22px"}} ></input>
            
                <input type="text" style={{fontSize:"22px"}}  placeholder="Travelers"></input>
            </div>
         </div>
           
            <div className="input-checkbox" >
                <div>
                     <input type="checkbox" ></input>
                      <label style={{fontSize:"18px"}} >Add a flight</label>
                </div>
                <div>
                       <input type="checkbox" ></input>
                       <label style={{fontSize:"18px"}} >Add a car</label>
                </div>
            </div>
            <div className="search-button" >
                    <button>Search</button>
            </div>
            
        </div>
            
        </div>
    )
}