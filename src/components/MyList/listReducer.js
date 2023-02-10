export default function listReducer(draft, action) {
  switch (action.type) {
    case 'add': {
      draft.push({
        id: action.id,
        text: action.text
      });
      break;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}