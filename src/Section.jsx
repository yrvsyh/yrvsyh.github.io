const T = ({ children }) => {
  return <span>{children}</span>
}

const B = ({ children }) => {
  return <span className="font-bold">{children}</span>
}

const Section = ({ children }) => {
  return <div className="flex flex-col gap-[8px] text-xs">{children}</div>
}

const Group = ({ children }) => {
  return <div className="flex flex-col gap-[4px]">{children}</div>
}

const Title = ({ children }) => {
  return (
    <div className="relative h-[20px]">
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-neutral-300" />
      <div className="absolute bottom-0 left-0 w-[110px] border-b-[24px] border-r-[6px] border-r-transparent border-neutral-300"></div>
      <div className="absolute bottom-0 left-0 w-[98px] border-b-[28px] border-r-[7px] border-r-transparent border-neutral-800"></div>
      <div className="absolute bottom-0 left-0 h-[28px] w-[86px] text-sm font-bold text-white flex justify-center items-center">{children}</div>
    </div>
  )
}

const Line = ({ children }) => {
  return <div className="flex justify-between">{children}</div>
}

const List = ({ children }) => {
  return <ul className="list-disc">{children}</ul>
}

const Item = ({ children }) => {
  return <li className="leading-5 ml-4">{children}</li>
}

export const Education = () => {
  return (
    <Section>
      <Title>教育经历</Title>
      <Group>
        <Line>
          <B>武汉科技大学</B>
          <T>2018年09月 - 2022年06月</T>
        </Line>
        <Line>
          <T>软件工程 本科 计算机科学与技术学院</T>
          <T>武汉</T>
        </Line>
      </Group>
    </Section>
  )
}

export const Skill = () => {
  return (
    <Section>
      <Title>专业技能</Title>
      <Group>
        <List>
          <Item>
            <B>计算机基础: </B>
            <T>熟练掌握计算机网络、数据结构和算法、操作系统，了解计算机组成原理。</T>
          </Item>
          <Item>
            <B>Linux: </B>
            <T>熟悉Linux下的开发环境，了解网络编程，io多路复用，epoll等，熟练使用Linux以及相关开发工具。</T>
          </Item>
          <Item>
            <B>语言: </B>
            <T>熟悉 Node.js Golang 及其常用框架，了解Erlang、C、Python等语言。</T>
          </Item>
          <Item>
            <B>数据库: </B>
            <T>熟练掌握MySQL数据库以及常见优化手段；熟悉Redis的数据结构以及常见使用场景。</T>
          </Item>
          <Item>
            <B>开发工具: </B>
            <T>熟练掌握并规范使用Git工具，对各个子命令有较好的理解；了解Docker以及Dockerfile的编写。</T>
          </Item>
          <Item>
            <B>其他: </B>
            <T>了解部分前端框架及使用，如React、Vue等</T>
          </Item>
        </List>
      </Group>
    </Section>
  )
}

export const Work = () => {
  return (
    <Section>
      <Title>工作经历</Title>
      <Group>
        <Line>
          <B>腾讯云科技（武汉）有限责任公司</B>
          <T>2022年05月 - 2023年09月</T>
        </Line>
        <Line>
          <T>后端开发工程师 业务经营管理部</T>
          <T>武汉</T>
        </Line>
        <List>
          <Item>暑期实习，负责客户模块日常业务需求开发，学习开发流程并能够熟练使用各个开发工具与平台。</Item>
          <Item>担任产品模块后端开发，参与每周的业务需求评审，负责实现常规业务功能技术方案设计与编码工作。</Item>
          <Item>负责老项目维护与优化。参与php项目向go迁移工作，学习tRPC-GO框架的使用与设计。</Item>
        </List>
      </Group>
      <Group>
        <Line>
          <B>武汉轻度科技有限公司</B>
          <T>2023年10月 - 至今</T>
        </Line>
        <Line>
          <T>后端开发工程师 (Node.js Golang Erlang)</T>
          <T>武汉</T>
        </Line>
        <List>
          <Item>独立负责Healer产品的后台开发工作</Item>
          <Item>基础平台搭建与维护，负责搭建公司JumpServer，Prometheus监控系统</Item>
          <Item>IM核心模块插件开发与维护，优化XMPP连接问题，协助客户端优化SDK</Item>
        </List>
      </Group>
    </Section>
  )
}

export const Project = () => {
  return (
    <Section>
      <Title>项目经历</Title>
      <Group>
        <Line>
          <B>磐石经营服务平台-产品管理模块</B>
          <T>2022年07月 - 2023年09月</T>
        </Line>
        <List>
          <Item>参与项目迭代与数据迁移</Item>
          <Item>
            使用接入Swoole的Laravel框架作为后端主要框架，并逐步迁移至tRPC-go。MySQL作为主要的数据库，使用Redis构建数据缓存并提供分布式锁，使用TDMQ消息队列处理流程单框架内外的异步任务，接入ES提供核心搜索接口。
          </Item>
          {/* <Item>
            <B>项目内容: </B>
            <T>
              该项目为腾讯云磐石项目中面向产品经理负责产品定义、定价、生命周期、属性关系的模块，负责对接上游数据，提供下游模块接口，为腾讯云产品提供全流程的管理功能。
            </T>
          </Item>
          <Item>
            <B>技术栈: </B>
            <T>
              使用接入Swoole的Laravel框架作为后端主要框架，并逐步迁移至tRPC-go。MySQL作为主要的数据库，使用Redis构建数据缓存并提供分布式锁，使用TDMQ消息队列处理流程单框架内外的异步任务，接入ES提供核心搜索接口。
            </T>
          </Item>
          <Item>
            <B>工作与成就: </B>
            <List>
              <Item>参与项目迭代与数据迁移，在预期时间内完成编码与测试，后续上线未出现严重缺陷。</Item>
              <Item>负责新框架新项目基础组件搭建，负责部分协议codec编码与优化。</Item>
              <Item>梳理对内对外的上百个接口并汇总接口表格文档，根据日志对慢接口优化，将大部分耗时接口优化至500ms内。</Item>
              <Item>大量接口涉及到产品负责人数据，通过构建产品经理拥有的产品数据缓存，提升查询接口性能。</Item>
              <Item>重构一个较老的子模块的部分核心方法，并根据不同状态数据分表，简化后续需求编码负担并优化查询性能。</Item>
              <Item>独自完成云资产接入与产业树同步功能，解决了部分业务方的核心诉求，在排期内完成并上线。</Item>
            </List>
          </Item> */}
        </List>
      </Group>
      <Group>
        <Line>
          <B>Healer App 后台</B>
          <T>2022年10月 - 2024年05月</T>
        </Line>
        <List>
          <Item>项目使用Node.js的Express框架搭建，涉及顾问信息获取、用户订单创建与管理、实时通信消息管理、充值与退款等核心模块</Item>
          <Item>负责整个App的后台开发，每月两次版本迭代，独立设计并实现了签到任务、活动领奖等复杂逻辑</Item>
        </List>
      </Group>
      <Group>
        <Line>
          <B>XMPP 服务维护与优化</B>
          <T>2024年04月 - 至今</T>
        </Line>
        <List>
          <Item>维护ejabberd服务，数据库升级、成本优化</Item>
          <Item>优化业务代码，重构ejabberd插件，监控系统搭建</Item>
          <Item>群聊MucSub协议调研，客户端SDK接入</Item>
        </List>
      </Group>
    </Section>
  )
}

export const Summary = () => {
  return (
    <Section>
      <Title>个人总结</Title>
      <List>
        <Item>具有良好的沟通、协作能力，有良好的职业道德和较强的工作责任感。</Item>
        <Item>具有快速解决问题的能力，喜欢阅读源码，研究新技术，技术视野广阔。</Item>
        <Item>日常使用Linux操作系统，能够熟练使用各类工具提高开发效率。</Item>
        <Item>能够高效利用Google、Stack Overflow等相关网站学习并解决问题。</Item>
      </List>
    </Section>
  )
}
