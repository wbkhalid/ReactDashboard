import { Box, Typography, useTheme } from '@mui/material';
import Header from '../../components/Header';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Header title="FAQ" subTitle="Answers of Frequently Asked Questions " />
      <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Important Message
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto modi,
          rem sapiente architecto consequatur laudantium fugiat dolore omnis
          similique itaque, exercitationem totam corrupti dicta nobis delectus
          minus? Possimus, consequuntur omnis.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Important Message
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto modi,
          rem sapiente architecto consequatur laudantium fugiat dolore omnis
          similique itaque, exercitationem totam corrupti dicta nobis delectus
          minus? Possimus, consequuntur omnis.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Important Message
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto modi,
          rem sapiente architecto consequatur laudantium fugiat dolore omnis
          similique itaque, exercitationem totam corrupti dicta nobis delectus
          minus? Possimus, consequuntur omnis.
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
