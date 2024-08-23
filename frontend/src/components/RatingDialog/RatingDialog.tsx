import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Rating, Box } from '@mui/material';
//import { StyledEngineProvider } from '@mui/material/styles';
import { ChatMessage } from '../../api';
interface RatingDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (rating: number) => void;
}

const RatingDialog: React.FC<RatingDialogProps> = ({ open, onClose, onSubmit }) => {
//   const [rating, setRating] = useState<number | null>(0);
  const [value, setValue] = useState<number | null>(0);

  const handleRatingChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
  };

  const handleSubmit = () => {
    if (value !== null) {
        onSubmit(value);  // Pass the rating result back to the parent
        onClose();         // Close the dialog
      }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Bitte bewerten Sie die Kommunikation mit dem Bot</DialogTitle>
      <DialogContent>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating
            name="service-rating"
            value={value}
            onChange={handleRatingChange}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          zurück
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Bewerten und schließen
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RatingDialog;
