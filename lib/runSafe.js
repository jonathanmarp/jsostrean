exports.runSafe = function(functionsis) {
    try {
        functionsis();
    } catch(err) {
        return err;
    }
}
