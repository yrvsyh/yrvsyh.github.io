const Container = ({ children }) => {
  return <div className="relative flex flex-col gap-1 items-center text-xs">{children}</div>
}

const Name = ({ children }) => {
  return <span className="text-2xl font-bold">{children}</span>
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
      <Name>袁钟阳</Name>
      {/* <div className="absolute right-0 h-full w-[86px] bg-gray-300" /> */}
      <Line>
        <Item>电话: 18672985705</Item>
        <Separator />
        <Item>邮箱: yuan_zhongyang@foxmail.com</Item>
        <Separator />
        <Item>现居城市: 武汉</Item>
      </Line>
      <Line>
        <Item>年龄: 24岁</Item>
        <Separator />
        <Item>性别: 男</Item>
      </Line>
      <Line>
        <Item>当前状态: 在职</Item>
        <Separator />
        <Item>意向城市: 武汉</Item>
        <Separator />
        <Item>求职意向: Nodejs/Golang/全栈</Item>
      </Line>
      <Line>
        <Item>期望薪资: 20k~22k</Item>
      </Line>
    </Container>
  )
}

export default Header
