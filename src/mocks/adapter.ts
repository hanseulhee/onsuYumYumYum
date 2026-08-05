import { AxiosAdapter, AxiosError, AxiosRequestConfig } from "axios";
import { resolveMock } from "./handlers";

const MOCK_LATENCY = 150;

export const isMockEnabled = process.env.NEXT_PUBLIC_USE_MOCK !== "false";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function createAxiosError(
  message: string,
  config: AxiosRequestConfig,
  status: number,
  data: unknown
) {
  const error = new Error(message) as AxiosError;
  error.isAxiosError = true;
  error.config = config;
  error.response = {
    data,
    status,
    statusText: String(status),
    headers: {},
    config,
  };
  return error;
}

export const mockAdapter: AxiosAdapter = async (config) => {
  const url = config.url ?? "";
  await delay(MOCK_LATENCY);

  const mock = resolveMock(url);

  if (!mock) {
    throw createAxiosError(
      `[mock] 처리되지 않은 요청입니다: ${config.method?.toUpperCase()} ${url}`,
      config,
      501,
      null
    );
  }

  if (mock.status < 200 || mock.status >= 300) {
    throw createAxiosError(
      `[mock] 요청 실패: ${url}`,
      config,
      mock.status,
      mock.body
    );
  }

  return {
    data: mock.body,
    status: mock.status,
    statusText: "OK",
    headers: {},
    config,
    request: {},
  };
};
