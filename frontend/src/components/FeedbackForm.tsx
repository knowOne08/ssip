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
  const talukaData = {
      ahmedabad: [
        {value:"detroj" ,name:"Detroj"},
        {value:"daskroi" ,name:"Daskroi"},
        {value:"" ,name:""},
        {value:"" ,name:""},
        {value:"" ,name:""},
        {value:"" ,name:""},
        {value:"" ,name:""},
        {value:"" ,name:""},
        {value:"" ,name:""},
        {value:"" ,name:""},
        {value:"" ,name:""},
        {value:"" ,name:""},
      ]
  }

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
              <MenuItem value="ahmedabad">Ahmedabad</MenuItem>
              <MenuItem value="ahmedabad_city">Ahmedabad City</MenuItem>
              <MenuItem value="amreli">Amreli</MenuItem>
              <MenuItem value="anand">Anand</MenuItem>
              <MenuItem value="kutch">Kutch</MenuItem>
              <MenuItem value="gandhinagar">Gandhinagar</MenuItem>
              <MenuItem value="junagadh">Junagadh</MenuItem>
              <MenuItem value="jamnagar">Jamnagar</MenuItem>
              <MenuItem value="dang">Dang</MenuItem>
              <MenuItem value="dahod">Dahod</MenuItem>
              <MenuItem value="narmada">Narmada</MenuItem>
              <MenuItem value="navsari">Navsari</MenuItem>
              <MenuItem value="panchmahal">Panchmahal</MenuItem>
              <MenuItem value="patan">Patan</MenuItem>
              <MenuItem value="porabandar">Porabandar</MenuItem>
              <MenuItem value="banaskantha">Banaskantha</MenuItem>
              <MenuItem value="bharuch">Bharuch</MenuItem>
              <MenuItem value="bhavnagar">Bhavnagar</MenuItem>
              <MenuItem value="mehsana">Mehsana</MenuItem>
              <MenuItem value="rajkot">Rajkot</MenuItem>
              <MenuItem value="rajkot_city">Rajkot City</MenuItem>
              <MenuItem value="vadodara">Vadodara</MenuItem>
              <MenuItem value="vadodara_city">Vadodara City</MenuItem>
              <MenuItem value="valsad">Valsad</MenuItem>
              <MenuItem value="surat">Surat</MenuItem>
              <MenuItem value="surat_city">Surat City</MenuItem>
              <MenuItem value="surendranagar">Surendranagar</MenuItem>
              <MenuItem value="sabarkantha">Sabarkantha</MenuItem>
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
