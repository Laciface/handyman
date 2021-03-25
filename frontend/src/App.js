import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Register from './components/Register';
import Login from './components/Login';
import CVForm from './components/CVForm';
import Header from './components/layouts/Header';
import UserInterface from './components/UserInterface';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#757ce8',
			main: '#3f50b5',
			dark: '#002884',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ff7961',
			main: '#f44336',
			dark: '#ba000d',
			contrastText: '#000',
		},
	},
});

function App() {
	return (
		<MuiThemeProvider theme={theme}>
			<Router>
				<div className='App'>
					<Header />
					<Route exact path='/' component={HomePage} />
					<Route exact path='/Registration' component={Register}></Route>
					<Route exact path='/Login' component={Login}></Route>
					<Route exact path='/UserInterface' component={UserInterface}></Route>
					<Route exact path='/CV' component={CVForm}></Route>
				</div>
			</Router>
		</MuiThemeProvider>
	);
}

export default App;
