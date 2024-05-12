import axios from "axios";

interface RequestProps {
    url: string
    method: 'post' | 'get' | 'delete' | 'put'
    body: any
    header: any
}

const executeRequest = async (props: RequestProps) => {
    const {
        url,
        method,
        body,
        header
    } = props;

    const jeffrey = axios.create({
        baseURL: 'https://backend-agent.vercel.app'
    });
    jeffrey.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
    jeffrey.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type, Authorization, Content-Length, X-Requested-With'
    jeffrey.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS'

    const response = await jeffrey.request({
        url: url,
        method: method,
        headers: header,
        data: body
    });

    return response;
};

export default executeRequest;
