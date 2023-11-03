// import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const LoginPage = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    // Handle the login logic here, e.g., send a request to the server
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
          border: '1px solid #ccc',
          borderRadius: '5px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Invalid email address',
              },
            }}
            render={({ field }) => (
              <TextField
                label="Email"
                fullWidth
                {...field}
                error={!!errors.email}
                // helperText={errors.email ? errors.email.message : ''}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            rules={{ required: 'Password is required' }}
            render={({ field }) => (
              <TextField
                label="Password"
                fullWidth
                type="password"
                {...field}
                error={!!errors.password}
                // helperText={errors.password ? errors.password.message : ''}
              />
            )}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: '16px' }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
