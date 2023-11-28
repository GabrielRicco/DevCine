import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import ButtonAlugarCine from '../button_alugar_cine/ButtonAlugarCine';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function GridCine() {
  return (
    <>
    <Paper className='item'
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#bb0b0b',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="https://lumiere-a.akamaihd.net/v1/images/daylight_payoff_poster_brazil_27eb2c00.jpeg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div" color={'white'}>
                WISH <br/>o poder dos desejos
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2" fontSize={16}/><ButtonAlugarCine/> 
  
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div"  color={'white'}>
              R$19,99
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>

    <Paper className='item'
    sx={{
    p: 2,
    margin: 'auto',
    maxWidth: 500,
    flexGrow: 1,
    backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? '#1A2027' : '#bb0b0b',
    }}
    >
    <Grid container spacing={2}>
    <Grid item>
        <ButtonBase sx={{ width: 128, height: 128 }}>
        <Img alt="complex" src="https://a-static.mlcdn.com.br/450x450/livro-o-mar-de-monstro-capa-filme/magazineluiza/084984700/7c948e71e058c23b3d3fcc7c151d60f0.jpg" />
        </ButtonBase>
    </Grid>
    <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
        <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div" color={'white'}>
            Percy Jackson e os olimpianos <br/> o mar de monstross
            </Typography>
        </Grid>
        <Grid item>
            <Typography sx={{ cursor: 'pointer' }} variant="body2" /><ButtonAlugarCine/> 

        </Grid>
        </Grid>
        <Grid item>
        <Typography variant="subtitle1" component="div" color={'white'}>
            R$19,99
        </Typography>
        </Grid>
    </Grid>
    </Grid>
    </Paper>

    <Paper className='item'
    sx={{
    p: 2,
    margin: 'auto',
    maxWidth: 500,
    flexGrow: 1,
    backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? '#1A2027' : '#bb0b0b',
    }}
    >
    <Grid container spacing={2}>
    <Grid item>
        <ButtonBase sx={{ width: 128, height: 128 }}>
        <Img alt="complex" src="https://www.folhaunica.com.br/wp-content/uploads/2022/05/Encanto-1024x1024.jpg" />
        </ButtonBase>
    </Grid>
    <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
        <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div" color={'white'}>
            Encanto
            </Typography>
        </Grid>
        <Grid item>
            <Typography sx={{ cursor: 'pointer' }} variant="body2" /><ButtonAlugarCine/> 

        </Grid>
        </Grid>
        <Grid item>
        <Typography variant="subtitle1" component="div" color={'white'}>
            R$19,99
        </Typography>
        </Grid>
    </Grid>
    </Grid>
    </Paper>

    <Paper className='item'
    sx={{
    p: 2,
    margin: 'auto',
    maxWidth: 500,
    flexGrow: 1,
    backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? '#1A2027' :'#bb0b0b',
    }}
    >
    <Grid container spacing={2}>
    <Grid item>
        <ButtonBase sx={{ width: 128, height: 128 }}>
        <Img alt="complex" src="https://upload.wikimedia.org/wikipedia/pt/4/42/HungerGamesPoster.jpg" />
        </ButtonBase>
    </Grid>
    <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
        <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div" color={'white'}>
            Jogos Vorazes <br/> 1
            </Typography>
        </Grid>
        <Grid item>
            <Typography sx={{ cursor: 'pointer' }} variant="body2" /><ButtonAlugarCine/> 

        </Grid>
        </Grid>
        <Grid item>
        <Typography variant="subtitle1" component="div" color={'white'}>
            R$19,99
        </Typography>
        </Grid>
    </Grid>
    </Grid>
    </Paper>

    <Paper className='item'
    sx={{
    p: 2,
    margin: 'auto',
    maxWidth: 500,
    flexGrow: 1,
    backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? '#1A2027' : '#bb0b0b',
    }}
    >
    <Grid container spacing={2}>
    <Grid item>
        <ButtonBase sx={{ width: 128, height: 128 }}>
        <Img alt="complex" src="https://m.media-amazon.com/images/I/61Fo3CitEGL._AC_UF1000,1000_QL80_.jpg" />
        </ButtonBase>
    </Grid>
    <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
        <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div" color={'white'}>
            A menina que roubava livros 
            </Typography>
        </Grid>
        <Grid item>
            <Typography sx={{ cursor: 'pointer' }} variant="body2" /><ButtonAlugarCine/> 

        </Grid>
        </Grid>
        <Grid item>
        <Typography variant="subtitle1" component="div" color={'white'}>
            R$19,99
        </Typography>
        </Grid>
    </Grid>
    </Grid>
    </Paper>

    <Paper
    sx={{
    p: 2,
    margin: 'auto',
    maxWidth: 500,
    flexGrow: 1,
    backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? '#1A2027' :'#bb0b0b',
    }}
    >
    <Grid container spacing={2}>
    <Grid item>
        <ButtonBase sx={{ width: 128, height: 128 }}>
        <Img alt="complex" src="https://www.taeagora.com.br/wp-content/uploads/2018/06/o-pequeno-principe_t80437.jpg" />
        </ButtonBase>
    </Grid>
    <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
        <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div" color={'white'}>
            O pequeno príncipe
            </Typography>
        </Grid>
        <Grid item>
            <Typography sx={{ cursor: 'pointer' }} variant="body2" /><ButtonAlugarCine/> 

        </Grid>
        </Grid>
        <Grid item>
        <Typography variant="subtitle1" component="div" color={'white'}>
            R$19,99
        </Typography>
        </Grid>
    </Grid>
    </Grid>
    </Paper>
</>


  );
}