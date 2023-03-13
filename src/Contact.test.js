import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Contact from './components/Contact';

describe('Contact', () => {
  it('renders a contact form', () => {
    render(<Contact />);
    const nameLabel = screen.getByLabelText(/Name/i);
    const emailLabel = screen.getByLabelText(/Email/i);
    const messageLabel = screen.getByLabelText(/Message/i);
    const sendButton = screen.getByRole('button', { name: /Send/i });

    expect(nameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(messageLabel).toBeInTheDocument();
    expect(sendButton).toBeInTheDocument();
  });
});