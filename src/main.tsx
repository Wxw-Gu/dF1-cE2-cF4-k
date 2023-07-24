import React from 'react'
import { ConfigProvider } from 'antd'
import { createRoot } from 'react-dom/client'
import zhCN from 'antd/es/locale/zh_CN'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import 'antd/dist/reset.css'
import './index.css'
import 'virtual:uno.css'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <ConfigProvider locale={zhCN}>
    <RouterProvider router={router} />
  </ConfigProvider>,
)
