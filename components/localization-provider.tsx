'use client';

import { LocalizationProvider as MuiLocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { PropsWithChildren } from 'react';

export function LocalizationProvider(props: PropsWithChildren) {
  return (
    <MuiLocalizationProvider dateAdapter={AdapterDayjs}>
      {props.children}
    </MuiLocalizationProvider>
  );
}
