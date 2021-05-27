declare namespace install {
  type Category = "gov" | "ncp" | "fin";
  interface options {
    clientID: string;
    category?: Category;
    subModules?: string;
  }
}
