import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import Footer from "./components/footer";

test('renderiza el texto del footer', () => {
  render(<Footer />);
  const developerNames = screen.getByText("Desarrollado en 2023 © por RichardZam & Andrey1069");
  expect(developerNames).toBeInTheDocument();
});