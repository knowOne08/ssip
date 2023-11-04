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
        {value:"dhankuka" ,name:"Dhankuka"},
        {value:"dholka" ,name:"Dholka"},
        {value:"barwala" ,name:"Barwala"},
        {value:"bavla" ,name:"Bavla"},
        {value:"mandal" ,name:"Mandal"},
        {value:"ranpur" ,name:"Ranpur"},
        {value:"viramgam" ,name:"Viramgam"},
        {value:"sanand" ,name:"Sanand"},
        {value:"city" ,name:"City"}
      ],
      ahmedabad_city: [
        {value:"ellisbridge_ambawadi_paldi_fatehpura",name:"EllisBridge,Ambawadi,Paldi,Fatehpura"},
        {value:"odhav_firebrigade_viratnagar_nikolgam",name:"Odhav,FireBrigade,Viratnagar,Nikolgam"},
        {value:"kagdapith_baherampura_gitamandir",name:"KagdaPith,Baherampura,GitaMandir"},
        {value:"karanj_bhadra_trandarwaza_jummamasjid_sardarbaug",name:"Karanj,Bhadra,Trandarwaza,Jumma-Masjid,Sardarbaug"},
        {value:"kalupur_panchkuva_zaveriwad_dhinkva",name:"kalupur,Panchkuva,Zaveriwad,Dhinkva"},
        {value:"khadia_raipur_sarangpur_fernandezpul",name:"Khadia,Raipur,Sarangpur,FernandezPul"},
        {value:"gomtipur_rakhialroad_sarangpurpularea",name:"Gomtipur,Rakhialroad,Sarangpurpul Area"},
        {value:"dariyapur_kalupurfruitmarket",name:"Dariyapur,Kalupur Fruit-Market"},
        {value:"danilimda",name:"Danilimda"},
        {value:"naroda",name:"Naroda"},
        {value:"bapunagar_samjubahospital_ambarcinema",name:"Bapunagar,Samjuba Hospital,AmbarCinema"},
        {value:"meghaninagar",name:"Meghaninagar"},
        {value:"madhavpura_idgah_shahpur_premdarwaja",name:"MadhavPura,Idgah,Shahpur,Premdarwaja"},
        {value:"rakhialgam_shukharamnagar_gravitychowk_monogramchowki_telephoneexchangenisame",name:"Rakhialgam,Shukharamnagar,GravityChowk,MonogramChowki,Telephone-Exchange same"},
        {value:"ramolchowki_jasodanagar_viththalnagartekro_bombayconductorroad_barodaexpresshighway_ctm",name:"RamolChowki,Jasodanagar,Viththalnagar Tekro,Bombay-Conductor Road,Baroda-Express Highway,CTM"},
        {value:"lawgardan_gulbaitekra_memnagar_cgroad",name:"Lawgardan,GulbaiTekra,Memnagar,CG Road"},
        {value:"vejalpur",name:"Vejalpur"},
        {value:"vatva",name:"Vatva"},
        {value:"vasantarjabchowk_jamalpurchowki"ch,name:"VasantarjabChowk,JamalpurChowki"},
        {value:"vastralroad_bhilwad_ctmchowkdi_hatkeshwar_ramolroad",name:"VastralRoad,Bhilwad,CTM Chowkdi,Hatkeshwar,RamolRoad"},
        {value:"saherkotda_narodaroad_vijaymil_saraspur",name:"Saherkotda,Naroda Road,Vijaymil,Saraspur"},
        {value:"shahaalam_maninagarrailwaystation_swaminarayanmandir_junarailwaycrossing_rambaug_jawaharchowk_krishnabaug",name:"Shahaalam_Maninagar,RailwayStation,SwaminarayanMandir,Junarailway-Crossing,Rambaug,JawaharChowk,Krishnabaug"},
        {value:"shahpur_bahaicentre_khanpur",name:"Shahpur,Bahaicentre,Khanpur"},
        {value:"shahibaug_civilhospital_dafnala",name:"Shahibaug,Civil Hospital,Dafnala"},
        {value:"satelite_jodhpur_bodakdev_jajisambagala_shreyashcrossing_drivein_sarkhejgandhinagarhighway",name:"Satelite,Jodhpur,Bodakdev,Jajisambagala,Shreyash Crossing,Drivein,Sarkhej-Gandhinagar Highway"},
        {value:"sardarnagar_hanshol_airport_kubernagar_nobelnagar_ambawadi",name:"Sardarnagar,Hanshol,Airport,Kubernagar,Nobelnagar_Ambawadi"},
        {value:"sabarmati_collectorkacheri",name:"Sabarmati,Collector Kacheri"},
        {value:"sola_highcourt_solabhagwatvidhyapith_thaltejgam_chandalodiya_chankyapuri",name:"Sola,Highcourt,SolaBhagwat Vidhyapith,Thaltej gam,Chandalodiya,Chankyapuri"}
      ],
      amreli: [
        {value:"amreli",name:"Amreli"},
        {value:"khanbha",name:"Khanbha"},
        {value:"jafarabad",name:"Jafarabad"},
        {value:"dhari",name:"Dhari"},
        {value:"bagasara",name:"Bagasara"},
        {value:"babara",name:"Babara"},
        {value:"rajula",name:"Rajula"},
        {value:"lathi",name:"Lathi"},
        {value:"liliya",name:"Liliya"},
        {value:"savarkundla",name:"Savarundla"}
      ],
      anand: [
        {value:"ankalav",name:"Ankalav"},
        {value:"anand",name:"Anand"},
        {value:"umreth",name:"Umreth"},
        {value:"khambhat",name:"Khambhat"},
        {value:"tarapur",name:"Tarapur"},
        {value:"petlad",name:"Petlad"},
        {value:"borsad",name:"Borsad"},
        {value:"sojitra",name:"Sojitra"}
      ],
      kutch: [
        {value:"anjar",name:"Anjar"},
        {value:"abadasa",name:"Abadasa"},
        {value:"gandhidham",name:"Gandhidham"},
        {value:"nakhatrana",name:"Nakhatrana"},
        {value:"bhachau",name:"Bhachau"},
        {value:"bhuj",name:"Bhuj"},
        {value:"mundra",name:"Mundra"},
        {value:"mandvi",name:"Mandvi"},
        {value:"rapar",name:"Rapar"},
        {value:"lakhpat",name:"Lakhpat"}
      ],
      kheda: [
        {value:"kathlal",name:"Kathlal"},
        {value:"kapadvanj",name:"Kapadvanj"},
        {value:"kheda",name:"Kheda"},
        {value:"thasra",name:"Thasra"},
        {value:"nadiad",name:"Nadiad"},
        {value:"balasinor",name:"Balasinor"},
        {value:"mahudha",name:"Mahudha"},
        {value:"mahemadavad",name:"Mahemadavad"},,
        {value:"matar",name:"Matar"},
        {value:"virpur",name:"Virpur"}
      ],
      gandhinagar: [
        {value:"kalol",name:"Kalol"},
        {value:"gandhinagar",name:"Gandhinagar"},
        {value:"dahegam",name:"Dahegam"},
        {value:"mansa",name:"Mansa"}
      ],
      junagadh: [
        {value:"una",name:"Una"},
        {value:"keshod",name:"Keshod"},
        {value:"konidar",name:"Konidar"},
        {value:"junagadh",name:"Junagadh"},
        {value:"talala",name:"Talala"},
        {value:"bhesan",name:"Bhesan"},
        {value:"mendarda",name:"Mendarda"},
        {value:"mangarol",name:"Mangarol"},
        {value:"manavadar",name:"Manavadar"},
        {value:"maliyahatina",name:"Maliyahatina"},
        {value:"vanthali",name:"Vanthali"},
        {value:"veraval",name:"Veraval"},
        {value:"visavadar",name:"Visavadar"},
        {value:"sutrapada",name:"Sutrapada"}
      ],
      jamnagar: [
        {value:"kalyanpur",name:"Kalyanpur"},
        {value:"kalavad",name:"Kalavad"},
        {value:"khambhaliya",name:"Khambhaliya"},
        {value:"jamjodhpur",name:"Jamjodhpur"},
        {value:"jamnagar",name:"Jamnagar"},
        {value:"jodiya",name:"Jodiya"},
        {value:"dwarka",name:"Dwarka"},
        {value:"dhrol",name:"Dhrol"},
        {value:"bhanvad",name:"Bhanvad"},
        {value:"lalpur",name:"Lalpur"}
      ],
      dang: [
        {value:"ahwa_dang",name:"Ahwa Dang"}
      ],
      dahod: [
        {value:"garbadataluka",name:"Garbada Taluka"},
        {value:"jhalod",name:"Jhalod"},
        {value:"debariya",name:"De.Bariya"},
        {value:"dahodtaluka",name:"Dahod Taluka"},
        {value:"dhanpurtaluka",name:"Dhanpur Taluka"},
        {value:"fatepura",name:"Fatepura"},
        {value:"limkheda",name:"Limkheda"}
      ],
      narmada: [
        {value:"dediyapada",name:"Dediyapada"},
        {value:"tilakvada",name:"Tilakvada"},
        {value:"nandod",name:"Nandod"},
        {value:"sagbara",name:"Sagbara"}
      ],
      navsari: [
        {value:"gandevi",name:"Gandevi"},
        {value:"chikhli",name:"Chikhli"},
        {value:"jalalpor",name:"Jalalpor"},
        {value:"navsari",name:"Navsari"},
        {value:"vansada",name:"Vansada"}
      ],
      panchmahal: [
        {value:"kadana",name:"Kadana"},
        {value:"kalol",name:"Kalol"},
        {value:"khanpur",name:"Khanpur"},
        {value:"godhra",name:"Godhra"},
        {value:"goghamba",name:"Goghamba"},
        {value:"jambughoda",name:"Jambughoda"},
        {value:"lunawada",name:"Lunawada"},
        {value:"shahera",name:"Shahera"},
        {value:"santarampur",name:"Santrampur"},
        {value:"halol",name:"Halol"}
      ],
      patan:[
        {value:"chanasma",name:"Chanasma"},
        {value:"patan",name:"Patan"},
        {value:"radhanpur",name:"Radhanpur"},
        {value:"sami",name:"Sami"},
        {value:"santalpur",name:"Santalpur"},
        {value:"sidhdhpur",name:"Sidhdhpur"},
        {value:"harij",name:"Harij"}    
      ],
      porbandar:[
        {value:"kutiyana",name:"Krutiyana"},
        {value:"porbandar",name:"Porbandar"},
        {value:"ranavav",name:"Ranavav"}
      ], 
      banaskantha: [
        {value:"kankrej",name:"Kankrej"},
        {value:"deesa",name:"Deesa"},
        {value:"tharad",name:"Tharad"},
        {value:"danta",name:"Danta"},
        {value:"dantivada",name:"Dantivada"},
        {value:"diyodar",name:"Diyodar"},
        {value:"dhanera",name:"Dhanera"},
        {value:"palanpur",name:"Palanpur"},
        {value:"bhabhar",name:"Bhabhar"},
        {value:"vadgam",name:"Vadgam"},
        {value:"vav",name:"Vav"}
      ],
      bharuch: [
        {value:"ankleshwar",name:"Ankleshwar"},
        {value:"amod",name:"Amod"},
        {value:"jambusar",name:"Jambusar"},
        {value:"jagadiya",name:"Jagadiya"},
        {value:"bharuchtaluka",name:"Bharuch Taluka"},
        {value:"vagara",name:"Vagara"},
        {value:"valiya",name:"Valiya"},
        {value:"hanshot",name:"Hanshot"}
      ],
      bhavnagar: [
        {value:"umarala",name:"Umarala"},
        {value:"gariyadhar",name:"Gariyadhar"},
        {value:"talaja",name:"Talaja"},
        {value:"palitana",name:"Palitana"},
        {value:"botad",name:"Botad"},
        {value:"bhavnagar",name:"Bhavnagar"},
        {value:"mahuva",name:"Mahuva"},
        {value:"vallabhipur",name:"Vallabhipur"},
        {value:"shihor",name:"Shihor"}
      ],
      mehsana: [
        {value:"unjha",name:"Unjha"},
        {value:"kadi",name:"Kadi"},
        {value:"kheralu",name:"Kheralu"},
        {value:"bechraji",name:"Bechraji"},
        {value:"mehsana",name:"Mehsana"},
        {value:"vadnagar",name:"Vadnagar"},
        {value:"vijapur",name:"Vijapur"},
        {value:"visnagar",name:"Visnagar"},
        {value:"satlasana",name:"Satlasana"}
      ],

      rajkot: [
        {value:"upleta",name:"Upleta"},
        {value:"kotdasangani",name:"Kotdasangani"},
        {value:"gondal",name:"Gondal"},
        {value:"jetpur",name:"Jetpur"},
        {value:"jasdan",name:"Jasdan"},
        {value:"jamkandosara",name:"Jamkandosara"},
        {value:"tankara",name:"Tankara"},
        {value:"dhoraji",name:"Dhoraji"},
        {value:"paddhari",name:"Paddhari"},
        {value:"morbi",name:"Morbi"},
        {value:"lodhika",name:"Lodhika"},
        {value:"vankaner",name:"Vankaner"}
      ],
      rajkot_city: [
        {value:"ankurnagarmainroad",name:"Ankurnagar Mainroad"},
        {value:"ststand",name:"ST Stand"},
        {value:"karanpara",name:"Karanpara"},
        {value:"kuvadavahighwayroad",name:"Kuvadava Highwayroad"},
        {value:"krushnanagarmainroad",name:"Krushnanagar Mainroad"},
        {value:"kalavadroad",name:"Kalavad Road"},
        {value:"kothariyaroad",name:"Kothariya Road"},
        {value:"nilkanthcinema_sorthiyavadicircle",name:"Nilkanth Cinema,sorthiyavadi Circle"},
        {value:"gandhigram",name:"Gandhigram"},
        {value:"gokuldham",name:"Gokuldham"},
        {value:"gondalhighwayroad",name:"Gondal Highwayroad"},
        {value:"gondalroadstworkshop",name:"GondalRoad ST-Workshop"},
        {value:"chandreshnagarmainroad",name:"Chandreshnagar Mainroad"},
        {value:"junctionarea",name:"JunctionArea"},
        {value:"jayubeli",name:"Jayubeli"},
        {value:"jaganatharea",name:"JaganathArea"},
        {value:"jamnagarhighwayroad",name:"Jamnagar Highwayroad"},
        {value:"thorala",name:"Thorala"},
        {value:"diwanparaddanapith",name:"DiwanparaddanaPith"},
        {value:"dharamnagar",name:"Dharamnagar"},
        {value:"nanamauvagam",name:"NanamauvaGam"},
        {value:"pdmcollege",name:"PDM College"},
        {value:"bedipara",name:"Bedipara"},
        {value:"bhavnagarhighwayroad",name:"Bhavnagar Highwayroad"},
        {value:"mavadi",name:"Mavadi"},
        {value:"mayaninagar",name:"Mayaninagar"},
        {value:"morbihighwayroad",name:"Morbi Highwayroad"},
        {value:"ramnathpara",name:"Ramnathpara"},
        {value:"laxminagar",name:"Laxminagar"},
        {value:"lodhavadarea",name:"Lodhavad Area"},
        {value:"vankanerhighwayroad",name:"Vankaner Highwayroad"},
        {value:"sadararea",name:"Sadar Area"}
      ],
      vadodara: [
        {value:"karjan",name:"Karjan"},
        {value:"kvat",name:"Kvat"},
        {value:"chhotaudaipur",name:"Chhota-Udaipur"},
        {value:"jetpurpavi",name:"Jetpurpavi"},
        {value:"dabhoi",name:"Dabhoi"},
        {value:"nasavadi",name:"Nasavadi"},
        {value:"padra",name:"Padra"},
        {value:"vadodara",name:"Vadodara"},
        {value:"vaghodia",name:"Vaghodia"},
        {value:"shinor",name:"Shinor"},
        {value:"sankheda",name:"Sankheda"},
        {value:"savali",name:"Savali"}
      ],
      // You can add the values you mentioned to the `vadodra_city` category as follows:

      
      vadodra_city: [
        { value: "akota_gham_pase", name: "Akota Gham Pase" },
        { value: "atladra_gham", name: "Atladra Gham" },
        { value: "anghad_gham", name: "Anghad Gham" },
        { value: "ambalal_park_road", name: "Ambalal Park Road" },
        { value: "arunachal_road", name: "Arunachal Road" },
        { value: "alkapuri", name: "Alkapuri" },
        { value: "aajva_road", name: "Aajva Road" },
        { value: "aanandnagar_saame", name: "Aanandnagar Saame" },
        { value: "rto_taraf", name: "RTO Taraf" },
        { value: "aryakanya_pachad", name: "Aryakanya Pachad" },
        { value: "mg_road", name: "MG Road" }
      ],  
      valsad: [
        {value:"umargam",name:"Umargam"},
        {value:"kaparada",name:"Kaparada"},
        {value:"dharampur",name:"Dharampur"},
        {value:"pardi",name:"Pardi"},
        {value:"valsad",name:"Valsad"}
      ],
      surat: [
        { value: "palsana", name: "Palsana" },
        { value: "ukai", name: "Ukai" },
        { value: "uchhal", name: "Uchhal" },
        { value: "olpad", name: "Olpad" },
        { value: "kakrapar", name: "Kakrapar" },
        { value: "kamrej", name: "Kamrej" },
        { value: "kosamba", name: "Kosamba" },
        { value: "nizar", name: "Nizar" },
        { value: "bardoli", name: "Bardoli" },
        { value: "mahuva", name: "Mahuva" },
        { value: "mangrol", name: "Mangrol" },
        { value: "mandvi", name: "Mandvi" },
        { value: "vyara", name: "Vyara" },
        { value: "valod", name: "Valod" },
        { value: "songharh", name: "Songharh" }

      ],
      
      
      surat_city: [
        { value: "junagham", name: "Junagham" },
        { value: "jahangirpura", name: "Jahangirpura" },
        { value: "gidc", name: "GIDC" },
        { value: "jiyav_gav", name: "Jiyav Gav" },
        { value: "timbarv_ghaam", name: "Timbarv Ghaam" },
        { value: "dumas_gham", name: "Dumas Gham" },
        { value: "dindoli_ghav", name: "Dindoli Ghav" },
        { value: "dumas_gham", name: "Dumas Gham" },
        { value: "ichhanath", name: "Ichhanath" },
        { value: "utran_ghav", name: "Utran Ghav" },
        { value: "katargham", name: "Katargham" },
        { value: "kharvasa", name: "Kharvasa" },
        { value: "gurukul_road", name: "Gurukul Road" }
      ],
      

      surendranagar: [
        { value: "chotila", name: "Chotila" },
        { value: "dhragandhra", name: "Dhrangadhra" },
        { value: "patdi", name: "Patdi" },
        { value: "muli", name: "Muli" },
        { value: "lakhtar", name: "Lakhtar" },
        { value: "limbdi", name: "Limbdi" },
        { value: "vadhvan", name: "Vadhvan" },
        { value: "sayla", name: "Sayla" },
        { value: "halwad", name: "Halwad" }
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
            {/* <Select {...formMethods.register('dropdown2')}>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select> */}
            <Select {...formMethods.register('dropdown1')}>
          <MenuItem value="">Select</MenuItem>
          {/* {Object.keys(data).map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))} */}
          {/* {talukaData.ahmedabad.map((taluka)=>(
            <MenuItem key={taluka.value} value={taluka.value}>
            {taluka.name}
          </MenuItem>
          )) }  */}
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
