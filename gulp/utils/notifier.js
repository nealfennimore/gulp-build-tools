var path  = require('path');

module.exports = function(gulp, $, paths){
    function handleError() {
        return {
            errorHandler: function(err){
                $.notify.onError({
                    title: 'Error!',
                    message: err.message,
                    appIcon: path.join(paths.gulp, '/icons/cancel.svg'),
                    sound: true
                })(err);
                this.emit('end');
            }
        };
    }

    function handleSuccess(message) {
        return $.notify({
            title: 'Success!',
            message: message || 'You handle success very well',
            appIcon: path.join(paths.gulp, '/icons/checkmark.svg')
        });
    }

    return {
        success: handleSuccess,
        error: handleError
    };
};