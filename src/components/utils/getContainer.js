export default function (target) {
    if (target.id.indexOf('component') === -1) return -1
    console.log(target.id);
    if (target.className.indexOf('container') !== -1) {
        return Number(target.id.slice(9))
    }
    return Number(target.parentNode.id.slice(9))
}