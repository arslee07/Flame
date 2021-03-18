const COLOR = {
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m',

    reset: '\x1b[0m',
};

class Debug {
    static get _formattedTimestamp() {
        const d = new Date();
        return (
            d.getDay() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear().toString().slice(1)
            + ' ' +
            d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
        ); // example: [31-12-99 23:59:59]
    }

    static _coloredPrint(color, msg) {
        console.log(
            color + `[${Debug._formattedTimestamp}] ` + msg + COLOR.reset
        );
    }

    static warn(msg) {
        console.log(COLOR.yellow + msg + COLOR.reset);
    }

    static info(msg) {
        console.log(COLOR.cyan + msg + COLOR.reset);
    }

    static error(msg) {
        console.log(COLOR.red + msg + COLOR.reset);
    }
}

module.exports = Debug;
