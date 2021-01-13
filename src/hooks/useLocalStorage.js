import { useState } from 'react';

const useLocalStorage = (initialValue) => {
  const [ values, setValues ] = useState(initialValue)

}

export default useLocalStorage;