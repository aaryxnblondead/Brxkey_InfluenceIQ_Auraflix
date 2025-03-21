import { useState } from 'react';
import { 
  Container, 
  Typography, 
  Button, 
  Box, 
  Stepper, 
  Step, 
  StepLabel 
} from '@mui/material';

const steps = ['Welcome', 'Sign Up', 'Personalization'];

function Onboarding() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box textAlign="center" py={4}>
            <Typography variant="h4" gutterBottom>
              Welcome to InfluenceIQ
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Measure true influence—credibility, longevity, and meaningful engagement.
            </Typography>
            <Button variant="contained" color="primary" onClick={handleNext} sx={{ mt: 4 }}>
              Get Started
            </Button>
          </Box>
        );
      case 1:
        return (
          <Box textAlign="center" py={4}>
            <Typography variant="h5" gutterBottom>
              Create Your Account
            </Typography>
            {/* Add sign-up form components here */}
            <Button variant="contained" color="primary" onClick={handleNext} sx={{ mt: 4 }}>
              Continue
            </Button>
          </Box>
        );
      case 2:
        return (
          <Box textAlign="center" py={4}>
            <Typography variant="h5" gutterBottom>
              Personalize Your Experience
            </Typography>
            {/* Add interest selection components here */}
            <Button variant="contained" color="primary" onClick={handleNext} sx={{ mt: 4 }}>
              Complete Setup
            </Button>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ width: '100%', mt: 4 }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {renderStepContent(activeStep)}
      </Box>
    </Container>
  );
}

export default Onboarding;
