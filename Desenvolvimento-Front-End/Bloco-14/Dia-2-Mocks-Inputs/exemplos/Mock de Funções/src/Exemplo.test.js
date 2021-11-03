import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

function retornaNumAle() {
  return Math.floor(Math.random() * 100);
}

function divPorDois() {
  return (retornaNumAle() % 2) === 0
}

function somaDoisNumeros() {
  return retornaNumAle() + retornaNumAle();
}

describe("Aprendendo sobre Mocks", () => {
  it("testa se a func foi chamada", () => {
    somaDoisNumeros = jest.fn()
    somaDoisNumeros();
    expect(somaDoisNumeros).toHaveBeenCalled()

  });
  it("testa resultado da func", () => {
    somaDoisNumeros = jest.fn().mockReturnValue(8)
    expect(somaDoisNumeros()).toBe(8)

  });
  it("testa quantas vezes foi chamada", () => {
    somaDoisNumeros= jest.fn()
    somaDoisNumeros()

    expect(somaDoisNumeros).toHaveBeenCalledTimes(1)

  });
  it("testa se par for true", () => {
    retornaNumAle = jest.fn().mockReturnValue(2)
    divPorDois()

    expect(divPorDois()).toBe(true);

  });
  it("testa se impar for false", () => {

    retornaNumAle = jest.fn().mockReturnValue(3)
    divPorDois()

    expect(divPorDois()).toBe(false);

  });
})