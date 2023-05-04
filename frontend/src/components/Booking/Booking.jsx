import React, { useState } from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    userId: '01',
    userEmail: 'example@gmail.com',
    fullName: '',
    phone: '',
    guestSize: 1,
    bookAt: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee);

  const validateInputs = () => {
    let errors = {};

    if (!credentials.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }

    if (!credentials.phone.trim()) {
      errors.phone = 'Phone is required';
    } else if (!/^\d+$/.test(credentials.phone)) {
      errors.phone = 'Invalid phone number';
    }

    if (!credentials.bookAt.trim()) {
      errors.bookAt = 'Booking date is required';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      // Send data to the server
      navigate('/thank-you');
    }
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price}
          <span>/Per person</span>
        </h3>
        <span className="tour_rating d-flex align-items-center">
          <i class="ri-star-fill"></i>
          {avgRating == 0 ? null : avgRating}({reviews.length})
        </span>
      </div>
      {/*========================booking form start===================*/}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form">
          <FormGroup>
            <input type="text" placeholder="Full Name" id="fullName" required onChange={handleChange} />
            {errors.fullName && <div className="text-danger">{errors.fullName}</div>}
          </FormGroup>
          <FormGroup>
            <input type="tel" placeholder="Phone" id="phone" required onChange={handleChange} />
            {errors.phone && <div className="text-danger">{errors.phone}</div>}
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input type="date" placeholder="" id="bookAt" required onChange={handleChange} />
            {errors.bookAt && <div className="text-danger">{errors.bookAt}</div>}
            <input type="number" placeholder="Guest" id="guestSize" required onChange={handleChange} />
          </FormGroup>
        </Form>
      </div>
    {/*========================booking form end=====================*/}
    {/*========================booking bottom=====================*/}
    <div className='booking__bottom'>
        <ListGroup>
            <ListGroupItem className='border-0 px-0'>
                <h5 className='d-flex align-items-center gap-1'>
                    ${price}<i class = "ri-close-line">1 person</i></h5>
                <span>${price}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0'>
                <h5>Service Charge</h5>
                <span>${serviceFee}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0 total'>
                <h5>Total</h5>
                <span>${totalAmount}</span>
            </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
            Book Now
        </Button>
    </div>


    </div>
    )
}

export default Booking;