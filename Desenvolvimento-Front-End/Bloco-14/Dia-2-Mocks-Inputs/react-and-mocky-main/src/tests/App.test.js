import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

    const img = screen.queryByAltText(/Rick Sanchez/i)

      expect(title).toBeInTheDocument()
      expect(img).toBeInTheDocument()
  })

  test('Verifica se existem o input de texto e o botão "Buscar"', () => {
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button')

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  })

  test('Verifica se ao buscar por "Smith" aparecem 4 cards', () => {
        const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    userEvent.type(input, "Smith")
    userEvent.click(button)

    const card = screen.getAllByRole("heading", {name: /smith/i});
    expect(card).toHaveLength(4)

  })

})
