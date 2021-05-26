import React, { useEffect ,useState} from "react";
import './Covid.css'

const Covid = () => {

    const[data,setdata]=useState([])
  const getCovidData = async () => {

    try {
        const res= await  fetch('https://api.covid19india.org/data.json');
        const actualData=await res.json();
        console.log(actualData.statewise[0]);
        setdata(actualData.statewise[0])
    } catch (error) {
        
        console.log(error);
    }
    
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <div >
        <section >
      <h1> LIVE </h1>
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>
      <ul>
          <li className='card'>
              <div className="main-card">
                  <div className="inner-card">
                      <p className="card-name">
                          <span>OUR</span> COUNTRY
                      </p>
                      <p className="total-card small-card">INDIA</p>
                  </div>
              </div>
          </li>
          <li className='card'>
              <div className="main-card">
                  <div className="inner-card">
                      <p className="card-name">
                          <span>TOTAL</span> RECOVERED
                      </p>
                      <p className="total-card small-card">{data.recovered}</p>
                  </div>
              </div>
          </li>
          <li className='card'>
              <div className="main-card">
                  <div className="inner-card">
                      <p className="card-name">
                          <span>TOTAL</span> CONFIRMED
                      </p>
                      <p className="total-card small-card">{data.confirmed}</p>
                  </div>
              </div>
          </li>
          <li className='card'>
              <div className="main-card">
                  <div className="inner-card">
                      <p className="card-name">
                          <span>TOTAL</span> DEATH
                      </p>
                      <p className="total-card small-card">{data.deaths}</p>
                  </div>
              </div>
          </li>
          <li className='card'>
              <div className="main-card">
                  <div className="inner-card">
                      <p className="card-name">
                          <span>TOTAL</span> ACTIVE
                      </p>
                      <p className="total-card small-card">{data.active}</p>
                  </div>
              </div>
          </li>
          <li className='card'>
              <div className="main-card">
                  <div className="inner-card">
                      <p className="card-name">
                          <span>LAST</span> UPDATES
                      </p>
                      <p className="total-card small-card">{data.lastupdatedtime}</p>
                  </div>
              </div>
          </li>
          
          
      </ul>
      </section>
    </div>
  );
};

export default Covid;
