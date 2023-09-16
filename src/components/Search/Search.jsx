import { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

export const Search = () => {
    const [selectedOption, setSelectedOption] = useState(null)

    return <>

    <div>dkfsdkfnsdfnsd</div>

    <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />

    </>
}