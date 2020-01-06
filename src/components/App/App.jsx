import React from 'react';
import VibrationList from '../VibrationList/VibrationList';

class App extends React.Component {
    PREFIX = 'vibration-record__';

    constructor(props) {
        super(props);

        let records = [];
        for (let i = 0; i < localStorage.length; i++) {
            const itemKey = localStorage.key(i);
            if (itemKey.startsWith(this.PREFIX)) {
                const recordString = localStorage.getItem(itemKey);
                const record = JSON.parse(recordString);
                records.push(record);
            }
        }
        records.sort((a, b) => a.createdAt - b.createdAt);

        this.state = {
            records,
        };
    }

    saveRecord = (vibrationPattern, createdAt) => {
        const record = {
            vibrationPattern,
            createdAt: createdAt || Date.now(),
        };

        const recordString = JSON.stringify(record);
        localStorage.setItem(`${this.PREFIX}${record.createdAt}`, recordString);

        const records = this.state.records.map((stateRecord) => stateRecord.createdAt === record.createdAt ? record : stateRecord);

        this.setState({
            records,
        });
    };

    render() {
        return (
            <VibrationList
                records={this.state.records}
            />
        );
    }
}

export default App;
