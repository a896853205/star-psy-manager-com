import React, { lazy } from 'react';

const Description = lazy(() => import('./components/compose'));

// 整体组件逻辑,lazy等等.
export default () => <Description />;
