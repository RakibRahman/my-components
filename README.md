# Components

  


  # Hooks
  - forwardRef
  - useEffect
- 


# 
-  Using enumerations

const Foo = () => {
  return <div>foo</div>
}
const Bar = () => {
  return <div>bar</div>
}
const Default = () => {
  return <div>default</div>
}
const statusMap = {
  foo: <Foo />,
  bar: <Bar />,
  default: <Default />
}
const App = () => {
  const [status] = useState('default')
  return (
    statusMap[status]
  )
}


---

const MenuItem({ menu })  => {
  switch (menu) {
    case 1:
      return <Users />
    case 2:
      return <Chats />
    case 3:
      return <Rooms />
    default:
      return null
  }
}r