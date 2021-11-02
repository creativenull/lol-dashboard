export function getRedTeam() {
  return [
    {
      name: 'Red 1',
      kda: '2/3/4',
      champion: 'Kayle',
      items: [
        'Nashor\'s Tooth',
        'Doran\'s Ring'
      ]
    },
    {
      name: 'Red 2',
      kda: '2/3/4',
      champion: 'Kayle',
      items: [
        'Nashor\'s Tooth',
        'Doran\'s Ring'
      ]
    },
    {
      name: 'Red 3',
      kda: '2/3/4',
      champion: 'Kayle',
      items: [
        'Nashor\'s Tooth',
        'Doran\'s Ring'
      ]
    },
    {
      name: 'Red 4',
      kda: '2/3/4',
      champion: 'Kayle',
      items: [
        'Nashor\'s Tooth',
        'Doran\'s Ring'
      ]
    },
    {
      name: 'Red 5',
      kda: '2/3/4',
      champion: 'Kayle',
      items: [
        'Nashor\'s Tooth',
        'Doran\'s Ring'
      ]
    },
  ]
}

export function getGreenTeam() {
  return [
    {
      name: 'Green 1',
      kda: '11/0/2',
      champion: 'Jhin',
      items: [
        'Galeforce',
        'The Collector'
      ]
    },
    {
      name: 'Green 2',
      kda: '11/0/2',
      champion: 'Jhin',
      items: [
        'Galeforce',
        'The Collector'
      ]
    },
    {
      name: 'Green 3',
      kda: '11/0/2',
      champion: 'Jhin',
      items: [
        'Galeforce',
        'The Collector'
      ]
    },
    {
      name: 'Green 4',
      kda: '11/0/2',
      champion: 'Jhin',
      items: [
        'Galeforce',
        'The Collector'
      ]
    },
    {
      name: 'Green 5',
      kda: '11/0/2',
      champion: 'Jhin',
      items: [
        'Galeforce',
        'The Collector'
      ]
    },
  ]
}

export async function getChampions() {
  return await fetch('http://ddragon.leagueoflegends.com/cdn/11.3.1/data/en_US/champion.json').then(res => res.json());
}
