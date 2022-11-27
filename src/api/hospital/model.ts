import { data } from "@src/data";
import { convertSnakeCaseToCamelCase } from "@src/utils";

export type HospitalProps = {
  id: number;
  name: string;
  streetAddress?: string;
  city?: string;
  state: string;
  zipCode: number;
  // "hospital_bed_count": string;
  // "county": string;
  // "hospital_bed_size": string;
  // "updated_dt": string;
};

export class Hospital {
  readonly id: number;
  readonly name: string;
  readonly street?: string;
  readonly city?: string;
  readonly state?: string;
  readonly zipCode?: number;
  // readonly thumbnailUrl?: string;

  constructor(props: HospitalProps) {
    this.id = props.id;
    this.name = props.name;
    this.street = props?.streetAddress || "404 Cyber Ln";
    this.city = props?.city || "Night City";
    this.state = props?.state || "CA";
    this.zipCode = props?.zipCode || 37707;
  }

  static fromAPIResponse(props: any) {
    return new Hospital(props);
  }

  get formattedAddress() {
    const { street, city, state, zipCode } = this;
    return `${street}, ${city} ${state} ${zipCode}`;
  }
}

export const seedHospitalData: () => Map<string, Hospital> = () => {
  let map = new Map<string, Hospital>();
  data.forEach((location) => {
    map.set(
      location.id,
      Hospital.fromAPIResponse(convertSnakeCaseToCamelCase(location))
    );
  });
  return map;
};
