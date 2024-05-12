import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ChatMessages from './Components/ChatMessages';
import ChatFooter from './Components/ChatFooter';

const chat: React.FC = () => {

    return (
        <Container>
            <Box display='flex' flexDirection={'column'} alignItems={'center'}> 
                <ChatMessages></ChatMessages>
                <ChatFooter></ChatFooter>
            </Box>
        </Container>
    );
};

export default chat
