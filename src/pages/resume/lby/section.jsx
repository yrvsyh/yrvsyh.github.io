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
          <B>湖北民族大学 </B>
          <T>2015年09月 - 2019年07月</T>
        </Line>
        <Line>
          <T>翻译 本科 外国语学院</T>
          <T>CET6、TEM4/8</T>
        </Line>
      </Group>
    </Section>
  )
}

// export const Skill = () => {
//   return (
//     <Section>
//       <Title>专业技能</Title>
//       <Group>
//         <List>
//           <Item>
//             <B>计算机基础: </B>
//             <T>熟练掌握计算机网络、数据结构和算法、操作系统，了解计算机组成原理。</T>
//           </Item>
//           <Item>
//             <B>Linux: </B>
//             <T>熟悉Linux下的开发环境，了解网络编程，io多路复用，epoll等，熟练使用Linux以及相关开发工具。</T>
//           </Item>
//           <Item>
//             <B>语言: </B>
//             <T>熟悉 Node.js Golang 及其常用框架，了解Erlang、C、Python等语言。</T>
//           </Item>
//           <Item>
//             <B>数据库: </B>
//             <T>熟练掌握MySQL数据库以及常见优化手段；熟悉Redis的数据结构以及常见使用场景。</T>
//           </Item>
//           <Item>
//             <B>开发工具: </B>
//             <T>熟练掌握并规范使用Git工具，对各个子命令有较好的理解；了解Docker以及Dockerfile的编写。</T>
//           </Item>
//           <Item>
//             <B>其他: </B>
//             <T>了解部分前端框架及使用，如React、Vue等</T>
//           </Item>
//         </List>
//       </Group>
//     </Section>
//   )
// }

export const Work = () => {
  return (
    <Section>
      <Title>工作经历</Title>
      <Group>
        <Line>
          <B>深圳千科商贸有限公司</B>
          <T>2019年07月 - 2022年10月</T>
        </Line>
        <Line>
          <T>亚马逊平台运营</T>
          <T>深圳</T>
        </Line>
        <List>
          <Item>
            <B>市场营销与客户拓展: </B>
            <T>利用社交媒体平台（LinkedIn, Facebook, Twitter）在节假日期间执行营销活动，成功吸引新客户；</T>
          </Item>
          <Item>
            <B>客户管理: </B>
            <T>
              负责亚马逊平台的客户沟通并建立客户档案，跟踪联系客户并根据客户反馈分析国际市场、收集产品定价等数据，以制定每月销售计划和订单计划，同时提供及时的线上客户支持与技术跟进。
            </T>
          </Item>
        </List>
      </Group>
      <Group>
        <Line>
          <B>盛世华康集团</B>
          <T>2022年12月 - 2024年07月</T>
        </Line>
        <Line>
          <T>国际营销商务</T>
          <T>武汉</T>
        </Line>
        <List>
          <Item>
            <B>市场开发: </B>
            <T>独立负责普诺赛培养基产品海外销售，通过平台如阿里巴巴、LinkedIn、Facebook、TikTok推进培养基相关产品市场拓展，独立实现新客户开发与成交；</T>
          </Item>
          <Item>
            <B>市场推广材料制作: </B>
            <T>负责从策划到采购的一系列市场宣传物料，包括电子邮件营销（EDM）、产品海报及海外包装设计，跨部门协调确保项目落地；</T>
          </Item>
          <Item>
            <B>客户服务: </B>
            <T>独立处理国际来访客户的接待工作；组织产品线上培训，从收集分析客户反馈解决问题到售前咨询和售后服务，均提供高质量客户体验；</T>
          </Item>
          <Item>
            <B>商务运营管理: </B>
            <T>负责南美与中东市场的客户关系维护，包括日常邮件沟通、订单处理、产品发货、款项跟进及文档资料管理，确保业务流程和谐高效。</T>
          </Item>
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
          <B>普诺赛生物科技有限公司 - 阿里巴巴店铺</B>
          <T>2023年01月 - 2023年03月</T>
        </Line>
        <List>
          <Item>
            <B>店铺搭建与产品上架: </B>
            <T>自主搭建并管理普诺赛品牌的阿里巴巴国际平台店铺，独立上架产品并制定实行推广策略；</T>
          </Item>
          <Item>
            <B>市场突破和销售实绩: </B>
            <T>在产品行业具有较高特殊性的挑战下，仅用两个月时间便顺利获得多个询盘，并成功转化为两笔销售订单。</T>
          </Item>
        </List>
      </Group>
      <Group>
        <Line>
          <B>普诺赛生物科技有限公司 - B2B客户开发</B>
          <T>2023年04月 - 2023年11月</T>
        </Line>
        <List>
          <Item>
            <B>品牌推广与客户开发: </B>
            <T>
              独立执行品牌在各行业关键网络平台的推广活动，充分运用社交媒体等渠道，成功在东亚、印度、南美及欧美地区拓展了13家经销商，签订了经营合作协议，并在后续多次独立成单；
            </T>
          </Item>
          <Item>
            <B>关键销售与客户接待: </B>
            <T>在产品行业具有较高特殊性的挑战下，仅用两个月时间便顺利获得多个询盘，并成功转化为两笔销售订单。</T>
          </Item>
        </List>
        <Group>
          <Line>
            <B>武汉伊莱瑞特生物有限公司 - 哈萨克斯坦ELISA大订单</B>
            <T>2023年12月 - 2024年07月</T>
          </Line>
          <List>
            <Item>
              <B>跨国项目管理与议标成功: </B>
              <T>经历公司结构调整后的岗位变动，迅速投入新角色并助力哈萨克斯坦客户在两个月内成功赢得重大招标；</T>
            </Item>
            <Item>
              <B>资金协调与订单处理: </B>
              <T>实现了客户的一次性全额付款，并独立完成了此大订单包括跟进督促产品生产、联系货代、报关发货以及后续的售后服务流程。</T>
            </Item>
          </List>
        </Group>
      </Group>
    </Section>
  )
}

export const Summary = () => {
  return (
    <Section>
      <Title>个人总结</Title>
      <List>
        <Item>因个人追星，在多平台参与账号运营、撰写明星公众号、参与组织线上活动应援，行动力强，善于捕捉网络热点；</Item>
        <Item>性格随和能快速融入新环境，能够友好沟通，并愿意主动学习新技能；</Item>
        <Item>具备一定的逻辑思维能力和细节分析能力，善于在工作中以结果推论过程，尽力做好准备。</Item>
      </List>
    </Section>
  )
}
