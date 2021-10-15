export default class Provider {
    constructor(props, context) {
        super(this)
        this.store = props.store
    }
    getChildContext() {
        return { store: this.store }
    }
}
