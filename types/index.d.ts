export declare namespace install {
  type category = "gov" | "ncp" | "fin";
  interface options {
    clientID: string;
    category?: category;
    subModules?: string;
  }
}
