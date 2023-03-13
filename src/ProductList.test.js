import '@testing-library/jest-dom/extend-expect';
import { render, screen} from '@testing-library/react';
import ProductList from './components/ProductList';

test('renders all product cards', () => {
  render(<ProductList />);
  const productCards = screen.getAllByTestId('product-card');
  const firstProductCard = productCards[0];
  expect(firstProductCard).toBeInTheDocument();
});
