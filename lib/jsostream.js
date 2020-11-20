exports.jsostream = function(callback) {
    try {
        callback(process.argv.length, process.argv);
    } catch (err) {
        console.log(err);
    }
}
