window.BOOTTIME_START = performance.now();

import Bootstrap from './Bootstrap';
import MiddlewareConfig from './Config/MiddlewareConfig';

new Bootstrap(
    MiddlewareConfig()
);

window.BOOTTIME_END = performance.now();

window.MEASURED_TIME = (Math.round(((window.BOOTTIME_END - window.BOOTTIME_START) + Number.EPSILON) * 100) / 100) + 'ms';
console.log(window.MEASURED_TIME);

const Application = window.Application;
require('./Project');
