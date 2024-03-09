import React from 'react';
import './App.css';

const teams = require('./CollegeBasketballTeams.json');


// The header introducing the website.
function Header() {
    return (
        <>
            <br/><br/><br/>
            <h2>This is a website for listing information about all the colleges in NCAA
                Basketball.</h2>
            <br/><br/><br/>
            <br/><br/><br/>
        </>
    )
}

// An individual card representing a single NCAA team.
function TeamCard(team: { school: string; name: string; city: string; state: string; }) {


    return (
        <div className="card">
            <h3>{team.school}</h3>
            <p>{team.name}</p>
            <p>{team.city}, {team.state}</p>

        </div>
    )
}

// Lists out all NCAA teams using the TeamCard element.
function CardList() {
    return (
        <>
            {/*Take each team from the json object and pass the relevant properties into the TeamCard component.*/}
            {teams.teams.map((team: {
                school: string;
                name: string;
                city: string;
                state: string
            }) => {
                return (

                    <TeamCard school={team.school} name={team.name} city={team.city}
                              state={team.state}/>
                )
            })}

        </>
    )
}


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header/>
                <CardList/>
            </header>
        </div>
    );
}

export default App;
