import { ColorModeScript, ChakraProvider} from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <>
    <ColorModeScript />
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </>
);

