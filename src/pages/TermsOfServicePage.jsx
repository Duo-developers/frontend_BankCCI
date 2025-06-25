import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemIcon } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';

export const TermsOfServicePage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
        Términos y Condiciones de Uso de Bank CCI
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
        Última actualización: 25 de junio de 2025
      </Typography>

      <Typography paragraph>
        Estos Términos y Condiciones de Uso ("Términos") rigen el acceso y la utilización de todos los productos, servicios, contenido, y funcionalidades ofrecidos por Bank CCI, S.A. ("Bank CCI", "nosotros") a través de nuestro sitio web, aplicaciones móviles y otras plataformas digitales (conjuntamente, los "Servicios").
      </Typography>
      <Typography paragraph>
        Lea estos Términos detenidamente. Al crear una cuenta o utilizar nuestros Servicios, usted confirma que ha leído, entendido y aceptado estar legalmente vinculado por estos Términos y nuestra Política de Privacidad. Si no está de acuerdo con alguno de estos términos, no debe utilizar nuestros Servicios.
      </Typography>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
          1. Descripción de los Servicios
        </Typography>
        <Typography paragraph>
          Bank CCI ofrece una plataforma de banca digital que permite a los usuarios gestionar cuentas bancarias, realizar transferencias, solicitar productos crediticios, realizar inversiones y acceder a otros servicios financieros. Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto de los Servicios en cualquier momento, sin previo aviso.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
          2. Cuentas de Usuario y Seguridad
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon><GavelIcon fontSize="small" /></ListItemIcon>
            <Typography><b>Elegibilidad:</b> Para abrir una cuenta, debe ser mayor de edad según la legislación de Guatemala y cumplir con nuestros requisitos de identificación y verificación.</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon><GavelIcon fontSize="small" /></ListItemIcon>
            <Typography><b>Responsabilidad de la Cuenta:</b> Usted es el único responsable de mantener la confidencialidad de sus credenciales de acceso (usuario, contraseña, PIN, tokens de seguridad) y de todas las actividades que ocurran en su cuenta. Notifíquenos inmediatamente sobre cualquier uso no autorizado o brecha de seguridad.</Typography>
          </ListItem>
           <ListItem>
            <ListItemIcon><GavelIcon fontSize="small" /></ListItemIcon>
            <Typography><b>Información Precisa:</b> Usted se compromete a proporcionar información veraz, precisa, actual y completa durante el proceso de registro y a mantenerla actualizada.</Typography>
          </ListItem>
        </List>
      </Box>
      
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
          3. Uso Aceptable y Conducta Prohibida
        </Typography>
        <Typography paragraph>
          Usted se compromete a utilizar los Servicios únicamente para fines lícitos y de acuerdo con estos Términos. Queda estrictamente prohibido:
        </Typography>
        <List>
          <ListItem>Utilizar los Servicios para cualquier actividad fraudulenta, de lavado de dinero, financiamiento del terrorismo u otra actividad ilegal.</ListItem>
          <ListItem>Intentar obtener acceso no autorizado a nuestros sistemas, a las cuentas de otros usuarios o a cualquier red conectada a los Servicios.</ListItem>
          <ListItem>Introducir virus, troyanos, gusanos o cualquier otro material malicioso o tecnológicamente dañino.</ListItem>
          <ListItem>Realizar cualquier acción que pueda deshabilitar, sobrecargar o dañar el funcionamiento o la apariencia de los Servicios.</ListItem>
        </List>
      </Box>
      
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
          4. Propiedad Intelectual
        </Typography>
        <Typography paragraph>
          Todos los derechos, títulos e intereses sobre los Servicios, incluyendo el software, texto, imágenes, gráficos, logos (como el logo de Bank CCI), y todo el material contenido en la plataforma, son propiedad exclusiva de Bank CCI o de sus licenciantes y están protegidos por las leyes de propiedad intelectual.
        </Typography>
      </Box>

       <Box sx={{ my: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
          5. Limitación de Responsabilidad
        </Typography>
        <Typography paragraph>
          En la máxima medida permitida por la ley, Bank CCI no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo, entre otros, la pérdida de beneficios, datos, uso o buena voluntad, que resulten del acceso o uso, o la imposibilidad de acceso o uso, de los Servicios.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
          6. Legislación Aplicable y Jurisdicción
        </Typography>
        <Typography paragraph>
          Estos Términos se regirán e interpretarán de acuerdo con las leyes de la República de Guatemala. Cualquier disputa que surja en relación con estos Términos será sometida a la jurisdicción exclusiva de los tribunales competentes de la Ciudad de Guatemala.
        </Typography>
      </Box>
      
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
          7. Contacto
        </Typography>
        <Typography paragraph>
          Para cualquier pregunta sobre estos Términos y Condiciones, por favor contáctenos a: <br />
          <b>Correo Electrónico:</b> legal@bankcci.com.gt
        </Typography>
      </Box>
    </Container>
  );
};
