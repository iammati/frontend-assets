import AbstractListener from './../AbstractListener';

export default class LoadListener extends AbstractListener {
    constructor (Container) {
        super(Container);

        console.log('HHH LOAD LISTENER');
    }
}
