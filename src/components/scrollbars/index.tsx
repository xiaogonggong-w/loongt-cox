


import 'overlayscrollbars/styles/overlayscrollbars.css';
import { OverlayScrollbarsComponent, OverlayScrollbarsComponentProps } from "overlayscrollbars-react";
import React, { forwardRef } from 'react';
export const  Scrollbars = forwardRef(({
  children,
  style,
  ...props
}: { children: React.ReactNode, style?: React.CSSProperties, props?: OverlayScrollbarsComponentProps }, ref)=>{
  const { options = {}, ...reset } = props;

  const { scrollbars={}, ...otherOptions } = options

  return <OverlayScrollbarsComponent style={{
    height:'100%',
    width:'100%',
    ...style,
  }} defer className='overlayscrollbars-react'
   options={{
     scrollbars:{
        theme: 'os-theme-dark',
        ...scrollbars
     },
     ...otherOptions
   }}

   {...reset}
   ref={ref}
  >{children}</OverlayScrollbarsComponent>
})