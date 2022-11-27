(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{524:function(_,v,t){"use strict";t.r(v);var d=t(19),r=Object(d.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"日志数据格式说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#日志数据格式说明"}},[_._v("#")]),_._v(" 日志数据格式说明")]),_._v(" "),t("p",[_._v("现在主要用到成都数据已经海口数据，针对成都以及海口数据字段说明如下")]),_._v(" "),t("h2",{attrs:{id:"迹数据格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#迹数据格式"}},[_._v("#")]),_._v(" 迹数据格式")]),_._v(" "),t("p",[_._v("一共五个字段，字段详情参见下表，字段之间使用逗号隔开")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段")]),_._v(" "),t("th",[_._v("名称")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("示例")]),_._v(" "),t("th",[_._v("备注")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("DRIVERID")]),_._v(" "),t("td",[_._v("司机ID")]),_._v(" "),t("td",[_._v("String")]),_._v(" "),t("td",[_._v("glox.jrrlltBMvCh8nxqktdr2dtopmlH")]),_._v(" "),t("td",[_._v("已经脱敏处理")])]),_._v(" "),t("tr",[t("td",[_._v("ORDERID")]),_._v(" "),t("td",[_._v("订单ID")]),_._v(" "),t("td",[_._v("String")]),_._v(" "),t("td",[_._v("jkkt8kxniovIFuns9qrrlvst@iqnpkwz")]),_._v(" "),t("td",[_._v("已经脱敏处理")])]),_._v(" "),t("tr",[t("td",[_._v("TIME")]),_._v(" "),t("td",[_._v("时间戳")]),_._v(" "),t("td",[_._v("String")]),_._v(" "),t("td",[_._v("1501584540")]),_._v(" "),t("td",[_._v("unix时间戳，单位为秒")])]),_._v(" "),t("tr",[t("td",[_._v("LNG")]),_._v(" "),t("td",[_._v("经度")]),_._v(" "),t("td",[_._v("String")]),_._v(" "),t("td",[_._v("104.04392")]),_._v(" "),t("td",[_._v("GCJ-02坐标系")])]),_._v(" "),t("tr",[t("td",[_._v("LAT")]),_._v(" "),t("td",[_._v("纬度")]),_._v(" "),t("td",[_._v("String")]),_._v(" "),t("td",[_._v("30.67518")]),_._v(" "),t("td",[_._v("GCJ-02坐标系")])])])]),_._v(" "),t("p",[_._v("注意：上区域的中所体现的OD数据是相比全城是很小的量，不能反映全城的供需情况\n目前得到的轨迹数据中可以看到时间不是按照递增的方式进行排列，在进行数据处理时需要先对数据按照时间进行升序排列(轨迹点的产生的时间是递增的，从时间的角度才能看出轨迹的运行规律),排序后便于在地图上进行轨迹的呈现.")]),_._v(" "),t("h2",{attrs:{id:"订单数据格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#订单数据格式"}},[_._v("#")]),_._v(" 订单数据格式")]),_._v(" "),t("p",[_._v("海口订单数据一共24个字段，字段之间使用\\t制表符分开，字段详情参见下表")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段ID")]),_._v(" "),t("th",[_._v("字段名称")]),_._v(" "),t("th",[_._v("字段样本描述")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("order_id")]),_._v(" "),t("td",[_._v("订单ID")]),_._v(" "),t("td",[_._v("string类型且已脱敏")])]),_._v(" "),t("tr",[t("td",[_._v("product_id")]),_._v(" "),t("td",[_._v("产品线ID")]),_._v(" "),t("td",[_._v("1滴滴专车， 2滴滴企业专车， 3滴滴快车， 4滴滴企业快车")])]),_._v(" "),t("tr",[t("td",[_._v("city_id")]),_._v(" "),t("td",[_._v("城市ID")]),_._v(" "),t("td",[_._v("选取海口当地")])]),_._v(" "),t("tr",[t("td",[_._v("district")]),_._v(" "),t("td",[_._v("城市区号")]),_._v(" "),t("td",[_._v("海口区号")])]),_._v(" "),t("tr",[t("td",[_._v("county")]),_._v(" "),t("td",[_._v("二级区县")]),_._v(" "),t("td",[_._v("记录区县id")])]),_._v(" "),t("tr",[t("td",[_._v("type")]),_._v(" "),t("td",[_._v("订单时效")]),_._v(" "),t("td",[_._v("0实时，1预约")])]),_._v(" "),t("tr",[t("td",[_._v("combo_type")]),_._v(" "),t("td",[_._v("订单类型")]),_._v(" "),t("td",[_._v("1包车，4拼车")])]),_._v(" "),t("tr",[t("td",[_._v("traffic_type")]),_._v(" "),t("td",[_._v("交通类型")]),_._v(" "),t("td",[_._v("1企业时租，2企业接机套餐，3企业送机套餐，4拼车，5接机，6送机，302跨城拼车")])]),_._v(" "),t("tr",[t("td",[_._v("passenger_count")]),_._v(" "),t("td",[_._v("乘车人数")]),_._v(" "),t("td",[_._v("拼车场景，乘客选择的乘车人数")])]),_._v(" "),t("tr",[t("td",[_._v("driver_product_id")]),_._v(" "),t("td",[_._v("司机子产品线")]),_._v(" "),t("td",[_._v("司机所属产品线")])]),_._v(" "),t("tr",[t("td",[_._v("start_dest_distance")]),_._v(" "),t("td",[_._v("乘客发单时出发地与终点的预估路面距离")]),_._v(" "),t("td",[_._v("乘客发单时，出发地与终点的预估路面距离")])]),_._v(" "),t("tr",[t("td",[_._v("arrive_time")]),_._v(" "),t("td",[_._v("司机点击‘到达’的时间")]),_._v(" "),t("td",[_._v("司机点击‘到达目的地’的时间")])]),_._v(" "),t("tr",[t("td",[_._v("departure_time")]),_._v(" "),t("td",[_._v("出发时间")]),_._v(" "),t("td",[_._v("如果是实时单，出发时间(departure_time) 与司机点击‘开始计费’的时间(begin_charge_time)含义相同；如果是预约单，是指乘客填写的出发时间")])]),_._v(" "),t("tr",[t("td",[_._v("pre_total_fee")]),_._v(" "),t("td",[_._v("预估价格")]),_._v(" "),t("td",[_._v("根据用户输入的起始点和目的地预估价格")])]),_._v(" "),t("tr",[t("td",[_._v("normal_time")]),_._v(" "),t("td",[_._v("时长")]),_._v(" "),t("td",[_._v("分钟")])]),_._v(" "),t("tr",[t("td",[_._v("bubble_trace_id")]),_._v(" "),t("td"),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("product_1level")]),_._v(" "),t("td",[_._v("一级业务线")]),_._v(" "),t("td",[_._v("1专车，3快车，9豪华车")])]),_._v(" "),t("tr",[t("td",[_._v("dest_lng")]),_._v(" "),t("td",[_._v("终点经度")]),_._v(" "),t("td",[_._v("对应乘客填写的目的地对应的经度")])]),_._v(" "),t("tr",[t("td",[_._v("dest_lat")]),_._v(" "),t("td",[_._v("终点纬度")]),_._v(" "),t("td",[_._v("对应乘客填写的目的地对应的纬度")])]),_._v(" "),t("tr",[t("td",[_._v("starting_lng")]),_._v(" "),t("td",[_._v("起点经度")]),_._v(" "),t("td",[_._v("对应乘客填写的起始点对应的经度")])]),_._v(" "),t("tr",[t("td",[_._v("year")]),_._v(" "),t("td",[_._v("年份")]),_._v(" "),t("td",[_._v("对应出行的年份")])]),_._v(" "),t("tr",[t("td",[_._v("month")]),_._v(" "),t("td",[_._v("月份")]),_._v(" "),t("td",[_._v("对应出行的月份")])]),_._v(" "),t("tr",[t("td",[_._v("day")]),_._v(" "),t("td",[_._v("日期")]),_._v(" "),t("td",[_._v("对应出行的日期")])])])]),_._v(" "),t("p",[_._v("开放城市：海口\n开放范围：2017年5月1日 - 2017年10月31日\n数据内容：上述时间范围内的海口市每天订单数据，包含订单的起终点经纬度以及订单类型、出行品类、乘车人数的订单属性数据。其中所有涉及个人信息的数据都经过了匿名化处理。")]),_._v(" "),t("p",[_._v("1. 保留起终点经纬度小数点后四位，可能导致与真实环境坐标存在偏差，误差范围大概在十几米到几十米左右。2. 针对独门独户上下车点进行技术脱敏处理，将上下车点漂移到小区门口或街道上。")])])}),[],!1,null,null,null);v.default=r.exports}}]);