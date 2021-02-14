export default class AjaxMiddleware {
    call = (hook, next) => {
        // console.log('AJAX');

        next();
    }
}
