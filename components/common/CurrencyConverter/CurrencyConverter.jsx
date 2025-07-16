import React, { useState, useEffect } from 'react';
import { 
    Box, 
    Button, 
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
    CircularProgress,
    Alert,
    Paper,
    IconButton
} from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { useCurrencyConverter } from '../../../shared/hooks/useCurrencyConverter';

// Lista de monedas comunes
const CURRENCIES = [
    { code: 'USD', name: 'Dólar estadounidense' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'Libra esterlina' },
    { code: 'JPY', name: 'Yen japonés' },
    { code: 'CAD', name: 'Dólar canadiense' },
    { code: 'AUD', name: 'Dólar australiano' },
    { code: 'CHF', name: 'Franco suizo' },
    { code: 'CNY', name: 'Yuan chino' },
    { code: 'GTQ', name: 'Quetzal guatemalteco' },
    { code: 'MXN', name: 'Peso mexicano' }
];

export const CurrencyConverter = ({ initialAmount = '', initialFrom = 'USD', initialTo = 'GTQ', autoConvert = false }) => {
    const [amount, setAmount] = useState(initialAmount);
    const [from, setFrom] = useState(initialFrom);
    const [to, setTo] = useState(initialTo);
    const { convert, isLoading, error, result, clearResult } = useCurrencyConverter();

    useEffect(() => {
        // Si se proporciona una cantidad inicial y autoConvert es verdadero, realizar la conversión automáticamente
        if (initialAmount && autoConvert) {
            handleConvert();
        }
    }, [initialAmount, initialFrom, initialTo, autoConvert]);

    const handleConvert = async () => {
        if (!amount || isNaN(amount) || parseFloat(amount) <= 0) return;
        await convert(from, to, amount);
    };

    const handleSwap = () => {
        setFrom(to);
        setTo(from);
        clearResult();
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
        clearResult();
    };

    const handleCurrencyChange = (setter) => (e) => {
        setter(e.target.value);
        clearResult();
    };

    return (
        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
                Conversor de Divisas
            </Typography>

            <Box sx={{ mb: 2 }}>
                <TextField
                    label="Cantidad"
                    type="number"
                    fullWidth
                    value={amount}
                    onChange={handleAmountChange}
                    InputProps={{ inputProps: { min: 0, step: 0.01 } }}
                    error={amount !== '' && (isNaN(amount) || parseFloat(amount) <= 0)}
                    helperText={amount !== '' && (isNaN(amount) || parseFloat(amount) <= 0) ? "Ingrese una cantidad válida" : ""}
                    sx={{ mb: 2 }}
                />

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <FormControl fullWidth sx={{ mr: 1 }}>
                        <InputLabel>De</InputLabel>
                        <Select
                            value={from}
                            label="De"
                            onChange={handleCurrencyChange(setFrom)}
                        >
                            {CURRENCIES.map((currency) => (
                                <MenuItem key={currency.code} value={currency.code}>
                                    {currency.code} - {currency.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <IconButton 
                        onClick={handleSwap}
                        sx={{ mx: 1 }}
                        aria-label="Intercambiar monedas"
                    >
                        <SwapHorizIcon />
                    </IconButton>

                    <FormControl fullWidth sx={{ ml: 1 }}>
                        <InputLabel>A</InputLabel>
                        <Select
                            value={to}
                            label="A"
                            onChange={handleCurrencyChange(setTo)}
                        >
                            {CURRENCIES.map((currency) => (
                                <MenuItem key={currency.code} value={currency.code}>
                                    {currency.code} - {currency.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                <Button
                    variant="contained"
                    fullWidth
                    onClick={handleConvert}
                    disabled={isLoading || !amount || isNaN(amount) || parseFloat(amount) <= 0}
                >
                    {isLoading ? <CircularProgress size={24} color="inherit" /> : "Convertir"}
                </Button>
            </Box>

            {error && (
                <Alert severity="error" sx={{ mt: 2 }}>
                    {error}
                </Alert>
            )}

            {result && (
                <Box sx={{ mt: 2, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
                    <Typography variant="body1">
                        {result.originalAmount} {result.from} = 
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', my: 1 }}>
                        {result.convertedAmount.toFixed(2)} {result.to}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Tasa de cambio: 1 {result.from} = {(result.convertedAmount / result.originalAmount).toFixed(4)} {result.to}
                    </Typography>
                </Box>
            )}
        </Paper>
    );
};