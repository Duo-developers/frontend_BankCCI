import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Box, CircularProgress, Alert } from "@mui/material";
import { getAccountSummary } from "../../services/api";
import { CurrencyConversionSection } from "../../components/client/account"; // Nuevo: importar el componente de conversión

const AccountDetailPage = () => {
  const { accountId } = useParams();
  const [accountDetails, setAccountDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccountDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getAccountSummary(accountId);
        setAccountDetails(res.data.data || res.data); // Ajustar según tu estructura real
      } catch (err) {
        setError(
          err.response?.data?.message ||
            "Error al cargar los detalles de la cuenta"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchAccountDetails();
  }, [accountId]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  if (!accountDetails) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="warning">No se encontraron detalles de la cuenta.</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Detalles de la Cuenta
      </Typography>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6">
          {accountDetails.accountName || "Cuenta"}
        </Typography>
        <Typography variant="body1">
          Saldo actual:{" "}
          <strong>
            {accountDetails.balance?.toFixed(2)} {accountDetails.currency || "GTQ"}
          </strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Número de cuenta: {accountDetails.accountNumber || "-"}
        </Typography>
      </Box>

      {/* Aquí puedes poner tu lista de transacciones, movimientos, etc. */}

      {/* Nueva sección: Conversor de divisas */}
      <CurrencyConversionSection
        accountBalance={accountDetails.balance}
        accountCurrency={accountDetails.currency || "GTQ"}
      />
    </Container>
  );
};

