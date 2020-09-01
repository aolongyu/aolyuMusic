import React, { useState } from 'react';
import { Drawer, List, NavBar, Icon, Button } from 'antd-mobile';
import styles from './index.less';

const MainTabs = () => {
  const [openStatus, setOpenStatus] = useState(true);

  const sidebar = (
    <List>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
        if (index === 0) {
          return (
            <List.Item
              key={index}
              thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
              multipleLine
            >
              Category
            </List.Item>
          );
        }
        return (
          <List.Item
            key={index}
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
          >
            Category{index}
          </List.Item>
        );
      })}
    </List>
  );

  const onOpenChange = () => {
    console.log('123');
    console.log(openStatus);
    setOpenStatus(!openStatus);
  };

  return (
    <div className={styles.container}>
      <Button
        onClick={() => {
          onOpenChange();
        }}
      >
        btn
      </Button>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebar={sidebar}
        open={openStatus}
        onOpenChange={() => {
          onOpenChange();
        }}
      />
    </div>
  );
};

export default MainTabs;
