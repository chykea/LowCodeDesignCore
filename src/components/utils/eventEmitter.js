class EventEmitter {
    list = {}
    constructor(list = {}) {
        this.list = list;
    }
    /**
     * 
     * @param {String} name 
     * @param {Function} cb 
     */
    subscribe(name, cb) {
        if (name.trim() === "" || typeof cb !== 'function') return
        (this.list[name] || (this.list[name] = [])).push(cb);

        return {
            unsubscribe: () =>
                this.list[name] && this.list[name].splice(this.events[name].indexOf(cb) >>> 0, 1)
        }
    }
    /**
     * 
     * @param {String} name 
     * @param {Array} args 
     */
    emit(name, ...args) {
        (this.events[name] || []).forEach(fn => fn(...args));
    }

}

export const globalEventEmitter = new EventEmitter({});