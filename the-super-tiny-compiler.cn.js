'use strict'

/**
 * TTTTTTTTTTTTTTTTTTTTTTTHHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::TT:::::::TT:::::THH::::::H     H::::::HHEE::::::EEEEEEEEE::::E
 * TTTTTT  T:::::T  TTTTTT  H:::::H     H:::::H    E:::::E       EEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H:::::H     H:::::H    E:::::E       EEEEEE
 *       TT:::::::TT      HH::::::H     H::::::HHEE::::::EEEEEEEE:::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       TTTTTTTTTTT      HHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 *
 *    SSSSSSSSSSSSSSS UUUUUUUU     UUUUUUUUPPPPPPPPPPPPPPPPP   EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *  SS:::::::::::::::SU::::::U     U::::::UP::::::::::::::::P  E::::::::::::::::::::ER::::::::::::::::R
 * S:::::SSSSSS::::::SU::::::U     U::::::UP::::::PPPPPP:::::P E::::::::::::::::::::ER::::::RRRRRR:::::R
 * S:::::S     SSSSSSSUU:::::U     U:::::UUPP:::::P     P:::::PEE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E       EEEEEE  R::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E               R::::R     R:::::R
 *  S::::SSSS          U:::::U     U:::::U   P::::PPPPPP:::::P   E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 *   SS::::::SSSSS     U:::::U     U:::::U   P:::::::::::::PP    E:::::::::::::::E     R:::::::::::::RR
 *     SSS::::::::SS   U:::::U     U:::::U   P::::PPPPPPPPP      E:::::::::::::::E     R::::RRRRRR:::::R
 *        SSSSSS::::S  U:::::U     U:::::U   P::::P              E::::::EEEEEEEEEE     R::::R     R:::::R
 *             S:::::S U:::::U     U:::::U   P::::P              E:::::E               R::::R     R:::::R
 *             S:::::S U::::::U   U::::::U   P::::P              E:::::E       EEEEEE  R::::R     R:::::R
 * SSSSSSS     S:::::S U:::::::UUU:::::::U PP::::::PP          EE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 * S::::::SSSSSS:::::S  UU:::::::::::::UU  P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 * S:::::::::::::::SS     UU:::::::::UU    P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 *  SSSSSSSSSSSSSSS         UUUUUUUUU      PPPPPPPPPP          EEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * TTTTTTTTTTTTTTTTTTTTTTTIIIIIIIIIINNNNNNNN        NNNNNNNNYYYYYYY       YYYYYYY
 * T:::::::::::::::::::::TI::::::::IN:::::::N       N::::::NY:::::Y       Y:::::Y
 * T:::::::::::::::::::::TI::::::::IN::::::::N      N::::::NY:::::Y       Y:::::Y
 * T:::::TT:::::::TT:::::TII::::::IIN:::::::::N     N::::::NY::::::Y     Y::::::Y
 * TTTTTT  T:::::T  TTTTTT  I::::I  N::::::::::N    N::::::NYYY:::::Y   Y:::::YYY
 *         T:::::T          I::::I  N:::::::::::N   N::::::N   Y:::::Y Y:::::Y
 *         T:::::T          I::::I  N:::::::N::::N  N::::::N    Y:::::Y:::::Y
 *         T:::::T          I::::I  N::::::N N::::N N::::::N     Y:::::::::Y
 *         T:::::T          I::::I  N::::::N  N::::N:::::::N      Y:::::::Y
 *         T:::::T          I::::I  N::::::N   N:::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N    N::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N     N:::::::::N       Y:::::Y
 *       TT:::::::TT      II::::::IIN::::::N      N::::::::N       Y:::::Y
 *       T:::::::::T      I::::::::IN::::::N       N:::::::N    YYYY:::::YYYY
 *       T:::::::::T      I::::::::IN::::::N        N::::::N    Y:::::::::::Y
 *       TTTTTTTTTTT      IIIIIIIIIINNNNNNNN         NNNNNNN    YYYYYYYYYYYYY
 *
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPPPPPPPPP   IIIIIIIIIILLLLLLLLLLL             EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *      CCC::::::::::::C   OO:::::::::OO   M:::::::M             M:::::::MP::::::::::::::::P  I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::::::::::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::::M           M::::::::MP::::::PPPPPP:::::P I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::RRRRRR:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM:::::::::M         M:::::::::MPP:::::P     P:::::PII::::::IILL:::::::LL             EE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::::::M       M::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E       EEEEEE  R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::::::M     M:::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::M::::M   M::::M:::::::M  P::::PPPPPP:::::P   I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M M::::M M::::M M::::::M  P:::::::::::::PP    I::::I    L:::::L                 E:::::::::::::::E     R:::::::::::::RR
 * C:::::C              O:::::O     O:::::OM::::::M  M::::M::::M  M::::::M  P::::PPPPPPPPP      I::::I    L:::::L                 E:::::::::::::::E     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M   M:::::::M   M::::::M  P::::P              I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM::::::M    M:::::M    M::::::M  P::::P              I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::M     MMMMM     M::::::M  P::::P              I::::I    L:::::L         LLLLLL  E:::::E       EEEEEE  R::::R     R:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM::::::M               M::::::MPP::::::PP          II::::::IILL:::::::LLLLLLLLL:::::LEE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *      CCC::::::::::::C   OO:::::::::OO   M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPP          IIIIIIIIIILLLLLLLLLLLLLLLLLLLLLLLLEEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 */

/**
 * 今天我们一起学习写一个编译器。 不过不是目前的任意一个编译器...
 * 是一个超棒体积超小的编译器
 * 如果移除注释，就只有大约200行代码
 * Today we're going to write a compiler together. But not just any compiler... A
 * super duper teeny tiny compiler! A compiler that is so small that if you
 * remove all the comments this file would only be ~200 lines of actual code.
 *
 * 我们要把一些类似lisp的函数编译成类似c的函数
 * We're going to compile some lisp-like function calls into some C-like
 * function calls.
 *
 * 如果你不熟悉两者中的任何一个。我就简单介绍一下
 * If you are not familiar with one or the other. I'll just give you a quick intro.
 *
 * 如果我们有两个函数 `add` 和 `substract` 他们长下面这个样子：
 * If we had two functions `add` and `subtract` they would be written like this:
 *
 *                  LISP                      C
 *
 *   2 + 2          (add 2 2)                 add(2, 2)
 *   4 - 2          (subtract 4 2)            subtract(4, 2)
 *   2 + (4 - 2)    (add 2 (subtract 4 2))    add(2, subtract(4, 2))
 *
 * 很简单对吗？
 * Easy peezy right?
 *
 * 很好，因为这实际上就是我们将要做的编译行为
 * 虽然上面两个都不是完整的C或LISP语法， 但这样的语法足以演示现代编译器的主要部分
 * Well good, because this is exactly what we are going to compile. While this
 * is neither a complete LISP or C syntax, it will be enough of the syntax to
 * demonstrate many of the major pieces of a modern compiler.
 */

/**
 * 大多数编译器可以分解成三个主要阶段： 解析（parsing）、转换（transformation）、
 * 生成（code generation）
 * Most compilers break down into three primary stages: Parsing, Transformation,
 * and Code Generation
 *
 * 1. *解析（parsing）* 取得原始代码并将其转换为更加抽象的代码表示形式
 * 1. *Parsing* is taking raw code and turning it into a more abstract
 *    representation of the code.
 *
 * 2. *转换（transformation）* 取得这个解析出来的抽象的表示并
 *    操作执行任何编译器想要做的
 * 2. *Transformation* takes this abstract representation and manipulates to do
 *    whatever the compiler wants it to.
 *
 * 3. *生成（code generation）* 取得转换后的代码表示形式并输出得到新代码
 * 3. *Code Generation* takes the transformed representation of the code and
 *    turns it into new code.
 */

/**
 * 解析
 * Parsing
 * -------
 * 解析通常会分成两个阶段：词法分析、语法分析
 * Parsing typically gets broken down into two phases: Lexical Analysis and
 * Syntactic Analysis.
 *
 * 1. 词法分析拿到原始代码并通过称为标记器（或词法分析器）的东西将其拆分为一个个被称为标记的东西
 * 1. *Lexical Analysis* takes the raw code and splits it apart into these things
 *    called tokens by a thing called a tokenizer (or lexer).
 *
 *    标记是由微小的对象组成的数组， 这些对象描述了语法的独立部分， 如数字、标签、标点符号、运算符号等等。
 *    Tokens are an array of tiny little objects that describe an isolated piece
 *    of the syntax. They could be numbers, labels, punctuation, operators,
 *    whatever.
 *
 * 2. 语法分析拿到标记并将重新格式化他们为一种表现形式，用于描述语法的每一部分以及他们之间的相互关系。
 *    这被称为中间表示或抽象语法树
 * 2. *Syntactic Analysis* takes the tokens and reformats them into a
 *    representation that describes each part of the syntax and their relation
 *    to one another. This is known as an intermediate representation or
 *    Abstract Syntax Tree.
 *
 *    抽象语法树，简称AST，一个深层嵌套的对象，它是一种更容易使用以及展现信息的代码表现形式。
 *    An Abstract Syntax Tree, or AST for short, is a deeply nested object that
 *    represents code in a way that is both easy to work with and tells us a lot
 *    of information.
 *
 * 对于以下语法：
 * For the following syntax:
 *
 *   (add 2 (subtract 4 2))
 * 标记可能看起来像这样：
 * Tokens might look something like this:
 *
 *   [
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'add'      },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'subtract' },
 *     { type: 'number', value: '4'        },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: ')'        },
 *     { type: 'paren',  value: ')'        },
 *   ]
 *
 * 抽象语法树（AST）可能看起来是这样的：
 * And an Abstract Syntax Tree (AST) might look like this:
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2',
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4',
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2',
 *         }]
 *       }]
 *     }]
 *   }
 */

/**
 * 转换
 * Transformation
 * --------------
 *
 * 下一个编译阶段就是转换了。再声明一次， 这一步仅仅是从上一步拿到AST并改变它，它能用同一种语言操作
 * AST或者转换为一种全新的语言。
 * The next type of stage for a compiler is transformation. Again, this just
 * takes the AST from the last step and makes changes to it. It can manipulate
 * the AST in the same language or it can translate it into an entirely new
 * language.
 *
 * 来看看我们将如何转换AST
 * Let’s look at how we would transform an AST.
 *
 * 你可能注意到AST中包含非常相似的元素
 * 这些对象具有类型属性， 被称作 AST 节点
 * 这些节点在其上独立的定义了属性, 节点们组合起来变成了 AST（语法抽象树）
 * You might notice that our AST has elements within it that look very similar.
 * There are these objects with a type property. Each of these are known as an
 * AST Node. These nodes have defined properties on them that describe one
 * isolated part of the tree.
 *
 * 我们有一个节点叫做“NumberLiteral”
 * We can have a node for a "NumberLiteral":
 *
 *   {
 *     type: 'NumberLiteral',
 *     value: '2',
 *   }
 *
 * 或者叫“CallExpression”
 * Or maybe a node for a "CallExpression":
 *
 *   {
 *     type: 'CallExpression',
 *     name: 'subtract',
 *     params: [...nested nodes go here...],
 *   }
 *
 * 当我们转换AST的时候， 我们可以添加/删除/替换节点属性
 * 可以添加新节点、删除节点，也可以不使用原有的AST并基于它创建一个全新的AST
 * When transforming the AST we can manipulate nodes by
 * adding/removing/replacing properties, we can add new nodes, remove nodes, or
 * we could leave the existing AST alone and create an entirely new one based
 * on it.
 *
 * 因为这次我们的目标是一个全新的语言，我们要专注在创建全新的AST以便作用于目标语言
 * Since we’re targeting a new language, we’re going to focus on creating an
 * entirely new AST that is specific to the target language.
 *
 * 遍历
 * Traversal
 * ---------
 *
 * 为了浏览所有的节点，我们需要遍历它们。遍历的顺序会是目标对象层级的从浅到深依次遍历。
 * In order to navigate through all of these nodes, we need to be able to
 * traverse through them. This traversal process goes to each node in the AST
 * depth-first.
 *
 * 下面来看一个例子
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2'
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4'
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2'
 *         }]
 *       }]
 *     }]
 *   }
 *
 * 遍历上述AST结构我们将这样做：
 * So for the above AST we would go:
 *
 *   1. Program - 开始遍历的第一个对象
 *   1. Program - Starting at the top level of the AST
 *   2. CallExpression (add) - 移动 Program.body 的第一个元素
 *   2. CallExpression (add) - Moving to the first element of the Program's body
 *   3. NumberLiteral (2) - 移动 CallExpression.params 的第一个元素
 *   3. NumberLiteral (2) - Moving to the first element of CallExpression's params
 *   4. CallExpression (subtract) - 移动
 *   4. CallExpression (subtract) - Moving to the second element of CallExpression's params
 *   5. NumberLiteral (4) - Moving to the first element of CallExpression's params
 *   6. NumberLiteral (2) - Moving to the second element of CallExpression's params
 *
 * 如果我们直接操作AST，而不是创建单独的AST， 则可能会在这里引入各种抽象
 * 但是仅访问（visiting）树里的每一个节点也已足够我们完成要尝试的操作了
 * If we were manipulating this AST directly, instead of creating a separate AST,
 * we would likely introduce all sorts of abstractions here. But just visiting
 * each node in the tree is enough for what we're trying to do.
 *
 * 我之所以使用 "访问（visiting）" 一词， 是因为存在这种模式来表示对象结构元素上的操作
 * The reason I use the word "visiting" is because there is this pattern of how
 * to represent operations on elements of an object structure.
 *
 * 访问者
 * Visitors
 * --------
 *
 * 这里的基本的思路就是我们创建一个“visitor”对象， 有方法能够接受不同的节点类型
 * The basic idea here is that we are going to create a “visitor” object that
 * has methods that will accept different node types.
 *
 *   var visitor = {
 *     NumberLiteral() {},
 *     CallExpression() {},
 *   };
 *
 * 当我们遍历AST的时候，只要“进入（enter）”匹配类型的节点， 就会调用visitor的方法
 * When we traverse our AST, we will call the methods on this visitor whenever we
 * "enter" a node of a matching type.
 *
 * 为了更易于使用我们也会传入节点和引用父节点
 * In order to make this useful we will also pass the node and a reference to
 * the parent node.
 *
 *   var visitor = {
 *     NumberLiteral(node, parent) {},
 *     CallExpression(node, parent) {},
 *   };
 *
 * 无论如何，还存在着一种叫做“exit（退出）”的东西。 把之前的树形结构转换成列表形式想象一下
 * However, there also exists the possibility of calling things on "exit". Imagine
 * our tree structure from before in list form:
 *
 *   - Program
 *     - CallExpression
 *       - NumberLiteral
 *       - CallExpression
 *         - NumberLiteral
 *         - NumberLiteral
 *
 * 转换成下面那样， 我们将要到达分支的尽头。
 * 每当我们在树中完成一条分支， 我们就“exit”它
 * 所以， 我们开始时 enter 每个节点， 完成后 exit 每个节点， 如此循环所有分支
 * As we traverse down, we're going to reach branches with dead ends. As we
 * finish each branch of the tree we "exit" it. So going down the tree we
 * "enter" each node, and going back up we "exit".
 *
 *   -> Program (enter)
 *     -> CallExpression (enter)
 *       -> Number Literal (enter)
 *       <- Number Literal (exit)
 *       -> Call Expression (enter)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *       <- CallExpression (exit)
 *     <- CallExpression (exit)
 *   <- Program (exit)
 *
 * 为了支持这样做， 我们的 visitor 的最终形态就会是这样的：
 * In order to support that, the final form of our visitor will look like this:
 *
 *   var visitor = {
 *     NumberLiteral: {
 *       enter(node, parent) {},
 *       exit(node, parent) {},
 *     }
 *   };
 */

/**
 * 代码生成
 * Code Generation
 * ---------------
 *
 * 编译器的最后一个阶段就是代码生成了。 有时候代码生成阶段做的事情会跟转换阶段有所重复，
 * 但是大多数情况下代码生成仅仅意味着拿到AST并返回字符串代码
 * The final phase of a compiler is code generation. Sometimes compilers will do
 * things that overlap with transformation, but for the most part code
 * generation just means take our AST and string-ify code back out.
 *
 * 代码生成有几种工作方式，有的早期编译器会重复使用令牌（tokens），其它的会为代码创建独立的
 * 令牌这样就可以线性的打印节点， 但是据我所知大多数情况都是使用我们刚才创建的AST， 那也是我们
 * 现在关注的。
 * Code generators work several different ways, some compilers will reuse the
 * tokens from earlier, others will have created a separate representation of
 * the code so that they can print node linearly, but from what I can tell most
 * will use the same AST we just created, which is what we’re going to focus on.
 *
 * 实际上我们的代码生成将会懂得如何“打印”AST的所有不同节点类型，它还会递归调用自身去打印其
 * 内嵌的系欸但直到所有节点都被输出打印为一长串代码
 * Effectively our code generator will know how to “print” all of the different
 * node types of the AST, and it will recursively call itself to print nested
 * nodes until everything is printed into one long string of code.
 */

/**
 * 就是这样！那就是所有编译的不同部分了
 * And that's it! That's all the different pieces of a compiler.
 *
 * 但这并不意味着所有的编译器都跟上面讲的一模一样
 * 编译器被用于各种各样的不同目的，它们肯定会有很多远胜于我所说的步骤
 * Now that isn’t to say every compiler looks exactly like I described here.
 * Compilers serve many different purposes, and they might need more steps than
 * I have detailed.
 *
 * 但是现在你应该对编译器有了一个大致的了解
 * But now you should have a general high-level idea of what most compilers look
 * like.
 *
 * 现在我已经解释了所有我能说的， 你准备好开始写你自己的编译器了嘛？
 * Now that I’ve explained all of this, you’re all good to go write your own
 * compilers right?
 *
 * 开玩笑的... 教程还没结束
 * Just kidding, that's what I'm here to help with :P
 *
 * 现在开始
 * So let's begin...
 */

/**
 * ============================================================================
 *                                   (/^▽^)/
 *                                THE TOKENIZER!
 * ============================================================================
 */

/**
 * 我们将从令牌解析器的第一阶段开始句法分析、 词法分析
 * We're gonna start off with our first phase of parsing, lexical analysis, with
 * the tokenizer.
 *
 * 我们只需要拿到我们的字符串代码并把它分解成令牌数组
 * We're just going to take our string of code and break it down into an array
 * of tokens.
 *
 *   (add 2 (subtract 4 2))   =>   [{ type: 'paren', value: '(' }, ...]
 */

// 我们从允许输入字符串代码开始， 然后我们将做两件事情
// We start by accepting an input string of code, and we're gonna set up two
// things...
function tokenizer(input) {
    // current 变量用来跟踪我们代码的位置， 就像鼠标光标的一样
    // A `current` variable for tracking our position in the code like a cursor.
    let current = 0

    // tokens 数组存储我们的令牌
    // And a `tokens` array for pushing our tokens to.
    let tokens = []

    // 我们开始创建一个 while 循环，在循环中，我们可以控制 current 在循环中的增量
    // We start by creating a `while` loop where we are setting up our `current`
    // variable to be incremented as much as we want `inside` the loop.
    //
    // 这么做的原因是 tokens 可以有任意长度， current 可以在一个循环中多次增加
    // We do this because we may want to increment `current` many times within a
    // single loop because our tokens can be any length.
    while (current < input.length) {
        // 我们也要存下当前位置的字符
        // We're also going to store the `current` character in the `input`.
        let char = input[current]

        // 第一件事我们想先检查左括号 。 这将会用于 'CallExpression' 但是现在我们只用关心字符
        // The first thing we want to check for is an open parenthesis. This will
        // later be used for `CallExpression` but for now we only care about the
        // character.
        //
        // 检查是不是左括号
        // We check to see if we have an open parenthesis:
        if (char === '(') {
            // 如果是， 就新建一个具有type、value字段的 token 对象， 追加进 tokens 数组
            // If we do, we push a new token with the type `paren` and set the value
            // to an open parenthesis.
            tokens.push({
                type: 'paren',
                value: '(',
            })

            // 接着自增current
            // Then we increment `current`
            current++

            // 然后接着下一轮循环
            // And we `continue` onto the next cycle of the loop.
            continue
        }

        // 右括号同理：检查是否存在右括号、新增token、自增current、继续循环
        // Next we're going to check for a closing parenthesis. We do the same exact
        // thing as before: Check for a closing parenthesis, add a new token,
        // increment `current`, and `continue`.
        if (char === ')') {
            tokens.push({
                type: 'paren',
                value: ')',
            })
            current++
            continue
        }

        // 接下来，我们检查空白符。这很有趣， 因为我们关心空白符的存在是否分割了字符，
        // 但是作为令牌存储并不重要， 我们会在稍后丢弃它
        // Moving on, we're now going to check for whitespace. This is interesting
        // because we care that whitespace exists to separate characters, but it
        // isn't actually important for us to store as a token. We would only throw
        // it out later.
        //
        // 所以这里我们只测试它是否存在然后如果存在， 我们就自增、继续循环
        // So here we're just going to test for existence and if it does exist we're
        // going to just `continue` on.
        let WHITESPACE = /\s/
        if (WHITESPACE.test(char)) {
            current++
            continue
        }

        // 下一个令牌类型是数字。 数字类型不同于我们之前所看到的类型，
        // 因为数字可以是任意数量的字符并且我们希望把一整串数字作为一个令牌
        // The next type of token is a number. This is different than what we have
        // seen before because a number could be any number of characters and we
        // want to capture the entire sequence of characters as one token.
        //
        //   (add 123 456)
        //        ^^^ ^^^
        //        这里的数字被解析后仅作为两个令牌
        //        Only two separate tokens
        // 现在开始碰到数字的情况
        // So we start this off when we encounter the first number in a sequence.
        let NUMBERS = /[0-9]/
        if (NUMBERS.test(char)) {
            // 创建一个字符变量来保存将碰到的数字
            // We're going to create a `value` string that we are going to push
            // characters to.
            let value = ''

            // 然后我们做一个同样的循环检测字符，将后面连续碰到的数字追加进 value 变量中
            // Then we're going to loop through each character in the sequence until
            // we encounter a character that is not a number, pushing each character
            // that is a number to our `value` and incrementing `current` as we go.
            while (NUMBERS.test(char)) {
                value += char
                char = input[++current]
            }

            // 将结果 value 作为一个令牌加入 tokens
            // After that we push our `number` token to the `tokens` array.
            tokens.push({ type: 'number', value })

            // And we continue on.
            continue
        }

        // 接下来是匹配字符串， 就是匹配被双引号包围的字符
        // （译注：这里限定只支持了双引号包裹的才作为字符串，为了简易）
        // We'll also add support for strings in our language which will be any
        // text surrounded by double quotes (").
        //
        //   (concat "foo" "bar")
        //            ^^^   ^^^ string tokens
        //
        // 开始匹配左双引号
        // We'll start by checking for the opening quote:
        if (char === '"') {
            // 保持一个变量存储整个字符串
            // Keep a `value` variable for building up our string token.
            let value = ''

            // 可以跳过已知的双引号
            // We'll skip the opening double quote in our token.
            char = input[++current]

            // 现在我们迭代紧接着的字符直到碰到右双引号
            // Then we'll iterate through each character until we reach another
            // double quote.
            while (char !== '"') {
                value += char
                char = input[++current]
            }

            // 跳过右双引号
            // Skip the closing double quote.
            char = input[++current]

            // And add our `string` token to the `tokens` array.
            tokens.push({ type: 'string', value })

            continue
        }

        // 最后一个类型就是 `name` （译注：可能是仅针对它所给出的示例做的匹配， 所以应该是指关键字、变量名、函数名等等）
        // 这是一个序列字母而不是数字，在 lisp 中它们是函数名
        // The last type of token will be a `name` token. This is a sequence of
        // letters instead of numbers, that are the names of functions in our lisp
        // syntax.
        //
        //   (add 2 4)
        //    ^^^
        //    Name token
        //
        let LETTERS = /[a-z]/i
        if (LETTERS.test(char)) {
            let value = ''

            // 与数字匹配同样的操作
            // Again we're just going to loop through all the letters pushing them to
            // a value.
            while (LETTERS.test(char)) {
                value += char
                char = input[++current]
            }

            // And pushing that value as a token with the type `name` and continuing.
            tokens.push({ type: 'name', value })

            continue
        }

        // 最后， 如果都没有匹配上， 给出一个错误提示
        // Finally if we have not matched a character by now, we're going to throw
        // an error and completely exit.
        throw new TypeError('I dont know what this character is: ' + char)
    }

    // 结束匹配后， 返回 tokens
    // Then at the end of our `tokenizer` we simply return the tokens array.
    return tokens
}

/**
 * ============================================================================
 *                                 ヽ/❀o ل͜ o\ﾉ
 *                                THE PARSER!!!
 * ============================================================================
 */

/**
 * 下面开始解析我们的 tokens 数组然后把它变成 AST
 * For our parser we're going to take our array of tokens and turn it into an
 * AST.
 *
 *   [{ type: 'paren', value: '(' }, ...]   =>   { type: 'Program', body: [...] }
 */

// 我们定义一个接收数组 tokens 的解析器函数
// Okay, so we define a `parser` function that accepts our array of `tokens`.
function parser(tokens) {
    // 同理， 定义一个代表当前位置的变量
    // Again we keep a `current` variable that we will use as a cursor.
    let current = 0

    // 但紧接着就不一样了， 我们用递归代替 while 循环
    // But this time we're going to use recursion instead of a `while` loop. So we
    // define a `walk` function.
    function walk() {
        // 缓存下当前位置的token
        // Inside the walk function we start by grabbing the `current` token.
        let token = tokens[current]

        // 分割处理不同的 token 类型
        // 从 number 开始
        // We're going to split each type of token off into a different code path,
        // starting off with `number` tokens.
        //
        // 当type等于 number 时
        // We test to see if we have a `number` token.
        if (token.type === 'number') {
            // current 自增
            // If we have one, we'll increment `current`.
            current++

            // 返回一个全新的AST节点叫做 NumberLiteral并设置它的 value 为 token 的 value
            // And we'll return a new AST node called `NumberLiteral` and setting its
            // value to the value of our token.
            return {
                type: 'NumberLiteral',
                value: token.value,
            }
        }

        // type 等于 string 时 我们创建一个 StringLiteral
        // If we have a string we will do the same as number and create a
        // `StringLiteral` node.
        if (token.type === 'string') {
            current++

            return {
                type: 'StringLiteral',
                value: token.value,
            }
        }

        // 这里找表达式 CallExpressions。 先找左括号
        // Next we're going to look for CallExpressions. We start this off when we
        // encounter an open parenthesis.
        if (token.type === 'paren' && token.value === '(') {
            // 立即自增 current 然后获取 token ， 这样忽略左括号因为我们的AST不关心它
            // We'll increment `current` to skip the parenthesis since we don't care
            // about it in our AST.
            token = tokens[++current]

            // 创建一个基于 CallExpression 的节点， 用当前 token 的 value 当作 name
            // 因为左括号的下一个token就是函数名
            // We create a base node with the type `CallExpression`, and we're going
            // to set the name as the current token's value since the next token after
            // the open parenthesis is the name of the function.
            let node = {
                type: 'CallExpression',
                name: token.value,
                params: [],
            }

            // 再次自增跳过
            // We increment `current` *again* to skip the name token.
            token = tokens[++current]

            // 现在后面的token就是我们函数表达式的参数了， 我们希望接下去循环它们直到碰到右括号
            // And now we want to loop through each token that will be the `params` of
            // our `CallExpression` until we encounter a closing parenthesis.
            //
            // 下面就是递归的开始了。与其尝试解析可能无限嵌套的节点集，不如依靠递归来解决问题。
            // Now this is where recursion comes in. Instead of trying to parse a
            // potentially infinitely nested set of nodes we're going to rely on
            // recursion to resolve things.
            //
            // 解析下面这道 Lisp 代码。你能看到它的 add 参数是一个 number 和一个嵌套的 CallExpression 包含着两个 number
            // To explain this, let's take our Lisp code. You can see that the
            // parameters of the `add` are a number and a nested `CallExpression` that
            // includes its own numbers.
            //
            //   (add 2 (subtract 4 2))
            //
            // 你可能注意到了， 这样会有多个右括号在我们的tokens中
            // You'll also notice that in our tokens array we have multiple closing
            // parenthesis.
            //
            //   [
            //     { type: 'paren',  value: '('        },
            //     { type: 'name',   value: 'add'      },
            //     { type: 'number', value: '2'        },
            //     { type: 'paren',  value: '('        },
            //     { type: 'name',   value: 'subtract' },
            //     { type: 'number', value: '4'        },
            //     { type: 'number', value: '2'        },
            //     { type: 'paren',  value: ')'        }, <<< Closing parenthesis
            //     { type: 'paren',  value: ')'        }, <<< Closing parenthesis
            //   ]
            //
            // 我们要依靠嵌套调用 walk 函数去自增 current 变量解决任何嵌套的 CallExpression
            // We're going to rely on the nested `walk` function to increment our
            // `current` variable past any nested `CallExpression`.

            // 所以我们创建一个 while 循环， 它会一直继续直到碰到右括号的 token 才跳出循环
            // So we create a `while` loop that will continue until it encounters a
            // token with a `type` of `'paren'` and a `value` of a closing
            // parenthesis.
            while (token.type !== 'paren' || (token.type === 'paren' && token.value !== ')')) {
                // 为了应对上面的那种多个右括号的情况， 我们调用 walk 函数， 并追加它的返回值到 node.params 中
                // we'll call the `walk` function which will return a `node` and we'll
                // push it into our `node.params`.
                node.params.push(walk())
                token = tokens[current]
            }

            // 最后还需要一个自增来跳过右括号
            // Finally we will increment `current` one last time to skip the closing
            // parenthesis.
            current++

            // And return the node.
            return node
        }

        // 同样的， 如果没有我们公认的 token 类型就抛出一个错误
        // Again, if we haven't recognized the token type by now we're going to
        // throw an error.
        throw new TypeError(token.type)
    }

    // 现在我们可以创建我们的 AST 了， 初始节点类型是一个 Program
    // Now, we're going to create our AST which will have a root which is a
    // `Program` node.
    let ast = {
        type: 'Program',
        body: [],
    }

    // 然后我们调用 walk 函数，推送节点到我们的 ast.body 数组中
    // And we're going to kickstart our `walk` function, pushing nodes to our
    // `ast.body` array.
    //
    // 在一个循环中执行是因为我们的程序可以递归的调用函数而不必嵌套着调用
    // The reason we are doing this inside a loop is because our program can have
    // `CallExpression` after one another instead of being nested.
    //
    //   (add 2 2)
    //   (subtract 4 2)
    //
    while (current < tokens.length) {
        ast.body.push(walk())
    }

    // 最后我们输出 AST
    // At the end of our parser we'll return the AST.
    return ast
}

/**
 * ============================================================================
 *                                 ⌒(❀>◞౪◟<❀)⌒
 *                               THE TRAVERSER!!!
 * ============================================================================
 */

/**
 * 经过上面的步骤，我们可以得到我们的 AST 了。 现在需要一个观察者来帮助我们对不同的节点进行操作。
 * 我们需要在匹配类型时调用观察者上对应的方法来对付到的节点
 * So now we have our AST, and we want to be able to visit different nodes with
 * a visitor. We need to be able to call the methods on the visitor whenever we
 * encounter a node with a matching type.
 *
 *   traverse(ast, {
 *     Program: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     CallExpression: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     NumberLiteral: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *   });
 */

// 所以， 我们定义一个能接收一个 AST和观察者对象的 traverser 函数。 在 traverser 内部我们会再定义两个函数
// So we define a traverser function which accepts an AST and a
// visitor. Inside we're going to define two functions...
function traverser(ast, visitor) {
    // traverseArray 函数可以允许我们去迭代数组以便于进行下一步调用 traverseNode
    // A `traverseArray` function that will allow us to iterate over an array and
    // call the next function that we will define: `traverseNode`.
    function traverseArray(array, parent) {
        array.forEach(child => {
            traverseNode(child, parent)
        })
    }

    // traverseNode 可以接收一个节点和它的父节点。且这两者都可以被我们的观察者对象上的方法处理
    // `traverseNode` will accept a `node` and its `parent` node. So that it can
    // pass both to our visitor methods.
    function traverseNode(node, parent) {
        // 现在我们开始测试观察者对象上该节点类型的处理函数是否存在
        // We start by testing for the existence of a method on the visitor with a
        // matching `type`.
        let methods = visitor[node.type]

        // 如果存在，我们就调用函数的 enter 方法， 并传入节点和父节点
        // If there is an `enter` method for this node type we'll call it with the
        // `node` and its `parent`.
        if (methods && methods.enter) {
            console.log('===', node.type, parent)
            methods.enter(node, parent)
        }

        // 下一步，我们分离当前的节点类型
        // Next we are going to split things up by the current node type.
        switch (node.type) {
            // 我们会从最顶级的 Program 节点开始。因为 Program 节点有一个名叫 body 的属性， 它存着节点数组
            // 我们将调用 traverseArray 来遍历它们
            // We'll start with our top level `Program`. Since Program nodes have a
            // property named body that has an array of nodes, we will call
            // `traverseArray` to traverse down into them.
            //
            // 记住 traverseArray 会轮流调用 traverseNode ， 所以我们会使这个树递归遍历
            // (Remember that `traverseArray` will in turn call `traverseNode` so  we
            // are causing the tree to be traversed recursively)
            case 'Program':
                traverseArray(node.body, node)
                break

            // 同样的， 只不过参数变成了 params
            // Next we do the same with `CallExpression` and traverse their `params`.
            case 'CallExpression':
                traverseArray(node.params, node)
                break

            // NumberLiteral 和 StringLiteral 没有子节点， 所以跳过它们
            // In the cases of `NumberLiteral` and `StringLiteral` we don't have any
            // child nodes to visit, so we'll just break.
            case 'NumberLiteral':
            case 'StringLiteral':
                break

            // 记得无法匹配时的处理
            // And again, if we haven't recognized the node type then we'll throw an
            // error.
            default:
                throw new TypeError(node.type)
        }

        // 同开始， 如果方法存在， 结束了也要调用 exit
        // If there is an `exit` method for this node type we'll call it with the
        // `node` and its `parent`.
        if (methods && methods.exit) {
            methods.exit(node, parent)
        }
    }

    // 最后我们安装 AST， 因为没有父节点，所以传 null 值就好
    // Finally we kickstart the traverser by calling `traverseNode` with our ast
    // with no `parent` because the top level of the AST doesn't have a parent.
    traverseNode(ast, null)
}

/**
 * ============================================================================
 *                                   ⁽(◍˃̵͈̑ᴗ˂̵͈̑)⁽
 *                              THE TRANSFORMER!!!
 * ============================================================================
 */

/**
 * 接下来就是准备转换器了。
 * 转换器会收到 AST， 而我们把 AST 和建立好的观察者对象一起传给 traverser 函数
 * 以此生成新的 AST
 * Next up, the transformer. Our transformer is going to take the AST that we
 * have built and pass it to our traverser function with a visitor and will
 * create a new ast.
 *
 * ----------------------------------------------------------------------------
 *   Original AST                     |   Transformed AST
 * ----------------------------------------------------------------------------
 *   {                                |   {
 *     type: 'Program',               |     type: 'Program',
 *     body: [{                       |     body: [{
 *       type: 'CallExpression',      |       type: 'ExpressionStatement',
 *       name: 'add',                 |       expression: {
 *       params: [{                   |         type: 'CallExpression',
 *         type: 'NumberLiteral',     |         callee: {
 *         value: '2'                 |           type: 'Identifier',
 *       }, {                         |           name: 'add'
 *         type: 'CallExpression',    |         },
 *         name: 'subtract',          |         arguments: [{
 *         params: [{                 |           type: 'NumberLiteral',
 *           type: 'NumberLiteral',   |           value: '2'
 *           value: '4'               |         }, {
 *         }, {                       |           type: 'CallExpression',
 *           type: 'NumberLiteral',   |           callee: {
 *           value: '2'               |             type: 'Identifier',
 *         }]                         |             name: 'subtract'
 *       }]                           |           },
 *     }]                             |           arguments: [{
 *   }                                |             type: 'NumberLiteral',
 *                                    |             value: '4'
 * ---------------------------------- |           }, {
 *                                    |             type: 'NumberLiteral',
 *                                    |             value: '2'
 *                                    |           }]
 *  (sorry the other one is longer.)  |         }
 *                                    |       }
 *                                    |     }]
 *                                    |   }
 * ----------------------------------------------------------------------------
 */

// 用 transformer 函数接收 AST
// So we have our transformer function which will accept the lisp ast.
function transformer(ast) {
    // 我们创建一个类似先前 Ast 的 newAst， 但 newAst 用 program 作根节点
    // We'll create a `newAst` which like our previous AST will have a program
    // node.
    let newAst = {
        type: 'Program',
        body: [],
    }

    // 下一步我准备使点小技巧。准备一个 _context 的属性，然后与 newAst.body 指向同一个数组
    // 这样我们就可以直接使用 parent._context 参数来推送值
    // (
    //  译注： 这里比较巧妙， _context 用来指向不同的位置，
    //  Program 跟 newAst.body 指向同个数组， 接收 Expression 表达式
    //  CallExpression 跟 expression.arguments 指向同个数组， 接收参数
    // )
    // 也许你会有更好的抽象方法， 但是对我们的目的来说， 这个方法最简单
    // Next I'm going to cheat a little and create a bit of a hack. We're going to
    // use a property named `context` on our parent nodes that we're going to push
    // nodes to their parent's `context`. Normally you would have a better
    // abstraction than this, but for our purposes this keeps things simple.
    //
    // 谨记这里的 ast._context 只是一个旧 ast 对新 ast 同个指针的引用
    // Just take note that the context is a reference *from* the old ast *to* the
    // new ast.
    ast._context = newAst.body

    // 我们将准备用 ast 和 观察者对象 作为参数一起调用 traverser 函数
    // We'll start by calling the traverser function with our ast and a visitor.
    traverser(ast, {
        // 第一个观察者方法应对 NumberLiteral
        // The first visitor method accepts any `NumberLiteral`
        NumberLiteral: {
            // 匹配时调用 enter
            // We'll visit them on enter.
            enter(node, parent) {
                // 创建一个新节点， type 也叫做 NumberLiteral 然后我们推送进父节点的 _context
                // We'll create a new node also named `NumberLiteral` that we will push to
                // the parent context.
                parent._context.push({
                    type: 'NumberLiteral',
                    value: node.value,
                })
            },
        },

        // 同样的应对 StringLiteral
        // Next we have `StringLiteral`
        StringLiteral: {
            enter(node, parent) {
                parent._context.push({
                    type: 'StringLiteral',
                    value: node.value,
                })
            },
        },

        // 接下来是 CallExpression， 但它有点不一样
        // Next up, `CallExpression`.
        CallExpression: {
            enter(node, parent) {
                // 我们先创建一个新节点， type 叫做 CallExpression， 还包含一个 callee 属性， 嵌套着 Identifier 值
                // We start creating a new node `CallExpression` with a nested
                // `Identifier`.
                let expression = {
                    type: 'CallExpression',
                    callee: {
                        type: 'Identifier',
                        name: node.name,
                    },
                    arguments: [],
                }

                // 下一步我们要定义一个新的 _context 属性给原本的 CallExpression 节点
                // 用来准备接收 expression 的参数
                // Next we're going to define a new context on the original
                // `CallExpression` node that will reference the `expression`'s arguments
                // so that we can push arguments.
                node._context = expression.arguments

                // 接着我们准备检查类型是否是 CallExpression
                // 如果不是...
                // Then we're going to check if the parent node is a `CallExpression`.
                // If it is not...
                if (parent.type !== 'CallExpression') {
                    // 我们就用 ExpressionStatement 包裹 CallExpression 节点
                    // 这样做是因为 CallExpression 在 Javascript 中实际上是可调用表达式语句
                    // (译注：结合 codeGenerator 看可助于理解)
                    // We're going to wrap our `CallExpression` node with an
                    // `ExpressionStatement`. We do this because the top level
                    // `CallExpression` in JavaScript are actually statements.
                    expression = {
                        type: 'ExpressionStatement',
                        expression: expression,
                    }
                }

                // 最后， 推送 expression 到父节点的 _context
                // Last, we push our (possibly wrapped) `CallExpression` to the `parent`'s
                // `context`.
                parent._context.push(expression)
            },
        },
    })

    // 在完成后，返回我们的新 ast
    // At the end of our transformer function we'll return the new ast that we
    // just created.
    console.log('newAst', newAst)
    return newAst
}

/**
 * ============================================================================
 *                               ヾ（〃＾∇＾）ﾉ♪
 *                            THE CODE GENERATOR!!!!
 * ============================================================================
 */

/**
 * 现在让我们进入到最终阶段： 代码生成
 * Now let's move onto our last phase: The Code Generator.
 *
 * 我们的代码生成会是在树中递归调用自身来输出每一个节点形成一个巨大的字符串
 * Our code generator is going to recursively call itself to print each node in
 * the tree into one giant string.
 */

function codeGenerator(node) {
    // 我们按照节点的类型进行操作
    // We'll break things down by the `type` of the `node`.
    switch (node.type) {
        // 如果是 Program， 我们循环它 body 属性的每个节点并递归调用 body 的值
        // 完成一个 Program 后插入 \n
        // If we have a `Program` node. We will map through each node in the `body`
        // and run them through the code generator and join them with a newline.
        case 'Program':
            // === node.body.map(node => codeGenerator(node)).join('\n')
            return node.body.map(codeGenerator).join('\n')

        // 对于 ExpressionStatement 我们用它的 expression 属性作为参数去调用 codeGenerator （实际就是进入 CallExpression）
        // 完成后加入 ;
        // For `ExpressionStatement` we'll call the code generator on the nested
        // expression and we'll add a semicolon...
        case 'ExpressionStatement':
            return (
                codeGenerator(node.expression) + ';' // << (...because we like to code the *correct* way)
            )

        // 对于 CallExpression
        // 1. 先输出 callee.name
        // 2. 增加一个左括号
        // 3. 循环并用逗号隔开输出参数
        // 4. 右括号
        // For `CallExpression` we will print the `callee`, add an open
        // parenthesis, we'll map through each node in the `arguments` array and run
        // them through the code generator, joining them with a comma, and then
        // we'll add a closing parenthesis.
        case 'CallExpression':
            return (
                codeGenerator(node.callee) +
                '(' +
                node.arguments.map(codeGenerator).join(', ') +
                ')'
            )

        // Indentifier 就返回它的 name 值
        // For `Identifier` we'll just return the `node`'s name.
        case 'Identifier':
            return node.name

        // NumberLiteral 就返回它的 value 值
        // For `NumberLiteral` we'll just return the `node`'s value.
        case 'NumberLiteral':
            return node.value

        // 对于 StringLiteral 我们为它左右两侧加上双引号
        // For `StringLiteral` we'll add quotations around the `node`'s value.
        case 'StringLiteral':
            return '"' + node.value + '"'

        // 未匹配的错误处理
        // And if we haven't recognized the node, we'll throw an error.
        default:
            throw new TypeError(node.type)
    }
}

/**
 * ============================================================================
 *                                  (۶* ‘ヮ’)۶”
 *                         !!!!!!!!THE COMPILER!!!!!!!!
 * ============================================================================
 */

/**
 * 终于! 我们可以创建编译器函数了。
 * 在这里我们将像管道一样链接起每个部分
 * FINALLY! We'll create our `compiler` function. Here we will link together
 * every part of the pipeline.
 *
 *   1. input  => tokenizer   => tokens
 *   2. tokens => parser      => ast
 *   3. ast    => transformer => newAst
 *   4. newAst => generator   => output
 */

function compiler(input) {
    let tokens = tokenizer(input)
    let ast = parser(tokens)
    let newAst = transformer(ast)
    console.log(newAst)
    let output = codeGenerator(newAst)

    // and simply return the output!
    return output
}

/**
 * ============================================================================
 *                                   (๑˃̵ᴗ˂̵)و
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!YOU MADE IT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * ============================================================================
 */

// Now I'm just exporting everything...
module.exports = {
    tokenizer,
    parser,
    traverser,
    transformer,
    codeGenerator,
    compiler,
}
