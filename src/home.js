import {useState} from "react";
import "./home.css";

const Home = () => {
    const [min, setmin] = useState(null);
    const [max, setmax] = useState(null);
    const handleRandom=()=>{
          document.getElementById('total').innerHTML=Math.floor(Math.random()*(max-min+1))+min;
    };

    return ( 
        <div className="container">
            <div className="mini">
                <p>
                    Random number: <span id="total"></span>
                </p>
                <div>
                <form>
                    <div className="min-max">
                    <p id="min">Min:<br/>
                    <input type="number" onChange={(e)=>{setmin(e.target.value)}} />
                    </p>
                    <p>Max:<br/>
                    <input type="number" onChange={(e)=>{setmax(e.target.value)}}/>
                    </p>
                    </div>
                    <button onClick={handleRandom}>Get random number</button>

                </form>
                </div>
            </div>
        </div>
     );
}
 
export default Home;