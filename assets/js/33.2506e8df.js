(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{519:function(s,n,a){"use strict";a.r(n);var e=a(19),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("ul",[a("li",[s._v("scala有一个十分强大的模式匹配机制，可以应用到很多场合。\n"),a("ul",[a("li",[s._v("switch语句")]),s._v(" "),a("li",[s._v("类型查询")]),s._v(" "),a("li",[s._v("以及快速获取数据")])])]),s._v(" "),a("li",[s._v("并且scala还提供了样例类，对模式匹配进行了优化，可以快速进行匹配。")])]),s._v(" "),a("h2",{attrs:{id:"_1-匹配字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-匹配字符串"}},[s._v("#")]),s._v(" 1 匹配字符串")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//todo:匹配字符串\nobject CaseDemo01 extends App{\n  //定义一个数组\n  val arr=Array("hadoop","zookeeper","spark","storm")\n\n  //随机取数组中的一位，使用Random.nextInt\n  val name = arr(Random.nextInt(arr.length))\n  println(name)\n\n  name match {\n    case "hadoop"     => println("大数据分布式存储和计算框架...")\n    case "zookeeper"  => println("大数据分布式协调服务框架...")\n    case "spark"      => println("大数据分布式内存计算框架...")\n      //表示以上情况都不满足才会走最后一个\n    case _            => println("我不认识你")\n  }\n\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h2",{attrs:{id:"_2-匹配类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-匹配类型"}},[s._v("#")]),s._v(" 2 匹配类型")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//todo:匹配类型\nobject CaseDemo02 extends App{\n  //定义一个数组\n  val arr=Array("hello",1,-2.0,CaseDemo02)\n\n  //随机获取数组中的元素\n  val value=arr(Random.nextInt(arr.length))\n  println(value)\n\n    \n  value match {\n    case x:Int                => println("Int=>"+x)\n    case y:Double if(y>=0)    => println("Double=>"+y)\n    case z:String             => println("String=>"+z)\n    case _                    => throw new Exception("not match exception")\n  }\n\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h2",{attrs:{id:"_3-匹配数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-匹配数组"}},[s._v("#")]),s._v(" 3 匹配数组")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//匹配数组\nobject CaseDemo03 extends App{\n\n  //匹配数组\n  val  arr=Array(1,3,5)\n  arr match{\n    case Array(1,x,y) =>println(x+"---"+y)\n    case Array(1,_*)  =>println("1...")\n    case Array(0)     =>println("only 0")\n    case _            =>println("something else")\n      \n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"_4-匹配集合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-匹配集合"}},[s._v("#")]),s._v(" 4 匹配集合")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//匹配集合\nobject CaseDemo04 extends App{\n\n  val list=List(0,3,6)\n  list match {\n    case 0::Nil        => println("only 0")\n    case 0::tail       => println("0....")\n    case x::y::z::Nil  => println(s"x:$x y:$y z:$z")\n    case _             => println("something else")\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"_5-匹配元组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-匹配元组"}},[s._v("#")]),s._v(" 5 匹配元组")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//匹配元组\nobject CaseDemo05 extends App{\n  \n  val tuple=(1,3,5)\n  tuple match{\n    case (1,x,y)    => println(s"1,$x,$y")\n    case (2,x,y)    => println(s"$x,$y")\n    case _          => println("others...")\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"_6-样例类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-样例类"}},[s._v("#")]),s._v(" 6 样例类")]),s._v(" "),a("ul",[a("li",[s._v("样例类是一种特殊类，它可以用来快速定义一个用于"),a("strong",[s._v("保存数据")]),s._v("的类（类似于Java POJO类），而且它会自动生成apply方法，允许我们快速地创建样例类实例对象。后面在并发编程和spark、flink这些框架也都会经常使用它。")]),s._v(" "),a("li",[s._v("定义样例类\n"),a("ul",[a("li",[s._v("语法结构")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("case class 样例类名(成员变量名1:类型1, 成员变量名2:类型2 ...)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("示例")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 定义一个样例类\n// 样例类有两个成员name、age\ncase class CasePerson(name:String, age:Int)\n\n// 使用var指定成员变量是可变的\ncase class CaseStudent(var name:String, var age:Int)\n\nobject CaseClassDemo {\n  def main(args: Array[String]): Unit = {\n    // 1. 使用new创建实例\n    val zhagnsan = new CasePerson("张三", 20)\n    println(zhagnsan)\n\n    // 2. 使用类名直接创建实例\n    val lisi = CasePerson("李四", 21)\n    println(lisi)\n\n    // 3. 样例类默认的成员变量都是val的，除非手动指定变量为var类型\n    //lisi.age = 22  // 编译错误！age默认为val类型\n\n    val xiaohong = CaseStudent("小红", 23)\n    xiaohong.age = 24\n    println(xiaohong)\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("ul",[a("li",[s._v("样例对象\n"),a("ul",[a("li",[s._v("使用case object可以创建样例对象。样例对象是单例的，而且它"),a("strong",[s._v("没有主构造器")]),s._v("。样例对象是可序列化的。格式：")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("case object 样例对象名\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("示例")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("case class SendMessage(text:String)\n\n// 消息如果没有任何参数，就可以定义为样例对象\ncase object startTask\ncase object PauseTask\ncase object StopTask\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[s._v("样例类和样例对象结合模式使用\n"),a("ul",[a("li",[s._v("示例")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('case class SubmitTask(id: String, name: String)\ncase class HeartBeat(time: Long)\ncase object CheckTimeOutTask\n\nobject CaseDemo06 extends App{\n\n  val arr = Array(CheckTimeOutTask,\n                  HeartBeat(10000), \n                  SubmitTask("0001", "task-0001"))\n\n  arr(Random.nextInt(arr.length)) match {\n      \n       case SubmitTask(id, name) => println(s"id=$id, name=$name")\n       case HeartBeat(time) => println(s"time=$time")\n       case CheckTimeOutTask => println("检查超时")\n\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h2",{attrs:{id:"_7-option类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-option类型"}},[s._v("#")]),s._v(" 7 Option类型")]),s._v(" "),a("ul",[a("li",[s._v("在Scala中Option类型用样例类来表示可能存在或也可能不存在的值")]),s._v(" "),a("li",[s._v("Option类型有2个子类\n"),a("ul",[a("li",[s._v("一个是Some\n"),a("ul",[a("li",[s._v("Some包装了某个值")])])])])])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://kflys.gitee.io/upic/2020/03/31/uPic/kfly-top/scala%E5%AD%A6%E4%B9%A0%E5%85%A5%E9%97%A8/assets/1568271621212.png#height=147&id=vReYE&originHeight=147&originWidth=980&originalType=binary&ratio=1&status=done&style=none&width=980",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("一个是None\n"),a("ul",[a("li",[s._v("None表示没有值")])])])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://kflys.gitee.io/upic/2020/03/31/uPic/kfly-top/scala%E5%AD%A6%E4%B9%A0%E5%85%A5%E9%97%A8/assets/1568271671144.png#height=162&id=gpD2f&originHeight=162&originWidth=998&originalType=binary&ratio=1&status=done&style=none&width=998",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("示例")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('object TestOption {\n  def main(args: Array[String]) {\n    val map = Map("a" -> 1, "b" -> 2)\n      \n    val value: Option[Int] = map.get("b")\n    val v1 =value match {\n      case Some(i) => i\n      case None => 0\n    }\n    println(v1)\n\n    //更好的方式\n    val v2 = map.getOrElse("c", 0)\n    println(v2)\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"_8-偏函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-偏函数"}},[s._v("#")]),s._v(" 8 偏函数")]),s._v(" "),a("ul",[a("li",[s._v("被包在花括号内没有match的一组case语句是一个偏函数")]),s._v(" "),a("li",[s._v("它是PartialFunction[A, B]的一个实例，\n"),a("ul",[a("li",[s._v("A代表输入参数类型")]),s._v(" "),a("li",[s._v("B代表返回结果类型")]),s._v(" "),a("li",[s._v("可以理解为：偏函数是一个参数和一个返回值的函数。")])])]),s._v(" "),a("li",[s._v("示例")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('object TestPartialFunction {\n  // func1是一个输入参数为Int类型，返回值为String类型的偏函数\n  val func1: PartialFunction[Int, String] = {\n    case 1 => "一"\n    case 2 => "二"\n    case 3 => "三"\n    case _ => "其他"\n  }\n\n  def main(args: Array[String]): Unit = {\n    println(func1(1))\n    \n    val list=List(1,2,3,4,5,6)\n\n    //使用偏函数操作\n    val result=list.filter{\n      case x if x >3 => true\n      case _ => false\n    }\n    println(result)\n  }\n\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);