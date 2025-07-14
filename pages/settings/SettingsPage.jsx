import React from 'react';
import {
    Box, Container, CircularProgress, Divider
} from '@mui/material';
import { useSettings } from '../../shared/hooks/useSettings';
import { SettingsHeader, ProfileForm, PasswordForm } from '../../components/settings';

export const SettingsPage = () => {
    const {
        profileData,
        passwordData,
        isLoading,
        isSubmitting,
        errors,
        handleProfileChange,
        handlePasswordChange,
        handleProfileSubmit,
        handlePasswordSubmit,
    } = useSettings();

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            <SettingsHeader />
            
            <ProfileForm
                profileData={profileData}
                isSubmitting={isSubmitting}
                handleProfileChange={handleProfileChange}
                handleProfileSubmit={handleProfileSubmit}
            />
            
            <Divider sx={{ my: 6 }} />

            <PasswordForm
                passwordData={passwordData}
                isSubmitting={isSubmitting}
                errors={errors}
                handlePasswordChange={handlePasswordChange}
                handlePasswordSubmit={handlePasswordSubmit}
            />
        </Container>
    );
};