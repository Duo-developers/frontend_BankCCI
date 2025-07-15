import React from 'react';
import {
    Box, Container, CircularProgress, Divider
} from '@mui/material';
import { useSettings } from '../../shared/hooks/useSettings';
import { useFavorites } from '../../shared/hooks/useFavorites'; // Importa el nuevo hook
import { SettingsHeader, ProfileForm, PasswordForm } from '../../components/settings';
import { AddFavoriteForm } from '../../components/settings/Favorites/AddFavoriteForm'; 
import { FavoritesList } from '../../components/settings/Favorites/FavoritesList'; // Importa los componentes de favoritos

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

    // Usa el hook de favoritos
    const {
        favorites,
        isLoading: favoritesLoading,
        addFavorite,
        removeFavorite
    } = useFavorites();

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

            <Divider sx={{ my: 6 }} />

            {/* Sección de Favoritos */}
            <FavoritesList
                favorites={favorites}
                onRemove={removeFavorite}
            />
            <AddFavoriteForm
                onAddFavorite={addFavorite}
                isLoading={favoritesLoading}
            />

        </Container>
    );
};