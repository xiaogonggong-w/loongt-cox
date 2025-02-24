// src/components/StyledBox.tsx
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const PrimaryButton = styled(Button)(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius,
    transition: 'border-color 0.3s ease',
}));