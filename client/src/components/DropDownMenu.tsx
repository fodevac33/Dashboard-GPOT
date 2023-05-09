import { useState } from 'react';
import { Box, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  children?: React.ReactNode;
};

const DropDownMenu = ({ open, setOpen, children }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<Document>) => {
    if (anchorEl && anchorEl.contains(event.target as HTMLElement)) {
      return;
    }
    setOpen(false);
  };

  return (
    <Box>
      <Box onClick={handleToggle}>{children}</Box>
      <Popper open={open} anchorEl={anchorEl} transition disablePortal>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open}>
                  {/* Add your dropdown menu items here */}
                  <StyledMenuItem onClick={handleClose}>Item 1</StyledMenuItem>
                  <StyledMenuItem onClick={handleClose}>Item 2</StyledMenuItem>
                  <StyledMenuItem onClick={handleClose}>Item 3</StyledMenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};

export default DropDownMenu;
