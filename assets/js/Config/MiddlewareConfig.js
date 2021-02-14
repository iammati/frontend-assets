import AjaxMiddleware from './../Middleware/AjaxMiddleware';
import QueryParametersMiddleware from './../Middleware/QueryParametersMiddleware';

export default function MiddlewareConfig() {
    return {
        config: {
            usePriorities: true
        },

        middlewares: [
            {
                instance: new QueryParametersMiddleware,
                priority: 1
            },

            {
                instance: new AjaxMiddleware,
                priority: 2
            }
        ]
    };
};
