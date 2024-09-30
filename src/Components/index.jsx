import React, { Suspense } from 'react';

const index = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    </Suspense>
  );
};