import React from 'react';
import { render } from 'react-dom';

import RouteMap from './router/routers';

import registerServiceWorker from './registerServiceWorker';

render(<RouteMap />, document.getElementById('root'));
registerServiceWorker();