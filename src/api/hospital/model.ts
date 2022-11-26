import { data } from "@src/data";

type HospitalProps = {
  "id": string;
  "name": string,
  "street_address": string;
  "city": string;
  "state": string;
  "zip_code": string;
  "hospital_bed_count": string;
  "county": string;
  "hospital_bed_size": string;
  "updated_dt": string;
}

export class Hospital {
  readonly id?: number;
  readonly name?: string;
  readonly address?: {
    street: string;
    city: string;
    state: string;
    zipCode: number;
  }
  // readonly thumbnailUrl?: string;

  constructor(props: HospitalProps) {
    this.id = parseInt(props.id);
    this.name = props.name;
    this.address = {
      street: props.street_address,
      city: props.city,
      state: props.state,
      zipCode: parseInt(props.zip_code),
    };
  }

  static fromAPIResponse(props: any) {
    return new Hospital(props);
  }

  // call this once to seed app state with items
}

export const seedHospitalData: () => Map<string, Hospital> = () => {
  let map = new Map<string, Hospital>();
  data.forEach(location => map.set(location.id, Hospital.fromAPIResponse(location)));
  return map;
}
