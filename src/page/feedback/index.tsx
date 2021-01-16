import React, { lazy } from 'react';

const Feedback = lazy(() => import('./components/container'));

// 整体组件逻辑,lazy等等.
export default () => <Feedback />;
