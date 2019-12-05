import pokemons from '@/store/modules/pokemon/pokemons.ts';
import { MutationTree } from 'vuex';

const mutations = pokemons.mutations as MutationTree<{}>;

describe('Pokemons', () => {
  beforeEach(() => {
    pokemons.state = [
      {
        id: 25,
        name: 'pikachu',
        sprites: {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        },
        types: [
          {
            slot: 1,
            type: {
              name: "electric",
              url: "https://pokeapi.co/api/v2/type/13/"
            }
          }
        ],
      },
    ]
  });

  it('should add a pokemon', () => {
    mutations.INIT_POKEMONS(
      pokemons,
      {
        id: 133,
        name: 'eevee',
        sprites: {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
        },
        types: [
          {
            slot: 1,
            type: {
              name: "normal",
              url: "https://pokeapi.co/api/v2/type/1/"
            }
          }
        ],
      }
    )
  });


});