export default class AbstractEvent {
    constructor () {
        this.listeners = [];
    }

    addListener = fn => this.listeners.push(fn);

    getListeners = () => this.listeners;

    exec = (...args) => this.listeners.forEach(listener => listener(...args));
}
