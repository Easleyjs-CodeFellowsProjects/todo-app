import { useState, useEffect } from 'react';

const useForm = (callback, defaultValues={}) => {

  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log('values in form:', values);

    callback({...values});
  };

  const handleChange = (event) => {
    let name, value;
    if(typeof(event) === 'object'){
      name = event.target.name;
      if (event.target.type === 'checkbox') {
        value = event.target.checked
      } else {
        value = event.target.value;
      }
    } else {
      // hard coded for Mantine slider functionality 
      // change "difficulty" language if desired
      // change name dynamically if doing stretch goal!
      name = 'difficulty';
      value = event;
    }

    if (parseInt(value)) {
      value = parseInt(value);
    }
    setValues(values => ({ ...values, [name]: value }));
  };
  
  const handleItemCountChange = (event) => {
    let name, value;
    
    //console.log('item count:', event)
    name = 'displayCount';
    value = event;

    if (parseInt(value)) {
      value = parseInt(value);
    }
    setValues(values => ({ ...values, [name]: value }));
  }

/*
  useEffect( () => {
    setValues( defaultValues );
  }, [defaultValues]);
*/
  return {
    handleChange,
    handleSubmit,
    handleItemCountChange,
    values,
  };
};

export default useForm;
