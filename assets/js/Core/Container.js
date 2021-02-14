import Middleware from './Middleware';

import LoadEvent from './../Event/DOM/LoadEvent';

export default class Container {
    constructor (Application, MiddlewareConfig) {
        if (typeof window.Container != 'undefined') {
            return window.Container;
        }

        // Container Instances
        this.instances = {};

        // Middlewares - Iterating through the stacks and calling each middleware
        const MiddlewareInstance = new Middleware();

        MiddlewareConfig.middlewares.forEach(middleware => {
            MiddlewareInstance.use((hook, next) => {
                middleware.instance.call(hook, next);
            });
        });

        this.add('MiddlewareInstance', MiddlewareInstance);

        // Event-Registrations
        this.add('DOMLoadEvent', new LoadEvent(this));

        window.Container = {
            instances: this.instances
        };
    }

    getInstanceByIdentifier = identifier => this.instances[identifier];

    add = (identifier, instance) => {
        if (typeof this.instances[identifier] != 'undefined') {
            if (this.instances[identifier] == instance) {
                return this.instances[identifier];
            }

            return console.error(
                'Container -> The identifier "' +
                identifier +
                '" has already registered for the instance: "' +
                this.instances[identifier] +
                '"'
            );
        }

        this.instances[identifier] = instance;

        window.Container = {
            instances: this.instances
        };

        return instance;
    }
}
