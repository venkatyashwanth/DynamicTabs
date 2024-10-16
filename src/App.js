import { useState, useEffect } from "react";
import TabItem from "./components/TabItem";
import './App.scss';
import TabData from "./components/TabData";

const tabsList = [
  { tabId: 'all', displayText: 'All' },
  { tabId: 'Vehicles', displayText: 'Vehicles' },
  { tabId: 'food', displayText: 'food' },
  { tabId: 'animals', displayText: 'animals' }
]

const showList = [
  { id: 1, category: 'Vehicles', title: 'Car' },
  { id: 2, category: 'Vehicles', title: 'Aeroplane' },
  { id: 3, category: 'Vehicles', title: 'Ship' },
  { id: 4, category: 'food', title: 'Rice' },
  { id: 5, category: 'food', title: 'Prawns' },
  { id: 6, category: 'food', title: 'Chapathis' },
  { id: 7, category: 'animals', title: 'Cow' },
  { id: 8, category: 'animals', title: 'Dog' },
  { id: 9, category: 'animals', title: 'Cat' }
]

function App() {
  const [activeTab, setActiveTab] = useState(tabsList[0].tabId);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    let filter;
    activeTab === 'all' ? (filter = showList) :
      (filter = showList.filter(each =>
        each.category === activeTab
      ))
    setFilteredList(filter)
  }, [activeTab])

  const clickTabItem = tabValue => {
    setActiveTab(tabValue);
  }

  return (
    <div>
      <h1>Dynamic Tabs</h1>
      <ul>
        {tabsList.map(tabdetails => (
          <TabItem
            key={tabdetails.tabId}
            tabdetails={tabdetails}
            isActive={activeTab === tabdetails.tabId}
            clickTabItem={clickTabItem} />
        ))}
      </ul>

      <ul>
        {
          filteredList.map(each => (
            <TabData key={each.id} data={each} />
          ))
        }
      </ul>

    </div>
  );
}

export default App;
