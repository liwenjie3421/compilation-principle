class InputStream {
    constructor(props) {
        this.input = props.input || ''
        this.pos = 0
        this.line = 0
        this.col = 0
    }

    peek() {
        return this.input.charAt(this.pos)
    }

    next() {
        const ch = this.input.charAt(this.pos++)
        if (ch === '\n'){
            this.line++
            this.col = 0
        }else {
            this.col++
        }
        return ch
    }

    isEnd() {
        return this.peek() === ''
    }

    error(msg) {
        throw new Error(msg + ' (' + this.line + ':' + this.col + ')');
    }

    keywords = ['var', 'function']
}

module.exports = InputStream