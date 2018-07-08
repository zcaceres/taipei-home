const LINES = [
  {
    type: 'line',
    value: 'red',
    label: 'Red Line',
    searchField: 'near'
  },
  {
    type: 'line',
    value: 'blue',
    label: 'Blue Line',
    searchField: 'near'
  },
  {
    type: 'line',
    value: 'brown',
    label: 'Brown Line',
    searchField: 'near'
  },
  {
    type: 'line',
    value: 'yellow',
    label: 'Yellow Line',
    searchField: 'near'
  },
  {
    type: 'line',
    value: 'green',
    label: 'Green Line',
    searchField: 'near'
  }
]

const RED_LINE = [
  {
    value: 'tamsui',
    label: 'Tamsui',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'hongshulin',
    label: 'Hongshulin',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'zhuwei',
    label: 'Zhuwei',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'guandu',
    label: 'Guandu',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'zhongyi',
    label: 'Zhongyi',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'fuxinggang',
    label: 'Fuxinggang',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'beito',
    label: 'Beito',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'xinbeitou',
    label: 'Xinbeitou',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'qiyan',
    label: 'Qiyan',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'qilian',
    label: 'Qilian',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'shipai',
    label: 'Qilian',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'mingde',
    label: 'Mingde',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'zhishan',
    label: 'Zhishan',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'shilin',
    label: 'Shilin',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'jiantan',
    label: 'Jiantan',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'yuanshan',
    label: 'Yuanshan',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'minquan-w-rd',
    label: 'Minquan W. Rd',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'shuanglian',
    label: 'Shuanglian',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'zhongshan',
    label: 'Zhongshan',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'taipei-main-st',
    label: 'Taipei Main St.',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'ntu-hospital',
    label: 'NTU Hospital',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'chiang-kai-shek-memorial-hall',
    label: 'Chiang Kai Shek Mem.',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'dongmen',
    label: 'Dongmen',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'daan-park',
    label: 'Da\'an Park',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'daan',
    label: 'Da\'an',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'xinyi-anhe',
    label: 'Xinyi Anhe',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'taipei-101-world-trade-center',
    label: 'Taipei 101',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'xiangshan',
    label: 'Xiangshan',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'national-taipei-university-of-business',
    label: 'National Taipei University of Business',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'tatung-university',
    label: 'Tatung University',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'shih-chien-university',
    label: 'Shih Chien University',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'national-taipei-university-of-technology',
    label: 'National Taipei University of Technology',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'national-taiwan-university',
    label: 'National Taiwan University',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'national-taiwan-university-of-science-and-technology',
    label: 'National Taiwan University of Science and Technology',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'national-taiwan-normal-university',
    label: 'National Taiwan Normal University',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'taipei-medical-university',
    label: 'Taipei Medical University',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'chinese-culture-university',
    label: 'Chinese Culture University',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'soochow-university',
    label: 'Soochow University',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'ming-chuan-university',
    label: 'Ming Chuan University',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'taipei-national-university-of-the-arts',
    label: 'Taipei National University of the Arts',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'national-yang-ming-university',
    label: 'National Yang Ming University',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'shih-hsin-university',
    label: 'Shih Hsin University',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'national-chengchi-university',
    label: 'National Chengchi University',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'china-university-of-technology',
    label: 'China University of Technology',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'national-taipei-university-of-education',
    label: 'National Taipei University of Education',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'national-taiwan-college-of-performing-arts',
    label: 'National Taiwan College of Performing Arts',
    type: 'station',
    searchField: 'near'
  }
]

const GREEN_LINE = [
  {
    value: 'songshan',
    label: 'Songshan',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'nanjing-sanmin',
    label: 'Nanjing Sanmin',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'taipei-arena',
    label: 'Taipei Arena',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'nanjing-fuxing',
    label: 'Nanjing Fuxing',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'songjiang-nanjing',
    label: 'Songjiang Nanjing',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'zhongshan',
    label: 'Zhongshan',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'beimen',
    label: 'Beimen',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'ximen',
    label: 'Ximen',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'xianonamen',
    label: 'Xianonamen',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'chiang-kai-shek-memorial-hall',
    label: 'Chiang Kai Shek Memorial',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'gutin',
    label: 'Gutin',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'taipower-building',
    label: 'Taipower Building',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'gonguan',
    label: 'Gonguan',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'wanlong',
    label: 'Wanlong',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'jingmei',
    label: 'Jingmei',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'dapinglin',
    label: 'Dapinglin',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'qizhang',
    label: 'Qizhang',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'xiaobitan',
    label: 'Xiaobitan',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'xindian-city-hall',
    label: 'Xindian City Hall',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'xindian',
    label: 'Xindian',
    type: 'station',
    searchField: 'near'
  }
]

const YELLOW_LINE = [
  {
    value: 'dongmen',
    label: 'Dongmen',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'zhongxiao-xinsheng',
    label: 'Zhongxiao Xinsheng',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'songjiang-nanjing',
    label: 'Songjiang Nanjing',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'xingtian-temple',
    label: 'Xingtian Temple',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'zhongshan-elementary-school',
    label: 'Zhongshan Elementary School',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'minquan-w-rd',
    label: 'Minquan W. Road',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'daqiatou',
    label: 'Daqiatou',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'taipei-bridge',
    label: 'Taipei Bridge',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'cailiao',
    label: 'Cailiao',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'sanchong',
    label: 'Sanchong',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'xianse-temple',
    label: 'Xianse Temple',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'touqianzhuang',
    label: 'Touqianzhuang',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'xinzhuang',
    label: 'Xinzhuang',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'fu-jen-university',
    label: 'Fu Jen University',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'danfeng',
    label: 'Danfeng',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'huilong',
    label: 'Huilong',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'sanchong-elementary-school',
    label: 'Sanchong Elementary School',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'sanhe-junior-high-school',
    label: 'Sanhe Junior High School',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'st-ignaturs-high-school',
    label: 'St. Ignaturs High School',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'sanmin-senior-high-school',
    label: 'Sanmin Senior High School',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'luzhou',
    label: 'Luzhou',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'gutin',
    label: 'Gutin',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'dingxi',
    label: 'Dingxi',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'yongan-market',
    label: 'Yongan Market',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'jingan',
    label: 'Jingan',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'nanshijiao',
    label: 'Nanshijiao',
    type: 'station',
    searchField: 'near'
  },
]

const BROWN_LINE = [
  {
    value: 'nangang-exhibition-center',
    label: 'Nangang Exhibition Center',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'nangang-sofware-park',
    label: 'Nangang Software Park',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'donghu',
    label: 'Donghu',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'huzhou',
    label: 'Huzhou',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'dahu-park',
    label: 'Dahu Park',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'neihu',
    label: 'Neihu',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'wende',
    label: 'Wende',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'gangqian',
    label: 'Gangqian',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'xihu',
    label: 'Xihu',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'jiannan-rd',
    label: 'Jiannan Rd.',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'dazhi',
    label: 'Dazhi',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'songshan-airport',
    label: 'Songshan Airport',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'zhongshan-junior-high-school',
    label: 'Zhonshan Junior High School',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'nanjing-fuxing',
    label: 'Nanjing Fuxing',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'zhongxiao-fuxing',
    label: 'Zhongxiao Fuxing',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'daan',
    label: 'Da\'an',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'technology-building',
    label: 'Technology Building',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'liuzhangli',
    label: 'Liuzhangli',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'linguang',
    label: 'Linguang',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'xinhai',
    label: 'Xinhai',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'wanfang-hospital',
    label: 'Wanfang Hospital',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'wanfang-community',
    label: 'Wanfang Community',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'muzha',
    label: 'Muzha',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'taipei-zoo',
    label: 'Taipei Zoo',
    type: 'station',
    searchField: 'near'
  }
]

const BLUE_LINE = [
  {
    value: 'dingpu',
    label: 'Dingpu',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'yongning',
    label: 'Yongning',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'tucheng',
    label: 'Tucheng',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'haishan',
    label: 'Haishan',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'far-eastern-hospital',
    label: 'Far Eastern Hospital',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'fuzhong',
    label: 'Fuzhong',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'banqiao',
    label: 'Banqiao',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'xinpu',
    label: 'Xinpu',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'jiangzicui',
    label: 'Jiangzicui',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'longshan-temple',
    label: 'Longshan Temple',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'ximen',
    label: 'Ximen',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'taipei-main-st',
    label: 'Taipei Main St.',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'shandao-temple',
    label: 'Shandao Temple',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'zhongxiao-xinsheng',
    label: 'Zhongxiao Xinsheng',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'zhongxiao-fuxing',
    label: 'Zhongxiao Fuxing',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'zhongxiao-dunhua',
    label: 'Zhongxiao Dunhua',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'sun-yat-sen-memorial-hall',
    label: 'Sun Yat Sen Memorial Hall',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'taipei-city-hall',
    label: 'Taipei City Hall',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'yongchun',
    label: 'Yongchun',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'houshanpi',
    label: 'Houshanpi',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'kunyang',
    label: 'Kunyang',
    type: 'station',
    searchField: 'near'
  },
  {
    value: 'nangang-exhibition-center',
    label: 'Nangang Exhibition Center',
    type: 'station',
    searchField: 'near'
  }
]

const STATIONS = [{ label: 'Red Line', options: RED_LINE }]
  .concat({ label: 'Blue Line', options: BLUE_LINE })
  .concat({ label: 'Brown Line', options: BROWN_LINE })
  .concat({ label: 'Green Line', options: GREEN_LINE })
  .concat({ label: 'Yellow Line', options: YELLOW_LINE })

const SCHOOLS = [
  {
    value: 'national-taipei-university-of-business',
    label: 'National Taipei University of Business',
    type: 'school',
    searchField: 'near'
  },
  {
    value: 'tatung-university',
    label: 'Tatung University',
    type: 'school',
    searchField: 'near'
  },
  {
    value: 'shih-chien-university',
    label: 'Shih Chien University',
    type: 'school',
    searchField: 'near'
  },
  {
    value: 'national-taipei-university-of-technology',
    label: 'National Taipei University of Technology',
    type: 'school',
    searchField: 'near'
  },
  {
    value: 'national-taiwan-university',
    label: 'National Taiwan University',
    type: 'school',
    searchField: 'near'
  },
  {
    value: 'national-taiwan-university-of-science-and-technology',
    label: 'National Taiwan University of Science and Technology',
    type: 'school',
    searchField: 'near'
  },
  {
    value: 'national-taiwan-normal-university',
    label: 'National Taiwan Normal University',
    type: 'school',
    searchField: 'near'
  },
  {
    value: 'taipei-medical-university',
    label: 'Taipei Medical University',
    type: 'school',
    searchField: 'near'
  },
  {
    value: 'chinese-culture-university',
    label: 'Chinese Culture University',
    type: 'school',
    searchField: 'near'
  },
  {
    value: 'soochow-university',
    label: 'Soochow University',
    type: 'school',
    searchField: 'near'
  },
  {
    value: 'ming-chuan-university',
    label: 'Ming Chuan University',
    type: 'school',
    searchFied: 'near'
  },
  {
    value: 'taipei-national-university-of-the-arts',
    label: 'Taipei National University of the Arts',
    type: 'school',
    searchField: 'near'
  },
  {
    value: 'national-yang-ming-university',
    label: 'National Yang Ming University',
    type: 'school',
    searchField: 'near'
  },
  {
    value: 'shih-hsin-university',
    label: 'Shih Hsin University',
    type: 'school',
    searchField: 'near'
  },
  {
    value: 'national-chengchi-university',
    label: 'National Chengchi University',
    type: 'school',
    searchField: 'near'
  },
  {
    value: 'china-university-of-technology',
    label: 'China University of Technology',
    type: 'school',
    searchField: 'near'
  },
  {
    value: 'national-taipei-university-of-education',
    label: 'National Taipei University of Education',
    type: 'school',
    searchField: 'near'
  },
  {
    value: 'national-taiwan-college-of-performing-arts',
    label: 'National Taiwan College of Performing Arts',
    type: 'school',
    searchField: 'near'
  }
]

export default {
  stations: STATIONS,
  schools: SCHOOLS
}
