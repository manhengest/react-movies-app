const path = require('path')

module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/search',
                permanent: true,
            },
        ]
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'assets/styles')],
    }
}
