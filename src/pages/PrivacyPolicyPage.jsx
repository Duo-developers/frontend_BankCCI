import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemIcon } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export const PrivacyPolicyPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
        Política de Privacidad de Bank CCI
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
        Última actualización: 25 de junio de 2025
      </Typography>

      <Typography paragraph>
        Bienvenido a Bank CCI. Su privacidad es de suma importancia para nosotros. Este documento detalla cómo nuestra institución, Bank CCI, S.A. y sus afiliadas ("Bank CCI", "nosotros", "nuestro"), recopila, utiliza, protege y comparte su información personal cuando usted utiliza nuestros servicios bancarios, nuestro sitio web, nuestra aplicación móvil y cualquier otra plataforma digital (en conjunto, los "Servicios").
      </Typography>
      <Typography paragraph>
        Al acceder o utilizar nuestros Servicios, usted reconoce y acepta las prácticas descritas en esta Política de Privacidad. Le recomendamos leer este documento detenidamente para comprender sus derechos y nuestras obligaciones con respecto a su información.
      </Typography>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
          1. Información que Recopilamos
        </Typography>
        <Typography paragraph>
          Para ofrecerle servicios financieros de alta calidad y cumplir con las regulaciones aplicables, recopilamos diferentes tipos de información:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon fontSize="small" />
            </ListItemIcon>
            <Typography>
              <b>Información de Identificación Personal:</b> Nombre completo, documento personal de identificación (DPI), pasaporte, número de identificación tributaria (NIT), fecha de nacimiento, género, nacionalidad, dirección de domicilio, correo electrónico y número de teléfono.
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon fontSize="small" />
            </ListItemIcon>
            <Typography>
              <b>Información Financiera:</b> Historial de transacciones, números de cuenta, saldos, historial crediticio, información sobre ingresos y patrimonio, y cualquier otra información necesaria para la evaluación de productos de crédito o inversión.
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon fontSize="small" />
            </ListItemIcon>
            <Typography>
              <b>Información Técnica y de Uso:</b> Dirección IP, tipo de dispositivo, sistema operativo, identificadores únicos de dispositivo, información de la red móvil, páginas que visita en nuestro sitio web, tiempo de permanencia y datos de geolocalización (con su consentimiento explícito).
            </Typography>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
          2. Cómo Utilizamos su Información
        </Typography>
        <Typography paragraph>
          Su información es utilizada para los siguientes propósitos fundamentales:
        </Typography>
        <List>
           <ListItem>
            <b>Para Proveer y Gestionar sus Servicios:</b> Procesar transacciones, administrar sus cuentas, y responder a sus solicitudes y consultas.
          </ListItem>
          <ListItem>
            <b>Para Fines de Seguridad:</b> Verificar su identidad, prevenir fraudes, lavado de dinero y otras actividades ilícitas, y proteger la integridad de nuestros sistemas.
          </ListItem>
          <ListItem>
            <b>Para Cumplimiento Legal y Regulatorio:</b> Cumplir con las leyes y regulaciones bancarias locales e internacionales, incluyendo reportes a las autoridades competentes.
          </ListItem>
           <ListItem>
            <b>Para Mejorar Nuestros Servicios:</b> Analizar tendencias de uso para mejorar la experiencia del usuario en nuestra web y app, y desarrollar nuevos productos y servicios.
          </ListItem>
           <ListItem>
            <b>Para Fines de Marketing:</b> Con su consentimiento, comunicarle ofertas, promociones y noticias sobre productos que puedan ser de su interés. Usted puede optar por no recibir estas comunicaciones en cualquier momento.
          </ListItem>
        </List>
      </Box>
      
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
          3. Cómo Compartimos su Información
        </Typography>
        <Typography paragraph>
          No vendemos ni alquilamos su información personal a terceros. Solo compartimos su información en las siguientes circunstancias:
        </Typography>
        <List>
          <ListItem>
             <b>Con Proveedores de Servicios:</b> Terceros que nos asisten en la operación de nuestros servicios (procesadores de pago, agencias de crédito, proveedores de tecnología) bajo estrictos acuerdos de confidencialidad.
          </ListItem>
          <ListItem>
            <b>Por Requerimiento Legal:</b> Cuando sea requerido por una orden judicial, citación o cualquier otro proceso legal emitido por una autoridad competente.
          </ListItem>
           <ListItem>
            <b>Para Prevenir Daños:</b> Si creemos de buena fe que es necesario para proteger nuestros derechos, su seguridad o la seguridad de otros.
          </ListItem>
        </List>
      </Box>
      
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
          4. Seguridad de los Datos
        </Typography>
        <Typography paragraph>
          Implementamos medidas de seguridad administrativas, técnicas y físicas de última generación para proteger su información contra acceso no autorizado, alteración, divulgación o destrucción. Esto incluye encriptación de datos, firewalls y protocolos de acceso seguro. Sin embargo, ningún sistema es 100% infalible, y no podemos garantizar la seguridad absoluta.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
          5. Cambios a esta Política de Privacidad
        </Typography>
        <Typography paragraph>
          Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier cambio será publicado en esta página con una nueva fecha de "última actualización". Le recomendamos revisar periódicamente para estar informado.
        </Typography>
      </Box>
      
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
          6. Contacto
        </Typography>
        <Typography paragraph>
          Si tiene alguna pregunta o inquietud sobre esta Política de Privacidad o sobre cómo manejamos sus datos, puede contactarnos a través de:
        </Typography>
        <Typography>
          <b>Correo Electrónico:</b> privacidad@bankcci.com.gt
        </Typography>
         <Typography>
          <b>Dirección Postal:</b> Av. Reforma 1-23, Zona 10, Edificio CCI, Nivel 15, Ciudad de Guatemala, Guatemala.
        </Typography>
      </Box>
    </Container>
  );
};
