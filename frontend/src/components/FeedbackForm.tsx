// import React from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import {
  Container,
  Box,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  Radio,
  FormControlLabel,
  Typography,
  Button,
  Card,
  Grid,
} from '@mui/material';

export const FeedbackForm = () => {
  const formMethods = useForm();
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '5vh',
          padding: '20px',
          backgroundColor: '#fff',
        }}
      >
       <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(handleSubmit)}>
        <Stack spacing={1}>
       
                <Card sx={{
                    padding: 4
                }}>
                    <Stack 
                        spacing={2} 
                        sx={{
                            flex: "column",
                            width: 400                            
                        }}
                    >
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        {...formMethods.register('name')}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        {...formMethods.register('email')}
                    />
                    <TextField
                        label="Pincode"
                        variant="outlined"
                        fullWidth
                        {...formMethods.register('pincode')}
                    />
                </Stack>
                </Card>
          <Typography variant="body1">Select Police Station:</Typography>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Select District</InputLabel>
            <Select {...formMethods.register('dropdown1')}>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Dropdown 2</InputLabel>
            <Select {...formMethods.register('dropdown2')}>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Dropdown 3</InputLabel>
            <Select {...formMethods.register('dropdown3')}>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="h6">Radio Button Questions:</Typography>
          {/* Repeat the following for each radio button question */}
          <FormControl component="fieldset">
            <Typography>Question 1:</Typography>
            <RadioGroup {...formMethods.register('question1')}>
              <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
              <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
              <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
            </RadioGroup>
          </FormControl>
          {/* Repeat for other questions */}
          <TextField
            label="Additional Comments"
            multiline
            variant="outlined"
            fullWidth
            {...formMethods.register('comments')}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Stack>
      </form>
    </FormProvider>

      </Box>
    </Container>
  );
};

export default FeedbackForm;
