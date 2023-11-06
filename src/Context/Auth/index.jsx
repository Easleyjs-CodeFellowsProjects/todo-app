import React, { useState } from 'react';

export const AuthContext = React.createContext(); 

function AuthProvider (props) {
    const [settings, setSettings] = useState({
        displayCount: 3,
        hideCompleted: false,
        sort: 'difficulty',
        defaultDifficulty: 3,
        settingsUpdated: false,
    })

    const updateSettings = ( newSettings ) => {
        const oldSettings = settings;
        const { displayCount, hideCompleted } = newSettings;
    
        const displayCountInt = displayCount || oldSettings.displayCount;
        
        const updatedSettings = { ...oldSettings, 
                                  settingsUpdated: true, 
                                  displayCount: displayCountInt, 
                                  hideCompleted
        };
        
        setSettings( updatedSettings );
      }

    return (
        <AuthContext.Provider value={{ updateSettings, settings }}>
          { props.children }
        </AuthContext.Provider>
      )
}

export default AuthProvider;