import React, {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const URL = `https://swapi.co/api/people/`;

// state = {
//   value: ''
// }

// onChage(e) {
//   this.setState({ value: e.target.value });
// }

function useField(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  return [
    value,
    e => {
      setValue(e.target.value);
    },
  ];
}

function StarWars(props) {
  const [value, setValue] = useField('');
  const [filteredData, setFilteredData] = useState(null);
  const handleSubmit = async e => {
    e.preventDefault();
    const response = await axios.get(`${URL}?search=${value}`);
    setFilteredData(response.data);
  };

  const data = filteredData || props.data;

  const people = data.results.map(p => (
    <div key={p.url}>
      <h2>{p.name}</h2>
    </div>
  ));

  return (
    <div className="starwars">
      <h1>Star Wars</h1>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={setValue} />
        <button type="submit">Search</button>
      </form>
      {people}
    </div>
  );
}

StarWars.propTypes = {
  data: PropTypes.shape({
    count: PropTypes.number.isRequired,
    results: PropTypes.array.isRequired,
  }).isRequired,
};

StarWars.getInitialProps = async () => {
  const response = await axios.get(URL);
  return {
    data: response.data,
  };
};

export default StarWars;
