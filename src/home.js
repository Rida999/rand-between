import {useState} from "react";
import "./home.css";

const Home = () => {
    const [min, setmin] = useState(null);
    const [max, setmax] = useState(null);
    const handleRandom=(e)=>{
          if(min<0){
            document.getElementById('total').innerHTML=Math.floor(Math.random()*(max+Math.abs(min)+1));
          }
          else{
            document.getElementById('total').innerHTML=Math.floor(Math.random()*(max-min+1)+min);
          };
          e.preventDefault();
    };

    return ( 
        <div className="container">
            <div className="mini">
            <div className="total">
                <p className="total">
                    Random number: <span id="total"></span>
                </p>
                </div>
                <div>
                <form>
                    <div className="min-max">
                    <p id="min">Min:<br/>
                    <input type="number" onChange={(e)=>{setmin(e.target.value)}} />
                    </p>
                    <p id="max">Max:<br/>
                    <input type="number" onChange={(e)=>{setmax(e.target.value)}}/>
                    </p>
                    </div>
                    <button onClick={handleRandom} className="btn">Get random number</button>

                </form>
                </div>
            </div>
        </div>
     );
}
 
export default Home;