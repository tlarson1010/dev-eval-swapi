import { render, screen } from '@testing-library/react';

import { PersonType } from '../../types';
import Person from './Person'

describe('<Person />', () => {
  test('should render the person\'s name', () => {
    const person: PersonType = { name: 'Jek Tono Porkins',
                                 mass: '110',
                                 birth_year: '199YB',
                                 eye_color: '',
                                 hair_color: '',
                                 gender: '',
                                 height: '',
                                 homeworld: '',
                                 skin_color: '',
                                 url: '',
                                 species: ['',''],
                                 films: ['',''],
                                 starships: ['', ''],
                                 id: 0

                               }

    render(<Person person={person} />)

    screen.getByText(person.name)
  })
});
