export const getRandomNum = () => Math.floor(Math.random() * 100000);

export default function charactersReducer(state, action) {
  switch (action.type) {
    case 'addCharacter':
      const { objectPerson = {}, name = '' } = action;
      return [...state, {...objectPerson, thumbsDown: 0, thumbsUp: 0, id: `${getRandomNum()}-${name}`}];
    case 'updateCharacter':
      const { id = '', thumb = '' } = action;
      return state.map((i) => i.id === id ? { ...i, [thumb]: i[thumb] + 1 } : i);
    default:
      throw new Error('Unhandled action ' + action.type);
  }  
}