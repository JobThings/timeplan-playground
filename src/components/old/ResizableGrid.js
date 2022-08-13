import React from 'react';
import './ResizableGrid.css';

const ResizableGrid = () => {
    //const gridArea = document.querySelector(".grid-area");
    //const gridAreaPos = gridArea.getBoundingClientRect();
    const [items, setItems] = React.useState([]);
    const [hoverArea, setHoverArea] = React.useState({x: -1, y: -1, w: 200, left: 0});
    
    React.useEffect(() => {
        const sorted = items.sort((a, b) => (a.y > b.y));
        setItems(sorted);
        checkOverlaps();
    }, [items])

    const checkOverlaps = () => {
        for(let i = 0; i < items.length; i++){
            if(items[i+1] && items[i].y + 50 > items[i+1].y){
                console.log("set overlaps")
            }
        }
    }

    const checkHoverOverlaps = () => {
        for(let i = 0; i < items.length; i++){
            if(hoverArea.y + 50 > items[i].y && hoverArea.y - 50 < items[i].y){
                if(hoverArea.x < 100)
                    setHoverArea(prev => ({...prev, w: 100, left: 0}))
                else
                    setHoverArea(prev => ({...prev, w: 100, left: 100}))
            }else{
                setHoverArea(prev => ({...prev, w: 200, left: 0}))
            }
        }
    }

    const clickHandler = (e) => {
        const item = {y: e.clientY, w: 200}
        setItems(prevItems => [...prevItems, item])
    }

    const hoverHandler = (e) => {
        setHoverArea(prev => ({...prev, x: e.clientX, y: e.clientY}))
        checkHoverOverlaps();
    }
    
    const exitHandler = () => {
        setHoverArea(prev => ({...prev, y: -1}))
    }

    const CellItem = ({item}) => {
        if(item.y < 0) return null;
        return (
            <div className="cell" style={{top: item.y, width: item.w || 200, left: item.left || 0}}>slots: 3</div>
        )
    }

    return (
        <div className="grid-area" 
            onMouseDown={e => clickHandler(e)}
            onMouseMove={e => hoverHandler(e)}
            onMouseLeave={exitHandler}
        >
            <CellItem item={hoverArea} />
            {items.map(item => (
                <CellItem item={item} />
            ))}
        </div>
    )
};

export default ResizableGrid;
