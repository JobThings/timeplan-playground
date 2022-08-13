import React from 'react';
import './SchemaInput.css';

const SchemaInput = () => {
  return (
    <div style={{margin: '0 auto'}}>
        <p>Selected: Thursday 13:00</p>
        <form style={{display: 'flex', flexDirection: 'column'}}>
            <label class="input-cell">
                Start time:
                <input type="text" name="name" placeholder="13:00" />
            </label>
            <label class="input-cell">
                End time:
                <input type="text" name="name" placeholder="14:00" />
            </label>
            <label class="input-cell">
                Available instances:
                <input type="text" name="name" placeholder="3" />
            </label>
            <label class="input-cell">
                Fee:
                <input type="text" name="name" placeholder="49" />
            </label>
            <label class="input-cell">
                Early cut-off:
                <input type="text" name="name" placeholder="900" />
            </label>
            <label class="input-cell">
                Late cut-off:
                <input type="text" name="name" placeholder="15" />
            </label>
        </form>
    </div>
  );
};

export default SchemaInput;
