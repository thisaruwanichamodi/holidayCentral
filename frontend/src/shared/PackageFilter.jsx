import React, { useRef } from 'react';
import { FormGroup, Input, Label, Button } from 'reactstrap';
import './package-filter.css'

const PackageFilter = ({ handleFilter, handleClear }) => {
  const durationRef = useRef(null);
  const priceRef = useRef(null);
  const ratingRef = useRef(null);

  const filterHandler = () => {
    const duration = durationRef.current.value;
    const price = priceRef.current.value;
    const rating = ratingRef.current.value;


    handleFilter({ duration, price, rating });
  };

  const clearHandler = () => {
    durationRef.current.value = '';
    priceRef.current.value = '';
    ratingRef.current.value = '';

    handleClear();
  };

  return (

    <div className='package__filter'>
      <br/>
      <h6 style={{ fontSize: '1.5rem', margin: '1rem 0' }}>Filter</h6>
      <FormGroup>
        <Label for='duration'>Duration (in Weeks)</Label>
        <Input
          type='number'
          name='duration'
          id='duration'
          placeholder='Enter duration in days'
          innerRef={durationRef}
          onChange={filterHandler}
        />
      </FormGroup>
      <FormGroup>
        <Label for='price'>Price Range (in USD)</Label>
        <Input
          type='select'
          name='price'
          id='price'
          innerRef={priceRef}
          onChange={filterHandler}
        >
          <option value=''>All Prices</option>
          <option value='0-999'>$0-$999</option>
          <option value='1000-1999'>$1000-$1999</option>
          <option value='2000-2999'>$2000-$2999</option>
          <option value='3000-3999'>$3000-$3999</option>
          <option value='4000-4999'>$4000-$4999</option>
          <option value='5000+'>$5000+</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='rating'>Package Rating</Label>
        <Input
          type='select'
          name='rating'
          id='rating'
          innerRef={ratingRef}
          onChange={filterHandler}
        >
          <option value=''>All Ratings</option>
          <option value='4+'>4+ Stars</option>
          <option value='3+'>3+ Stars</option>
          <option value='2+'>2+ Stars</option>
          <option value='1+'>1+ Stars</option>
        </Input>
      </FormGroup>
      <Button color='primary' onClick={filterHandler}>Apply</Button>{' '}
      <Button color='secondary' onClick={clearHandler}>Clear All</Button>
    </div>
  );
};

export default PackageFilter;
