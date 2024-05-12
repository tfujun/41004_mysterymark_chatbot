export interface ChatHistory {
    Messages: Array<Message>
};

export interface MessageContent {
    Role: string
    Content: string
};

export interface Message {
    Message: Array<MessageContent>
};
