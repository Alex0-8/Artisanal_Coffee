import Header from './components/Header/index';
import HowItWorks from './components/HowItWorks/inedx';
import Banner from './components/Banner/index'
import Footer from './components/Footer/index'
import { ThemeProvider } from 'styled-components';
import Theme from './theme';
import GlobalStyle from './theme/globalStyle';
import FaqSection from './components/FaqSection/index';
import Plans from './components/Plans';
import SubscriptionForm from './components/SubscriptionForm';
import { useState } from 'react';
import Testimonials from './components/Testimonials';

function App() {
  const [formVisible, setFormVisible] = useState(false)

  const handleShowForm = () => setFormVisible(true);
  const handleHideForm = () => setFormVisible(false)

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />

      <div aria-hidden={formVisible} tabIndex={formVisible ? '-1' : '0'}>
        <Header />
        <Banner openModal={handleShowForm} />
        <HowItWorks />
        <Plans openModal={handleShowForm} />
        <Testimonials />
        <FaqSection />
        <Footer />
      </div>

      <SubscriptionForm modalVisible={formVisible} closeModal={handleHideForm}/>
    </ThemeProvider>
  );
}

export default App;
