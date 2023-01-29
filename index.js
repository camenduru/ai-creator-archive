new gridjs.Grid({
    sort: true,
    resizable: true,
    search: true,
    pagination: true,
    columns: [{
        id: 'creator_username',
        name: 'username',
     }, {
        id: 'model_name',
        name: 'model'
     }, {
        id: 'model_version',
        name: 'version'
     }, {
        id: 'links',
        name: 'links'
     }, {
        id: 'tokens',
        name: 'tokens'
     }, {
        id: 'online',
        name: 'online'
     }, {
        id: 'images',
        name: 'images'
     }, {
        id: 'info',
        name: 'info'
     }],
     server: {
        url: 'https://aica.pages.dev/all.json',
        then: data => data.map(creator =>
            [creator.creator_username, creator.model_name, creator.model_version,creator.links,creator.tokens,creator.online,creator.images,creator.info]
        )
    }
  }).render(document.getElementById("wrapper"));