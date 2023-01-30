new gridjs.Grid({
    sort: true,
    resizable: true,
    search: true,
    pagination: true,
    pagination: {
      limit: 7,
      summary: true
    },
    fixedHeader: true,
    height: '780px',
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
        formatter: (cells) => gridjs.html(`<small>${cells}</small>`),
     }, {
        id: 'online',
        name: 'online',
        formatter: (cells) => gridjs.html(`<a href='${cells[0]}'>colab</a>`),
     }, {
        id: 'images',
        name: 'images',
        width : '300px',
        formatter: (cells) => gridjs.html(`<img src='https://via.placeholder.com/64'> <img src='https://via.placeholder.com/64'> <img src='https://via.placeholder.com/64'> <img src='https://via.placeholder.com/64'>`),
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

var div = document.getElementsByClassName('gridjs-head')[0];
const divInside = document.createElement('div');
divInside.style.textAlign = "right";
divInside.style.color = "#c9d1d9";
divInside.style.paddingTop = "6px";

const json = document.createElement('a');
const jsonSpan = document.createElement('span');
jsonSpan.textContent = ' ' + String.fromCodePoint(128223) + ' ';
json.href = "https://aica.pages.dev/all.json";
json.textContent = 'https://aica.pages.dev/all.json';
divInside.appendChild(jsonSpan);
divInside.appendChild(json);

const repo = document.createElement('a');
const repoSpan = document.createElement('span');
repoSpan.textContent = ' ' + String.fromCodePoint(128451) + ' ';
repo.href = "https://github.com/camenduru/ai-creator-archive";
repo.textContent = 'https://github.com/camenduru/ai-creator-archive';
divInside.appendChild(repoSpan);
divInside.appendChild(repo);

const sTwitter = document.createElement('a');
const sTwitterSpan = document.createElement('span');
sTwitterSpan.textContent = ' ' + String.fromCodePoint(128054) + ' ';
sTwitter.href = "https://twitter.com/safetensors";
sTwitter.textContent = 'https://twitter.com/safetensors';
divInside.appendChild(sTwitterSpan);
divInside.appendChild(sTwitter);

const cTwitter = document.createElement('a');
const cTwitterSpan = document.createElement('span');
cTwitterSpan.textContent = ' ' + String.fromCodePoint(128035) + ' ';
cTwitter.href = "https://twitter.com/camenduru";
cTwitter.textContent = 'https://twitter.com/camenduru';
divInside.appendChild(cTwitterSpan);
divInside.appendChild(cTwitter);

div.appendChild(divInside);