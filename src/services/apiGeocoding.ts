type AddressCoordinates = {
  latitude: number;
  longitude: number;
};

interface GeocodingResponse {
  city?: string;
  locality?: string;
  countryName?: string;
  principalSubdivision?: string;
  postcode?: string;
  countryCode?: string;
  // Adicione outros campos que a API retorna e você utiliza
}

export async function getAddress({ latitude, longitude }: AddressCoordinates): Promise<GeocodingResponse> {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}
