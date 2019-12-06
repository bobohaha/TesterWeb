export default {

  formatDate (str) {
    let result = ''
    const date = new Date(str).toLocaleDateString()
    const hour = new Date(str).getHours()
    const minute = new Date(str).getMinutes()
    const second = new Date(str).getSeconds()
    result = date.replace(/\//g, '-') + ' ' + hour + ':' + minute + ':' + second
    return result
  }
}
