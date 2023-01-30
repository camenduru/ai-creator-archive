new gridjs.Grid({
    sort: true,
    resizable: true,
    search: true,
    pagination: true,
    pagination: {
      limit: 8,
      summary: true
    },
    fixedHeader: true,
    height: '800px',
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
        formatter: (cells) => gridjs.html(`<img src='https://via.placeholder.com/64'> <img src='https://via.placeholder.com/64'>`),
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
    },
    style: {
      header  : {
       },
      container : {
       },
      table: {
         color: '#c9d1d9',
         border: '0px'
      },
      th: {
         'background-color': 'rgb(40 44 50)',
         color: '#c9d1d9',
         border: '0px'
      },
      td: {
         'background-color': '#0d1117',
         border: '0px solid rgb(40 44 50)',
      },
      footer  : {
         'background-color': 'rgb(40 44 50)',
         color: '#c9d1d9',
         border: '0px'
      }
   },
  }).render(document.getElementById("wrapper"));