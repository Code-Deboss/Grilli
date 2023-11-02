'use client';

import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const Dashboard = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={80} theme="light">
        {/* Sidebar content */}
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {/* Header content */}
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {/* Breadcrumb content */}
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {/* Dashboard content */}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Your Footer Text</Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;