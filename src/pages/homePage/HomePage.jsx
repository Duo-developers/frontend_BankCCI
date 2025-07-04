import React, { useRef } from 'react';
import { Box, Container, Typography, Button, Card, CardContent, Avatar, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const videoUrl = 'https://res.cloudinary.com/dwc4ynoj9/video/upload/v1751090690/Video_Para_CCI_Homepage_fmiwag.mp4';
const lauraImageUrl = 'https://res.cloudinary.com/dwc4ynoj9/image/upload/v1725373822/samples/woman-on-a-football-field.jpg';
const marcoImageUrl = 'https://res.cloudinary.com/dwc4ynoj9/image/upload/v1725373812/samples/people/kitchen-bar.jpg';
const carlosImageUrl = 'https://res.cloudinary.com/dwc4ynoj9/image/upload/v1725373821/samples/man-portrait.jpg';

const VideoBackground = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  height: 'calc(100vh - 70px)', 
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 42, 69, 0.7)',
    zIndex: 1,
  },
});

const VideoElement = styled('video')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: 0,
});

const HeroContent = styled(Box)({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  padding: '0 20px',
});

const ProductCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  borderRadius: '10px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
  margin: '0 15px',
  height: '280px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '300px',
}));

const FeatureBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  padding: theme.spacing(3),
  backgroundColor: 'white',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  height: '100%',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  },
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: theme.shadows[4],
  },
}));

const SliderArrow = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  zIndex: 2,
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: theme.palette.background.paper,
  opacity: 0.9,
  '&:hover': {
    backgroundColor: theme.palette.background.paper,
    opacity: 1,
  },
}));

export const HomePage = () => {
  const sliderRef = useRef();
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box>
      <VideoBackground>
        <VideoElement autoPlay muted loop>
          <source src={videoUrl} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </VideoElement>
        <HeroContent>
          <Container maxWidth="md">
            <Typography 
              component="h1" 
              variant="h2" 
              fontWeight="bold" 
              gutterBottom 
              sx={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
            >
              La banca digital que se adapta a ti
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 5, 
                color: '#FFD358',
                textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
                maxWidth: '800px',
                mx: 'auto'
              }}
            >
              Abre una cuenta en minutos y maneja tus finanzas sin complicaciones,
              con la tecnología más avanzada y segura del mercado.
            </Typography>
            <Button 
              component={RouterLink}
              to="/auth"
              variant="contained" 
              size="large"
              sx={{
                bgcolor: '#FFD915',
                color: '#011B2F',
                py: 1.5,
                px: 4,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                '&:hover': { 
                  bgcolor: '#FFD358',
                  transform: 'scale(1.05)'
                },
                transition: 'all 0.3s',
                boxShadow: '0 4px 10px rgba(0,0,0,0.25)'
              }}
            >
              Únete a nuestro imperio
            </Button>
          </Container>
        </HeroContent>
      </VideoBackground>

      <Box sx={{ py: 6, bgcolor: '#f9f9f9', position: 'relative' }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom 
            fontWeight="bold"
            sx={{ mb: 6, color: '#002A45' }}
          >
            Nuestros Productos
          </Typography>
          
          <Box sx={{ position: 'relative', px: { xs: 0, md: 6 } }}>
            <SliderArrow
              onClick={() => sliderRef.current.slickPrev()}
              sx={{ left: { xs: '-5px', md: '-25px' } }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </SliderArrow>
            
            <Slider ref={sliderRef} {...sliderSettings}>
              {/* Product 1 */}
              <Box>
                <ProductCard>
                  <Box sx={{ 
                    bgcolor: '#003F66', 
                    width: 70, 
                    height: 70, 
                    borderRadius: '50%', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2
                  }}>
                    <AccountBalanceWalletIcon sx={{ fontSize: 35, color: 'white' }} />
                  </Box>
                  <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>Cuentas de Ahorro</Typography>
                  <Typography variant="body1" sx={{ color: '#555' }}>
                    Intereses competitivos, cero comisiones ocultas y acceso inmediato a tu dinero.
                  </Typography>
                </ProductCard>
              </Box>
              
              <Box>
                <ProductCard>
                  <Box sx={{ 
                    bgcolor: '#003F66', 
                    width: 70, 
                    height: 70, 
                    borderRadius: '50%', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2
                  }}>
                    <CreditCardIcon sx={{ fontSize: 35, color: 'white' }} />
                  </Box>
                  <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>Tarjetas de Crédito</Typography>
                  <Typography variant="body1" sx={{ color: '#555' }}>
                    Beneficios exclusivos, aceptación mundial y programas de recompensas.
                  </Typography>
                </ProductCard>
              </Box>
              
              <Box>
                <ProductCard>
                  <Box sx={{ 
                    bgcolor: '#003F66', 
                    width: 70, 
                    height: 70, 
                    borderRadius: '50%', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2
                  }}>
                    <TrendingUpIcon sx={{ fontSize: 35, color: 'white' }} />
                  </Box>
                  <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>Inversiones</Typography>
                  <Typography variant="body1" sx={{ color: '#555' }}>
                    Haz crecer tu patrimonio con planes de inversión personalizados.
                  </Typography>
                </ProductCard>
              </Box>
              
              <Box>
                <ProductCard>
                  <Box sx={{ 
                    bgcolor: '#003F66', 
                    width: 70, 
                    height: 70, 
                    borderRadius: '50%', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2
                  }}>
                    <SecurityIcon sx={{ fontSize: 35, color: 'white' }} />
                  </Box>
                  <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>Seguros</Typography>
                  <Typography variant="body1" sx={{ color: '#555' }}>
                    Protección completa para ti y tu familia con coberturas flexibles.
                  </Typography>
                </ProductCard>
              </Box>
            </Slider>
            
            <SliderArrow
              onClick={() => sliderRef.current.slickNext()}
              sx={{ right: { xs: '-5px', md: '-25px' } }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </SliderArrow>
          </Box>
        </Container>
      </Box>
      
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom 
            fontWeight="bold"
            sx={{ mb: 4, color: '#002A45' }}
          >
            ¿Por qué elegir Bank CCI?
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <Box sx={{ width: { xs: '100%', md: '31%' }, mb: { xs: 3, md: 0 } }}>
              <FeatureBox>
                <SecurityIcon sx={{ fontSize: 45, color: '#003F66', mr: 2, mt: 0.5 }} />
                <Box>
                  <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, color: '#002A45' }}>
                    Seguridad de Vanguardia
                  </Typography>
                  <Typography variant="body1">
                    Protegemos tus datos y tu dinero con la tecnología de encriptación más avanzada del mercado.
                  </Typography>
                </Box>
              </FeatureBox>
            </Box>
            
            <Box sx={{ width: { xs: '100%', md: '31%' }, mb: { xs: 3, md: 0 } }}>
              <FeatureBox>
                <SupportAgentIcon sx={{ fontSize: 45, color: '#003F66', mr: 2, mt: 0.5 }} />
                <Box>
                  <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, color: '#002A45' }}>
                    Atención 24/7
                  </Typography>
                  <Typography variant="body1">
                    Nuestro equipo de especialistas está disponible todos los días del año para asistirte.
                  </Typography>
                </Box>
              </FeatureBox>
            </Box>
            
            <Box sx={{ width: { xs: '100%', md: '31%' } }}>
              <FeatureBox>
                <SmartphoneIcon sx={{ fontSize: 45, color: '#003F66', mr: 2, mt: 0.5 }} />
                <Box>
                  <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, color: '#002A45' }}>
                    App Móvil Intuitiva
                  </Typography>
                  <Typography variant="body1">
                    Gestiona tus finanzas desde cualquier lugar con nuestra aplicación premiada.
                  </Typography>
                </Box>
              </FeatureBox>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: 6, bgcolor: '#f9f9f9', position: 'relative' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom 
            fontWeight="bold"
            sx={{ mb: 6, color: '#002A45' }}
          >
            Lo que dicen nuestros clientes
          </Typography>
          
          <Box sx={{ position: 'relative', px: { xs: 0, md: 5 } }}>
            <Slider {...testimonialSettings}>
              <Box sx={{ px: 2 }}>
                <TestimonialCard elevation={3}>
                  <Box 
                    sx={{ 
                      height: 200, 
                      backgroundImage: `url(${lauraImageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center top'
                    }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar 
                        sx={{ bgcolor: '#FFD915', mr: 2, width: 50, height: 50 }}
                        src={lauraImageUrl}
                      >
                        LC
                      </Avatar>
                      <Box>
                        <Typography variant="h6" fontWeight="bold">Laura Campos</Typography>
                        <Typography variant="body2" color="text.secondary">Cliente desde 2023</Typography>
                      </Box>
                    </Box>
                    <Typography variant="body1" fontStyle="italic">
                      "Abrir mi cuenta fue increíblemente rápido y la app es muy fácil de usar. ¡El mejor banco digital!"
                    </Typography>
                  </CardContent>
                </TestimonialCard>
              </Box>
              
              <Box sx={{ px: 2 }}>
                <TestimonialCard elevation={3}>
                  <Box 
                    sx={{ 
                      height: 200, 
                      backgroundImage: `url(${marcoImageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar 
                        sx={{ bgcolor: '#FFD915', mr: 2, width: 50, height: 50 }}
                        src={marcoImageUrl}
                      >
                        MA
                      </Avatar>
                      <Box>
                        <Typography variant="h6" fontWeight="bold">Marco Antonio</Typography>
                        <Typography variant="body2" color="text.secondary">Cliente desde 2022</Typography>
                      </Box>
                    </Box>
                    <Typography variant="body1" fontStyle="italic">
                      "La atención al cliente es excepcional. Resolvieron mi problema en minutos. Muy recomendado."
                    </Typography>
                  </CardContent>
                </TestimonialCard>
              </Box>
              
              <Box sx={{ px: 2 }}>
                <TestimonialCard elevation={3}>
                  <Box 
                    sx={{ 
                      height: 200, 
                      backgroundImage: `url(${carlosImageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar 
                        sx={{ bgcolor: '#FFD915', mr: 2, width: 50, height: 50 }}
                        src={carlosImageUrl}
                      >
                        CP
                      </Avatar>
                      <Box>
                        <Typography variant="h6" fontWeight="bold">Carlos Pérez</Typography>
                        <Typography variant="body2" color="text.secondary">Cliente desde 2021</Typography>
                      </Box>
                    </Box>
                    <Typography variant="body1" fontStyle="italic">
                      "Las inversiones con Bank CCI han sido las mejores decisiones financieras que he tomado. Excelente asesoramiento."
                    </Typography>
                  </CardContent>
                </TestimonialCard>
              </Box>
            </Slider>
          </Box>
        </Container>
      </Box>

      <Box 
        sx={{ 
          bgcolor: '#011B2F', 
          color: 'white', 
          py: 8, 
          textAlign: 'center',
          backgroundImage: 'linear-gradient(to right, #011B2F, #003F66)'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            ¿Listo para empezar?
          </Typography>
          <Typography variant="h6" sx={{ mb: 5, maxWidth: '700px', mx: 'auto' }}>
            Únete a la nueva era de la banca y descubre por qué miles de personas confían en Bank CCI cada día.
          </Typography>
          <Button 
            component={RouterLink}
            to="/auth"
            variant="contained" 
            size="large"
            sx={{
              bgcolor: '#FFD915',
              color: '#011B2F',
              py: 2,
              px: 5,
              fontSize: '1.2rem',
              fontWeight: 'bold',
              '&:hover': { 
                bgcolor: '#FFD358',
                transform: 'scale(1.05)'
              },
              transition: 'all 0.3s',
              boxShadow: '0 4px 15px rgba(255,217,21,0.4)'
            }}
          >
            Únete a nuestro imperio
          </Button>
        </Container>
      </Box>
    </Box>
  );
};