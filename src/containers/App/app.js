import React, { useEffect, useState } from 'react';
import Header from './components/Header/loadable';
import Box from './components/Box/loadable';
import Footer from './components/Footer/loadable';
import Loader from '../../components/Loader';
import { getItems } from './servicies';
import { Row } from 'reactstrap';

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [originalItems, setOriginalItems] = useState([]);

    /**
     * Get store info
     */
    useEffect(()=>{
        getItems()
            .then((items)=>{
                setIsLoaded(true);
                setItems(items);
                setOriginalItems(items);
            })
            .catch((err)=> {
                setIsLoaded(true);
                console.error(err)
            })
    }, []);

    /**
     * filter items by search input text
     * @param value
     */
    const filterSelected = (value) => {
        if(value) value = value.toLowerCase();
        const itemsFiltered = originalItems.filter((item) => {
            const nameLower = item.name.toLowerCase();
            return nameLower.startsWith(value)
        })
        setItems(itemsFiltered);
    }

    return (
    <div className="App">
      <Header
          filterSelected={filterSelected}
      />
      <div className="body-container">
          {!isLoaded && <Loader />}
          <Row className="box-container">
              { items && items.map((item) =>
                <Box key={items.UPC} {...item} />
              )}
          </Row>
      </div>
      <Footer />
    </div>
  );
}

export default App;
