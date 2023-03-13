import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Banner from './components/Banner';

test('renders banner con mensaje de bienvenida e imagen', () => {
  render(<Banner />);
  
  const titleElement = screen.getByText(/Bienvenido a Comida Japonesa/i);
  expect(titleElement).toBeInTheDocument();

  const descriptionElement = screen.getByText(/Descubre nuestro delicioso menú de sushi y otros platillos japoneses./i);
  expect(descriptionElement).toBeInTheDocument();

  const imageElement = screen.getByAltText(/portada banner/i);
  expect(imageElement).toBeInTheDocument();
});
