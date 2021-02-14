import AbstractEvent from '../AbstractEvent';

export default class ResizeEvent extends AbstractEvent {
    constructor () {
        super();

        window.addEventListener('resize', e => {
            const width = document.body.clientWidth;

            Application.getVariablesProvider().set('Width', width);

            this.exec(e, {
                width: width
            });
        });
    }
}
