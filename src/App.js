import React, { useState } from 'react';
import "./App.css";
import PartList from './components/PartList';
import Avatar from './components/Avatar';

const total = {
    body: 17,
    hair: 73,
    eyes: 17,
    eyebrows: 15,
    noses: 1,
    mouth: 24,
    hats: 28,
    glasses: 17,
    earrings: 32,
    neckwear: 18,
    clothing1: 5,
    clothing2: 5,
    clothing3: 9,
};

const random = (max, min = 1) => {
    const result = Math.floor(Math.random() * (max - min) + min);
    console.log(result);
    return result
}


function App() {
    const [body, setBody] = useState(0);
    const [hair, setHair] = useState(0);
    const [eyes, setEyes] = useState(0);
    const [eyebrows, setEyebrows] = useState(0);
    const [noses, setNoses] = useState(0);
    const [mouth, setMouth] = useState(0);
    const [hats, setHats] = useState(0);
    const [glasses, setGlasses] = useState(0);
    const [earrings, setEarrings] = useState(0);
    const [neckwear, setNeckwear] = useState(0);
    const [clothing1, setClothing1] = useState(0);
    const [clothing2, setClothing2] = useState(0);
    const [clothing3, setClothing3] = useState(0);

    const randomParts = () => {
        setBody(random(total.body))
        setHair(random(total.hair))
        setEyes(random(total.eyes))
        setEyebrows(random(total.eyebrows))
        setNoses(random(total.noses))
        setMouth(random(total.mouth))
        setHats(random(total.hats))
        setGlasses(random(total.glasses))
        setEarrings(random(total.earrings))
        setNeckwear(random(total.neckwear))
        setClothing1(random(total.clothing1))
        setClothing2(random(total.clothing2))
        setClothing3(random(total.clothing3))
    }


    return (
        <div>
            <div className='title'>CHARACTER</div>
            <div className='subtitle'>🔮 TTHL CUSTOMIZATION 🔮</div>
            <div className='divider'></div>
            <div className='avatar-group gap-60'>
                <div className='ava'>
                    <div className='avatar-wrapper'>
                        <Avatar
                            body={body}
                            hair={hair}
                            eyes={eyes}
                            eyebrows={eyebrows}
                            noses={noses}
                            mouth={mouth}
                            hats={hats}
                            glasses={glasses}
                            earrings={earrings}
                            neckwear={neckwear}
                            clothing1={clothing1}
                            clothing2={clothing2}
                            clothing3={clothing3}
                        />
                        <div className="text-center">
                            <button className="button" onClick={() => randomParts()}>Randomize</button>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="list-section body">
                        <h2>Body</h2>
                        <PartList
                            total={total.body}
                            path="body"
                            set={setBody}
                            selected={body}
                            height="60px"
                            top="50%"
                        />
                    </div>
                    <div className="list-section hair">
                        <h2>Hair</h2>
                        <PartList
                            total={total.hair}
                            path="hair"
                            set={setHair}
                            selected={hair}
                            height="60px"
                            top="50%"
                        />
                    </div>
                    <div className="list-section eyes">
                        <h2>Eyes</h2>
                        <PartList
                            total={total.eyes}
                            path="eyes"
                            set={setEyes}
                            selected={eyes}
                            height="150px"
                            top="35px"
                        />
                    </div>
                    <div className="list-section eyebrows">
                        <h2>Eyebrows</h2>
                        <PartList
                            total={total.eyebrows}
                            path="eyebrows"
                            set={setEyebrows}
                            selected={eyebrows}
                            height="60px"
                            top="50%"
                        />
                    </div>
                    <div className="list-section mouth">
                        <h2>Mouth</h2>
                        <PartList
                            total={total.mouth}
                            path="mouth"
                            set={setMouth}
                            selected={mouth}
                            height="120px"
                            top="50%"
                        />
                    </div>
                    <div className="list-section hats">
                        <h2>Hats</h2>
                        <PartList
                            total={total.hats}
                            path="accessories/hats"
                            set={setHats}
                            selected={hats}
                            height="60px"
                            top="70%"
                        />
                    </div>
                    <div className="list-section glasses">
                        <h2>Glasses</h2>
                        <PartList
                            total={total.glasses}
                            path="accessories/glasses"
                            set={setGlasses}
                            selected={glasses}
                            height="60px"
                            top="60%"
                        />
                    </div>
                    <div className="list-section earrings">
                        <h2>Earrings</h2>
                        <PartList
                            total={total.earrings}
                            path="accessories/earrings"
                            set={setEarrings}
                            selected={earrings}
                            height="80px"
                            top="40%"
                        />
                    </div>
                    <div className="list-section neckwear">
                        <h2>Neckwear</h2>
                        <PartList
                            total={total.neckwear}
                            path="accessories/neckwear"
                            set={setNeckwear}
                            selected={neckwear}
                            height="100px"
                            top="-10%"
                        />
                    </div>
                    <div className="list-section clothing1">
                        <h2>Clothing1</h2>
                        <PartList
                            total={total.clothing1}
                            path="clothes/layer_1"
                            set={setClothing1}
                            selected={clothing1}
                            height="60px"
                            top="30%"
                        />
                    </div>
                    <div className="list-section clothing2">
                        <h2>Clothing2</h2>
                        <PartList
                            total={total.clothing2}
                            path="clothes/layer_2"
                            set={setClothing2}
                            selected={clothing2}
                            height="60px"
                            top="30%"
                        />
                    </div>
                    <div className="list-section clothing3">
                        <h2>Clothing3</h2>
                        <PartList
                            total={total.clothing3}
                            path="clothes/layer_3"
                            set={setClothing3}
                            selected={clothing3}
                            height="80px"
                            top="10%"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
