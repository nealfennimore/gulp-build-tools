var path = require('path');

var root   = path.join(__dirname, '/../'),
    client = path.join(root, 'client/'),
    server = path.join(root, 'server/'),
    dist   = path.join(client, 'public'),
    src    = path.join(client, 'src'),
    views  = path.join(client, 'views'),
    test   = path.join(root, 'test'),
    gulp   = path.join(root, 'gulp'),
    npm    = root;

var paths = {
    src: src,
    dist: dist,
    images: {
        src: path.join(src, '/images/'),
        dist: path.join(dist, '/images/')
    },
    scripts: {
        src: path.join(src, '/scripts/'),
        dist: path.join(dist, '/scripts/')
    },
    styles: {
        src: path.join(src, '/styles/'),
        dist: path.join(dist, '/styles/')
    },
    client: client,
    server: server,
    views: views,
    test: test,
    gulp: gulp,
    npm: npm,
    root: root
};

module.exports = paths;
