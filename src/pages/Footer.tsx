import { Box, Button, Stack, Typography } from '@mui/material';

import Facebook from 'assets/footer/Facebook.svg';
import Youtube from 'assets/footer/Youtube.svg';
import VSII from 'assets/footer/VSII.svg';
import Linkedln from 'assets/footer/Linked.svg';
import { FormattedMessage } from 'react-intl';

const FooterPage = () => {
    return (
        <Box
            sx={{
                marginTop: '30px',
                marginBottom: '30px',
                display: 'flex',
                flexDirection: {
                    lg: 'row',
                    xs: 'column'
                },
                justifyContent: {
                    lg: 'space-between'
                },
                alignItems: 'center'
            }}
            px="30px"
            my="10px"
        >
            <Typography sx={{ fontFamily: 'inter', fontWeight: '500', fontSize: '18px', textAlign: 'center' }}>
                <FormattedMessage id="footer" />
            </Typography>

            <Stack direction="row">
                <Button onClick={() => window.open('https://insight.vsi-international.com/', '_blank')}>
                    <img src={VSII} alt="logo" />
                </Button>
                <Button onClick={() => window.open('https://www.youtube.com/channel/UCbzgyuU8XqBu2g-Y0TvPiag', '_blank')}>
                    <img src={Youtube} alt="logo" />
                </Button>

                <Button onClick={() => window.open('https://www.facebook.com/VSII.Fanpage', '_blank')}>
                    <img src={Facebook} alt="logo" />
                </Button>
                <Button onClick={() => window.open('https://www.linkedin.com/company/vietsoftware-international', '_blank')}>
                    <img src={Linkedln} alt="logo" />
                </Button>
            </Stack>
        </Box>
    );
};

export default FooterPage;
