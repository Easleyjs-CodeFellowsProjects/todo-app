import React, { useState } from 'react';

export const SettingsContext = React.createContext(); 

function SettingsProvider (props) {
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
    <SettingsContext.Provider value={{ updateSettings, settings }}>
      { props.children }
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
