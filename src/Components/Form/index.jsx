import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings'

import useForm from '../../hooks/form';
import { Button, Input, Slider, Space, Text } from '@mantine/core';

import { v4 as uuid } from 'uuid';

const Form = ( props ) => {
  const settings = useContext(SettingsContext);
  const { defaultDifficulty } = settings.settings;
    const { handleAddTodo } = props;

    const { handleChange, handleSubmit } = useForm(addItem, {
        difficulty: defaultDifficulty,
      });

    function addItem( item ) {
        item.id = uuid();
        item.complete = false;
        //console.log( item );
        handleAddTodo( item );
      }

      const marks = [
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' },
      ];

    return (
        <>
            <form onSubmit={ handleSubmit }>

                <h2>Add To Do Item</h2>
            
                <Input.Label>To Do Item</Input.Label>
                <Input onChange={ handleChange } name="text" placeholder="Item Details" />
                
                <Space h="md"></Space>            
                
                <Input.Label>Assigned To</Input.Label>
                <Input onChange={ handleChange } name="assignee" placeholder="Assignee Name" />
                <Space h="md"></Space>
                
                <Text>Difficulty</Text>
                <Slider onChange={ handleChange } 
                        defaultValue={ defaultDifficulty } 
                        min={1}
                        max={5}
                        step={1}
                        name="difficulty"
                        label={null}
                        marks={marks}
                />
                
                <Space h="xl"></Space>
                
                <Button variant='filled' type="submit">Add Item</Button>
            </form>   
        </>
    )
}

export default Form;
