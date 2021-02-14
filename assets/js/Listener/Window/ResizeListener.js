import AbstractListener from './../AbstractListener';

export default class ResizeListener extends AbstractListener {
    constructor (Container) {
        super(Container);

        console.log('HHH RESIZE LISTENER');
    }
}
