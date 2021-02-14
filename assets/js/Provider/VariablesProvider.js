export default class VariablesProvider {
    constructor () {
        this.storage = {
            Breakpoint: 'xs'
        };
    }

    getStorage = () => this.storage;

    set = (identifier, value) => this.storage[identifier] = value;

    get = identifier => this.storage[identifier];
}
