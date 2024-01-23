import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import ListItem from './components/ListItem';
import Statistics from './components/Statistic';

function App() {
        return (
                <div>
                        {/* <header className="App-header">Travel Checklist</header> */}

                        <Header />
                        <Form />
                        <ListItem />
                        <Statistics />
                </div>
        );
}

export default App;
