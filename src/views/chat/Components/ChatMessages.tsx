import { Box, Container, Stack } from '@mui/material';
import React from 'react';
import useGetChatHistory from '../../../hooks/useGetChatHistory';
import { ChatHistory } from '../../../types/ChatTypes';

const ChatMessages: React.FunctionComponent = () => {
    const chatHistory: ChatHistory = useGetChatHistory();

    return (
        <Container>
                <Stack spacing={4}>
                    {chatHistory.Messages.map(message =>
                        message.Message.map(messageContent => 
                            <Box display='flex' flexDirection={'column'} alignItems={'center'}>
                                {messageContent.Role === 'User' ?
                                    <Box display='flex' flexDirection={'row'} justifyContent={'flex-end'} width={'60vw'}>
                                        {messageContent.Content}
                                    </Box>
                                    : <Box display='flex' flexDirection={'row'} alignItems={'start'} width={'60vw'}>
                                        {messageContent.Content}
                                    </Box>
                                }
                            </Box>
                        )
                    )}
                </Stack>
        </Container>
    );
};

export default ChatMessages;
