import { useState } from 'react';
import Button from 'components/Button';
import { useSelector } from 'react-redux';
import { getAdverts } from 'redux/selectors';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import makes from '../../data/makes';
import prices from '../../data/prices';
import { Form, Label, Select, SelectPrice } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(getAdverts);
  const [filteredAdverts, setFilteredAdverts] = useState([]);
  const [selectedMake, setSelectedMake] = useState('Enter the text');
  const [selectedPrice, setSelectedPrice] = useState('To $');

  const handleMakeSelectChange = (event) => {
    setSelectedMake(event.target.value);
  };

  const handlePriceSelectChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setFilteredAdverts(
      adverts.filter((advert) => advert.make === selectedMake),
    );
    dispatch(setFilter(filteredAdverts));
  };

  return (
    <Form onClick={handleOnSubmit}>
      <Label>
        Car brand
        <Select
          name="models"
          value={selectedMake}
          onChange={handleMakeSelectChange}
        >
          <option value="Enter the text">Enter the text</option>
          {makes.map((make) => (
            <option key={uuidv4()} value={make}>
              {make}
            </option>
          ))}
        </Select>
      </Label>
      <Label>
        Price/ 1 hour
        <SelectPrice
          name="prices"
          value={selectedPrice}
          onChange={handlePriceSelectChange}
        >
          <option value="To $" disabled>
            To $
          </option>
          {prices.map((price) => (
            <option key={uuidv4()} value={price}>
              {price}
            </option>
          ))}
        </SelectPrice>
      </Label>
      <Label></Label>
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default Filter;
