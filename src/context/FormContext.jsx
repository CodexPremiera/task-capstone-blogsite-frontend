import React, { createContext, useContext } from 'react';


const FormContext = createContext(undefined);

export const useForm = () => useContext(FormContext);

export const FormProvider = ({ form, setForm, publish, setPublish, children}) => (
  <FormContext.Provider value={{ form, setForm, publish, setPublish }}>
    {children}
  </FormContext.Provider>
);

