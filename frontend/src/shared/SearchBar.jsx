import React, { useRef } from 'react';
import './search-bar.css';
import { Col, Form, FormGroup, } from 'reactstrap';
import PackageFilter from './PackageFilter.jsx';


const SearchBar = () => {
  const destinationRef = useRef('');
  const durationRef = useRef('');
  const maxGroupSizeRef = useRef('');
  const specialtyRef = useRef('');

  const searchHandler = () => {
    const destination = destinationRef.current.value;
    const duration = durationRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;
    const specialty = specialtyRef.current.value;

    if (destination === '' || duration === '' || maxGroupSize === ''||specialty==='') {
      return alert('All fields are required!');
    }
  };

  const filterHandler = () => {
    const destination = destinationRef.current.value;
    const duration = durationRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;
    const specialty = specialtyRef.current.value;

    console.log(
      `Filter results: destination=${destination}, duration=${duration}, maxGroupSize=${maxGroupSize}, specialty=${specialty}`
    );
  };

  return (
    <Col lg='12'>
      <div className='search__bar'>
        <Form className='d-flex align-items-center gap-4'>
          <FormGroup className='d-flex gap-3 form__group form__group-fast'>
            <span>
              <i className='ri-map-pin-line'></i>
            </span>
            <div>
              <h6>Destination</h6>
              <input type='text' placeholder='Where are you going?' ref={destinationRef} />
            </div>
          </FormGroup>
          <FormGroup className='d-flex gap-3 form__group form__group-fast'>
            <span>
              <i className='ri-map-pin-time-line'></i>
            </span>
            <div>
              <h6>Duration</h6>
              <input type='number' placeholder='Duration (in weeks)' ref={durationRef} />
            </div>
          </FormGroup>
          <FormGroup className='d-flex gap-3 form__group form__group-fast'>
            <span>
              <i className='ri-group-line'></i>
            </span>
            <div>
              <h6>Max People</h6>
              <input type='number' placeholder='0' ref={maxGroupSizeRef} />
            </div>
          </FormGroup>
          <FormGroup className='d-flex gap-3 form__group form__group-fast'>
            <span>
              <i className='ri-map-pin-user-line'></i>
            </span>
            <div className='specialty'>
              <h6>Specialty</h6>
              <select ref={specialtyRef}>
                <option value=''>Select a specialty</option>
                <option value='honeymoon'>Honeymoon</option>
                <option value='beach'>Beach holiday</option>
                <option value='wildlife'>Wildlife excursion</option>
                <option value='family'>Family Holiday</option>
              </select>
            </div>
          </FormGroup>
          <span className='search__icon' type='submit' onClick={searchHandler}>
            <i className='ri-search-line'></i>
          </span>
        </Form>
      </div>
      <PackageFilter />
    </Col>

  );
};

export default SearchBar;
