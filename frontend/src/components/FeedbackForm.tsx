/* eslint-disable @typescript-eslint/no-unused-vars */
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Grid,
} from '@mui/material';

export const FeedbackForm = () => {
  const formMethods = useForm();
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  const villageData = {
    detorj: [
      {value: "amarpura", name:"Amarpura"},
      {value: "ashoknagar", name:"Ashoknagar"},
      {value: "indrapura", name:"Indrapura"},
      {value: "umedpura", name:"Umedpura"},
      {value: "odhav", name:"Odhav"},
      {value: "odhavpura", name:"Odhavpura"},
      {value: "kukvav", name:"Kukvav"},
      {value: "kotasan_road", name:"Kotasan Road"},
      {value: "kanj", name:"Kanj"},
      {value: "kantrodi", name:"Kantrodi"},
      {value: "kodiya", name:"Kodiya"},
      {value: "gunjala", name:"Gunjala"},
      {value: "gadhisana", name:"Gadhisana"},
      {value: "gitapur", name:"Gitapur"},
      {value: "gogagmanpura", name:"Gogagmanpura"},
      {value: "chaniyar", name:"Chaniyar"},
      {value: "jethipura", name:"Jethipura"},
      {value: "jaspura", name:"Jaspura"},
      {value: "jivpura", name:"Jivpura"},
      {value: "dhabsar", name:"Dhabsar"},
      {value: "tevali", name:"Tevali"},
      {value: "tevalipura", name:"Tevalipura"},
      {value: "dekavada", name:"Dekavada"},
      {value: "detroj_town", name:"Detroj Town"},
      {value: "damodripura", name:"Damodripura"},
      {value: "nandisana", name:"Nanadisana"},
      {value: "nathpura", name:"Nathpura"},
      {value: "panar", name:"Panar"},
      {value: "fatehpura", name:"Fatehpura"},
      {value: "bantai", name:"Bantai"},
      {value: "bosaka", name:"Bosaka"},
      {value: "bhagapura", name:"Bhagapura"},
      {value: "bhimgadh", name:"Bhimgadh"},
      {value: "ratanpur", name:"Ratanpur"},
      {value: "rampura", name:"Rampura"},
      {value: "rahatal", name:"Rahatal"}
    ],
    dashkroi: [
      {value: "aslali", name:"Aslali"},
      {value: "ambali", name:"Ambali"},
      {value: "ashapur", name:"Ashapur"},
      {value: "istola_baad", name:"Istola baad"},
      {value: "kunjad", name:"Kunjad"},
      {value: "kanbha", name:"Kanbha"},
      {value: "kamod", name:"Kamod"},
      {value: "kuha", name:"Kuha"},
      {value: "khou", name:"Khou"},
      {value: "kashindra", name:"Kashindra"},
      {value: "khodiyaar_gam", name:"Khodiyaar gam"},
      {value: "geratpur", name:"Geratpur"},
      {value: "gatraad", name:"Gatraad"},
      {value: "gamdi", name:"Gamdi"},
      {value: "gota", name:"Gota"},
      {value: "girmatha", name:"Girmatha"},
      {value: "charodi", name:"Charodi"},
      {value: "devdi", name:"Devdi"},
      {value: "naaz", name:"Naaz"},
      {value: "pansuj", name:"Pansuj"},
      {value: "paldi_kankaj", name:"Paldi Kankaj"},
      {value: "bakrol", name:"Bakrol"},
      {value: "babpur", name:"Babpur"},
      {value: "bareja", name:"Bareja"},
      {value: "bibipura", name:"Bibipura"}
    ],
    dhandhuka: [
      {value: "arval" , name: "Arval"},
      {value: "akau" , name: "Akau"},
      {value: "umargadh" , name: "Umargadh"},
      {value: "umdi" , name: "Umdi"},
      {value: "kamiyala" , name: "Kamiyala"},
      {value: "kadipur" , name: "Kadipur"},
      {value: "kama_talav" , name: "Kama Talav"},
      {value: "kasindra" , name: "Kasindra"},
      {value: "kotda" , name: "Kotda"},
      {value: "kothdiya" , name: "Kothdiya"},
      {value: "kharad" , name: "Kharad"},
      {value: "khasta" , name: "Khasta"},
      {value: "gandhipur" , name: "Gandhipur"},
      {value: "gogla" , name: "Gogla"},
      {value: "gorasu" , name: "Gorasu"},
      {value: "chandarva" , name: "Chandarva"},
      {value: "jaska" , name: "Jaska"},
      {value: "jer" , name: "Jer"},
      {value: "jankhi" , name: "Jankhi"}
    ],
    Dholka: [
      {value: "arnej" , name: "Arnej"},
      {value: "andheri" , name: "Andheri"},
      {value: "aanganpura" , name: "Aanganpura"},
      {value: "aambethi" , name: "Aambethi"},
      {value: "abareli" , name: "Abareli"},
      {value: "egoli" , name: "Egoli"},
      {value: "uteliya" , name: "Uteliya"},
      {value: "kariyana" , name: "Kariyana"},
      {value: "kalyanpura" , name: "Kalyanpura"},
      {value: "kesargadh" , name: "Kesargadh"},
      {value: "kadipur" , name: "Kadipur"},
      {value: "koth" , name: "Koth"},
      {value: "kharathi" , name: "Kharathi"},
      {value: "khatripur" , name: "Khatripur"},
      {value: "khanpur" , name: "Khanpur"},
      {value: "chiloda" , name: "Chiloda"},
      {value: "chandisar" , name: "Chandisar"},
      {value: "nesda" , name: "Nesda"},
      {value: "paldi" , name: "Paldi"},
      {value: "pisavada" , name: "Pisavada"}
    ],
    Barvala: [
      {value: "kundal" , name: "Kundal"},
      {value: "chokdi" , name: "Chokdi"},
      {value: "nabhoi" , name: "Nabhoi"},
      {value: "navda" , name: "Navda"},
      {value: "pipariya" , name: "Pipariya"},
      {value: "polarpur" , name: "Polarpur"},
      {value: "bela" , name: "Bela"},
      {value: "refda" , name: "Refda"},
      {value: "vaiya" , name: "Vaiya"},
      {value: "shahpur" , name: "Shahpur"},
      {value: "salangpur" , name: "Salangpur"},
      {value: "rojid" , name: "Rojid"},
      {value: "rampura" , name: "Rampura"},
      {value: "ranpari" , name: "Ranpari"},
      {value: "bhimnath" , name: "Bhimnath"},
      {value: "nabhoi" , name: "Nabhoi"},
      {value: "timbla" , name: "Timbla"},
      {value: "jarvaliya" , name: "Jarvaliya"},
      {value: "khabda" , name: "Khabda"},
      {value: "khamidana" , name: "Khamidana"}
    ],
    Balva: [
      {value: "amipura" , name: "Amipura"},
      {value: "kerala" , name: "Kerala"},
      {value: "kavla" , name: "Kavan"},
      {value: "kavitha" , name: "Kavitha"},
      {value: "kotha_talavadi" , name: "Kotha Talavadi"},
      {value: "kesardi" , name: "Kesardi"},
      {value: "govinda" , name: "Govinda"},
      {value: "chiyada" , name: "Chiyada"},
      {value: "dumali" , name: "Dumali"},
      {value: "dehgamda" , name: "Dehgamda"},
      {value: "durgi" , name: "Durgi"},
      {value: "dhanvada" , name: "Djanvada"},
      {value: "nanodra" , name: "Nanodra"},
      {value: "popatpura" , name: "Popatpura"},
      {value: "bagodra" , name: "Bagodra"},
      {value: "bhayla" , name: "Bhayla"},
      {value: "milpur" , name: "Milpur"},
      {value: "rupal" , name: "Rupal"},
      {value: "milpur" , name: "Milpur"},
      {value: "rajoda" , name: "Rajoda"}
    ],
    Mandal: [
      {value: "anandpura", name: "Anandpura"},
      {value: "ukardi", name: "Ukardi"},
      {value: "andela", name: "Andela"},
      {value: "aokdi", name: "Aokdi"},
      {value: "kadvasan", name: "Kadvasan"},
      {value: "karsanpura", name: "Karsanpura"},
      {value: "kunpur", name: "Kunpur"},
      {value: "keshavpura", name: "Keshavpura"},
      {value: "kachrol", name: "Kachrol"},
      {value: "kanpura", name: "Kanpura"},
      {value: "gidharpura", name: "Gidharpura"},
      {value: "janjharva", name: "Janjharva"},
      {value: "trent", name: "Trent"},
      {value: "dahod", name: "Dahod"},
      {value: "navagam", name: "Navagam"},
      {value: "nana_ubhada", name: "Nana Ubhada"},
      {value: "nayakpur", name: "Nayakpura"},
      {value: "mathapur", name: "Mathapur"},
      {value: "manpura", name: "Manpura"},
      {value: "varmor", name: ""}
    ],
    Ranpur: [
      {value: "akasba", name: "Akasba"},
      {value: "amalpur", name: "Amalpur"},
      {value: "umrana", name: "Umrana"},
      {value: "kundali", name: "Kundali"},
      {value: "kanara", name: "Kanara"},
      {value: "keriya", name: "Keriya"},
      {value: "khas", name: "Khas"},
      {value: "khokharnesh", name: "Khokharnesh"},
      {value: "devagna", name: "Devagna"},
      {value: "devaliya", name: "Devaliya"},
      {value: "patna", name: "Patna"},
      {value: "bagad", name: "Bagad"},
      {value: "bubavav", name: "Bubavav"},
      {value: "bodiya", name: "Bodiya"},
      {value: "rajpara", name: "Rajpara"},
      {value: "veglaka", name: "Veglaka"},
      {value: "salangpur", name: "Salangpur"},
      {value: "hadamtana", name: "Hadamantana"},
      {value: "ranpur", name: "Ranpur"},
      {value: "baraniya", name: "Baraniya"}
    ],
    Viramgam: [
      {value: "asal_gam", name: "Asal Gam"},
      {value: "ukhlod", name: "Ukhlod"},
      {value: "kajipur", name: "Kajipur"},
      {value: "kandipur", name: "Kandipur"},
      {value: "kayla", name: "Kayla"},
      {value: "kokta", name: "Kokta"},
      {value: "khegariya", name: "Khegariya"},
      {value: "khudad", name: "Khudad"},
      {value: "jaksi", name: "Jaksi"},
      {value: "jetapur", name: "Jetapur"},
      {value: "jakhvada", name: "Jakhvada"},
      {value: "juna_padar", name: "Juna Padar"},
      {value: "joshipura", name: "Joshipura"},
      {value: "jhund", name: "Jhund"},
      {value: "dumana", name: "Dumana"},
      {value: "thuleta", name: "Thuleta"},
      {value: "thorithambha", name: "Thorithambha"},
      {value: "devpura", name: "Devpura"},
      {value: "dolatpura", name: "Dolatpura"},
      {value: "dhakdi", name: "Dhakdi"}
    ],
    Sanand: [
      {value: "iyava", name:"Iyava"},
      {value: "amthapura", name:"Amthapura"},
      {value: "kundal", name:"Kundal"},
      {value: "kalana", name:"Kalana"},
      {value: "kolat", name:"Kolat"},
      {value: "khicha", name:"Khicha"},
      {value: "khoda", name:"Khoda"},
      {value: "goraj", name:"Goraj"},
      {value: "godhvi", name:"Godhvi"},
      {value: "amnagar", name:"Amnagar"},
      {value: "charedi", name:"Charedi"},
      {value: "juda", name:"Juda"},
      {value: "juval", name:"Juval"},
      {value: "jeevanpura", name:"Jeevanpura"},
      {value: "daran", name:"Daran"},
      {value: "telav", name:"Telav"},
      {value: "tajpur", name:"Tajpur"},
      {value: "daduka", name:"Daduka"},
      {value: "dodar", name:"Dodar"},
      {value: "navapur", name:"Navapur"}
    ],
    Siti: [
      {value: "gyaspur", name: "Gyaspur"},
      {value: "makbara", name: "Makbara"},
      {value: "mahmadpara", name: "Mahmadpara"}
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
