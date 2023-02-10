export default function listReducer(draft, action) {
  switch (action.type) {
    case 'add': {
      draft.push({
        id: action.id,
        text: action.text
      });
      break;
    }
    case 'del': {
      return draft.filter(item => item.id !== action.id);
    }
    case 'edit': {
      const item = draft.find(item => item.id === action.id);
      if (item) {
        item.text = action.text;
      }
      break;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}