import React from 'react';
import './CustomSchedule.css';

const CustomSchedule = () => {
    const DEFAULT_WIDTH = 200;
    const [deliveries, setDeliveries] = React.useState([]);
    const [hoverArea, setHoverArea] = React.useState({start: -1, end: -1, x: -1, startSet: false, collision: 0});

    const hoverHandler = (e) => {
        if(!hoverArea.startSet) {
            setHoverArea(prev => ({...prev, start: e.clientY}))
        }
        setHoverArea(prev => ({...prev, end: e.clientY, x: e.clientX}))
    }

    const clickHandler = () => {
        if(hoverArea.startSet){
            collisionDetection();
            setDeliveries(prev => [...prev, {start: hoverArea.start, end: hoverArea.end, slots: 3, collision: hoverArea.collision}])
        }
        setHoverArea(prev => ({...prev, startSet: !prev.startSet, collision: 0}))
    }

    const exitHandler = () => {
        setHoverArea(prev => ({start: -1, end: -1, startSet: false, collision: 0}))
    }

    const CellItem = ({item}) => {
        if(item.start < 0 || item.end < 0) return null;
        return (
            <div 
                className="hover-cell" 
                style={{
                    top: item.start, 
                    height: item.end-item.start,
                    width: item.collision === 0 ? DEFAULT_WIDTH : DEFAULT_WIDTH/2,
                    left: item.collision === 1 ? DEFAULT_WIDTH/2 : 0
                }}>
                {item.slots ? `slots ${item.slots}` : ""}
            </div>
        )
    }

    const collisionDetection = () => {
        deliveries.forEach(item => {
            if((hoverArea.start > item.start && hoverArea.start < item.end) || 
            (hoverArea.end > item.start && hoverArea.end < item.end) || 
            (hoverArea.start < item.start && hoverArea.end > item.end)) {
                if(hoverArea.x > DEFAULT_WIDTH/2){
                    item.collision = -1;
                    hoverArea.collision = 1;
                }
                else{
                    item.collision = 1;
                    hoverArea.collision = -1;
                }
            }
        });
    }

    return (
        <div className="grid-area"
            onMouseMove={e => hoverHandler(e)}
            onMouseDown={clickHandler}
            onMouseLeave={exitHandler}
        >
            <CellItem item={hoverArea} />
            {deliveries.map(item => (
                <CellItem item={item} />
            ))}
        </div>
        )
};

export default CustomSchedule;
