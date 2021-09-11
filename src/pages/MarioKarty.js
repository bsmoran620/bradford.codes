import React, {Fragment} from 'react';
import { Button } from 'react-bootstrap';
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
            <form name="character" netlify>
                <input type="radio" id="mario" name="mario" value="MARIO"/>
                <label className="radio" for="mario">MARIO</label>
                <input type="radio" id="luigi" name="luigi" value="LUIGI"/>
                <label className="radio" for="luigi">LUIGI</label>
                <input type="radio" id="peach" name="peach" value="PEACH"/>
                <label className="radio" for="peach">PEACH</label>
                <div className="mario-kart-submit">
                    <Button variant="primary" type="submit">Submit</Button>
                </div>
            </form>
        </div>
        </Fragment>
    );
  }