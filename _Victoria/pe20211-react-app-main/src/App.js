import "./App.css";
import React, { Component, createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
// import Greeting from "./components/Greeting";
// import Counter from "./components/Counter";
// import Calendar from "./components/Calendar";
// import Stopwatch from "./components/Stopwatch";
// import NotFound from "./components/NotFound";
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import ContactsPage from "./pages/ContactsPage";
// import CounterWrapper from "./components/CounterWrapper";
// import UsersLoader from "./components/UsersLoader";
// import PhonesProvider from "./components/PhonesProvider";
// import { UserContext } from "./contexts";
// import UserPage from "./pages/UserPage";
import LogInForm from "./LogInForm";

//======LogInForm

const App = () => <LogInForm />;

//=============

//======Context task =======
// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       user: {
//         firstName: "Olimpia",
//         lastName: "Tokio",
//         imgSrc:
//           "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
//       },
//     };
//   }

//   render() {
//     return (
//       <UserContext.Provider value={this.state.user}>
//         <UserPage />
//       </UserContext.Provider>
//     );
//   }
// }

// const Parent = () => <Child />;

// const Child = () => {
//   return (
//     <UserContext.Consumer>
//       {user => {
//         return JSON.stringify(user);
//       }}
//     </UserContext.Consumer>
//   );
// };

// console.log(`UserContext`, UserContext);

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       user: {
//         firstName: "Olimpia",
//         lastName: "Tokio",
//       },
//     };
//   }
//===================
//   render() {
//     return (
//       <UserContext.Provider value={this.state.user}>
//         <Parent />
//       </UserContext.Provider>
//     );
//   }
// }

// const Parent = () => <Child />;

// const Child = () => {
//   return (
//     <UserContext.Consumer>
//       {user => {
//         return JSON.stringify(user);
//       }}
//     </UserContext.Consumer>
//   );
// };

//===== Рендер-props=========
// const App = () => <PhonesProvider />;

//======UsersLoader==========
// function App() {
//   return <UsersLoader />;
// }

// ===== Routing =================================

// function App() {
// return <CounterWrapper />;
// }

// function App() {
//   /* ДОПИСАТЬ МАРШРУТЫ ДЛЯ ДВУХ ДРУГИХ КОМПОНЕНТОВ */
//   return (
//     <>
//       <PageHeader />
//       <Router>
//         <ul>
//           <li>
//             <Link to={'/'}>Home</Link>
//           </li>
//           <li>
//             <Link to={'/components'}>Components</Link>
//           </li>
//           <li>
//             <Link to={'/contacts'}>Contacts</Link>
//           </li>
//           <li>
//             <Link to={'/about'}>About</Link>
//           </li>
//         </ul>
//         <Switch>
//           <Route exact path={'/'}>
//             <HomePage />
//           </Route>
//           <Route path={'/components'}>
//             <ComponentsPage />
//           </Route>
//           <Route path={'/contacts'}>
//             <ContactsPage />
//           </Route>
//           <Route path={'/about'}>
//             <AboutPage />
//           </Route>
//           <Route path={'*'} component={NotFound} />
//         </Switch>
//       </Router>
//       <PageFooter />
//     </>
//   );
// }

// function PageHeader() {
//   return <div>Header</div>;
// }
// function PageFooter() {
//   return <div>Footer</div>;
// }

// function ComponentsPage() {
//   const { path, url } = useRouteMatch();

//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to={`${url}/greeting`}>Greeting</Link>
//         </li>
//         <li>
//           <Link to={`${url}/counter`}>Counter</Link>
//         </li>
//         <li>
//           <Link to={`${url}/calendar`}>Calendar</Link>
//         </li>
//       </ul>
//       <Switch>
//         <Route path={`${path}/greeting`}>
//           <Greeting name={'Test'} />
//         </Route>
//         <Route path={`${path}/counter`}>
//           <Counter />
//         </Route>
//         <Route path={`${path}/calendar`}>
//           <Calendar />
//         </Route>
//         <Route path={`${path}/*`} component={NotFound} />
//       </Switch>
//     </div>
//   );
// }

// === window.innerSizes =======================================
// function App() {
//   return <VeiwPortParams />;
// }

// === prop children ====================
// function TestComponent(props) {
//   const { prop1, className, children } = props;
//   console.log(`prop1`, prop1);
//   console.log(`className`, className);
//   return <div>{children}</div>;
// }

// function App() {
//   return <TestComponent className={'test'}>111111</TestComponent>;
// }

// Создать компонент NamedList - принимать name -> h2 и список

// function NamedList(props) {
//   const { name, children } = props;
//   return (
//     <>
//       <h2>{name}</h2>
//       <ul>{children}</ul>
//     </>
//   );
// }

// function App() {
//   return (
//     // <NamedList name={'test'}>
//     //   <li>1</li>
//     //   <li>2</li>
//     //   <li>3</li>
//     // </NamedList>
//     <NamedList name={'test'} children={[<li>1</li>, <li>2</li>, <li>3</li>]} />
//   );
// }

// === Проброс пропсов =================
// function App() {
//   return (
//     <ImageWrapper
//       width={'400px'}
//       height={'300px'}
//       title={'Cat)))'}
//       tabIndex={1}
//       className={'test'}>
//       <img
//         src={'https://cdnimg.rg.ru/img/content/178/22/40/kotik_d_850.jpg'}
//         alt={'cat'}
//       />
//     </ImageWrapper>
//   );
// }

// import Greeting from './components/Greeting';
// class App extends Component {
//   // rconst
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: 'Vasia',
//       isGreeting: true,
//     };
//   }

//   // Дописать в стейт isGreeting и передавать в пропсы

//   render() {
//     const { name, isGreeting } = this.state;
//     return <Greeting name={name} isGreeting={isGreeting} />;
//   }
// }
// //rcc

// export default App;

// function App() {
//   return <Greeting name="Vasia" />;
// }
// props = {name:"Vasia"}
// Greeting(props)

export default App;
