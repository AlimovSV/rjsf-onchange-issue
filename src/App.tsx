import Form, { IChangeEvent } from '@rjsf/core';
import { customizeValidator } from '@rjsf/validator-ajv8';
import { useCallback, useState } from 'react'
import './App.css'

import schema from './data.json' ;

const validator = customizeValidator({
  ajvOptionsOverrides: {
    $data: true,
  },
});

function App() {
  const [formData, setFOrmData] = useState({
    checkbox: false,
  })

  const handleChange = useCallback((e: IChangeEvent) => {
    console.log('---errors', e.errors);

    setFOrmData(e.formData)
  }, []);

  return (
    <Form
      schema={schema}
      formData={formData}
      onChange={handleChange}
      showErrorList={false}
      liveValidate={true}
      liveOmit={true}
      omitExtraData={true}
      validator={validator}
    >
      {true}
    </Form>
  )
}

export default App
