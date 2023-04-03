import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingForm from '../components/BookingForm';

describe('BookingForm', () => {
  it('renders the Table Reservation heading', () => {
    const availableTimes = [];
    const dispatch = jest.fn();

    render(
      <MemoryRouter>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </MemoryRouter>
    );

    const heading = screen.getByRole('heading', { name: /table reservation/i });
    expect(heading).toBeInTheDocument();
  });
});
