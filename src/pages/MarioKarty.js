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
                <p>
                    <label className="name-input">Your Name: <input type="text" name="name"/></label>
                </p>
                <p>
                    <label className="radio">Mario <input type="radio" name="char" value="mario"/></label>
                </p>
                <p>
                    <label className="radio">Luigi <input type="radio" name="char" value="luigi"/></label>
                </p>
                <p>
                    <label className="radio">Peach <input type="radio" name="char" value="peach"/></label>
                </p>
                <p>
                    <label className="radio">Wario <input type="radio" name="char" value="wario"/></label>
                </p>
                <p>
                    <label className="radio">Waluigi <input type="radio" name="char" value="waluigi"/></label>
                </p>
                <p>
                    <label className="radio">Yoshi <input type="radio" name="char" value="yoshi"/></label>
                </p>
                <p>
                    <label className="radio">D.K. <input type="radio" name="char" value="D.K>"/></label>
                </p>
                <p>
                    <label className="radio">Toad <input type="radio" name="char" value="toad"/></label>
                </p>
                <p>
                    <label className="radio">Bowser <input type="radio" name="char" value="bowser"/></label>
                </p>
                <p>
                    <label className="radio">Daisy <input type="radio" name="char" value="daisy"/></label>
                </p>
                <p>
                    <label className="radio">Boo <input type="radio" name="char" value="boo"/></label>
                </p>
                <p>
                    <label className="radio">Diddy Kong <input type="radio" name="char" value="diddy-kong"/></label>
                </p>
                <p>
                    <label className="radio">Koopa Troopa <input type="radio" name="char" value="koopa-troopa"/></label>
                </p>
                <p>
                    <label className="radio">Goomba <input type="radio" name="char" value="goomba"/></label>
                </p>
                <p>
                    <label className="radio">Birdo <input type="radio" name="char" value="birdo"/></label>
                </p>
                <p>
                    <label className="radio">Chain Chomp <input type="radio" name="char" value="chain-chomp"/></label>
                </p>
                <p>
                    <label className="radio">Rosalina <input type="radio" name="char" value="rosalina"/></label>
                </p>
                <p>
                    <label className="radio">Baby Bowser <input type="radio" name="char" value="baby-bowser"/></label>
                </p>
                <p>
                    <label className="radio">Pirhana Plant <input type="radio" name="char" value="pirhana-plant"/></label>
                </p>
                <p>
                    <label className="radio">Toadette <input type="radio" name="char" value="toadette"/></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </div>
        </Fragment>
    );
  }