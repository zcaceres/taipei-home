// require any npm package
// initialize db connections here
const Clay = require('clay-client')
const axios = require('axios')
const lodash = require('lodash')

/* @param {object} event.vars - JSON POST body or GET query parameters
 * @param {object} event.headers - HTTP Headers
 * @param {object} process.env - private variables
 *
 * Return a JSON serializable object or a string.
 * @callback done(result, [httpCode]) - returns HTTP 200 or httpCode
 * @callback fail(error, [httpCode]) - returns HTTP 400 or httpCode
 */

const TAIPEI = 'region=1'
async function search591(queryString) {
  // SEARCH TYPE HERE IF DOING NEAR A SUBWAY
  const searchQuery = `https://rent.591.com.tw/home/search/rsList?is_new_list=1&${TAIPEI}&${queryString}`
  console.log('Querying', searchQuery)
  const response = await axios.get(searchQuery)
  return response.data
}

exports.handler = async function(event, done, fail) {
  const { near, price, rooms, roomType, lease } = event.vars
  console.log('vars', event.vars)
  const raw = await search591(formatQueryString({ near, roomType, price, lease, rooms }))
  if (!raw) return fail('No response for query', 400)
  const { data } = raw.data
  if (!data) return fail('No data in response', 400)
  done({
    results: data
  });
}

/** Formatting  */
function formatQueryString(params) {
  const room = params.roomType && 'kind=' + getRoomQuery(params.roomType)
  const leaseType = params.lease && 'other='  + getLeaseType(params.lease)
  const numOfRooms = (params.roomType === 'whole-apartment' && params.rooms) && 'pattern=' + getRoomNumber(params.rooms)
  // ^ can only specify number of rooms if searching for a whole apartment... obviously!
  const near = getNear(params.near)
  const price = params.price && 'rentprice=' + getBudget(params.price)
  return [room, price, leaseType, numOfRooms, near].filter(el => el).join('&')
}

function getRoomNumber(selection) {
  return selection
  // ^ 591 currently just uses 0 - 5 to indicate the number of rooms so we can re-use their params
}

function getRoomQuery(selection) {
    switch (selection) {
      case 'whole-apartment': {
        return '1'
      }
      case 'studio': {
        return '2'
      }
      case 'private-suite': {
        return '3'
      }
      case 'room': {
        return '4'
      }
      default: {
        return '0'
      }
  }
}

function getLeaseType(selection) {
  switch(selection) {
    case 'short-term': {
      return 'lease'
    }
    default: {
      return ''
    }
  }
}

// Prices in NTDs
function getBudget(selection) {
  switch (selection) {
    case '0-5': {
      return '1'
    }
    case '5-10': {
      return '2'
    }
    case '10-20': {
      return '3'
    }
    case '20-30': {
      return '4'
    }
    case '30-40': {
      return '5'
    }
    case '40-60': {
      return '6'
    }
    case '60+': {
      return '7'
    }
    default: {
      return '0'
    }
  }
}

function getNear(selection) {
  if (!selection) return ''
  switch (selection.type) {
    case 'line': {
      return selectLine(selection.value)
    }
    case 'station': {
      return getStation(selection.value)
    }
    case 'school': {
      return getSchool(selection.value)
    }
    default: {
      return ''
    }
  }
}

function selectLine(selectionValue) {
  switch (selectionValue) {
    case 'red': {
      return 'searchtype=4&' + getSubwayLine(RED_LINE)
    }
    case 'blue': {
      return 'searchtype=4&' + getSubwayLine(BLUE_LINE)
    }
    case 'green': {
      return 'searchtype=4&' + getSubwayLine(GREEN_LINE)
    }
    case 'yellow': {
      return 'searchtype=4&' + getSubwayLine(YELLOW_LINE)
    }
    case 'brown': {
      return 'searchtype=4&' + getSubwayLine(BROWN_LINE)
    }
    default: {
      return ''
    }
  }
}

function getSchool(selection) {
  const school = SCHOOLS[selection]
  if (!selection || !school) return ''
  return 'searchtype=3&school=' + (school.code)
}

function getStation(selection) {
  const station = ALL_STATIONS[selection]
  if (!selection) return ''
  return 'searchtype=4&mrtcoods=' + (station.code)
}

function getSubwayLine(line) {
  if (!line) return ''
  return 'mrt=1&mrtcoods=' + Object.values(line).map(station => station.code).join(',')
}

const RED_LINE = {
  'tamsui': {
    line: 'red',
    code:  4163,
  },
  'hongshulin': {
    line: 'red',
    code: 4164,
  },
  'zhuwei': {
    line: 'red',
    code: 4165,
  },
  'guandu': {
    line: 'red',
    code: 4166,
  },
  'zhongyi': {
    line: 'red',
    code: 4167,
  },
  'fuxinggang': {
    line: 'red',
    code: 4168,
  },
  'beito': {
    line: 'red',
    code: 4169,
  },
  'xinbeitou': {
    line: 'red',
    code: 4198,
  },
  'qiyan': {
    line: 'red',
    code: 4170,
  },
  'qilian': {
    line: 'red',
    code: 4171,
  },
  'shipai': {
    line: 'red',
    code: 4172,
  },
  'mingde': {
    line: 'red',
    code: 4173,
  },
  'zhishan': {
    line: 'red',
    code: 4174,
  },
  'shilin': {
    line: 'red',
    code: 4175,
  },
  'jiantan': {
    line: 'red',
    code: 4176,
  },
  'yuanshan': {
    line: 'red',
    code: 4177,
  },
  'minquan-w-rd': {
    line: 'red',
    code:  4178,
  },
  'shuanglian': {
    line: 'red',
    code: 4179,
  },
  'zhongshan': {
    line: 'red',
    code: 4180,
  },
  'taipei-main-st': {
    line: 'red',
    code:  4181,
  },
  'ntu-hospital': {
    line: 'red',
    code: 4182,
  },
  'chiang-kai-shek-memorial-hall': {
    line: 'red',
    code: 4183,
  },
  'dongmen': {
    line: 'red',
    code: 4200,
  },
  'daan-park': {
    line: 'red',
    code: 4201,
  },
  'daan': {
    line: 'red',
    code: 4188,
  },
  'xinyi-anhe': {
    line: 'red',
    code: 66300,
  },
  'taipei-101-world-trade-center': {
    line: 'red',
    code: 66301,
  },
  'xiangshan': {
    line: 'red',
    code: 4205,
  },
  'national-taipei-university-of-business': {
    line: 'red',
    code: 94,
  },
  'tatung-university': {
    line: 'red',
    code: 137,
  },
  'shih-chien-university': {
    line: 'red',
    code: 140,
  },
  'national-taipei-university-of-technology': {
    line: 'red',
    code: 189,
  },
  'national-taiwan-university': {
    line: 'red',
    code: 191,
  },
  'national-taiwan-university-of-science-and-technology': {
    line: 'red',
    code: 192,
  },
  'national-taiwan-normal-university': {
    line: 'red',
    code: 193,
  },
  'taipei-medical-university': {
    line: 'red',
    code: 233,
  },
  'chinese-culture-university': {
    line: 'red',
    code: 269,
  },
  'soochow-university': {
    line: 'red',
    code: 272,
  },
  'ming-chuan-university': {
    line: 'red',
    code: 273,
  },
  'taipei-national-university-of-the-arts': {
    line: 'red',
    code: 308,
  },
  'national-yang-ming-university': {
    line: 'red',
    code:  314,
  },
  'shih-hsin-university': {
    line: 'red',
    code: 397,
  },
  'national-chengchi-university': {
    line: 'red',
    code: 401,
  },
  'china-university-of-technology': {
    line: 'red',
    code: 4869,
  },
  'national-taipei-university-of-education': {
    line: 'red',
    code: 7404,
  },
  'national-taiwan-college-of-performing-arts': {
    line: 'red',
    code:  7429
  }
}

const GREEN_LINE = {
  songshan: {
    code: 4235,
    line: 'green',
    displayName: ''
  },
  'nanjing-sanmin': {
    code: 4236,
    line: 'green',
    displayName: ''
  },
  'taipei-arena': {
    code: 4237,
    line: 'green',
    displayName: ''
  },
  'nanjing-fuxing': {
    code: 4186,
    line: 'green',
    displayName: ''
  },
  'songjiang-nanjing': {
    code: 66266,
    line: 'green',
    displayName: ''
  },
  zhongshan: {
    code: 4180,
    line: 'green',
    displayName: ''
  },
  beimen: {
    code: 4241,
    line: 'green',
    displayName: ''
  },
  ximen: {
    code: 4242,
    line: 'green',
    displayName: ''
  },
  xianonamen: {
    code: 4255,
    line: 'green',
    displayName: ''
  },
  'chiang-kai-shek-memorial-hall': {
    code: 4183,
    line: 'green',
    displayName: ''
  },
  gutin: {
    code: 4184,
    line: 'green',
    displayName: ''
  },
  'taipower-building': {
    code: 4244,
    line: 'green',
    displayName: ''
  },
  'gonguan': {
    code: 4245,
    line: 'green',
    displayName: ''
  },
  wanlong: {
    code: 4246,
    line: 'green',
    displayName: ''
  },
  jingmei: {
    code: 4247,
    line: 'green',
    displayName: ''
  },
  dapinglin: {
    code: 4248,
    line: 'green',
    displayName: ''
  },
  qizhang: {
    code: 4249,
    line: 'green',
    displayName: ''
  },
  xiaobitan: {
    code: 4253,
    line: 'green',
    displayName: ''
  },
  'xindian-city-hall': {
    code: 4251,
    line: 'green',
    displayName: ''
  },
  xindian: {
    code: 4250,
    line: 'green',
    displayName: ''
  }
}

const YELLOW_LINE = {
  dongmen: {
    line: 'yellow',
    code: 4200,
  },
  'zhongxiao-xinsheng': {
    line: 'yellow',
    code: 4221,
  },
  'songjiang-nanjing': {
    line: 'yellow',
    code: 66266,
  },
  'xingtian-temple': {
    line: 'yellow',
    code: 66265,
  },
  'zhongshan-elementary-school': {
    line: 'yellow',
    code: 66264,
  },
  'minquan-w-rd': {
    line: 'yellow',
    code: 4178,
  },
  daqiatou: {
    line: 'yellow',
    code: 4216,
  },
  'taipei-bridge': {
    line: 'yellow',
    code: 4215,
  },
  cailiao: {
    line: 'yellow',
    code: 4214,
  },
  sanchong: {
    line: 'yellow',
    code: 4213,
  },
  'xianse-temple': {
    line: 'yellow',
    code: 4212,
  },
  touqianzhuang: {
    line: 'yellow',
    code: 4211,
  },
  xinzhuang: {
    line: 'yellow',
    code: 4210,
  },
  'fu-jen-university': {
    line: 'yellow',
    code: 4209,
  },
  danfeng: {
    line: 'yellow',
    code: 4208,
  },
  huilong: {
    line: 'yellow',
    code: 4207,
  },
  'sanchong-elementary-school': {
    line: 'yellow',
    code: 66262,
  },
  'sanhe-junio-high-school': {
    line: 'yellow',
    code: 66261,
  },
  'st-ignaturs-high-school': {
    line: 'yellow',
    code: 66260,
  },
  'sanmin-senior-high-school': {
    line: 'yellow',
    code: 66259,
  },
  luzhou: {
    line: 'yellow',
    code: 66258,
  },
  gutin: {
    line: 'yellow',
    code: 4184,
  },
  dingxi: {
    line: 'yellow',
    code: 4231,
  },
  'yongan-market': {
    line: 'yellow',
    code: 4232,
  },
  jingan: {
    line: 'yellow',
    code: 4233,
  },
  nanshijiao: {
    line: 'yellow',
    code: 4234
  },
}

const BROWN_LINE = {
  'nangang-exhibition-center': {
    code: 4257,
    line: 'brown'
  },
  'nangang-sofware-park': {
    code: 4314,
    line: 'brown'
  },
  donghu: {
    code: 4315,
    line: 'brown'
  },
  huzhou: {
    code: 4316,
    line: 'brown'
  },
  'dahu-park': {
    code: 4317,
    line: 'brown'
  },
  neihu: {
    code: 4318,
    line: 'brown'
  },
  wende: {
    code: 4319,
    line: 'brown'
  },
  gangqian: {
    code: 4320,
    line: 'brown'
  },
  xihu: {
    code: 4321,
    line: 'brown'
  },
  'jiannan-rd': {
    code: 4282,
    line: 'brown'
  },
  dazhi: {
    code: 4323,
    line: 'brown'
  },
  'songshan-airport': {
    code: 4324,
    line: 'brown'
  },
  'zhongshan-junior-high-school': {
    code: 4185,
    line: 'brown'
  },
  'nanjing-fuxing': {
    code: 4186,
    line: 'brown'
  },
  'zhongxiao-fuxing': {
    code: 4187,
    line: 'brown'
  },
  'daan-': {
    code: 4188,
    line: 'brown'
  },
  'technology-building': {
    code: 4189,
    line: 'brown'
  },
  liuzhangli: {
    code: 4190,
    line: 'brown'
  },
  linguang: {
    code: 4191,
    line: 'brown'
  },
  xinhai: {
    code: 4192,
    line: 'brown'
  },
  'wanfang-hospital': {
    code: 4193,
    line: 'brown'
  },
  'wanfang-community': {
    code: 4194,
    line: 'brown'
  },
  muzha: {
    code: 4195,
    line: 'brown'
  },
  'taipei-zoo':  {
   code: 4196,
   line: 'brown'
  }
}

const BLUE_LINE = {
  dingpu: {
    code: 4281,
    line: 'blue'
  },
  yongning: {
    code: 4280,
    line: 'blue'
  },
  tucheng: {
    code: 4279,
    line: 'blue'
  },
  haishan: {
    code: 4278,
    line: 'blue'
  },
  'far-eastern-hospital': {
    code: 4277,
    line: 'blue'
  },
  fuzhong: {
    code: 4275,
    line: 'blue'
  },
  banqiao: {
    code: 4274,
    line: 'blue'
  },
  xinpu: {
    code: 4273,
    line: 'blue'
  },
  jiangzicui: {
    code: 4272,
    line: 'blue'
  },
  'longshan-temple': {
    code: 4271,
    line: 'blue'
  },
  'ximen': {
    code: 4242,
    line: 'blue'
  },
  'taipei-main-st': {
    code: 4181,
    line: 'blue'
  },
  'shandao-temple': {
    code: 4267,
    line: 'blue'
  },
  'zhongxiao-xinsheng': {
    code: 4221,
    line: 'blue'
  },
  'zhongxiao-fuxing': {
    code: 4187,
    line: 'blue'
  },
  'zhongxiao-dunhua': {
    code: 4264,
    line: 'blue'
  },
  'sun-yat-sen-memorial-hall': {
    code: 4263,
    line: 'blue'
  },
  'taipei-city-hall': {
    code: 4262,
    line: 'blue'
  },
  yongchun: {
    code: 4261,
    line: 'blue'
  },
  houshanpi: {
    code: 4260,
    line: 'blue'
  },
  kunyang: {
    code: 4259,
    line: 'blue'
  },
  'nangang-exhibition-center': {
    code: 4258,
    line: 'blue'
  }
}

const SCHOOLS = {
  'national-taipei-university-of-business': {
    displayName: '',
    code: 94
  },
  'tatung-university': {
    displayName: '',
    code: 137
  },
  'shih-chien-university': {
    displayName: '',
    code: 140
  },
  'national-taipei-university-of-technology': {
    displayName: '',
    code: 189
  },
  'national-taiwan-university': {
    displayName: '',
    code: 191
  },
  'national-taiwan-university-of-science-and-technology': {
    displayName: '',
    code: 192
  },
  'national-taiwan-normal-university': {
    displayName: '',
    code: 193
  },
  'taipei-medical-university': {
    displayName: '',
    code: 233
  },
  'chinese-culture-university': {
    displayName: '',
    code: 269
  },
  'soochow-university': {
    displayName: '',
    code: 272
  },
  'ming-chuan-university': {
    displayName: '',
    code: 273
  },
  'taipei-national-university-of-the-arts': {
    displayName: '',
    code: 308
  },
  'national-yang-ming-university': {
    displayName: '',
    code: 314
  },
  'shih-hsin-university': {
    displayName: '',
    code: 397
  },
  'national-chengchi-university': {
    displayName: '',
    code: 401
  },
  'china-university-of-technology': {
    displayName: '',
    code: 4869
  },
  'national-taipei-university-of-education': {
    displayName: '',
    code: 7404
  },
  'national-taiwan-college-of-performing-arts': {
    displayName: '',
    code: 7429
  }
}

const ALL_STATIONS = Object.assign(
{},
RED_LINE,
BLUE_LINE,
YELLOW_LINE,
BROWN_LINE,
GREEN_LINE)

// CREATE A SUBWAY LINE
// const KEYS = []
// const VALUES = []
// const formattedKeys = KEYS.map(el => el.toLowerCase()).map(el => el.replace(/ /g, '-'))

// const final = {}
// formattedKeys.forEach((k, i) => {
//   final[k] = VALUES[i]
// })

// console.log(final)
