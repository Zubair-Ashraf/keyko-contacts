import { useState, useCallback } from 'react';

export const useForm = <T>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues);

  const handleValueChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      setValues({ ...values, [name]: value });
    },
    [values]
  );

  const reset = useCallback((values: T) => setValues(values), []);

  const handleSubmit = (e, onSubmit) => {
    e.preventDefault();
    onSubmit(e, values);
  };

  return { values, reset, handleSubmit, handleValueChange };
};
