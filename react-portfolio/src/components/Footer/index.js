import React from "react";
import { Layout } from 'antd';

const { Footer } = Layout;

function FooterPage() {

    return (
    <Layout className="layout">
      <div>
      <Footer style={{ textAlign: 'center' }}>Monique Loibner ©2020 Created by Monique - Full Stack Web Developer</Footer>
      </div>
    </Layout> )

    }

export default FooterPage;
