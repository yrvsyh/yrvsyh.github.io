const Container = ({ children }) => {
  return <div className="relative flex flex-col gap-1 items-center text-xs">{children}</div>
}

const Name = ({ children }) => {
  return <span className="mb-1 text-2xl font-bold">{children}</span>
}

const Line = ({ children }) => {
  return <div className="flex gap-1">{children}</div>
}

const Item = ({ children }) => {
  return <span className="text-xs">{children}</span>
}

const Separator = () => {
  return <span className="text-xs"> | </span>
}

const Header = () => {
  return (
    <Container>
      <Name>刘白杨</Name>
      <div className="absolute right-0 h-full w-[86px]">
        <img src="/lby.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <Line>
        <Item>电话: 15502708455</Item>
        <Separator />
        <Item>邮箱: 491052323@qq.com</Item>
        <Separator />
        <Item>现居城市: 武汉</Item>
      </Line>
      <Line>
        <Item>年龄: 27岁</Item>
        <Separator />
        <Item>性别: 女</Item>
      </Line>
      <Line>
        <Item>当前状态: 离职, 随时到岗</Item>
        <Separator />
        <Item>意向城市: 武汉</Item>
        <Separator />
        <Item>求职意向: 外贸业务员</Item>
      </Line>
      <Line>
        <Item>期望薪资: 6-8k</Item>
      </Line>
    </Container>
  )
}

export default Header
