import React from 'react';
import { Tabs } from 'antd-mobile';
import styles from './index.less';

const MainTabs = () => {
  const tabs = [{ title: '我的' }, { title: '发现' }, { title: '云村' }, { title: '视频' }];
  return (
    <div className={styles.container}>
      <Tabs tabs={tabs} initialPage={0}>
        {/* 我的 */}
        <div>我的</div>

        {/* 发现 */}
        <div>发现</div>

        {/* 云村 */}
        <div>云村</div>

        {/* 视频 */}
        <div>视频</div>
      </Tabs>
    </div>
  );
};

export default MainTabs;
