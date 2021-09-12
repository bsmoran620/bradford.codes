import React, {Fragment} from 'react';
// import { Button } from 'react-bootstrap';
import '../resources/MarioKarty.css';

export function MarioKarty(props) {
    return (
        <Fragment>
        <div className="mario-karty">
            <div className="image-container welcome">
                <img className="img-fluid center" src="Banshee_Boardwalk.png" alt="alternative" width="50%" />
            </div>
            <h1>YOU'RE INVITED!</h1>
            <div className="image-container main-image">
                <img className="img-fluid center" src="marioKarty64.png" alt="alternative" width="50%" />
            </div>
            <form name="character" method="post">
                <input type="hidden" name="form-name" value="character" />
                <div class="name-input">
                <p>
                    <label className="name-input">Your Name: <input type="text" name="name"/></label>
                </p>
                </div>
                <div class="col-12 mario-kart-radio">
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
                <div class="col-12 mario-kart-radio">
                <p>
                    <input type="radio" name="char" value="Yoshi"/><label className="radio">Yoshi</label>
                </p>
                <p>
                    <input type="radio" name="char" value="DK"/><label className="radio">D.K.</label>
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
                <div class="col-12 mario-kart-radio">
                <p>
                    <input type="radio" name="char" value="Boo"/><label className="radio">Boo</label>
                </p>
                <p>
                    <input type="radio" name="char" value="Diddy-Kong"/><label className="radio">Diddy Kong</label>
                </p>
                <p>
                    <input type="radio" name="char" value="Koopa-Troopa"/><label className="radio">Koopa Troopa</label>
                </p>
                <p>
                    <input type="radio" name="char" value="Goomba"/><label className="radio">Goomba</label>
                </p>
                <p>
                    <input type="radio" name="char" value="Birdo"/><label className="radio">Birdo</label>
                </p>
                </div>
                <div class="col-12 mario-kart-radio">
                <p>
                    <input type="radio" name="char" value="Chain-Chomp"/><label className="radio">Chain Chomp</label>
                </p>
                <p>
                    <input type="radio" name="char" value="Rosalina"/><label className="radio">Rosalina</label>
                </p>
                <p>
                    <input type="radio" name="char" value="Baby-Bowser"/><label className="radio">Baby Bowser</label>
                </p>
                <p>
                    <input type="radio" name="char" value="Pirhana-Plant"/><label className="radio">Pirhana Plant</label>
                </p>
                <p>
                    <input type="radio" name="char" value="Toadette"/><label className="radio">Toadette</label>
                </p>
                </div>
                <div class="mario-kart-submit">
                <p>
                    <button type="submit">Send</button>
                </p>
                </div>
            </form>
        </div>
        </Fragment>
    );
  }