export default class Router{
    constructor (routes = [], renderNode) {
        this.routes = routes;
        this.renderNode = renderNode;
        this.navigate(location.pathname + location.hash);
    }

    match(route, requestPath){
        let paramNames = [];
        //create regex from route path
        let regexPth = route.path.replace(/([:*])(\w+)/g, (full, colon, name) => {
            paramNames.push(name);
            return '([^\/]+)';
        }) + '(?:\/|$)';
        let params = {};
        //martch request path to regex
        let match = requestPath.match(new RegExp(regexPth));
        if (match !== null) {
            params = match.slice(1).reduce((params, value, index) => {
                if (params === null) params = {};
                params[paramNames[index]] = value;
                return params;
            }, null);
        }
        route.setProps(params);
        return match;
    }

    navigate(path){
        const route = this.routes.filter(route => this.match(route, path))[0];
        if(!route) this.renderNode.innerHTML = "404";
        else {
            window.location.href = path.search("/#") === -1 ? "#" + path : path;
            this.renderNode.innerHTML = route.renderView();
        }
    }

    addRoutes(routes){
        this.routes = [...this.routes, ...routes];
    }
}