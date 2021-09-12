import React, {Fragment, useEffect, useState} from 'react';
// import { Button } from 'react-bootstrap';
import '../resources/MarioKarty.css';

export function MarioKarty(props) {
    const[characters, setCharacters] = useState([]);
    useEffect(() => {
        async function fetchData() {
            var myHeaders = new Headers();
            // obviously not ideal...
            myHeaders.append("Authorization", "Bearer T_5MAZY6k7t2X02PZXvT8yPktCO13o7A8iqMcaRLDv0");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            const res = await fetch("https://api.netlify.com/api/v1/forms/613d05599aa89c00075b6a6b/submissions", requestOptions)
            console.log(res);
            const result = await res.json();  
            console.log(result);
            setCharacters(result.map(char => ({"name": char.data.name, "character": char.data.char})));
        }
        fetchData();
    }, []);

    return (
        <Fragment>
        <div className="mario-karty">
            <div className="image-container welcome">
                <img className="img-fluid center" src="Banshee_Boardwalk.png" alt="alternative" width="50%" />
            </div>
            <h1>YOU'RE INVITED!</h1>
            <h1>October 31, 2021</h1>
            <div className="image-container main-image">
                <img className="img-fluid center" src="marioKarty64.png" alt="alternative" width="50%" />
            </div>
            <h1>Choose Your Character:</h1>
            <form name="character" method="post">
                <input type="hidden" name="form-name" value="character" />
                <div className="name-input">
                <p>
                    <label className="name-input">Your Name: <input type="text" name="name"/></label>
                </p>
                </div>
                <div className="col-12 mario-kart-radio">
                <p>
                    <input type="radio" name="char" value="Mario"/><label className="radio">Mario</label>
                </p>
                <p>
                    <input type="radio" name="char" value="Luigi"/><label className="radio">Luigi</label>
                </p>
                <p>
                    <input type="radio" name="char" value="Peach"/><label className="radio">Peach</label>
                </p>
                <p>
                    <input type="radio" name="char" value="Wario"/><label className="radio">Wario</label>
                </p>
                <p>
                    <input type="radio" name="char" value="Waluigi"/><label className="radio">Waluigi</label>
                </p>
                </div>
                <div className="col-12 mario-kart-radio">
                <p>
                    <input type="radio" name="char" value="Yoshi"/><label className="radio">Yoshi</label>
                </p>
                <p>
                    <input type="radio" name="char" value="D.K."/><label className="radio">D.K.</label>
                </p>
                <p>
                    <input type="radio" name="char" value="Toad"/><label className="radio">Toad</label>
                </p>
                <p>
                    <input type="radio" name="char" value="Bowser"/><label className="radio">Bowser</label>
                </p>
                <p>
                    <input type="radio" name="char" value="Daisy"/><label className="radio">Daisy</label>
                </p>
                </div>
                <div className="col-12 mario-kart-radio">
                <p>
                    <input type="radio" name="char" value="Boo"/><label className="radio">Boo</label>
                </p>
                <p>
                    <input type="radio" name="char" value="Diddy Kong"/><label className="radio">Diddy Kong</label>
                </p>
                <p>
                    <input type="radio" name="char" value="Koopa Troopa"/><label className="radio">Koopa Troopa</label>
                </p>
                <p>
                    <input type="radio" name="char" value="Goomba"/><label className="radio">Goomba</label>
                </p>
                <p>
                    <input type="radio" name="char" value="Birdo"/><label className="radio">Birdo</label>
                </p>
                </div>
                <div className="col-12 mario-kart-radio">
                <p>
                    <input type="radio" name="char" value="Chain Chomp"/><label className="radio">Chain Chomp</label>
                </p>
                <p>
                    <input type="radio" name="char" value="Rosalina"/><label className="radio">Rosalina</label>
                </p>
                <p>
                    <input type="radio" name="char" value="Baby Bowser"/><label className="radio">Baby Bowser</label>
                </p>
                <p>
                    <input type="radio" name="char" value="Piranha Plant"/><label className="radio">Piranha Plant</label>
                </p>
                <p>
                    <input type="radio" name="char" value="Toadette"/><label className="radio">Toadette</label>
                </p>
                </div>
                <div className="mario-kart-submit">
                <p>
                    <button type="submit">Send</button>
                </p>
                </div>
                {characters.map(character => <h1>{character.name} selected {character.character}</h1>)}
            </form>
        </div>
        </Fragment>
    );
  }