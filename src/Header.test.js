import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import Header from "./components/Header";

test("Header muestra el logo y el menú de navegación", () => {
  const { getByAltText, getByTestId } = render(<Header />);
  const logoElement = getByAltText(/Logo de la tienda/i);
  const navElement = getByTestId("nav");
  expect(logoElement).toBeInTheDocument();
  expect(navElement).toBeInTheDocument();
});
