const positions = {}

// positions.all = () => {
  // return {
  //   2014: [{
  //     flag: '🇧🇴',
  //     city: 'La Paz',
  //     date: 'Dec 27 - Jan 03',
  //     year: 2014
  //   }],
  //
  //   2015: [{
  //     flag: '🇵🇪',
  //     city: 'Cusco',
  //     date: 'Jan 04 - Jan 10',
  //     year: 2015
  //   }, {
  //     flag: '🇨🇴',
  //     city: 'Cartagena',
  //     date: 'Jul 11 - 31',
  //     year: 2015
  //   }],
  //
  //   2016: [{
  //     flag: '🇪🇸',
  //     city: 'Madrid',
  //     date: 'Dec 28 - Jan 04',
  //     year: 2016
  //   }, {
  //     flag: '🇳🇱',
  //     city: 'Amsterdam',
  //     date: 'Jan 04 - 10',
  //     year: 2016
  //   }, {
  //     flag: '🇮🇹',
  //     city: 'Rome',
  //     date: 'Jan 11 - Feb 10',
  //     year: 2016
  //   }, {
  //     flag: '🇮🇹',
  //     city: 'Florence',
  //     date: 'Feb 11 - 19',
  //     year: 2016
  //   }, {
  //     flag: '🇫🇷',
  //     city: 'Paris',
  //     date: 'Feb 20 - Mar 27',
  //     year: 2016
  //   }, {
  //     flag: '🇭🇷',
  //     city: 'Cavtat',
  //     date: 'Mar 28 - Apr 2',
  //     year: 2016
  //   }, {
  //     flag: '🇭🇷',
  //     city: 'Dubrovnik',
  //     date: 'Apr 3 - May 8',
  //     year: 2016
  //   }, {
  //     flag: '🇭🇷',
  //     city: 'Split',
  //     date: 'May 9 - Jun 19',
  //     year: 2016
  //   }, {
  //     flag: '🇵🇹',
  //     city: 'Sesimbra',
  //     date: 'Jun 20 - Jul 1',
  //     year: 2016
  //   }, {
  //     flag: '🇮🇹',
  //     city: 'Naples',
  //     date: 'Jul 2 - 9',
  //     year: 2016
  //   }, {
  //     flag: '🇵🇹',
  //     city: 'Sesimbra',
  //     date: 'Jul 10 - 17',
  //     year: 2016
  //   }, {
  //     flag: '🇲🇾',
  //     city: 'Kuala Lumpur',
  //     date: 'Jul 18 - Aug 4',
  //     year: 2016
  //   }, {
  //     flag: '🇲🇾',
  //     city: 'Tioman',
  //     date: 'Aug 5 - 8',
  //     year: 2016
  //   }, {
  //     flag: '🇲🇾',
  //     city: 'Kuala Lumpur',
  //     date: 'Aug 9 - 18',
  //     year: 2016
  //   }, {
  //     flag: '🇹🇭',
  //     city: 'Koh Samui',
  //     date: 'Aug 19 - Sep 18',
  //     year: 2016
  //   }, {
  //     flag: '🇹🇭',
  //     city: 'Koh Tao',
  //     date: 'Sep 19 - Jan 2',
  //     year: 2016
  //   }],
  //
  //   2017: [{
  //     flag: '🇺🇸',
  //     city: 'New York',
  //     date: 'Mar 18 - 31',
  //     year: 2017
  //   }, {
  //     flag: '🇺🇸',
  //     city: 'New Jersey',
  //     date: 'Apr 1 - <b>Current</b>',
  //     year: 2017
  //   }]
  // }
// }

positions.all = () => {
  return [{
    flag: '🇧🇴',
    city: 'La Paz',
    date: 'Dec 27 - Jan 03',
    year: 2014
  }, {
    flag: '🇵🇪',
    city: 'Cusco',
    date: 'Jan 04 - Jan 10',
    year: 2015
  }, {
    flag: '🇨🇴',
    city: 'Cartagena',
    date: 'Jul 11 - 31',
    year: 2015
  }, {
    flag: '🇪🇸',
    city: 'Madrid',
    date: 'Dec 28 - Jan 04',
    year: 2016
  }, {
    flag: '🇳🇱',
    city: 'Amsterdam',
    date: 'Jan 04 - 10',
    year: 2016
  }, {
    flag: '🇮🇹',
    city: 'Rome',
    date: 'Jan 11 - Feb 10',
    year: 2016
  }, {
    flag: '🇮🇹',
    city: 'Florence',
    date: 'Feb 11 - 19',
    year: 2016
  }, {
    flag: '🇫🇷',
    city: 'Paris',
    date: 'Feb 20 - Mar 27',
    year: 2016
  }, {
    flag: '🇭🇷',
    city: 'Cavtat',
    date: 'Mar 28 - Apr 2',
    year: 2016
  }, {
    flag: '🇭🇷',
    city: 'Dubrovnik',
    date: 'Apr 3 - May 8',
    year: 2016
  }, {
    flag: '🇭🇷',
    city: 'Split',
    date: 'May 9 - Jun 19',
    year: 2016
  }, {
    flag: '🇵🇹',
    city: 'Sesimbra',
    date: 'Jun 20 - Jul 1',
    year: 2016
  }, {
    flag: '🇮🇹',
    city: 'Naples',
    date: 'Jul 2 - 9',
    year: 2016
  }, {
    flag: '🇵🇹',
    city: 'Sesimbra',
    date: 'Jul 10 - 17',
    year: 2016
  }, {
    flag: '🇲🇾',
    city: 'Kuala Lumpur',
    date: 'Jul 18 - Aug 4',
    year: 2016
  }, {
    flag: '🇲🇾',
    city: 'Tioman',
    date: 'Aug 5 - 8',
    year: 2016
  }, {
    flag: '🇲🇾',
    city: 'Kuala Lumpur',
    date: 'Aug 9 - 18',
    year: 2016
  }, {
    flag: '🇹🇭',
    city: 'Koh Samui',
    date: 'Aug 19 - Sep 18',
    year: 2016
  }, {
    flag: '🇹🇭',
    city: 'Koh Tao',
    date: 'Sep 19 - Jan 2',
    year: 2016
  }, {
    flag: '🇺🇸',
    city: 'New York',
    date: 'Mar 18 - 31',
    year: 2017
  }, {
    flag: '🇺🇸',
    city: 'New Jersey',
    date: 'Apr 1 - 30',
    year: 2017
  }, {
    flag: '🇺🇸',
    city: 'New York',
    date: 'May 1 - 10',
    year: 2017
  }, {
    flag: '🇺🇸',
    city: 'Los Angeles',
    date: 'May 11 - 22',
    year: 2017
  }, {
    flag: '🇺🇸',
    city: 'New York',
    date: 'May 22 - Jun 11',
    year: 2017
  }, {
    flag: '🇮🇹',
    city: 'Palermo',
    date: 'Jun 12 - Current',
    year: 2017
  }].reverse()
}

export default positions
