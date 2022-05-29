// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/pei/project/front/qiankun_template/main_root/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/login",
    "title": "登录",
    "component": require('@/pages/login/login').default,
    "exact": true
  },
  {
    "path": "/",
    "component": require('@/pages/index').default,
    "routes": [
      {
        "extract": true,
        "path": "/",
        "redirect": "/main/first",
        "exact": true
      },
      {
        "path": "/main/first",
        "component": require('@/pages/main').default,
        "title": "主应用1",
        "exact": true
      },
      {
        "path": "/main/second",
        "component": require('@/pages/testPage').default,
        "title": "主应用2",
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
