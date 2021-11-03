import React from "react";
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import ValidEmail from "./ValidEmail";

describe("Test just one component on App", () => {
  it("test valid email", () => {
    const EMAIL_USER = 'email@email.com';
    render(<ValidEmail email={ EMAIL_USER } />)
    const isValid = screen.getByText("Email Valido");
    expect(isValid).toBeInTheDocument();
  })

  it("Not show the message if email is not send it", () => {
    const isValid = screen.queryByTestId("id-is-email-valid")
    expect(isValid).not.toBeInTheDocument();
  })

  it("test invalid email", () => {
    const EMAIL_USER = "emailerrado";
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByText("Email Inválido");
    expect(isValid).toBeInTheDocument();

   it('Test if a valid email have the color blue', () => {
      const EMAIL_USER = 'email@email.com';
    
      render(<ValidEmail email={EMAIL_USER} />);
      const isValidText = screen.getByTestId('id-is-email-valid');
      expect(isValidText).toHaveAttribute('class', 'blue-text');
    });
    
   it('test if a invalid email have color red', () => {
      const EMAIL_USER = 'wrongEmail';
    
      render(<ValidEmail email={EMAIL_USER} />);
      const isValidText = screen.getByTestId('id-is-email-valid');
      expect(isValidText).toHaveAttribute('class', 'red-text');
    });
  })
})