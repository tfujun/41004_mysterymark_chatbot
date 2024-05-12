import { useEffect, useState } from 'react';
import { ChatHistory } from '../types/ChatTypes';
import executeRequest from './executeRequest';

const useGetChatHistory = () => {
    const [messages, setMessages] = useState<ChatHistory>({Messages: []});
    
    useEffect(() => {
        // Make api call
        // (async () => {
        //     const response = await executeRequest({
        //         url: 'chatgpt',
        //         method: 'post',
        //         body: {
        //             'propmt': 'hello how are you'
        //         },
        //         header: {}
        //     });
            
        //     setMessages(response.data);
        // })();

        setMessages({Messages: [
            {Message: [
                {
                    Role: 'System',
                    Content: 'I am system'
                },
                {
                    Role: 'User',
                    Content: 'abcdefg'
                },
                {
                    Role: 'System',
                    Content: 'I am system'
                },
                {
                    Role: 'User',
                    Content: 'abcdefg'
                },
                {
                    Role: 'System',
                    Content: 'I am system'
                },
                {
                    Role: 'User',
                    Content: 'abcdefg'
                },
                {
                    Role: 'System',
                    Content: 'I am system'
                },
                {
                    Role: 'User',
                    Content: 'abcdefg'
                },
                {
                    Role: 'System',
                    Content: 'I am system'
                },
                {
                    Role: 'User',
                    Content: 'abcdefg'
                },
                {
                    Role: 'System',
                    Content: 'I am system'
                },
                {
                    Role: 'User',
                    Content: 'abcdefg'
                },
                {
                    Role: 'System',
                    Content: 'I am system'
                },
                {
                    Role: 'User',
                    Content: 'abcdefg'
                },
                {
                    Role: 'System',
                    Content: 'I am system'
                },
                {
                    Role: 'User',
                    Content: 'abcdefg'
                },
                {
                    Role: 'System',
                    Content: 'I am system'
                },
                {
                    Role: 'User',
                    Content: 'abcdefg'
                },
                {
                    Role: 'System',
                    Content: 'I am system'
                },
                {
                    Role: 'User',
                    Content: 'abcdefg'
                },
                {
                    Role: 'System',
                    Content: 'I am system'
                },
                {
                    Role: 'User',
                    Content: 'abcdefg'
                },
                {
                    Role: 'System',
                    Content: 'I am system'
                },
                {
                    Role: 'User',
                    Content: 'abcdefg'
                },
                {
                    Role: 'System',
                    Content: 'I am system'
                },
                {
                    Role: 'User',
                    Content: 'abcdefg'
                },
                {
                    Role: 'System',
                    Content: 'I am system'
                },
                {
                    Role: 'User',
                    Content: 'abcdefg'
                },
                {
                    Role: 'System',
                    Content: 'I am system'
                },
                {
                    Role: 'User',
                    Content: 'abcdefg'
                },
                {
                    Role: 'System',
                    Content: 'I am system'
                },
                {
                    Role: 'User',
                    Content: 'abcdefg'
                },
                {
                    Role: 'System',
                    Content: 'I am system'
                },
                {
                    Role: 'User',
                    Content: 'abcdefg'
                },
                {
                    Role: 'System',
                    Content: 'I am system'
                },
                {
                    Role: 'User',
                    Content: 'abcdefg'
                },
                {
                    Role: 'System',
                    Content: 'I am system'
                },
                {
                    Role: 'User',
                    Content: 'abcdefg'
                },
                {
                    Role: 'System',
                    Content: 'I am system'
                },
                {
                    Role: 'User',
                    Content: 'abcdefg'
                },
                {
                    Role: 'System',
                    Content: 'I am system'
                },
                {
                    Role: 'User',
                    Content: 'abcdefg'
                },
                {
                    Role: 'System',
                    Content: 'I am system'
                },
                {
                    Role: 'User',
                    Content: 'abcdefg'
                },
                {
                    Role: 'System',
                    Content: 'I am system'
                },
                {
                    Role: 'User',
                    Content: 'abcdefg'
                },
                {
                    Role: 'System',
                    Content: 'I am system'
                },
                {
                    Role: 'User',
                    Content: 'abcdefg'
                },

            ]}
        ]})
    }, []);

    return messages;
};

export default useGetChatHistory;
