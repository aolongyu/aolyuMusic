import { ResponseError, Context } from 'umi-request';
import { NavBarProps, TitleListItem, NavBarListItem, TabBarProps, TabBarListItem } from 'alita';

// 请求中间件 就是发起请求和响应之后需要统一操作数据就写这
// https://github.com/umijs/umi-request#example-1
const middleware = async (ctx: Context, next: any) => {
  console.log(
    '%c%s',
    'color: white; background: orange;',
    '<-------------------------------初始化请求------------------------------->',
  );
  await next();
  console.log(
    '%c%s',
    'color: white; background: green;',
    '<--------------------------------请求成功-------------------------------->',
  );
};

export const request = {
  prefix: '', // 统一的请求头
  middlewares: [middleware],
  errorHandler: (error: ResponseError) => {
    // 集中处理错误
    console.log(error);
  },
};

const titleList: TitleListItem[] = [
  {
    pagePath: '/',
    title: '首页',
  },
  {
    pagePath: '/list',
    title: '列表',
  },
  {
    pagePath: '/settings',
    title: '设置',
  },
];
const navList: NavBarListItem[] = [];
const navBar: NavBarProps = {
  navList,
  hideNavBar: true,
  fixed: true,
  onLeftClick: () => {
    // router.goBack();
  },
};

const tabBar: TabBarProps = {
  color: `#999999`,
  selectedColor: '#00A0FF',
  borderStyle: 'white',
  position: 'bottom',
};

export const mobileLayout = {
  documentTitle: 'aolyu',
  navBar,
  tabBar,
  titleList,
};
