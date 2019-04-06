import React from 'react';
import RatingsModule from './RatingsApp';
import HistoryModule from './HistoryApp';

const App = () => (
  <div className="module-container">
    <section>
      <RatingsModule />
    </section>
    <section>
      <HistoryModule />
    </section>
  </div>
);

export default App;
