import React from 'react'

function PartList({ total, path, set, selected, height, top }) {
    let parts = [];
    for (let i = 0; i < total; i++) {
        parts.push(
            <div
                key={path + i}
                className={
                    selected === i ? "selected clickable square" : "clickable square"
                }
                onClick={() => set(i)}
            // onClick={() => set(state => ({
            //     ...state,
            //     [name]: i
            // }))}
            >
                <img
                    src={`./character/${path}/${i + 1}.png`}
                    alt=""
                    height={height}
                    className="img-center"
                    style={{ top }}
                />
            </div>
        );
    }
    return <div className="list">{parts}</div>;
};

export default PartList
