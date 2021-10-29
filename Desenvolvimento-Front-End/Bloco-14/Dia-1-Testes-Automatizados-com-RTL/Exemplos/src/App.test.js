import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
// import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Tela de inserção de Email", () => {

  it("Verify email input on screen", () => {
    render(<App />);
    const inputEmail = screen.getByLabelText("Email");
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe("email");
  });
  
  it("Verify if button is on the screen", () => {
    render(<App />);
    const inputButton = screen.getByDisplayValue("Enviar");
    expect(inputButton).toBeInTheDocument();
    expect(inputButton.type).toBe("button");
  });
  
  it("Verify if button 'Enviar' exist", () => {
    render(<App />);
    const button = screen.getByTestId("id-send");
    expect(button).toBeInTheDocument();
    expect(button).toHaveValue("Enviar");
  });

})


// test('Verificando se existe dois botões', () => {
//   render(<App />);
//   const buttons = screen.getAllByRole("button");
//   expect(buttons).toHaveLength(2);
// });

test("Verify if click 'Enviar' the email is renderized on screen", () => {
  render(<App />);
  const inputEmail = screen.getByLabelText("Email");
  const button = screen.getByTestId("id-send");
  const userEmail = screen.getByTestId("id-email-user");

  userEvent.type(inputEmail, "test@test.com");
  userEvent.click(button);

  expect(inputEmail).toHaveValue("");
  expect(userEmail).toHaveTextContent("Valor: test@test.com");
});

//acessar elementos da tela
// interagir com esses elementos (se for necessário)
// fazer os testes (mockaar)
