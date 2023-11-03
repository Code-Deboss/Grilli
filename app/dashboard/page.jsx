'use client';

import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { Button, Col, Row, Statistic } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className=' h-screen'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
            {
              key: '4',
              icon: <UploadOutlined />,
              label: 'nav 4',
            },
            {
              key: '5',
              icon: <UploadOutlined />,
              label: 'nav 5',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
          className='bg-white flex items-center justify-center'
        >
          <div className='bg-red-400 h-full w-[70%] flex items-center justify-center flex-col' >
            <div className='bg-purple-400 h-[25%] w-full flex items-center justify-around'>
              <div className='h-full bg-yellow-600 w-[20rem]'>

              </div>
              <div className='h-full bg-yellow-600 w-[20rem]'>

              </div>
            </div>
            <div className='bg-blue-400 h-[75%] w-full'>

            </div>
          </div>
          <div className='bg-green-400 h-full w-[30%]'>

          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;