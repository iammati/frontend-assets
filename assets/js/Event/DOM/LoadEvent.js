import ResizeEvent from '../Window/ResizeEvent';
import AbstractEvent from './../AbstractEvent';

export default class LoadEvent extends AbstractEvent {
    constructor (Container) {
        super();

        window.addEventListener('load', e => {
            const width = document.body.clientWidth;
            Application.getVariablesProvider().set('Width', width);

            this.exec(e);
        });

        Container.add('ResizeEvent', new ResizeEvent(Container));
    }
}
