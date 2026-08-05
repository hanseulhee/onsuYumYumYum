export const MOCK_TIMESTAMP = "2024-07-05T00:00:00";
export const MOCK_CREATED_DATE = "2022-09-01T00:00:00";
export const MOCK_MODIFIED_DATE = "2024-07-05T00:00:00";

export const MOCK_IMAGE_URL = "/images/noImage.png";

export function mockPhoto(id: number, originalName: string): IPhoto {
  return {
    id,
    originalName: `${originalName}.png`,
    convertedName: `${originalName}-converted.png`,
    s3Url: MOCK_IMAGE_URL,
    createdDate: MOCK_CREATED_DATE,
    modifiedDate: MOCK_MODIFIED_DATE,
  };
}
