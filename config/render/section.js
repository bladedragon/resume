/**
 * 对文段的一个简单封装
 */
const p = (left = '', right = '') => {
  return { left, right }
}
/**
 * header
 * 默认将内容转为h4
 */
const h = (left = '', right = '') => {
  return { left: `#### ${left}`, right: `#### ${right}` }
}


/**
 * 正文部分
 * 说明：本模版在pc端和打印端采用两栏式显示，手机端采用单栏
 * 请自己判断并适应页面尺寸
 */
export default [
    /**
     * 每一个小模块，都有以下几个配置项：
     * title： 顶部名称栏
     * content: 里面的内容，需要注意的是每一条内容都会换行
     */
    {
      title: '项目经历',
      content: [
        /**
         * 文章正文部分
         * left, right: 需要显示的文字，支持 b, i, a 等html标签以及一切markdown文本，请自由配置
         */
        h(`**多云离线大数据弹性平台 · 项目开发**`, ),
        p(`- *项目简介：* 改造大数据计算底座，将大数据技术落地海外多云环境，利用云上弹性资源优势，结合内部技术演进，发挥计算优势，提高用户体验，实现降本增效。`),
        p(`- *项目职能：* 负责调研多家云厂商（AWS、阿里云、腾讯云、火山云）的计算集群与大数据云化解决方案，了解各家产品特性并主导对比选型，将自研技术落地三方云底座；参与<mark>离线计算组件Spark、Livy、Oflow等适配k8s</mark>, 从底层完整搭建海外大数据弹性平台，在享受云厂商的方案红利同时，充分发挥自研技术优势，为公司带来切实的成本收益。`),
        h(`**S3A FastCommitter · 系统开发**`, `[Source](http://note.zblade.top/Hadoop-CommitProtocol-jie-shao)`),
        p(`- *项目简介：* 在海外大数据上云的过程中，发现由于从hdfs转成对象存储，原生Hadoop文件提交协议的性能无法满足业务需求，因此调研了AWS S3上写入文件的最佳实践，参考了Hadoop在s3提交文件的最新进展，基于s3的特性开发了新的文件提交器：FastCommitter。`),
        p(`- *项目职能：* 独立负责开发FastCommitter，实现过程参考了Hadoop S3ACommitter, <mark>基于S3 MultipartUpload的特点，异步上传文件块，提高了文件上传的效率</mark>；同时结合业务特性，支持Spark动态分区重写机制；相比hadoop默认文件提交器，在特定场景的提交速度可以快<mark>100%</mark>，同时s3请求数降低<mark>50%</mark>`),
        h(`**Spark引擎HBO优化 · 系统开发**`, ),
        p(`- *项目简介：* 线上较多作业参数设置存在虚位，资源利用率不高；离线作业在周期调度时的资源需求相对稳定，但是定时分配资源的策略不够灵活，也无法完全拟合实际资源使用。因为为了精细化分配作业资源，我们在接入层和计算层实现HBO，基于提交作业的历史信息建立预测模型，利用<mark>时序预测算法</mark>动态设置资源参数，优化作业资源。`),
        p(`- *项目职能：* 负责设计和实现Spark基于HBO的优化改造。为了获取真实内存使用，上报持续引用的堆空间大小来作为当前作业真实使用堆内内存供模型预测；并通过改造动态资源分配机制实现spark按<mark>stage级别动态调整内存参数</mark>，合理申请内存，帮助实现集群资源的最大化利用。该方案已经申请相关专利。`), 
        h(`**Shuttle on 向量化引擎 · 系统开发**`, ),
        p(`- *项目简介：* Shuttle是内部自研的Shuffle Service组件。向量化引擎Velox在执行Shuffle时和传统的Shuffle存在一定区别，主要由于velox基于列式数据计算，因为需要改造Shuffle Service使其实现列式shuffle。`),
        p(`- *项目职能：* <mark>独立负责Shuffle Service适配列式Shuffle</mark>的部分。参考Gluten在Shuffle上的实现，实现了列式Shuffle的客户端，并通过JNI让Shuttle的客户端传入C++环境执行。同时结合列式计算的特殊场景，在传输上进行了优化，避免网络拥塞，保证Shuffle数据flighting时的性能。`),  
        
        // h(`**Oflow核心链路基线建设 · 项目开发**`, `[Source](https://github.com/bladedragon/JobHunter)`),
        // p(`- *项目简介：* 上游业务部门的产出依赖下游多个业务数据的支撑，这些任务存在复杂的依赖和归属关系，推动各部门分别治理成本较高且收效甚微，因此借助Oflow对全局数据的把握，从业务链路出发，设置准点基线进行重点保障`),
        // p(`- *项目职能：* 利用关键路径算法实现核心链路定位，结合历史信息预测任务执行时间，构成链路保障基线, 当任务超过基线时间时，自动通知业务负责人，实现链路高效保障;以核心链路和任务预期完成时间为基础，动态划分任务优先级，与Yarn交互实现资源的差异供给，在高峰期资源紧张时，基于任务优先级，优先满足关键业务的资源保障，保障重点数据产出。`),
        // h(`**GO 职前 大学生求职平台 · 微信小程序开发**`, `[Source](https://github.com/bladedragon/JobHunter)`),
        // p(`- *项目简介：* 项目提供大学生就业招聘信息聚合，学生端上传简历，下单订阅服务；导师端线上发布服务，提供线上线下面试指导、修改简历等功能`),
        // p(`- *项目职能：* 采用前后端分离的开发模式，主要负责后台api设计，以RESTful的架构风格，基于Springboot框架进行开发；针对不同用户角色，采用JWT认证用户登录进行权限控制；使用Mybatis作为ORM框架，对数据库独立进行设计规划，借助事务和redis分布式锁保障关键数据的完整性和一致性；实现文件的上传下载，并在服务器端部署nginx实现反向代理`),
       
        // h(`**掌上重邮 智慧校园服务App · 后端部分业务API**`, `*[Source](https://github.com/bladedragon/some_APIs)*`),
        // p(`- *项目简介：* 重邮首款整合校园信息与生活的APP，覆盖全校2万余人,通过软件随时了解课程表,教室,支持重邮资讯了解,活动通知等。主要负责部分接口的重构`),
        // p(`- *项目职能：* 负责迭代空教室实时查询、教务在线新闻信息爬取，成绩查询等部分接口；采用正则表达式爬取教务在线的新闻列表、空教室列表；并转换成标准Json格式输出；利用AOP+注解进行切片实现数据的自动日志生成和缓存，利用redis做定期缓存，减轻读取压力`),
       
        // h(`**领奖系统 学生部门领奖工具 · 后台管理系统**`,`[link](http://www.zblade.top:90/prize_page/index.html#/) [Source](https://github.com/bladedragon/PrizeTool)`),
        // p(`- *项目简介：* 针对非技术人员开发领奖后台管理页面，实现注册活动，发布领奖通知，扫码领奖等功能，通过对接重邮小帮手（全校关注第一的微信公众号），及时推送消息通知，实现学生的快速准确领奖和开奖方对用户数据统计`),
        // p(`- *项目职能：* 前后端分离开发后台管理系统，针对登录用户进行权限控制，Mysql+Redis的数据库设计对热点数据进行缓存，优化SQL语句，实现更合理的分页查询，使用多数据源实现核心数据的隔离；利用线程池+多线程技术发送领奖消息；利用微信公众号提供接口直接推送消息到订阅用户；后台结合第三方插件解析用户数据形成Excel表格直接下载`),
      ]
    },
    {
      title: '项目经历',
      content: [
        /**
         * 文章正文部分
         * left, right: 需要显示的文字，支持 b, i, a 等html标签以及一切markdown文本，请自由配置
         */
        
        h(`**Oflow核心链路基线建设 · 项目开发**`, ),
        p(`- *项目简介：* Oflow是离线业务数据治理的入口。上游业务部门的产出依赖下游多个业务数据的支撑，这些任务存在复杂的依赖和归属关系，推动各部门分别治理成本较高且收效甚微，因此借助Oflow对全局数据的把握，从业务链路出发，设置准点基线进行重点保障`),
        p(`- *项目职能：* 负责实现基线的确立和优先级策略的实现。利用<mark>关键路径算法</mark>实现核心链路定位，结合历史信息预测任务执行时间，构成链路保障基线；在任务执行时，<mark>动态计算关键路径</mark>，快速发现影响链路的核心任务；以核心链路和任务预期完成时间为基础，<mark>动态划分任务优先级</mark>，上报yarn实现资源的差异供给，在高峰期资源紧张时，基于任务优先级，优先满足关键业务的资源保障，保障重点数据产出。`),
        // h(`**GO 职前 大学生求职平台 · 微信小程序开发**`, `[Source](https://github.com/bladedragon/JobHunter)`),
        // p(`- *项目简介：* 项目提供大学生就业招聘信息聚合，学生端上传简历，下单订阅服务；导师端线上发布服务，提供线上线下面试指导、修改简历等功能`),
        // p(`- *项目职能：* 采用前后端分离的开发模式，主要负责后台api设计，以RESTful的架构风格，基于Springboot框架进行开发；针对不同用户角色，采用JWT认证用户登录进行权限控制；使用Mybatis作为ORM框架，对数据库独立进行设计规划，借助事务和redis分布式锁保障关键数据的完整性和一致性；实现文件的上传下载，并在服务器端部署nginx实现反向代理`),
       
        // h(`**掌上重邮 智慧校园服务App · 后端部分业务API**`, `*[Source](https://github.com/bladedragon/some_APIs)*`),
        // p(`- *项目简介：* 重邮首款整合校园信息与生活的APP，覆盖全校2万余人,通过软件随时了解课程表,教室,支持重邮资讯了解,活动通知等。主要负责部分接口的重构`),
        // p(`- *项目职能：* 负责迭代空教室实时查询、教务在线新闻信息爬取，成绩查询等部分接口；采用正则表达式爬取教务在线的新闻列表、空教室列表；并转换成标准Json格式输出；利用AOP+注解进行切片实现数据的自动日志生成和缓存，利用redis做定期缓存，减轻读取压力`),
       
        // h(`**领奖系统 学生部门领奖工具 · 后台管理系统**`,`[link](http://www.zblade.top:90/prize_page/index.html#/) [Source](https://github.com/bladedragon/PrizeTool)`),
        // p(`- *项目简介：* 针对非技术人员开发领奖后台管理页面，实现注册活动，发布领奖通知，扫码领奖等功能，通过对接重邮小帮手（全校关注第一的微信公众号），及时推送消息通知，实现学生的快速准确领奖和开奖方对用户数据统计`),
        // p(`- *项目职能：* 前后端分离开发后台管理系统，针对登录用户进行权限控制，Mysql+Redis的数据库设计对热点数据进行缓存，优化SQL语句，实现更合理的分页查询，使用多数据源实现核心数据的隔离；利用线程池+多线程技术发送领奖消息；利用微信公众号提供接口直接推送消息到订阅用户；后台结合第三方插件解析用户数据形成Excel表格直接下载`),
      ]
    },
    
    {
      title: '工作经历',
      content: [
        // h('**广东OPPO移动通信有限公司 后端开发实习生** ', `*2020.07 ~ 2020.09*`),
        // p(`*实习于OPPO云平台视频云团队*，团队负责视频转码、抽帧，图片裁切等业务，主要使用Go语言开发。在实习期间，参与项目基础业务编写、质量保障，*基于红黑树实现异步任务定时器*，提高项目网络IO性能；*基于HttpAsyncClient编写异步压测工具*，方便对项目API进行压力测试`),
        h('**广东OPPO移动通信有限公司 数据平台工程师** ', `*2021.07 至今*`),
        p(`*所属互联网服务系统云数中心技术架构组*， 从事公司级底层数据平台的开发建设。`),
        p(`1. 参与开发和维护内部<mark>离线大数据任务调度系统Oflow</mark>，保障日均数万任务的正常编排调度。`),
        // h('**广东OPPO移动通信有限公司 数据平台工程师** ', `*2022.10 至今*`),
        p(`2. 参与维护和优化离线大数据计算引擎，支撑公司<mark>PB级离线数据业务</mark>。主要参与Spark计算引擎，以及自研Shuffle Service的开发工作。`),
        // h('**创业经历 · 冷刃科技工作室** [link](https://www.qichacha.com/cbase_17cfe17e737f5ba2a218c531f01ec819)', `*2019.09 2020.06*`),
        // p(`*公司合伙人 & 后台开发负责人*  冷刃科技成立于2018年，从5人项目组起步，现已发展成为有限责任公司，涉足众包市场，建立产品、UI、前端、后台、运维、嵌入式开发、运营等职能部门，拥有成员十余人，现任后台开发负责人，带领团队成员成功构建多个项目`),
        // h(`**重庆邮电大学 · 红岩网校工作站** [link](https://hongyan.cqupt.edu.cn/aboutus/)`, `*2018.09 2019.03*`),
        // p(`*web研发部干事* 工作站成立于2000年，共有成员80余人（Web 研发部 20+），拥有 PRD-UI-前后端开发-运营-迭代的完整开发流程。曾参与开发2个完整项目，也参与上线维护、重构代码、项目迁移/部署`)
        // h(`**重庆邮电大学 · ICT战队**`, `2018.09 2019.11`),
        // p(`*技术组助理* ICT战队是由学生自主管理的本科生科研团队，以传统通信为基础，致力于研究云计算、大数据等前沿ICT技术。曾负责团队搭建中大型网络设计拓扑，提供一套完整的存储、云计算解决方案。同时负责团队日常项目开发，前后端分离建立招新系统`),
        
      ]
    },
    {
      title: '个人能力',
      content: [
        p(`- *熟练掌握基本开发技能*。熟悉Python，Java，Scala等语言，并具有一定的实战经验，熟悉网络、IO、并发等基本原理。`), //熟悉语言
        p(`- 拥有Spark，Hadoop yarn、hdfs, hive等大数据组件的使用经验，*熟悉Spark、Hadoop的实现。*`),    //熟悉大数据组件技术 
        p(`- 了解大数据体系生态，熟悉数据平台的建设，了解流批一体、湖仓一体等。`),  //了解大数据生态，前沿技术，数据湖仓，流批一体
        p(`- *具有一定云原生和大数据相结合实践经验*，熟悉k8s，docker，了解云上云下大数据产品的痛点，了解各家公有云云厂商的产品和技术。`),  //了解云原生和大数据的结合，了解公有云
        p(`- *熟悉linux系统，具备一定的故障排查经验*，了解大数据组件常见性能指标及其优化方法`),  // 熟悉系统排查，性能指标优化
        p(`- *时刻保持好奇心，具有持续学习钻研与创新创造精神，工作积极执行有责任心，有良好沟通协作、分析解决问题、独立思考思辨等能力。*`) //个人爱好  AI
        // p(`- *熟练掌握基本技能。* JAVA基础扎实，理解IO、多线程、集合等基础框架，对JVM有一定的理解如GC、ClassLoader机制`),
        // p('- *熟练掌握Go语言开发*，理解Go并发编程、常用框架；具有生产环境开发经验'),
        // p('- *熟悉Linux系统*，熟练运用常见的linux命令，熟悉并了解nginx相关运行原理，了解docker等工具'),
        // p('- *熟练运用MVC模式*，掌握Spring、MyBatis主流框架，并了解其运行原理；了解常见设计模式并注重代码规范和可维护性'),
        // p('- *对MySQL实战有较多开发和优化经验*，了解NoSQL相关概念，掌握Redis的基本用法'),
        // p('- *其它：* 在校担任班长，有良好的沟通能力；热爱跑步，是校田径队一员，连续两年校运会第一名，曾代表学校参加重庆市大学生运动会。喜欢探索，充满热情'),
        // p('- 日常开发环境为 macOS、VS Code，使用 Linux、Git、Markdown，默认 Google。'),
      ]
    },
    {
      title: '个人爱好',
      content: [
        p(`- 热爱跑步，摄影，半马1h42min；喜欢剪辑和视频制作；最近在玩AIGC的产品，如StableDiffusion、Berts-Vit、Sovit等`), //熟悉语言
      ]
    }
  
  ]
