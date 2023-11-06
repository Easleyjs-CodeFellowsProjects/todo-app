import { useState, useEffect } from 'react';

const useForm = (callback, defaultValues={ difficulty: 3, completed: "0", hideCompleted: true }) => {

  const [values, setValues] = useState(defaultValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    callback({...values});
  };

  const handleUserSubmit = (event) => {
    event.preventDefault();
    let userObj = {...values};
    delete userObj.difficulty;
    callback(userObj);
  }

  const handleChange = (event) => {
    //console.log(typeof event)
    let name, value;
    if(typeof(event) === 'object'){
      name = event.target.name;
      if (event.target.type === 'checkbox') {
        value = event.target.checked
      } else {
        value = event.target.value;
      }
    } 
    if (typeof(event) === 'number'){
      // hard coded for Mantine slider functionality 
      // change "difficulty" language if desired
      // change name dynamically if doing stretch goal!
      name = 'difficulty';
      value = event ? event : 3;
    }
    if(typeof(event) === 'string'){
      name = 'role';
      value = event;
    }


    if (parseInt(value)) {
      value = parseInt(value);
    }
    setValues(values => ({ ...values, [name]: value }));
  };
  
  const handleShowCompletedChange = (event) => {
    let name, value;
    name = 'hideCompleted';
    value = event.target.checked;

    setValues(values => ({ ...values, [name]: value }));
  }

  const handleItemCountChange = (event) => {
    let name, value;
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
    handleUserSubmit,
    handleItemCountChange,
    handleShowCompletedChange,
    values,
  };
};

export default useForm;
