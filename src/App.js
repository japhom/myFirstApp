import React from 'react';
import { Route, Redirect, withRouter, Link } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import {Switch} from 'react-router-dom';
import Boards from './screens/Boards/Boards';
import Tablas from './screens/Tablas/Tablas';
import Reportes from './screens/Reportes/Reportes';
import Summary from './screens/Summary/Summary';

export default withRouter(
    class App extends React.PureComponent {
        render() {
            return (
                <div>
                    <div>
                        <Link to="/Boards">
                            <button>Boards</button>
                        </Link>
                        <Link to="/Tablas">
                            <button>Tablas</button>
                        </Link>
                        <Link to="/Summary">
                            <button>Resumen</button>
                        </Link>
                        <Link to="/Reportes">
                            <button>Reportes</button>
                        </Link>
                    </div>
                    <Switch>
                        <RouteWithTitle exact title="Boards" path="/Boards" component={Boards} />
                        <RouteWithTitle exact title="Tablas" path="/Tablas" component={Tablas} />
                        <RouteWithTitle exact title="Reportes" path="/Reportes" component={Reportes} />
                        <RouteWithTitle exact title="Summary" path="/Summary" component={Summary} />
                        <Redirect to={'/Reportes'} />
                    </Switch>
                </div>
            );
        }
    }
);

export const RouteWithTitle = ({ title, render, component: Comp, ...props }) => (
    <Route {...props} render={(p) => <DocumentTitle title={title}>{render ? render(p) : <Comp {...p} />}</DocumentTitle>} />
);

