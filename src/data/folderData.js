const structure =
    {
        name: 'root',
        isFolder: true,
        child: [
            {
                name: 'src',
                isFolder: true,
                child: [
                    {
                        name: 'components',
                        isFolder: true,
                        child: [
                            {
                                name: 'test.js',
                                isFolder: false
                            }
                        ]
                    },
                    {

                        name: 'App.js',
                        isFolder: false

                    },
                    {

                        name: 'index.css',
                        isFolder: false

                    }
                ]
            },
            {
                name: 'public',
                isFolder: true,
                child: []

            },
            {
                name: 'package.json',
                isFolder: false,
                child: []
            }
        ]
    }


export default structure;