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
        name: 'model',
     }, {
        id: 'model_version',
        name: 'version',
     }, {
        id: 'links',
        name: 'links',
        formatter: (cells) => gridjs.html(`<a href='${cells[0]}'>${cells[0].split('/').pop().split('.').pop()}</a>`),
     }, {
        id: 'tokens',
        name: 'tokens',
     }, {
        id: 'online',
        name: 'online',
        formatter: (cells) => gridjs.html(`<a href='${cells[0]}'>colab</a>`),
     }, {
        id: 'images',
        name: 'images',
        formatter: (cells) => gridjs.html(`<img src='${cells[0]}'><img src='${cells[1]}'><img src='${cells[2]}'><img src='${cells[3]}'>`),
     }, {
        id: 'info',
        name: 'info',
        formatter: (cell) => gridjs.html(`<a href='${cell}'>info</a>`),
     }],
     server: {
        url: 'https://aica.pages.dev/all.json',
        then: data => data.map(creator =>
            [creator.creator_username, creator.model_name, creator.model_version,creator.links,creator.tokens,creator.online,creator.images,creator.info]
        )
    }
  }).render(document.getElementById("wrapper"));