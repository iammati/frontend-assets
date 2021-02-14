import Container from './Core/Container.js';
import VariablesProvider from './Provider/VariablesProvider.js';
import PageRenderer from './Renderer/PageRenderer.js';

export default class Bootstrap {
    constructor (MiddlewareConfig) {
        // Instancing and setting the global namespace Application inside the window object.
        window.Application = new class Application {
            constructor () {
                this.container = new Container(this, MiddlewareConfig);

                // Runs the Middleware-Stacks
                this.getContainer().getInstanceByIdentifier('MiddlewareInstance').go(
                    {
                        // default data any middleware has
                    },

                    hook => {
                        // hook represents the object above with the default-comment
                        // console.log(hook);
                    }
                );

                // Variables
                this.variablesProvider = new VariablesProvider();

                // Renderers
                this.page = new PageRenderer();
            }

            getContainer = () => this.container;

            getVariablesProvider = () => this.variablesProvider;
        }();
    }
}
