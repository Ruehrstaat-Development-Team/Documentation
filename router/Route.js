export default class Route {
    constructor(path, view, name) {
        this.path = path;
        this.view = view;
        this.name = name;
    }

    setProps(newProps){
        this.props = newProps;
    }

    renderView() {
        return this.view(this.props);
    }
}