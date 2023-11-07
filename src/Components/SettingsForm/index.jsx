import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings/index'

import useForm from '../../hooks/form';
import { Button, Switch, NumberInput, Space } from '@mantine/core';

function SettingsForm() {
    const settings = useContext(SettingsContext);
    const { defaultDifficulty, hideCompleted } = settings.settings;
    const { updateSettings } = settings;

    const { handleChange, handleSubmit, handleItemCountChange, handleShowCompletedChange } = useForm(updateSettings, {
        difficulty: defaultDifficulty,
    });
 
    return (
      <>
        <form onSubmit={ handleSubmit }>
            <Switch
                //checked={ hideCompleted }
                label="Show Completed To-Dos"
                name="hideCompleted"
                onChange={ handleShowCompletedChange }
                defaultChecked={ hideCompleted }
                mt={25}
            />

            <Space h="md"></Space>          
            
            <NumberInput
                label="Items Per Page"
                description="Items per Page"
                onChange={ handleItemCountChange }
                name="displayCount" 
                placeholder="Items per Page"
                min={1}
                mt={5}
                defaultValue={3}
            />
            
            <Space h="xl"></Space>
            
            <Button variant='filled' type="submit">Update Settings</Button>
        </form>
      </>
    )
}

export default SettingsForm;