import React, { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import VibrationListPage from './VibrationListPage';
import VibrationPlayerPage from './VibrationPlayerPage';
import VibrationRecorderPage from './VibrationRecorderPage';

function App() {
    const PREFIX = 'vibration-record__';
    const history = useHistory();

    const [records, setRecords] = useState(() => {
        let records = [];
        for (let i = 0; i < localStorage.length; i++) {
            const itemKey = localStorage.key(i);
            if (itemKey.startsWith(PREFIX)) {
                const recordString = localStorage.getItem(itemKey);
                const record = JSON.parse(recordString);
                records.push(record);
            }
        }
        records.sort((a, b) => b.createdAt - a.createdAt);
        return records;
    });

    function saveRecord(vibrationPattern) {
        const record = {
            vibrationPattern,
            createdAt: Date.now(),
        };

        const recordString = JSON.stringify(record);
        localStorage.setItem(`${PREFIX}${record.createdAt}`, recordString);

        const updatedRecords = [record].concat(records);
        setRecords(updatedRecords);

        history.push('');
    }

    return (
        <>
            <Route path="/" exact render={() => (
                <VibrationListPage
                    records={records}
                />
            )}/>
            <Route path="/new" render={() => (
                <VibrationRecorderPage
                    onSave={saveRecord}
                />
            )}/>
            <Route path="/:createdAt" render={({ match }) => {
                if (!match) {
                    return null;
                }
                const createdAt = Number(match.params.createdAt);
                if (isNaN(createdAt)) {
                    return null;
                }
                const record = records.find((stateRecord) => stateRecord.createdAt === createdAt);
                if (!record) {
                    return null;
                }

                return (
                    <VibrationPlayerPage
                        vibrationPattern={record.vibrationPattern}
                    />
                );
            }}/>
        </>
    );
}

export default App;
