
import axios, { AxiosHeaders, AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import { BASE_URL } from "@/lib/const";
import { getCookie, setCookie } from "cookies-next";
import { log } from "console";
import { jwtDecode } from "jwt-decode";



export enum ParamType {
    Path,
    Query,
    Body
}

export enum HttpMethodType {
    GET,
    POST,
    PUT,
    DELETE
}

interface Options {
    includeToke?: boolean,
    bodyParam?: Object,
    makeNewTokenReq?: boolean,
    ignoreTokenExp?: boolean
}

interface ParamInput {
    pathParam?: String,
    queryParam?: { [key: string]: any }
}

export function generateUrl(path: string, parameters: ParamInput = {}, paramType: ParamType): string {
    let params = '';
    if (paramType === ParamType.Path) {
        return `${BASE_URL}/${path}/${parameters.pathParam}`

    } else if (paramType === ParamType.Query) {
        Object.entries(parameters).forEach(([key, value]) => {
            params += `&${key}=${value}`;
        });
        return `${BASE_URL}/${path}?${params}`;
    } else {
        return `${BASE_URL}${path}`;
    }
}

export async function makeApiRequeest(url: string,
    httpMethod: HttpMethodType,
    opt: Options = {
        includeToke: true,
        bodyParam: undefined,
        makeNewTokenReq: true,
        ignoreTokenExp: true
    }) {

    let token = getCookie('session');

    if (!token || typeof token !== 'string') {
        console.error('Invalid or missing session token');
        return;
    }
    if (!opt.ignoreTokenExp) {
        if (opt.makeNewTokenReq && isTokenExpired(token)) {
            const refresh_token = getCookie('x-r-t')
            const response = await axios.post(`${BASE_URL}/api/gen-accesss-tokens/${refresh_token}`);

            setCookie('session', response.data.data.access_token);
            setCookie('x-r-t', response.data.data.refresh_token);
            makeApiRequeest(url, httpMethod, opt)

        }
    }

    const axioConfig: AxiosRequestConfig = { method: HttpMethodType[httpMethod].toString().toLowerCase(), url: url }

    if (opt.includeToke) {
        axioConfig.headers = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
    }
    if (opt.bodyParam) {
        axioConfig.data = opt.bodyParam
    }
    if (opt.bodyParam && (httpMethod === HttpMethodType.POST || httpMethod === HttpMethodType.PUT)) {
        axioConfig.data = opt.bodyParam;
    }
    const responsedata = await axios(axioConfig) as AxiosResponse<any>;
    console.log(responsedata);

    return responsedata;

}

const isTokenExpired = (token: string) => {
    try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (!decodedToken.exp) {
            return null;
        }
        return decodedToken.exp < currentTime;
    } catch (error) {
        console.error('Error decoding token:', error);
        return true;
    }
};