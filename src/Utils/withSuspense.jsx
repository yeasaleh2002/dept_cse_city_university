import React, { Suspense, memo, lazy } from 'react';

/**
 * @param {() => Promise<{ default: React.ComponentType<any> }>} importFunc - the lazy import function for the component.
 * @param {React.ReactNode} FallbackComponent - show while the component is loading.
 */

export const withSuspense = (importFunc, FallbackComponent = (<div>Loading...</div>)) => {
  const LazyComponent = lazy(importFunc); // Lazy load inside the HOC

  return memo((props) => (
    <Suspense fallback={FallbackComponent}>
      <LazyComponent {...props} />
    </Suspense>
  ));
};

