import Filter from './views/Filter';
import { Provider } from 'react-redux';
import configureStore from '../src/store/configureStore';


const store = configureStore();

export default function App(props) {
  return (
    <Provider store={store}>
      <Filter></Filter>
    </Provider>
  );
}
