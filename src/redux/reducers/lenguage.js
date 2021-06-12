import {LOCALES} from '../../i18n/locales'
const initialState = {
  locale:LOCALES.ESPAÑOL
};

const Lenguage = (state = initialState, { type, ...data }) => {
  switch (type) {
    case "SET_LENGUAGE":
      return { ...state, locale: data.payload };
    default:
      return state;
  }
};

export default Lenguage;