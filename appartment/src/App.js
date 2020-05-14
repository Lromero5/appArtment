import React from 'react';
import './App.css';
import householdData from './utils/householdData'

function App() {
  return (
  
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <a href="index.html">
                    <img src="/images/house.png" alt="logo-appartment" width="80" height="80"></img>
                </a>
            </div>
            <div className="header-links">
                <a href="home.html">Home</a>
                <br/>
                <a href="logout.html">Log Out</a>
            </div>
        </header>
        
        <main className="main">
                <div classNameName="profile-info">
                    <h2>Hi! = User</h2>
                        <p>You currently belong to:</p>
                            <ul classNameName="households">
                              {
                                householdData.households.map(household => 
                                <li>
                                    <div classNameName="houselhold">
                                        <a href="household.html">{household.name}</a>
                                    </div>
                                </li>)
                              }
                            </ul>
                </div>
             
                <div classNameName="join">
                    <h3>Feeling FOMO?</h3>
                    <form>
                        <label>Join your roommates:</label>
                        <input type="text" id="hname" name="hname" placeholder="Household name"/>
                        <br/>
                        <input type="submit" value="Join" classNameName="btn btn-warning"/>
                    </form>
                    <br/>
                    <hr/>
                </div>

                <div classNameName="create">
                    <form>
                        <label>Create your own: </label>
                        <input type="text" id="hname" name="hname" placeholder="Marcella St"/>
                        <br/>
                        <label>Add members:</label>
                        <input type="text" id="hmember" name="hmember" placeholder="Emails here"/>
                        <br/>
                        <input type="submit" value="Create" classNameName="btn btn-warning"/>
                        <br/>
                    </form>
                </div>
      </main>
                  
        <footer className="footer">
            <img src="./images/bless.png" alt="slogan" width="200" height="20"></img>
        </footer>
      </div>
  );
}

export default App;
