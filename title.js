var subject = [{
    "order": 3, //题目编号，需从1开始，依次增加
    "type": "single", //题目类型，single单选、multiple多选、judge判断、indeterminate不定项
    "describe": "在数据库的三级模式结构中，内模式有", //题目描述
    "option": ["1个", "2个", "3个", "任意多个"], //各个选项描述
    "solution": "A", //参考答案
    "explain": "", //题目解析
    "answer": "", //考生答案
    "mark": false, //是否标记，初始值为0，表示未标记，此项会根据具体情况更改，不用人工自己操作
    "score": 1, //该题目满分
},
{
    "order": 3,
    "type": "single",
    "describe": "关系代数中，连接操作由（）组合而成",
    "option": ["笛卡尔乘机和选择", "投影、选择、笛卡尔乘机", "投影和笛卡尔乘机", "投影和选择"],
    "solution": "B",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "设关系R和S的属性个数分别为3和2，那么  与下式（ ）等价",
    "option": ["", "1>5 R*S", "", ""],
    "solution": "B",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "设有一个关系：DEPT(DNO，DNAME)，如果要找出倒数第三个字母为W，并且至少包含4个字母的DNAME，则查询条件子句应写成 WHERE DNAME LIKE( )",
    "option": ["'_ _W _%'", "'_ W _ %'", "'_ W _ _'", "' _ %W _ _'"],
    "solution": "D",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3, //题目编号，需从1开始，依次增加
    "type": "single", //题目类型，single单选、multiple多选、judge判断、indeterminate不定项
    "describe": "在数据系统中，对存取权限的定义称为（ ）", //题目描述
    "option": ["命令", "授权", "定义", "审计"], //各个选项描述
    "solution": "B", //参考答案
    "explain": "", //题目解析
    "answer": "", //考生答案
    "mark": false, //是否标记，初始值为0，表示未标记，此项会根据具体情况更改，不用人工自己操作
    "score": 1, //该题目满分
},
{
    "order": 3,
    "type": "single",
    "describe": "设关系R是3NF模式，那么下列说明不正确的是（ ）",
    "option": ["R必是2NF模式", "R必不是BCNF模式", "R可能不是BCNF", "R必是1NF模式"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "单个用户使用的数据视图的描述称为 （ ）",
    "option": ["外模式", "概念模式", "内模式", "存储模式"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "当关系R和S自然联接时，能够把R和S原该舍弃的元组放到结果关系中的操作是（ ）",
    "option": ["左外联接", "右外联接", "外部并", "外联接"],
    "solution": "D",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},{
    "order": 3, //题目编号，需从1开始，依次增加
    "type": "single", //题目类型，single单选、multiple多选、judge判断、indeterminate不定项
    "describe": "下列聚合函数中不忽略空值 (null) 的是（ ）", //题目描述
    "option": ["SUM (列名)", "MAX (列名)", "COUNT ( * )", "AVG (列名)"], //各个选项描述
    "solution": "C", //参考答案
    "explain": "", //题目解析
    "answer": "", //考生答案
    "mark": false, //是否标记，初始值为0，表示未标记，此项会根据具体情况更改，不用人工自己操作
    "score": 1, //该题目满分
},
{
    "order": 3,
    "type": "single",
    "describe": "SQL中，下列涉及空值的操作，不正确的是 （ ）",
    "option": ["AGE IS NULL", "AGE IS NOT NULL", "AGE = NULL", "NOT (AGE IS NULL)"],
    "solution": "C",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "四元关系R为：R(A,B,C,D)，则（ ）",
    "option": ["为属性值为A,C的两列组成新关系", "为属性值为1,3的两列组成新关系", "和是等价的", "和是不等价的"],
    "solution": "C",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "为了使索引键的值在基本表中唯一，在建立索引的语句中应使用保留字( )",
    "option": ["UNIQUE", "COUNT", "DISTINCT", "UNION"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},{
    "order": 3, //题目编号，需从1开始，依次增加
    "type": "single", //题目类型，single单选、multiple多选、judge判断、indeterminate不定项
    "describe": "子模式DDL用来描述 ( )", //题目描述
    "option": ["数据库的总体逻辑结构", "数据库的局部逻辑结构", "数据库的物理存储结构", "数据库的概念结构"], //各个选项描述
    "solution": "B", //参考答案
    "explain": "", //题目解析
    "answer": "", //考生答案
    "mark": false, //是否标记，初始值为0，表示未标记，此项会根据具体情况更改，不用人工自己操作
    "score": 1, //该题目满分
},
{
    "order": 3,
    "type": "single",
    "describe": "在关系模型中，关系的“元数”(arity)是指( )",
    "option": ["行数", "元组个数", "关系个数", "列数"],
    "solution": "D",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "有一个关系：学生（学号，姓名，系别），规定学号的值域是8个数字组成的字符串，这一规则属于",
    "option": ["实体完整性规则", "引用完整性约束", "用户自定义完整性规则", "关键字完整性约束"],
    "solution": "C",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "设计性能较优的关系模式称为规范化，规范化的主要理论依据是( )",
    "option": ["关系规范化理论","关系运算理论","代数运算理论","数理逻辑理论"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},{
    "order": 3, //题目编号，需从1开始，依次增加
    "type": "single", //题目类型，single单选、multiple多选、judge判断、indeterminate不定项
    "describe": "假如采用关系数据库系统来实现应用，在数据库设计的( )阶段，需要将ER模型转换为关系数据模型。", //题目描述
    "option": ["概念设计", "物理设计", "逻辑设计", "运行阶段"], //各个选项描述
    "solution": "C", //参考答案
    "explain": "", //题目解析
    "answer": "", //考生答案
    "mark": false, //是否标记，初始值为0，表示未标记，此项会根据具体情况更改，不用人工自己操作
    "score": 1, //该题目满分
},
{
    "order": 3,
    "type": "single",
    "describe": "把ER模型转变成关系模型的过程，属于数据库的( )",
    "option": ["需求分析", "概念设计", "逻辑设计", "物理设计"],
    "solution": "C",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "关系数据库中的视图属于4个数据抽象级别中的( )",
    "option": ["概念模型", "外部模型", "逻辑模型", "物理模型"],
    "solution": "B",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "SQL语言中，删除一个表的命令是( )",
    "option": ["DELETE", "DROP", "CLEAR", "REMORE"],
    "solution": "B",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},{
    "order": 3, //题目编号，需从1开始，依次增加
    "type": "single", //题目类型，single单选、multiple多选、judge判断、indeterminate不定项
    "describe": "关系R（A，B）和S（B，C）中分别有10个和15个元组，属性B是R的主键，则     中元组数目的范围是(      )", //题目描述
    "option": ["（0，15）", "（10，15）", "（10，25）", "（0，150）"], //各个选项描述
    "solution": "D", //参考答案
    "explain": "", //题目解析
    "answer": "", //考生答案
    "mark": false, //是否标记，初始值为0，表示未标记，此项会根据具体情况更改，不用人工自己操作
    "score": 1, //该题目满分
},
{
    "order": 3,
    "type": "single",
    "describe": "有一个网络数据库应用系统，其中一台计算机A存有DBMS软件、所有用户数据和应用程序，其余各节点作为终端通过通信线路向A发出数据库应用请求，这种方式属于( )",
    "option": ["集中式数据库体系结构", "并形式数据库体系结构", "客户机/服务器数据库体系结构", "分布式数据库体系结构"],
    "solution": "C",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "下列四项中，必须进行查询优化的是( )",
    "option": ["关系数据库", "网状数据库", "层次数据库", "非关系模型"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "在视图上不能完成的操作是( )",
    "option": ["更新视图", "查询", "在视图上定义新的基本表", "在视图上定义新视图"],
    "solution": "C",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},{
    "order": 3, //题目编号，需从1开始，依次增加
    "type": "single", //题目类型，single单选、multiple多选、judge判断、indeterminate不定项
    "describe": "关系数据模型的三个组成部分中，不包括( )", //题目描述
    "option": ["数据结构", "恢复", "完整性规则", "数据操作"], //各个选项描述
    "solution": "D", //参考答案
    "explain": "", //题目解析
    "answer": "", //考生答案
    "mark": false, //是否标记，初始值为0，表示未标记，此项会根据具体情况更改，不用人工自己操作
    "score": 1, //该题目满分
},
{
    "order": 3,
    "type": "single",
    "describe": "数据库的并发操作可能带来的问题包括( )",
    "option": ["丢失更新","数据独立性会提高","非法用户的使用","增加数据冗余度"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "在基本SQL语言中，不可以实现( )",
    "option": ["定义视图","定义基表","查询视图和基表","并发控制"],
    "solution": "D",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "下列四项中，不属于数据库系统的特点的是（ ）",
    "option": ["数据结构化","数据由DBMS统一管理和控制","数据冗余度大","数据独立性高"],
    "solution": "C",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},{
    "order": 3, //题目编号，需从1开始，依次增加
    "type": "single", //题目类型，single单选、multiple多选、judge判断、indeterminate不定项
    "describe": "概念模型是现实世界的第一层抽象，这一类模型中最著名的模型是（ ）", //题目描述
    "option": ["层次模型","关系模型","网状模型","实体-联系模型"], //各个选项描述
    "solution": "D", //参考答案
    "explain": "", //题目解析
    "answer": "", //考生答案
    "mark": false, //是否标记，初始值为0，表示未标记，此项会根据具体情况更改，不用人工自己操作
    "score": 1, //该题目满分
},
{
    "order": 3,
    "type": "single",
    "describe": "关系数据模型的基本数据结构是（ ）",
    "option": ["树", "图", "索引", "关系"],
    "solution": "D",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "有一名为“列车运营”实体，含有：车次、日期、实际发车时间、实际抵达时间、情况摘要等属性，该实体主码是（ ）",
    "option": ["车次", "日期", "车次+日期", "车次+情况摘要"],
    "solution": "C",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "在E-R模型中，如果有3个不同的实体型，3个m:n联系，根据E-R模型转换为关系模型的规则，转换后关系的数目为（ ）",
    "option": ["4", "5" ,"6", "7"],
    "solution": "C",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},{
    "order": 3, //题目编号，需从1开始，依次增加
    "type": "single", //题目类型，single单选、multiple多选、judge判断、indeterminate不定项
    "describe": "若事务T对数据对象A加上S锁，则（ ）", //题目描述
    "option": ["事务T可以读A和修改A，其它事务只能再对A加S锁，而不能加X 锁", "事务T可以读A但不能修改A，其它事务只能再对A加S锁，而不能加X 锁", "事务T可以读A但不能修改A，其它事务能对A加S锁和X锁", "事务T可以读A和修改A，其它事务能对A加S锁和X锁"], //各个选项描述
    "solution": "B", //参考答案
    "explain": "", //题目解析
    "answer": "", //考生答案
    "mark": false, //是否标记，初始值为0，表示未标记，此项会根据具体情况更改，不用人工自己操作
    "score": 1, //该题目满分
},
{
    "order": 3,
    "type": "single",
    "describe": "数据库系统的特点是（ ）、数据独立、减少数据冗余、避免数据不一致和加强了数据保护",
    "option": ["数据共享", "数据存储", "数据应用", "数据保密"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "关系模型的数据结构是（ ）",
    "option": ["层次结构", "二维表结构", "网状结构", "封装结构"],
    "solution": "B",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "关系模型中，一个候选码（ ）",
    "option": ["可由多个任意属性组成", "至多由一个属性组成", "可由一个或多个其值能唯一标识该关系模式中任何元组的属性组成", "必须由多个属性组成"],
    "solution": "C",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},{
    "order": 3, //题目编号，需从1开始，依次增加
    "type": "single", //题目类型，single单选、multiple多选、judge判断、indeterminate不定项
    "describe": "SQL语言具有（ ）的功能", //题目描述
    "option": ["关系规范化、数据操纵、数据控制", "数据定义、数据操纵、数据控制", "数据定义、数据操纵、数据控制", "数据定义、关系规范化、数据操纵"], //各个选项描述
    "solution": "B", //参考答案
    "explain": "", //题目解析
    "answer": "", //考生答案
    "mark": false, //是否标记，初始值为0，表示未标记，此项会根据具体情况更改，不用人工自己操作
    "score": 1, //该题目满分
},
{
    "order": 3,
    "type": "single",
    "describe": "在R(U)中，如果X→Y，并且对于X的任何一个真子集X'，都有X'→Y，则（ ）",
    "option": ["Y函数依赖于X", "Y对X完全函数依赖", "X为U的候选码", "R属于2NF"],
    "solution": "B",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "在数据库设计中， E－R图产生于（ ）",
    "option": ["需求分析阶段", "物理设计阶段", "逻辑设计阶段", "概念设计阶段"],
    "solution": "D",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "在合并分E-R图时必须消除各分图中的不一致。各分E-R图之间的冲突主要类，即属性冲突、命名冲突和结构冲突，其中命名冲突是指（ ）",
    "option": ["命名太长或太短", "同名异义或同义异名", "属性类型冲突", "属性取值单位冲突"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},{
    "order": 3, //题目编号，需从1开始，依次增加
    "type": "single", //题目类型，single单选、multiple多选、judge判断、indeterminate不定项
    "describe": "事务是数据库运行的基本单位。如果一个事务执行成功，则全部更新提交；如果一个事务执行失败，则已做过的更新被恢复原状，好像整个事务从未有过这些更新，这样保持了数据库处于（ ）状态", //题目描述
    "option": ["安全性", "一致性", "完整性", "可靠性"], //各个选项描述
    "solution": "B", //参考答案
    "explain": "", //题目解析
    "answer": "", //考生答案
    "mark": false, //是否标记，初始值为0，表示未标记，此项会根据具体情况更改，不用人工自己操作
    "score": 1, //该题目满分
},
{
    "order": 3,
    "type": "single",
    "describe": "数据库应用程序的编写是基于三级模式结构中的（ ）",
    "option": ["外模式", "逻辑模式", "内模式", "概念模式"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "下列不属于并发操作带来的问题是（ ）",
    "option": ["丢失更新", "读脏数据", "不可重复读", "死锁"],
    "solution": "D",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "保护数据库中的信息，防止未经授权或非法的使用所造成的数据泄漏、更改或破坏，称为数据库的（ ）",
    "option": ["安全性", "完整性", "恢复", "并发控制"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},{
    "order": 3, //题目编号，需从1开始，依次增加
    "type": "single", //题目类型，single单选、multiple多选、judge判断、indeterminate不定项
    "describe": "下列选项中，不属于线性结构的是", //题目描述
    "option": ["线性表", "双向链表", "循环队列", "二叉树"], //各个选项描述
    "solution": "D", //参考答案
    "explain": "", //题目解析
    "answer": "", //考生答案
    "mark": false, //是否标记，初始值为0，表示未标记，此项会根据具体情况更改，不用人工自己操作
    "score": 1, //该题目满分
},
{
    "order": 3,
    "type": "single",
    "describe": "下列四项中说法不正确的是（ ）",
    "option": ["数据库中的数据可以共享", "数据库具有较高的数据独立性", "数据库避免了一切数据的重复", "数据库减少了数据冗余"],
    "solution": "C",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "关系代数的交操作由____操作组合而成",
    "option": ["差"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "关系代数运算中当为“=”的连接称之为等值连接 ，且当比较的分量是相同的属性组时，则称为______",
    "option": ["实体 联系"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},{
    "order": 3, //题目编号，需从1开始，依次增加
    "type": "single", //题目类型，single单选、multiple多选、judge判断、indeterminate不定项
    "describe": "在并发控制中，常用的封锁有_____和共享锁（读锁）", //题目描述
    "option": ["排它锁（写锁）"], //各个选项描述
    "solution": "A", //参考答案
    "explain": "", //题目解析
    "answer": "", //考生答案
    "mark": false, //是否标记，初始值为0，表示未标记，此项会根据具体情况更改，不用人工自己操作
    "score": 1, //该题目满分
},
{
    "order": 3,
    "type": "single",
    "describe": "在关系代数运算中，从关系中取出满足条件的元组的运算称为___",
    "option": ["选择"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "各分E-R图之间的冲突主要有三类：命名冲突、属性冲突和___",
    "option": ["结构冲突"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "数据流图表达了数据和处理的关系，_____则是系统中各类数据描述的集合，是进行详细的数据收集和数据分析所获得的主要成果",
    "option": ["数据字典"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},{
    "order": 3, //题目编号，需从1开始，依次增加
    "type": "single", //题目类型，single单选、multiple多选、judge判断、indeterminate不定项
    "describe": "用树型结构表示实体类型及实体间联系的数据模型称为____", //题目描述
    "option": ["网状模型"], //各个选项描述
    "solution": "A", //参考答案
    "explain": "", //题目解析
    "answer": "", //考生答案
    "mark": false, //是否标记，初始值为0，表示未标记，此项会根据具体情况更改，不用人工自己操作
    "score": 1, //该题目满分
},
{
    "order": 3,
    "type": "single",
    "describe": "SQL提供的聚合函数COUNT(*)的作用是_____",
    "option": ["统计元组个数"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "用有向图结构表示实体类型及实体间联系的数据模型称为_____",
    "option": ["网状模型"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "multiple",
    "describe": "数据库是长期存储在计算机内、有___的、可__的数据集合",
    "option": ["组织", "共享"],
    "solution": "AB",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},{
    "order": 3, //题目编号，需从1开始，依次增加
    "type": "multiple", //题目类型，single单选、multiple多选、judge判断、indeterminate不定项
    "describe": "____表达了数据和处理的关系，_____则是系统中各类数据描述的集合，是进行详细的数据收集和数据分析所获得的主要成果", //题目描述
    "option": ["数据流图", "数据字典"], //各个选项描述
    "solution": "AB", //参考答案
    "explain": "", //题目解析
    "answer": "", //考生答案
    "mark": false, //是否标记，初始值为0，表示未标记，此项会根据具体情况更改，不用人工自己操作
    "score": 1, //该题目满分
},
{
    "order": 3,
    "type": "multiple",
    "describe": "数据库角色是被命名的一组与____相关的权限，角色是____的集合",
    "option": ["数据库操作", "权限"],
    "solution": "AB",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "事务是数据库环境的逻辑工作单位，它具有____、一致性、隔离性和持久性的性质",
    "option": ["原子性"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "用有向图结构表示实体类型及实体间联系的数据模型称为_____模型",
    "option": ["网状模型"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},{
    "order": 3, //题目编号，需从1开始，依次增加
    "type": "single", //题目类型，single单选、multiple多选、judge判断、indeterminate不定项
    "describe": "SQL的中文全称是 _________", //题目描述
    "option": ["结构化查询语言"], //各个选项描述
    "solution": "A", //参考答案
    "explain": "", //题目解析
    "answer": "", //考生答案
    "mark": false, //是否标记，初始值为0，表示未标记，此项会根据具体情况更改，不用人工自己操作
    "score": 1, //该题目满分
},
{
    "order": 3,
    "type": "single",
    "describe": "从关系规范化理论的角度讲，一个只满足1NF的关系可能存在的四方面问题是：数据冗余度大、修改异常、插入异常和_____",
    "option": ["删除异常"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "数据库角色是被命名的一组与数据库操作相关的权限，角色是___的集合",
    "option": ["权限"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "关系数据模型由关系数据结构、关系操作和 _____三部分组成",
    "option": ["关系完整性约束"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},{
    "order": 3, //题目编号，需从1开始，依次增加
    "type": "single", //题目类型，single单选、multiple多选、judge判断、indeterminate不定项
    "describe": "一般情况下当对关系R和S使用自然连接时，要求R和S含有一个或多个共有的___", //题目描述
    "option": ["属性"], //各个选项描述
    "solution": "A", //参考答案
    "explain": "", //题目解析
    "answer": "", //考生答案
    "mark": false, //是否标记，初始值为0，表示未标记，此项会根据具体情况更改，不用人工自己操作
    "score": 1, //该题目满分
},
{
    "order": 3,
    "type": "single",
    "describe": "SELECT语句查询条件中的谓词“!=ALL”与运算符____等价",
    "option": ["NOT IN"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "___是DBMS的基本单位，是用户定义的一个数据库操作序列",
    "option": ["事物"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "judge",
    "describe": "在关系A（S，SN，D）和B（D，CN，NM）中，A的主码是S，B的主码是D，则D在S中称为外码",
    "option": ["正确", "错误"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},{
    "order": 3, //题目编号，需从1开始，依次增加
    "type": "single", //题目类型，single单选、multiple多选、judge判断、indeterminate不定项
    "describe": "关系操作的特点是____操作", //题目描述
    "option": ["集合"], //各个选项描述
    "solution": "A", //参考答案
    "explain": "", //题目解析
    "answer": "", //考生答案
    "mark": false, //是否标记，初始值为0，表示未标记，此项会根据具体情况更改，不用人工自己操作
    "score": 1, //该题目满分
},
{
    "order": 3,
    "type": "single",
    "describe": "已知学生关系（学号，姓名，年龄，班级），要检索班级为空值的学生姓名，其SQL查询语句中 WHERE子句的条件表达式是 ______",
    "option": ["IS NULL"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "并发控制的主要方法是_____机制",
    "option": ["封锁"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "数据管理经历了人工管理、文件系统、______三个阶段",
    "option": ["数据库系统"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},{
    "order": 3, //题目编号，需从1开始，依次增加
    "type": "single", //题目类型，single单选、multiple多选、judge判断、indeterminate不定项
    "describe": "关系模式R({A，B，C}，{(A，C)→B，(A，B)→C，B→C})最高可达到____范式", //题目描述
    "option": ["第三"], //各个选项描述
    "solution": "A", //参考答案
    "explain": "", //题目解析
    "answer": "", //考生答案
    "mark": false, //是否标记，初始值为0，表示未标记，此项会根据具体情况更改，不用人工自己操作
    "score": 1, //该题目满分
},
{
    "order": 3,
    "type": "single",
    "describe": "在关系数据库标准语言SQL中，实现数据更新的语句命令是______",
    "option": ["update"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "single",
    "describe": "并发控制的主要方法是____机制",
    "option": ["封锁"],
    "solution": "A",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
},
{
    "order": 3,
    "type": "multiple",
    "describe": "数据库管理技术的发展是与计算机技术及其应用的发展联系在一起的，它经历了三个阶段：人工管理阶段，_____阶段和______阶段",
    "option": ["文件系统", "数据库系统"],
    "solution": "AB",
    "explain": "",
    "answer": "",
    "mark": false,
    "score": 1,
}
];