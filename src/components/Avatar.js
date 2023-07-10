import React from 'react'

function Avatar({ body, hair, eyes, eyebrows, noses, mouth, hats, glasses, earrings, neckwear, clothing1, clothing2, clothing3 }) {
    return (
        <div className='avatar'>
            <img src={`./character/body/${body + 1}.png`} alt="" width="260" style={{ zIndex: '0', position: "absolute", left: 0, top: 0 }}></img>
            <img src={`./character/eyes/${eyes + 1}.png`} alt="" width="260" style={{ zIndex: '1', position: "absolute", left: 0, top: 0 }}></img>
            <img src={`./character/eyebrows/${eyebrows + 1}.png`} alt="" width="260" style={{ zIndex: '1', position: "absolute", left: 0, top: 0 }}></img>
            <img src={`./character/noses/${noses + 1}.png`} alt="" width="260" style={{ zIndex: '1', position: "absolute", left: 0, top: 0 }}></img>
            <img src={`./character/mouth/${mouth + 1}.png`} alt="" width="260" style={{ zIndex: '1', position: "absolute", left: 0, top: 0 }}></img>
            <img src={`./character/hair/${hair + 1}.png`} alt="" width="260" style={{ zIndex: '1', position: "absolute", left: 0, top: 0 }}></img>
            <img src={`./character/accessories/hats/${hats + 1}.png`} alt="" width="260" style={{ zIndex: '2', position: "absolute", left: 0, top: 0 }}></img>
            <img src={`./character/accessories/glasses/${glasses + 1}.png`} alt="" width="260" style={{ zIndex: '2', position: "absolute", left: 0, top: 0 }}></img>
            <img src={`./character/accessories/earrings/${earrings + 1}.png`} alt="" width="260" style={{ zIndex: '2', position: "absolute", left: 0, top: 0 }}></img>
            <img src={`./character/accessories/neckwear/${neckwear + 1}.png`} alt="" width="260" style={{ zIndex: '2', position: "absolute", left: 0, top: 0 }}></img>
            <img src={`./character/clothes/layer_1/${clothing1 + 1}.png`} alt="" width="260" style={{ zIndex: '3', position: "absolute", left: 0, top: 0 }}></img>
            <img src={`./character/clothes/layer_2${clothing2 + 1}.png`} alt="" width="260" style={{ zIndex: '4', position: "absolute", left: 0, top: 0 }}></img>
            <img src={`./character/clothes/layer_3${clothing3 + 1}.png`} alt="" width="260" style={{ zIndex: '5', position: "absolute", left: 0, top: 0 }}></img>
        </div >
    )
}

export default Avatar
