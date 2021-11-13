import * as React from "react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import ReactDOM from 'react-dom';
import App from './pages/App';
require("./theme");

ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider CSSReset={true} >
        <App/>
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// function App({ Component }) {
// 	return (
// 		<ChakraProvider>
// 			<Component />
// 		</ChakraProvider>
// 	);
// }