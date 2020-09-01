import React, { FC, useEffect } from 'react';
import { HomeModelState, ConnectProps, connect } from 'alita';
import styles from './index.less';
import MainTabs from './components/MainTabs/index';
import Drawer from './components/Drawer/index';

interface PageProps extends ConnectProps {
  home: HomeModelState;
}

const HomePage: FC<PageProps> = ({ home, dispatch }) => {
  // useEffect(() => {
  //   dispatch!({
  //     type: 'home/query',
  //   });
  //   return () => {};
  // }, []);

  return (
    <>
      <MainTabs />
      <Drawer />
    </>
  );
};

export default connect(({ home }: { home: HomeModelState }) => ({ home }))(HomePage);
