import { CircularProgress } from '@mui/material';
import React, { Suspense, memo } from 'react';

/**
 * @param {React.Component} WrappedComponent -  wraping lazy component.
 * @param {React.ReactNode} FallbackComponent -  show while component is loading.
 */

export const withSuspense = (WrappedComponent, FallbackComponent = (<div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}><CircularProgress /> </div>)) =>
  memo((props) => (
    <Suspense fallback={FallbackComponent}>
      <WrappedComponent {...props} />
    </Suspense>
  ));

