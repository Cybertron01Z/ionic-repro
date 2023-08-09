import './App.css'
import {useEffect, useState} from "react";
import {Device} from "@ionic-enterprise/identity-vault";

function App() {
    const [allowed, setAllowed] = useState<string>();

    useEffect(() => {
        const load = async () => {
            const allowed = await Device.isBiometricsAllowed();
            setAllowed(allowed);
        }
        load();
    }, []);

    const showPrompt = async () => {
        await Device.showBiometricPrompt({
            iosBiometricsLocalizedCancelTitle: 'cancel',
            iosBiometricsLocalizedReason: 'reason'
        });
        const allowed = await Device.isBiometricsAllowed();
        setAllowed(`Set ${allowed}`);
    };

    return (
        <div style={{display: 'flex', gap: '5px', flexDirection: 'column'}}>
            <span>Allowed: {allowed}</span>
            <button onClick={() => showPrompt()}>
                Show Prompt
            </button>
        </div>
    )
}

export default App
