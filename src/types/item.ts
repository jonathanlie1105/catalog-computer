type General = {
  id: string;
  nama: string;
  foto: string;
  merek: string;
  harga: number;
  stok: number;
};
type CPUDetail = {
  jenis: "cpu";
  base_clock: number;
  boost_clock: number;
  core: number;
  thread: number;
};
type RAMDetail = {
  jenis: "ram";
  speed: number;
  ukuran: number;
};
type MOBODetail = {
  jenis: "mobo";
  chipset: string;
  to_prosesor: string;
};
type GPUDetail = {
  jenis: "gpu";
};

export type Item = General & (CPUDetail | RAMDetail | MOBODetail | GPUDetail);
