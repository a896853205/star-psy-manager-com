import React, { lazy } from 'react';

const CreateUser = lazy(() => import('./components/show'));

// 整体组件逻辑,lazy等等.
export default () => <CreateUser />;
