var isDev: boolean
declare module 'js-md5'
declare module '*.scss';

interface Resource<T> {
  resource: T
}

interface UserType {
  id?: number;
  username?: string;
  password?: string;
  signature?: string;
  avatar?: string;
  email?: string;
}

type UserOutlinedType = typeof UserOutlined

interface MenuType {
  [x: string]: JSX.Element;
  item: JSX.Element;
  id?: number
  parent_id?: number
  name?: string
  label?: string
  key?: number
  path?: string
  // icon?: Element
  icon?: string | React.ReactHTMLElement | null
  children?: MenuType[]
}