(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{591:function(e,a,s){"use strict";s.r(a);var t=s(19),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Spark Streaming 作为基于 "),s("strong",[e._v("微批次")]),e._v("（micro-batch）的流处理框架，其流量的理想状态就是官方文档中所说的 “batches of data should be processed as fast as they are being generated”，即每一批次的处理时长 batchprocesstime 需要小于（但是又比较接近）我们设定的批次间隔 batchinterval。如果 batchprocesstime > batchinterval，说明程序的处理能力不足，积累的数据越来越多，最终会造成 Executor 内存溢出。如果 batchprocesstime << batch_interval ，说明系统有很长时间是空闲的，应该适当提升流量。")]),e._v(" "),s("h1",{attrs:{id:"接收数据的两种方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接收数据的两种方式"}},[e._v("#")]),e._v(" 接收数据的两种方式")]),e._v(" "),s("h2",{attrs:{id:"receiver-stream"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#receiver-stream"}},[e._v("#")]),e._v(" Receiver Stream")]),e._v(" "),s("p",[e._v("Spark Streaming 通过 Executor 里的 Receiver 组件源源不断地接收外部数据，并通过 BlockManager 将外部数据转化为 Spark 中的块进行存储。Spark Streaming 中Receiver方式机制的简单框图如下所示。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/kflys/uPic/raw/master/uPic/1612408336019-86afe0a1-6567-4997-8e06-e3300182b2c6.png",alt:"img"}})]),e._v(" "),s("p",[e._v("要限制 Receiver 接收数据的速率，可以在 SparkConf 中设置配置项 "),s("code",[e._v("spark.streaming.receiver.maxRate")]),e._v("，单位为数据条数/秒。")]),e._v(" "),s("p",[e._v("这两种方式的优点是设置非常简单，只需要通过实际业务的吞吐量估算一下使批次间隔和处理耗时基本达到平衡的速率就可以了。缺点是一旦业务量发生变化，就只能手动修改参数并重启 Streaming 程序。另外，人为估计的参数毕竟有可能不准，设置得太激进或太保守都不好")]),e._v(" "),s("h2",{attrs:{id:"direct-stream"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#direct-stream"}},[e._v("#")]),e._v(" Direct Stream")]),e._v(" "),s("p",[e._v("如果采用的是基于 Direct Stream 方式的 Kafka 连接，不经过 Receiver，就得设置配置项 "),s("code",[e._v("spark.streaming.kafka.maxRatePerPartition")]),e._v(" 来限流，单位是每分区的数据条数/秒。")]),e._v(" "),s("h1",{attrs:{id:"spark-streaming-反压机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spark-streaming-反压机制"}},[e._v("#")]),e._v(" Spark Streaming 反压机制")]),e._v(" "),s("p",[e._v("以上两种通过参数控制非常方便，但是一旦业务量发生改变只能手动修改配置文件并重启程序。 所以在Spark 1.5加入了动态流量控制方案。能够根据当前系统的处理速度智能地调节流量阈值，名为 "),s("strong",[e._v("反压（back pressure）机制")]),e._v("。")]),e._v(" "),s("h2",{attrs:{id:"控制反压机制的配置文件如下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#控制反压机制的配置文件如下"}},[e._v("#")]),e._v(" 控制反压机制的配置文件如下：")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("参数名称")]),e._v(" "),s("th",[e._v("默认值")]),e._v(" "),s("th",[e._v("说明")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("spark.streaming.backpressure.enabled")]),e._v(" "),s("td",[e._v("false")]),e._v(" "),s("td",[e._v("是否启用反压机制")])]),e._v(" "),s("tr",[s("td",[e._v("spark.streaming.backpressure.initialRate")]),e._v(" "),s("td",[e._v("无")]),e._v(" "),s("td",[e._v("初始最大接收速率。只适用于Receiver Stream，不适用于Direct Stream。")])]),e._v(" "),s("tr",[s("td",[e._v("spark.streaming.backpressure.rateEstimator")]),e._v(" "),s("td",[e._v("pid")]),e._v(" "),s("td",[e._v("速率控制器,Spark 默认只支持此控制器，可自定义。")])]),e._v(" "),s("tr",[s("td",[e._v("spark.streaming.backpressure.pid.proportional")]),e._v(" "),s("td",[e._v("1.0")]),e._v(" "),s("td",[e._v("只能为非负值。当前速率与最后一批速率之间的差值对总控制信号贡献的权重。用默认值即可。")])]),e._v(" "),s("tr",[s("td",[e._v("spark.streaming.backpressure.pid.integral")]),e._v(" "),s("td",[e._v("0.2")]),e._v(" "),s("td",[e._v("只能为非负值。比例误差累积对总控制信号贡献的权重。用默认值即可")])]),e._v(" "),s("tr",[s("td",[e._v("spark.streaming.backpressure.pid.derived")]),e._v(" "),s("td",[e._v("0")]),e._v(" "),s("td",[e._v("只能为非负值。比例误差变化对总控制信号贡献的权重。用默认值即可")])]),e._v(" "),s("tr",[s("td",[e._v("spark.streaming.backpressure.pid.minRate")]),e._v(" "),s("td",[e._v("100")]),e._v(" "),s("td",[e._v("只能为正数，最小速率")])])])]),e._v(" "),s("h2",{attrs:{id:"基于pid机制的速率估算器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于pid机制的速率估算器"}},[e._v("#")]),e._v(" 基于PID机制的速率估算器")]),e._v(" "),s("p",[s("code",[e._v("org.apache.spark.streaming.scheduler.rate.RateEstimator")]),e._v("是一个很短的特征，其中只给出了计算流量阈值的方法 compute() 的定义。它还有一个伴生对象用于创建速率估算器的实例，其中写出了更多关于反压机制的配置参数。")]),e._v(" "),s("h3",{attrs:{id:"速率估算器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#速率估算器"}},[e._v("#")]),e._v(" 速率估算器")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("private[streaming] trait RateEstimator extends Serializable {\n  def compute(\n      time: Long,\n      elements: Long,\n      processingDelay: Long,\n      schedulingDelay: Long): Option[Double]\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("h3",{attrs:{id:"伴生对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#伴生对象"}},[e._v("#")]),e._v(" 伴生对象")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('\nobject RateEstimator {\n  def create(conf: SparkConf, batchInterval: Duration): RateEstimator =\n    conf.get("spark.streaming.backpressure.rateEstimator", "pid") match {\n      case "pid" =>\n        val proportional = conf.getDouble("spark.streaming.backpressure.pid.proportional", 1.0)\n        val integral = conf.getDouble("spark.streaming.backpressure.pid.integral", 0.2)\n        val derived = conf.getDouble("spark.streaming.backpressure.pid.derived", 0.0)\n        val minRate = conf.getDouble("spark.streaming.backpressure.pid.minRate", 100)\n        new PIDRateEstimator(batchInterval.milliseconds, proportional, integral, derived, minRate)\n      case estimator =>\n        throw new IllegalArgumentException(s"Unknown rate estimator: $estimator")\n    }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br")])]),s("p",[e._v("RateEstimator 的唯一实现类是 PIDRateEstimator，亦即 "),s("code",[e._v("spark.streaming.backpressure.rateEstimator")]),e._v(" 配置项的值只能为 pid。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('private[streaming] class PIDRateEstimator(\n    batchIntervalMillis: Long,\n    proportional: Double,\n    integral: Double,\n    derivative: Double,\n    minRate: Double\n  ) extends RateEstimator with Logging {\n\n  private var firstRun: Boolean = true\n  private var latestTime: Long = -1L\n  private var latestRate: Double = -1D\n  private var latestError: Double = -1L\n\n  require(\n    batchIntervalMillis > 0,\n    s"Specified batch interval $batchIntervalMillis in PIDRateEstimator is invalid.")\n  require(\n    proportional >= 0,\n    s"Proportional term $proportional in PIDRateEstimator should be >= 0.")\n  require(\n    integral >= 0,\n    s"Integral term $integral in PIDRateEstimator should be >= 0.")\n  require(\n    derivative >= 0,\n    s"Derivative term $derivative in PIDRateEstimator should be >= 0.")\n  require(\n    minRate > 0,\n    s"Minimum rate in PIDRateEstimator should be > 0")\n\n  logInfo(s"Created PIDRateEstimator with proportional = $proportional, integral = $integral, " +\n    s"derivative = $derivative, min rate = $minRate")\n\n  def compute(\n      time: Long, // in milliseconds\n      numElements: Long,\n      processingDelay: Long, // in milliseconds\n      schedulingDelay: Long // in milliseconds\n    ): Option[Double] = {\n    logTrace(s"\\ntime = $time, # records = $numElements, " +\n      s"processing time = $processingDelay, scheduling delay = $schedulingDelay")\n    this.synchronized {\n      if (time > latestTime && numElements > 0 && processingDelay > 0) {\n        val delaySinceUpdate = (time - latestTime).toDouble / 1000\n        val processingRate = numElements.toDouble / processingDelay * 1000\n        val error = latestRate - processingRate\n        val historicalError = schedulingDelay.toDouble * processingRate / batchIntervalMillis\n        val dError = (error - latestError) / delaySinceUpdate\n        val newRate = (latestRate - proportional * error -\n                                    integral * historicalError -\n                                    derivative * dError).max(minRate)\n        logTrace(s"""\n            | latestRate = $latestRate, error = $error\n            | latestError = $latestError, historicalError = $historicalError\n            | delaySinceUpdate = $delaySinceUpdate, dError = $dError\n            """.stripMargin)\n        latestTime = time\n        if (firstRun) {\n          latestRate = processingRate\n          latestError = 0D\n          firstRun = false\n          logTrace("First run, rate estimation skipped")\n          None\n        } else {\n          latestRate = newRate\n          latestError = error\n          logTrace(s"New rate = $newRate")\n          Some(newRate)\n        }\n      } else {\n        logTrace("Rate estimation skipped")\n        None\n      }\n    }\n  }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br"),s("span",{staticClass:"line-number"},[e._v("38")]),s("br"),s("span",{staticClass:"line-number"},[e._v("39")]),s("br"),s("span",{staticClass:"line-number"},[e._v("40")]),s("br"),s("span",{staticClass:"line-number"},[e._v("41")]),s("br"),s("span",{staticClass:"line-number"},[e._v("42")]),s("br"),s("span",{staticClass:"line-number"},[e._v("43")]),s("br"),s("span",{staticClass:"line-number"},[e._v("44")]),s("br"),s("span",{staticClass:"line-number"},[e._v("45")]),s("br"),s("span",{staticClass:"line-number"},[e._v("46")]),s("br"),s("span",{staticClass:"line-number"},[e._v("47")]),s("br"),s("span",{staticClass:"line-number"},[e._v("48")]),s("br"),s("span",{staticClass:"line-number"},[e._v("49")]),s("br"),s("span",{staticClass:"line-number"},[e._v("50")]),s("br"),s("span",{staticClass:"line-number"},[e._v("51")]),s("br"),s("span",{staticClass:"line-number"},[e._v("52")]),s("br"),s("span",{staticClass:"line-number"},[e._v("53")]),s("br"),s("span",{staticClass:"line-number"},[e._v("54")]),s("br"),s("span",{staticClass:"line-number"},[e._v("55")]),s("br"),s("span",{staticClass:"line-number"},[e._v("56")]),s("br"),s("span",{staticClass:"line-number"},[e._v("57")]),s("br"),s("span",{staticClass:"line-number"},[e._v("58")]),s("br"),s("span",{staticClass:"line-number"},[e._v("59")]),s("br"),s("span",{staticClass:"line-number"},[e._v("60")]),s("br"),s("span",{staticClass:"line-number"},[e._v("61")]),s("br"),s("span",{staticClass:"line-number"},[e._v("62")]),s("br"),s("span",{staticClass:"line-number"},[e._v("63")]),s("br"),s("span",{staticClass:"line-number"},[e._v("64")]),s("br"),s("span",{staticClass:"line-number"},[e._v("65")]),s("br"),s("span",{staticClass:"line-number"},[e._v("66")]),s("br"),s("span",{staticClass:"line-number"},[e._v("67")]),s("br"),s("span",{staticClass:"line-number"},[e._v("68")]),s("br"),s("span",{staticClass:"line-number"},[e._v("69")]),s("br"),s("span",{staticClass:"line-number"},[e._v("70")]),s("br"),s("span",{staticClass:"line-number"},[e._v("71")]),s("br"),s("span",{staticClass:"line-number"},[e._v("72")]),s("br"),s("span",{staticClass:"line-number"},[e._v("73")]),s("br"),s("span",{staticClass:"line-number"},[e._v("74")]),s("br"),s("span",{staticClass:"line-number"},[e._v("75")]),s("br")])]),s("p",[e._v("PIDRateEstimator 充分运用了工控领域中常见的 PID 控制器的思想。所谓 PID 控制器，即比例（Proportional）-积分（Integral）-微分（Derivative）控制器，本质上是一种反馈回路（loop feedback）。它把收集到的数据和一个设定值（setpoint）进行比较，然后用它们之间的差计算新的输入值，该输入值可以让系统数据尽量接近或者达到设定值。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/kflys/uPic/raw/master/uPic/1612408336034-b645729d-089a-4e46-a213-27c58c4ee95e.png",alt:"img"}})]),e._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/kflys/uPic/raw/master/uPic/1612408336040-11efbff8-4732-47da-a973-8181b686d571.png",alt:"img"}})]),e._v(" "),s("p",[e._v("其中 e(t) 代表误差，即设定值与回授值之间的差。也就是说，比例单元对应当前误差，积分单元对应过去累积误差，而微分单元对应将来误差。控制三个单元的增益因子分别为 Kp、Ki、Kd。")]),e._v(" "),s("p",[e._v("回到 PIDRateEstimator 的源码来，对应以上的式子，我们可以得知：")]),e._v(" "),s("ul",[s("li",[e._v("处理速率的设定值其实就是上一批次的处理速率 latestRate，回授值就是这一批次的速率 processingRate，误差 error 自然就是两者之差。")]),e._v(" "),s("li",[e._v("过去累积误差在这里体现为调度时延的过程中数据积压的速度，也就是schedulingDelay * processingRate / batchInterval。")]),e._v(" "),s("li",[e._v("将来误差就是上面算出的error对时间微分的结果。")])]),e._v(" "),s("p",[e._v("将上面三者综合起来，就可以根据 Spark Streaming 在上一批次以及这一批次的处理速率，估算出一个合适的用于下一批次的流量阈值。比例增益 Kp 由 "),s("code",[e._v("spark.streaming.backpressure.pid.proportional")]),e._v(" 控制，默认值 1.0；积分增益 Ki 由 "),s("code",[e._v("spark.streaming.backpressure.pid.integral")]),e._v(" 控制，默认值0.2；微分增益Kd由 "),s("code",[e._v("spark.streaming.backpressure.pid.derived")]),e._v("控制，默认值0.0。")]),e._v(" "),s("h1",{attrs:{id:"ratecontroller"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ratecontroller"}},[e._v("#")]),e._v(" RateController")]),e._v(" "),s("p",[e._v("动态流量控制器,类"),s("code",[e._v("org.apache.spark.streaming.scheduler.RateController")]),e._v("是动态流量控制器的核心。他有两个子类，分别对应两种数据接收方式。Receiver 和 Direct")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("private[streaming] abstract class RateController(val streamUID: Int, rateEstimator: RateEstimator) extends StreamingListener  // 抽象类继承自 StreamingListener 特征，表示它是一个 Streaming 监听器。\nwith Serializable {\n  // 监听 StreamingListenerBatchCompleted 事件，该事件表示一个批次已经处理完成。\n  override def onBatchCompleted(batchCompleted: StreamingListenerBatchCompleted) {\n    val elements = batchCompleted.batchInfo.streamIdToInputInfo\n\n    for {\n      // 处理完成的时间戳 processingEndTime\n      processingEnd <- batchCompleted.batchInfo.processingEndTime\n      // 实际处理时长 processingDelay（从批次的第一个 job 开始处理到最后一个job处理完成经过的时间）\n      workDelay <- batchCompleted.batchInfo.processingDelay\n      // 调度时延schedulingDelay（从批次被提交给 Streaming JobScheduler 到第一个 job 开始处理经过的时间）。\n      waitDelay <- batchCompleted.batchInfo.schedulingDelay\n      // 批次输入数据的条数 numRecords。\n      elems <- elements.get(streamUID).map(_.numRecords)\n    } computeAndPublish(processingEnd, elems, workDelay, waitDelay)\n  }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br")])]),s("h2",{attrs:{id:"receiverratecontroller"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#receiverratecontroller"}},[e._v("#")]),e._v(" ReceiverRateController")]),e._v(" "),s("p",[e._v("通过 RateController 的子类 ReceiverRateController 实现的 publish() 抽象方法可知，新的流量阈值是发布给了 ReceiverTracker。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/**\n   * A RateController that sends the new rate to receivers, via the receiver tracker.\n   */\nprivate[streaming] class ReceiverRateController(id: Int, estimator: RateEstimator)\nextends RateController(id, estimator) {\n  override def publish(rate: Long): Unit =\n  ssc.scheduler.receiverTracker.sendRateUpdate(id, rate)\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("h3",{attrs:{id:"通过rpc发布流量阈值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过rpc发布流量阈值"}},[e._v("#")]),e._v(" 通过RPC发布流量阈值")]),e._v(" "),s("p",[e._v("回来看 ReceiverTracker，顾名思义，它负责追踪 Receiver 的状态。其 sendRateUpdate() 方法如下")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// 1. endpoint 是 RPC 端点的引用。具体来说，是 ReceiverTrackerEndpoint 的引用\nprivate var endpoint: RpcEndpointRef = null\n\n/** Update a receiver's maximum ingestion rate */\ndef sendRateUpdate(streamUID: Int, newRate: Long): Unit = synchronized {\n  if (isTrackerStarted) {\n    // 2. endpoint 将流 ID 与新的流量阈值包装在 UpdateReceiverRateLimit 消息中发送过去。\n    endpoint.send(UpdateReceiverRateLimit(streamUID, newRate))\n  }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])]),s("ul",[s("li",[e._v("ReceiverTrackerEndpoint 收到这条消息后，会再将其包装为 UpdateRateLimit 消息并发送给 Receiver 注册时的 RPC 端点（位于 ReceiverSupervisorImpl 类中）。")]),e._v(" "),s("li",[e._v("ReceiverTrackerEndpoint 收到这条消息后，会再将其包装为 UpdateRateLimit 消息并发送给 Receiver 注册时的 RPC 端点（位于 ReceiverSupervisorImpl 类中）。")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('/** RpcEndpointRef for receiving messages from the ReceiverTracker in the driver */\nprivate val endpoint = env.rpcEnv.setupEndpoint(\n  "Receiver-" + streamId + "-" + System.currentTimeMillis(), new ThreadSafeRpcEndpoint {\n    override val rpcEnv: RpcEnv = env.rpcEnv\n\n    override def receive: PartialFunction[Any, Unit] = {\n      case StopReceiver =>\n      logInfo("Received stop signal")\n      ReceiverSupervisorImpl.this.stop("Stopped by driver", None)\n      case CleanupOldBlocks(threshTime) =>\n      logDebug("Received delete old batch signal")\n      cleanupOldBlocks(threshTime)\n      case UpdateRateLimit(eps) =>\n      logInfo(s"Received a new rate limit: $eps.")\n      // 1. 收到该消息之后调用了 BlockGenerator.updateRate() 方法。\n      registeredBlockGenerators.asScala.foreach { bg =>\n        bg.updateRate(eps)\n      }\n    }\n  })\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// 2. BlockGenerator 是 RateLimiter 的子类，它负责将收到的流数据转化成块存储。updateRate() 方法是在 RateLimiter 抽象类中实现的。\nprivate[streaming] class BlockGenerator(\n    listener: BlockGeneratorListener,\n    receiverId: Int,\n    conf: SparkConf,\n    clock: Clock = new SystemClock()\n  ) extends RateLimiter(conf) with Logging {}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('// 这里借住了guava的RateLimiter\nimport com.google.common.util.concurrent.{RateLimiter => GuavaRateLimiter}\n\nprivate[receiver] abstract class RateLimiter(conf: SparkConf) extends Logging {\n  // treated as an upper limit\n  private val maxRateLimit = conf.getLong("spark.streaming.receiver.maxRate", Long.MaxValue)\n  private lazy val rateLimiter = GuavaRateLimiter.create(getInitialRateLimit().toDouble)\n  def waitToPush() {\n    rateLimiter.acquire()\n  }\n  /**\n   * Return the current rate limit. If no limit has been set so far, it returns {{{Long.MaxValue}}}.\n   */\n  def getCurrentLimit: Long = rateLimiter.getRate.toLong\n\n  /**\n   * Set the rate limit to `newRate`. The new rate will not exceed the maximum rate configured by\n   * {{{spark.streaming.receiver.maxRate}}}, even if `newRate` is higher than that.\n   *\n   * @param newRate A new rate in records per second. It has no effect if it\'s 0 or negative.\n   */\n  // 3. 更细Rate\n  private[receiver] def updateRate(newRate: Long): Unit =\n    if (newRate > 0) {\n      if (maxRateLimit > 0) {\n        rateLimiter.setRate(newRate.min(maxRateLimit))\n      } else {\n        rateLimiter.setRate(newRate)\n      }\n    }\n  /**\n   * Get the initial rateLimit to initial rateLimiter\n   */\n  private def getInitialRateLimit(): Long = {\n    math.min(conf.getLong("spark.streaming.backpressure.initialRate", maxRateLimit), maxRateLimit)\n  }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://gitee.com/kflys/uPic/raw/master/uPic/1612408336053-25225470-b9ee-4ce8-ae44-d108daf0d70a.png",alt:"img"}})]),e._v(" "),s("h2",{attrs:{id:"directkafkaratecontroller"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#directkafkaratecontroller"}},[e._v("#")]),e._v(" DirectKafkaRateController")]),e._v(" "),s("p",[e._v("DirectKafkaRateController只继承了RateController，并未在 publish() 加过多的内容，我们主要看一下"),s("code",[e._v("DirectKafkaInputDStream")]),e._v("这个类。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("private[spark] class DirectKafkaInputDStream[K, V](\n    _ssc: StreamingContext,\n    locationStrategy: LocationStrategy,\n    consumerStrategy: ConsumerStrategy[K, V],\n    ppc: PerPartitionConfig\n  ) extends InputDStream[ConsumerRecord[K, V]](_ssc) with Logging with CanCommitOffsets \n\n  /**\n   * Asynchronously maintains & sends new rate limits to the receiver through the receiver tracker.\n   异步，通过ReceiverTracker发送新的速率限制\n   */\n  override protected[streaming] val rateController: Option[RateController] = {\n    if (RateController.isBackPressureEnabled(ssc.conf)) {\n      Some(new DirectKafkaRateController(id,\n        RateEstimator.create(ssc.conf, context.graph.batchDuration)))\n    } else {\n      None\n    }\n  }\n\t// 主要实现在这里\n  protected[streaming] def maxMessagesPerPartition(\n    offsets: Map[TopicPartition, Long]): Option[Map[TopicPartition, Long]] = {\n    //   调用RateController 的 def getLatestRate(): Long = rateLimit.get()获取rateLimiter    \n    val estimatedRateLimit = rateController.map(_.getLatestRate())\n\n    // calculate a per-partition rate limit based on current lag\n    val effectiveRateLimitPerPartition = estimatedRateLimit.filter(_ > 0) match {\n      case Some(rate) =>\n      \t// offset range的消息量 totalLag\n        val lagPerPartition = offsets.map { case (tp, offset) =>\n          tp -> Math.max(offset - currentOffsets(tp), 0)\n        }\n        val totalLag = lagPerPartition.values.sum\n\n        lagPerPartition.map { case (tp, lag) =>\n          // 设置的maxRatePerPartition\n          val maxRateLimitPerPartition = ppc.maxRatePerPartition(tp)\n          val backpressureRate = Math.round(lag / totalLag.toFloat * rate)\n          tp -> (if (maxRateLimitPerPartition > 0) {\n        \t // 有效速率=取设置的maxRatePerPartition和预估的速率最小值\n            Math.min(backpressureRate, maxRateLimitPerPartition)} else backpressureRate)\n        }\n      case None => offsets.map { case (tp, offset) => tp -> ppc.maxRatePerPartition(tp) }\n    }\n\n    if (effectiveRateLimitPerPartition.values.sum > 0) {\n      val secsPerBatch = context.graph.batchDuration.milliseconds.toDouble / 1000\n      Some(effectiveRateLimitPerPartition.map {\n        case (tp, limit) => tp -> (secsPerBatch * limit).toLong\n      })\n    } else {\n      None\n    }\n  }\n  /**\n   * A RateController to retrieve the rate from RateEstimator.\n   * 实现RateController抽象类，并未具体实现publish方法，主要用来取回rate数据\n   */\n  private[streaming] class DirectKafkaRateController(id: Int, estimator: RateEstimator)\n    extends RateController(id, estimator) {\n    override def publish(rate: Long): Unit = ()\n  }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br"),s("span",{staticClass:"line-number"},[e._v("38")]),s("br"),s("span",{staticClass:"line-number"},[e._v("39")]),s("br"),s("span",{staticClass:"line-number"},[e._v("40")]),s("br"),s("span",{staticClass:"line-number"},[e._v("41")]),s("br"),s("span",{staticClass:"line-number"},[e._v("42")]),s("br"),s("span",{staticClass:"line-number"},[e._v("43")]),s("br"),s("span",{staticClass:"line-number"},[e._v("44")]),s("br"),s("span",{staticClass:"line-number"},[e._v("45")]),s("br"),s("span",{staticClass:"line-number"},[e._v("46")]),s("br"),s("span",{staticClass:"line-number"},[e._v("47")]),s("br"),s("span",{staticClass:"line-number"},[e._v("48")]),s("br"),s("span",{staticClass:"line-number"},[e._v("49")]),s("br"),s("span",{staticClass:"line-number"},[e._v("50")]),s("br"),s("span",{staticClass:"line-number"},[e._v("51")]),s("br"),s("span",{staticClass:"line-number"},[e._v("52")]),s("br"),s("span",{staticClass:"line-number"},[e._v("53")]),s("br"),s("span",{staticClass:"line-number"},[e._v("54")]),s("br"),s("span",{staticClass:"line-number"},[e._v("55")]),s("br"),s("span",{staticClass:"line-number"},[e._v("56")]),s("br"),s("span",{staticClass:"line-number"},[e._v("57")]),s("br"),s("span",{staticClass:"line-number"},[e._v("58")]),s("br"),s("span",{staticClass:"line-number"},[e._v("59")]),s("br"),s("span",{staticClass:"line-number"},[e._v("60")]),s("br"),s("span",{staticClass:"line-number"},[e._v("61")]),s("br"),s("span",{staticClass:"line-number"},[e._v("62")]),s("br"),s("span",{staticClass:"line-number"},[e._v("63")]),s("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);