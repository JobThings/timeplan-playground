import React from 'react';
import './GridSchedule.css'

const GridSchedule = ({columnData, rowData}) => {
    const [bookedDeliveries, setBookedDeliveries] = React.useState([
        {
            weekday: '3',
            startTime: '13:00',
            available: 3
        }
    ]);

    const clickHandler = (cIndex, rData) => {
        setBookedDeliveries(previous => [...previous, 
            {
                weekday: cIndex.toString(), 
                startTime: rData,
                available: 3
            }
        ])
    }

    function getIndex(cIndex, rData){
        return bookedDeliveries.findIndex(e => e.weekday === cIndex.toString() && e.startTime === rData);
    }

    const BookedCell = ({index}) => {
        return (
            <div><span style={{fontSize: 12}}>Slots:</span> {bookedDeliveries[index].available}</div>
        )
    }

    return (
        <div>
            <div className="schedule-container">
                <>
                    <div>
                        <div className="schedule-column-header"></div>
                        {rowData.map((rData) => (
                            <div key={rData} className="schedule-row-header">
                                {rData}
                            </div>
                        ))}
                    </div>
                    {columnData.map((cData, cIndex) => (
                        <div key={cIndex} className="schedule-row">
                            <div className="schedule-column-header"><b>{cData}</b></div>
                            {rowData.map((rData) => (
                                <div key={rData} className={getIndex(cIndex, rData) !== -1 ? 'schedule-cell booked' : 'schedule-cell'} onClick={() => clickHandler(cIndex, rData)}>
                                    {getIndex(cIndex, rData) !== -1 ? <BookedCell index={getIndex(cIndex, rData)} /> : null}
                                </div>
                            ))}
                        </div>
                  ))}
                </>
            </div>
        </div>
    );
};

export default GridSchedule;
