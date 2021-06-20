import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LoginForm from "../login-form";
import "@testing-library/jest-dom/extend-expect";

test("Welcome screen contains log in form heading.", () => {
  render(<LoginForm name="Taylor" password="password" />);
  expect(screen.getByTestId("form-title")).toHaveTextContent("Login Form");
});
