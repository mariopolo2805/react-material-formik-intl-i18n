import { Route, Routes } from 'react-router-dom';

import './App.scss';

// Components
import Header from './components/Header';

// Pages
import Home from './pages/Home';
import RegisterForm from './pages/RegisterForm';

// i18n
import { IntlProvider } from "react-intl";
import Spanish from "./lang/es-ES.json";
import English from "./lang/en.json";

const locale = navigator.language;

let lang;
if (locale === "es-ES") {
  lang = Spanish;
} else {
  lang = English;
}

function App() {
  return (
    <IntlProvider locale={locale} messages={lang} defaultLocale="en">
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<RegisterForm />} />
          </Routes>
        </main>
      </div>
    </IntlProvider>
  );
}

export default App;
