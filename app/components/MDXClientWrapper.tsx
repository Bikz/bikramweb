'use client';

import React from 'react';
import { CustomMDX } from './mdx';

export function MDXClientWrapper({ mdxSource }: { mdxSource: any }) {
  return <CustomMDX mdxSource={mdxSource} />;
}

export default MDXClientWrapper; 