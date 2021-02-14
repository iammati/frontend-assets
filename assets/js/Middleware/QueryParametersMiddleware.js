export default class QueryParametersMiddleware {
    call = (hook, next) => {
        // console.log('3AAAAAAA4 QPM');

        const queryParams = [];
        const searchParams = new URLSearchParams(location.search);

        for (const pair of searchParams.entries()) {
            let key = pair[0];
            let value = pair[1];

            queryParams[key] = value;
        }

        next();
    }
}
