import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LoginForm from "../login-form";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

test("Welcome screen contains log in form heading.", () => {
  render(<LoginForm name="Taylor" password="password" />);
  expect(screen.getByTestId("form-title")).toHaveTextContent("Login Form");
});

test("When user enters text into the Name field, expect that text to be displayed", () => {
  render(<LoginForm name="Taylor" password="password" />);
  userEvent.type(screen.getByLabelText("Name"), "Taylor");
  expect(screen.getByLabelText("Name")).toHaveValue("Taylor");
});

test("When user enters text into the Password field, expect that text to be displayed", () => {
  render(<LoginForm name="Taylor" password="password" />);
  userEvent.type(screen.getByLabelText("Password"), "Password");
  expect(screen.getByLabelText("Password")).toHaveValue("Password");
});

test("When user enters in the wrong name, error message is displayed", () => {
  render(<LoginForm name="Taylor" password="Password" />);

  userEvent.type(screen.getByLabelText("Name"), "Wrong");
  userEvent.click(screen.getByRole("button"));
  expect(screen.getByTestId("error-msg")).toHaveTextContent(
    "name does not match records"
  );
});

test("When user enters in the wrong password, error message is displayed", () => {
  render(<LoginForm name="Taylor" password="Password" />);

  userEvent.type(screen.getByLabelText("Name"), "Taylor");
  userEvent.type(screen.getByLabelText("Password"), "Wrong");
  userEvent.click(screen.getByRole("button"));
  expect(screen.getByTestId("error-msg")).toHaveTextContent(
    "password incorrect"
  );
});

test("When user enters the correct login information, welcome text is displayed", () => {
  render(<LoginForm name="Taylor" password="Password" />);

  userEvent.type(screen.getByLabelText("Name"), "Taylor");
  userEvent.type(screen.getByLabelText("Password"), "Password");
  userEvent.click(screen.getByRole("button"));
  expect(screen.getByTestId("welcome-text")).toHaveTextContent(
    "Welcome, Taylor!"
  );
});

test("When user clicks the logout button, the login form is displayed", () => {
  render(<LoginForm name="Taylor" password="Password" />);

  userEvent.type(screen.getByLabelText("Name"), "Taylor");
  userEvent.type(screen.getByLabelText("Password"), "Password");
  userEvent.click(screen.getByRole("button"));
  userEvent.click(screen.getByRole("button"));
  expect(screen.getByTestId("form-title")).toHaveTextContent("Login");
});
