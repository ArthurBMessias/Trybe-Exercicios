import { render, screen } from '@testing-library/react';
import App from '../App';
import responseApi from "./mocks"

describe('Test Rick & Morty API', () => {

  beforeEach(()=>{
    global.fetch = jest.fn(async () => ({
      json: async () => responseApi,
    }));
    //Fazer o mock do fetch aqui 
    
    
    render(<App/>)
  })
  
  test('Verifica se aparece o card com titulo de "Rick Sanchez"', async () => {
    const title = await screen.findByRole("heading", {    
      level: 3,
      name: "Rick Sanchez", });
    const img = screen.queryAllByRole('img')
    // const deadOrAlive = await screen.findAllByText("Alive")

      expect(title).toBeInTheDocument()
      expect(img).toBeInTheDocument()
      // expect(deadOrAlive).toBeInTheDocument()
  })

  test('Verifica se existem o input de texto e o botão "Buscar"', () => {
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button')

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  })

  test('Verifica se ao buscar por "Smith" aparecem 4 cards', () => {
    
  })

})
