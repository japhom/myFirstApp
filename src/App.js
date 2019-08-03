import React from 'react';
import { Route, Redirect, withRouter, Link } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import {Switch} from 'react-router-dom';
import Boards from './screens/Boards/Boards';
import Tablas from './screens/Tablas/Tablas';
import Reportes from './screens/Reportes/Reportes';
import Summary from './screens/Summary/Summary';
import Dates from './screens/Date/Dates';
import Home from './screens/Home/Home';


import styles from './App.module.scss';

export default withRouter(
    class App extends React.PureComponent {
        render() {
            return (
                <div>
                    <div className={styles.nav}>
                        <Link to="/Home">
                            <div>Home</div>
                        </Link>
                        <Link to="/Boards">
                            <div>Boards</div>
                        </Link>
                        <Link to="/Tablas">
                            <div>Tablas</div>
                        </Link>
                        <Link to="/Summary">
                            <div>Resumen</div>
                        </Link>
                        <Link to="/Reportes">
                            <div>Reportes</div>
                        </Link>
                        <Link to="/Fechas">
                            <div>Fechas</div>
                        </Link>
                    </div>
                    <Switch>
                        <RouteWithTitle exact title="Home" path="/Home" component={Home} />                      
                        <RouteWithTitle exact title="Boards" path="/Boards" component={Boards} />
                        <RouteWithTitle exact title="Tablas" path="/Tablas" component={Tablas} />
                        <RouteWithTitle exact title="Reportes" path="/Reportes" component={Reportes} />
                        <RouteWithTitle exact title="Summary" path="/Summary" component={Summary} />
                        <RouteWithTitle exact title="Fechas" path="/Fechas" component={Dates} />
                        <Redirect to={'/Home'} />
                    </Switch>
                </div>
            );
        }
    }
);

export const RouteWithTitle = ({ title, render, component: Comp, ...props }) => (
    <Route {...props} render={(p) => <DocumentTitle title={title}>{render ? render(p) : <Comp {...p} />}</DocumentTitle>} />
);

