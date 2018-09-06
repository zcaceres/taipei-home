function sortByLabel(arr) {
  return arr.sort(compare).concat()
}

const LINES = [
  {
    type: 'line',
    value: 'red',
    label: 'Red Line',
    searchField: 'nearValue'
  },
  {
    type: 'line',
    value: 'blue',
    label: 'Blue Line',
    searchField: 'nearValue'
  },
  {
    type: 'line',
    value: 'brown',
    label: 'Brown Line',
    searchField: 'nearValue'
  },
  {
    type: 'line',
    value: 'yellow',
    label: 'Yellow Line',
    searchField: 'nearValue'
  },
  {
    type: 'line',
    value: 'green',
    label: 'Green Line',
    searchField: 'nearValue'
  }
]

const RED_LINE = [
  {
    value: 'tamsui',
    label: 'Tamsui',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'hongshulin',
    label: 'Hongshulin',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'zhuwei',
    label: 'Zhuwei',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'guandu',
    label: 'Guandu',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'zhongyi',
    label: 'Zhongyi',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'fuxinggang',
    label: 'Fuxinggang',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'beito',
    label: 'Beito',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'xinbeitou',
    label: 'Xinbeitou',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'qiyan',
    label: 'Qiyan',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'qilian',
    label: 'Qilian',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'shipai',
    label: 'Shipai',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'mingde',
    label: 'Mingde',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'zhishan',
    label: 'Zhishan',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'shilin',
    label: 'Shilin',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'jiantan',
    label: 'Jiantan',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'yuanshan',
    label: 'Yuanshan',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'minquan-w-rd',
    label: 'Minquan W. Rd (Red)',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'shuanglian',
    label: 'Shuanglian',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'zhongshan',
    label: 'Zhongshan (Red)',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'taipei-main-st',
    label: 'Taipei Main St. (Red)',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'ntu-hospital',
    label: 'NTU Hospital',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'chiang-kai-shek-memorial-hall',
    label: 'Chiang Kai Shek Memorial (Red)',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'dongmen',
    label: 'Dongmen (Red)',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'daan-park',
    label: 'Da\'an Park',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'daan',
    label: 'Da\'an (Red)',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'xinyi-anhe',
    label: 'Xinyi Anhe',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'taipei-101-world-trade-center',
    label: 'Taipei 101',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'xiangshan',
    label: 'Xiangshan',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'national-taipei-university-of-business',
    label: 'National Taipei University of Business',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'tatung-university',
    label: 'Tatung University',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'shih-chien-university',
    label: 'Shih Chien University',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'national-taipei-university-of-technology',
    label: 'National Taipei University of Technology',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'national-taiwan-university',
    label: 'National Taiwan University',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'national-taiwan-university-of-science-and-technology',
    label: 'National Taiwan University of Science and Technology',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'national-taiwan-normal-university',
    label: 'National Taiwan Normal University',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'taipei-medical-university',
    label: 'Taipei Medical University',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'chinese-culture-university',
    label: 'Chinese Culture University',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'soochow-university',
    label: 'Soochow University',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'ming-chuan-university',
    label: 'Ming Chuan University',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'taipei-national-university-of-the-arts',
    label: 'Taipei National University of the Arts',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'national-yang-ming-university',
    label: 'National Yang Ming University',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'shih-hsin-university',
    label: 'Shih Hsin University',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'national-chengchi-university',
    label: 'National Chengchi University',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'china-university-of-technology',
    label: 'China University of Technology',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'national-taipei-university-of-education',
    label: 'National Taipei University of Education',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'national-taiwan-college-of-performing-arts',
    label: 'National Taiwan College of Performing Arts',
    type: 'station',
    searchField: 'nearValue'
  }
]

const GREEN_LINE = [
  {
    value: 'songshan',
    label: 'Songshan',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'nanjing-sanmin',
    label: 'Nanjing Sanmin',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'taipei-arena',
    label: 'Taipei Arena',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'nanjing-fuxing',
    label: 'Nanjing Fuxing (Green)',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'songjiang-nanjing',
    label: 'Songjiang Nanjing (Green)',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'zhongshan',
    label: 'Zhongshan (Green)',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'beimen',
    label: 'Beimen',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'ximen',
    label: 'Ximen (Green)',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'xianonamen',
    label: 'Xianonamen',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'chiang-kai-shek-memorial-hall',
    label: 'Chiang Kai Shek Memorial (Green)',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'gutin',
    label: 'Gutin (Green)',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'taipower-building',
    label: 'Taipower Building',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'gonguan',
    label: 'Gonguan',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'wanlong',
    label: 'Wanlong',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'jingmei',
    label: 'Jingmei',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'dapinglin',
    label: 'Dapinglin',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'qizhang',
    label: 'Qizhang',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'xiaobitan',
    label: 'Xiaobitan',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'xindian-city-hall',
    label: 'Xindian City Hall',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'xindian',
    label: 'Xindian',
    type: 'station',
    searchField: 'nearValue'
  }
]

const YELLOW_LINE = [
  {
    value: 'dongmen',
    label: 'Dongmen (Yellow)',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'zhongxiao-xinsheng',
    label: 'Zhongxiao Xinsheng (Yellow)',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'songjiang-nanjing',
    label: 'Songjiang Nanjing (Yellow)',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'xingtian-temple',
    label: 'Xingtian Temple',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'zhongshan-elementary-school',
    label: 'Zhongshan Elementary School',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'minquan-w-rd',
    label: 'Minquan W. Road (Yellow)',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'daqiatou',
    label: 'Daqiatou',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'taipei-bridge',
    label: 'Taipei Bridge',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'cailiao',
    label: 'Cailiao',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'sanchong',
    label: 'Sanchong',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'xianse-temple',
    label: 'Xianse Temple',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'touqianzhuang',
    label: 'Touqianzhuang',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'xinzhuang',
    label: 'Xinzhuang',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'fu-jen-university',
    label: 'Fu Jen University',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'danfeng',
    label: 'Danfeng',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'huilong',
    label: 'Huilong',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'sanchong-elementary-school',
    label: 'Sanchong Elementary School',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'sanhe-junior-high-school',
    label: 'Sanhe Junior High School',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'st-ignaturs-high-school',
    label: 'St. Ignaturs High School',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'sanmin-senior-high-school',
    label: 'Sanmin Senior High School',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'luzhou',
    label: 'Luzhou',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'gutin',
    label: 'Gutin (Yellow)',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'dingxi',
    label: 'Dingxi',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'yongan-market',
    label: 'Yongan Market',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'jingan',
    label: 'Jingan',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'nanshijiao',
    label: 'Nanshijiao',
    type: 'station',
    searchField: 'nearValue'
  },
]

const BROWN_LINE = [
  {
    value: 'nangang-exhibition-center',
    label: 'Nangang Exhibition Center (Brown)',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'nangang-sofware-park',
    label: 'Nangang Software Park',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'donghu',
    label: 'Donghu',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'huzhou',
    label: 'Huzhou',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'dahu-park',
    label: 'Dahu Park',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'neihu',
    label: 'Neihu',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'wende',
    label: 'Wende',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'gangqian',
    label: 'Gangqian',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'xihu',
    label: 'Xihu',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'jiannan-rd',
    label: 'Jiannan Rd.',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'dazhi',
    label: 'Dazhi',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'songshan-airport',
    label: 'Songshan Airport',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'zhongshan-junior-high-school',
    label: 'Zhonshan Junior High School',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'nanjing-fuxing',
    label: 'Nanjing Fuxing (Brown)',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'zhongxiao-fuxing',
    label: 'Zhongxiao Fuxing (Brown)',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'daan',
    label: 'Da\'an (Brown)',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'technology-building',
    label: 'Technology Building',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'liuzhangli',
    label: 'Liuzhangli',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'linguang',
    label: 'Linguang',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'xinhai',
    label: 'Xinhai',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'wanfang-hospital',
    label: 'Wanfang Hospital',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'wanfang-community',
    label: 'Wanfang Community',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'muzha',
    label: 'Muzha',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'taipei-zoo',
    label: 'Taipei Zoo',
    type: 'station',
    searchField: 'nearValue'
  }
]

const BLUE_LINE = [
  {
    value: 'dingpu',
    label: 'Dingpu',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'yongning',
    label: 'Yongning',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'tucheng',
    label: 'Tucheng',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'haishan',
    label: 'Haishan',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'far-eastern-hospital',
    label: 'Far Eastern Hospital',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'fuzhong',
    label: 'Fuzhong',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'banqiao',
    label: 'Banqiao',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'xinpu',
    label: 'Xinpu',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'jiangzicui',
    label: 'Jiangzicui',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'longshan-temple',
    label: 'Longshan Temple',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'ximen',
    label: 'Ximen (Blue)',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'taipei-main-st',
    label: 'Taipei Main St. (Blue)',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'shandao-temple',
    label: 'Shandao Temple',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'zhongxiao-xinsheng',
    label: 'Zhongxiao Xinsheng (Blue)',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'zhongxiao-fuxing',
    label: 'Zhongxiao Fuxing (Blue)',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'zhongxiao-dunhua',
    label: 'Zhongxiao Dunhua',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'sun-yat-sen-memorial-hall',
    label: 'Sun Yat Sen Memorial Hall',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'taipei-city-hall',
    label: 'Taipei City Hall',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'yongchun',
    label: 'Yongchun',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'houshanpi',
    label: 'Houshanpi',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'kunyang',
    label: 'Kunyang',
    type: 'station',
    searchField: 'nearValue'
  },
  {
    value: 'nangang-exhibition-center',
    label: 'Nangang Exhibition Center (Blue)',
    type: 'station',
    searchField: 'nearValue'
  }
]

const STATIONS = sortByLabel([
  ...RED_LINE,
  ...BLUE_LINE,
  ...BROWN_LINE,
  ...GREEN_LINE,
  ...YELLOW_LINE
])

const SCHOOLS = [
  {
    value: 'national-taipei-university-of-business',
    label: 'National Taipei University of Business',
    type: 'school',
    searchField: 'nearValue'
  },
  {
    value: 'tatung-university',
    label: 'Tatung University',
    type: 'school',
    searchField: 'nearValue'
  },
  {
    value: 'shih-chien-university',
    label: 'Shih Chien University',
    type: 'school',
    searchField: 'nearValue'
  },
  {
    value: 'national-taipei-university-of-technology',
    label: 'National Taipei University of Technology',
    type: 'school',
    searchField: 'nearValue'
  },
  {
    value: 'national-taiwan-university',
    label: 'National Taiwan University',
    type: 'school',
    searchField: 'nearValue'
  },
  {
    value: 'national-taiwan-university-of-science-and-technology',
    label: 'National Taiwan University of Science and Technology',
    type: 'school',
    searchField: 'nearValue'
  },
  {
    value: 'national-taiwan-normal-university',
    label: 'National Taiwan Normal University',
    type: 'school',
    searchField: 'nearValue'
  },
  {
    value: 'taipei-medical-university',
    label: 'Taipei Medical University',
    type: 'school',
    searchField: 'nearValue'
  },
  {
    value: 'chinese-culture-university',
    label: 'Chinese Culture University',
    type: 'school',
    searchField: 'nearValue'
  },
  {
    value: 'soochow-university',
    label: 'Soochow University',
    type: 'school',
    searchField: 'nearValue'
  },
  {
    value: 'ming-chuan-university',
    label: 'Ming Chuan University',
    type: 'school',
    searchFied: 'nearValue'
  },
  {
    value: 'taipei-national-university-of-the-arts',
    label: 'Taipei National University of the Arts',
    type: 'school',
    searchField: 'nearValue'
  },
  {
    value: 'national-yang-ming-university',
    label: 'National Yang Ming University',
    type: 'school',
    searchField: 'nearValue'
  },
  {
    value: 'shih-hsin-university',
    label: 'Shih Hsin University',
    type: 'school',
    searchField: 'nearValue'
  },
  {
    value: 'national-chengchi-university',
    label: 'National Chengchi University',
    type: 'school',
    searchField: 'nearValue'
  },
  {
    value: 'china-university-of-technology',
    label: 'China University of Technology',
    type: 'school',
    searchField: 'nearValue'
  },
  {
    value: 'national-taipei-university-of-education',
    label: 'National Taipei University of Education',
    type: 'school',
    searchField: 'nearValue'
  },
  {
    value: 'national-taiwan-college-of-performing-arts',
    label: 'National Taiwan College of Performing Arts',
    type: 'school',
    searchField: 'nearValue'
  }
]

function compare(a,b) {
  if (a.label < b.label)
    return -1;
  if (a.label > b.label)
    return 1;
  return 0;
}

export default {
  stations: STATIONS,
  schools: sortByLabel(SCHOOLS)
}
