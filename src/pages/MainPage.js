import React from 'react';
import CustomSchedule from '../components/CustomSchedule'

const MainPage = () => {
  const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const TIMES = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <CustomSchedule />
    </div>
  );
};

export default MainPage;
