module.exports = ({ env }) => ({
    slugify: {
        enabled: true,
        config: {
            contentTypes: {
                post: {
                    field: 'slug',
                    references: 'title',
                },
            },
        },
    },
    'import-export-entries': {
        enabled: true,
    },
});