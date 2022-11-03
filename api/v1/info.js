const data = {
  msg: '请求成功',
  status: 200,
  data: [
    {
      "id": 34209,
      "name": "海阔天空",
      "picUrl": "http://p4.music.126.net/8y8KJC1eCSO_vUKf2MyZwA==/109951165796899183.jpg",
      "tns": [],
      "pic_str": "109951165796899183",
      "pic": 109951165796899180
    },
    {
      "id": 78372827,
      "name": "华纳廿三周年纪念精选系列 - B﻿eyond",
      "picUrl": "http://p4.music.126.net/q6cm6Pk70YArijk1_QDoEg==/109951163984013003.jpg",
      "tns": [],
      "pic_str": "109951163984013003",
      "pic": 109951163984013010
    },
    {
      "id": 2921018,
      "name": "Beyond The Story Live 2005",
      "picUrl": "http://p3.music.126.net/0a2NayHgHaf5WQTEYoHahg==/109951163972046213.jpg",
      "tns": [],
      "pic_str": "109951163972046213",
      "pic": 109951163972046200
    },
    {
      "id": 34110,
      "name": "Beyond 25th Anniversary",
      "picUrl": "http://p4.music.126.net/zZtUDuWk6qIe3ezMt4UMjg==/109951165796417308.jpg",
      "tns": [],
      "pic_str": "109951165796417308",
      "pic": 109951165796417310
    }
  ]
}
module.exports = (req, res) => {
  res.send(data)
}