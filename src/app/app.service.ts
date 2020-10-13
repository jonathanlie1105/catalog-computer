import { Injectable } from "@angular/core";

import { Item } from "src/types/item";
import { Jenis } from "src/types/jenis";

@Injectable({
  providedIn: "root",
})
export class AppService {
  private items: Array<Item> = [
    {
      jenis: "ram",
      id: "rm1",
      merek: "Apacer",
      nama: "DDR4 PC25600 3200Mhz Dual Channel 16GB (2x8GB) - NOX RGB Aura2",
      foto:
        "https://ecs7.tokopedia.net/img/cache/700/product-1/2020/1/6/13757756/13757756_addd3111-570b-4178-a6b1-c9423d18fb03_700_700",
      speed: 3200,
      ukuran: 16,
      stok: 30,
      harga: 1245000,
    },
    {
      jenis: "ram",
      id: "rm2",
      merek: "ADATA",
      nama:
        "DDR4 XPG SPECTRIX D60G PC25600 3200MHz 32GB (2X16GB) Dual Channel - RGB",
      foto:
        "https://www.adata.com/upload/ProductGallery/productGallery7055.jpg",
      speed: 3200,
      ukuran: 32,
      stok: 20,
      harga: 2455000,
    },
    {
      jenis: "ram",
      id: "rm3",
      merek: "V-GeN",
      nama: "TsunamiX RGB-V DDR4 PC28800 3600Mhz Dual Channel 32GB",
      foto: "https://cf.shopee.co.id/file/8e27ea5d172227ec40f8452c1ced89e8",
      speed: 3600,
      ukuran: 32,
      stok: 15,
      harga: 2418000,
    },
    {
      jenis: "mobo",
      id: "mb4",
      nama: "Z390 Phantom Gaming 9",
      merek: "Asrock",
      foto:
        "https://www.asrock.com/mb/photo/Z390%20Phantom%20Gaming%209(M1).png",
      chipset: "LGA 1151",
      to_prosesor: "Intel",
      stok: 30,
      harga: 4395000,
    },
    {
      jenis: "mobo",
      id: "mb5",
      nama: "ROG Maximus XI Hero",
      merek: "ASUS",
      foto:
        "https://www.asus.com/media/global/products/VEK07QXXVVHw8GI6/P_setting_000_1_90_end_500.png",
      chipset: "LGA 1151",
      to_prosesor: "Intel",
      stok: 25,
      harga: 5645000,
    },
    {
      jenis: "mobo",
      id: "mb6",
      nama: "X470MH",
      merek: "Biostar",
      foto: "https://www.biostar.com.tw/picture/Review/383/b20190823.png",
      chipset: "AM4",
      to_prosesor: "AMD",
      stok: 35,
      harga: 1150000,
    },
    {
      jenis: "mobo",
      id: "mb7",
      nama: "X570-A Pro",
      merek: "MSI",
      foto:
        "https://asset.msi.com/resize/image/global/product/product_10_20190705101438_5d1eb28e858fb.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
      chipset: "AM4",
      to_prosesor: "AMD",
      stok: 25,
      harga: 2700000,
    },
    {
      jenis: "gpu",
      id: "gp8",
      nama: "Radeon™ RX VEGA 56 GAMING OC 8G",
      merek: "Gigabyte",
      foto:
        "https://static.gigabyte.com/Product/3/6483/2017121517132494_big.png",
      stok: 13,
      harga: 5305000,
    },
    {
      jenis: "gpu",
      id: "gp9",
      nama: "Radeon™ VII 16GB HBM2",
      merek: "Powercolor",
      foto: "https://www.powercolor.com/_upload/images//1901241530430.png",
      stok: 4,
      harga: 11200000,
    },
    {
      jenis: "gpu",
      id: "gp10",
      nama: "DA RTX 2070 SUPER JETSTREAM 8GB GDDR6 256BIT",
      merek: "Digital Alliance",
      foto:
        "https://www.digitalalliance.co.id/wp-content/uploads/2019/03/RTX2070SJ_01.jpg",
      stok: 11,
      harga: 7890000,
    },
    {
      jenis: "gpu",
      id: "gp11",
      nama: "GeForce RTX 2080 SUPER™ GAMING X TRIO",
      merek: "MSI",
      foto:
        "https://asset.msi.com/resize/image/global/product/product_3_20190722133238_5d354a7644999.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
      stok: 2,
      harga: 10660000,
    },
    {
      jenis: "cpu",
      id: "cp12",
      nama: "Ryzen 3 3300X",
      merek: "AMD",
      foto:
        "http://www.jagatreview.com/wp-content/uploads/2020/05/Ryzen_3_BOX.png",
      base_clock: 3.8,
      boost_clock: 4.3,
      core: 4,
      thread: 8,
      stok: 10,
      harga: 2395000,
    },
    {
      jenis: "cpu",
      id: "cp13",
      nama: "Ryzen 5 3600XT",
      merek: "AMD",
      foto:
        "https://s1.bukalapak.com/img/6767206292/original/AMD_Ryzen_5_2600_39Ghz_AM4.jpg",
      base_clock: 3.8,
      boost_clock: 4.5,
      core: 6,
      thread: 12,
      stok: 30,
      harga: 3885000,
    },
    {
      jenis: "cpu",
      id: "cp14",
      nama: "Ryzen 7 3800XT",
      merek: "AMD",
      foto:
        "https://ecs7.tokopedia.net/img/cache/700/product-1/2019/7/22/2537679/2537679_5bec9a82-ea29-4f5c-bb9c-142460b04376_800_800",
      base_clock: 3.9,
      boost_clock: 4.7,
      core: 8,
      thread: 16,
      stok: 5,
      harga: 6135000,
    },
    {
      jenis: "cpu",
      id: "cp15",
      nama: "I3 9100",
      merek: "Intel",
      foto:
        "https://www.powerplanetonline.com/cdnassets/procesador_intel_core_i3-9100_3_6_ghz_box_01_l.jpg",
      base_clock: 3.6,
      boost_clock: 4.2,
      core: 4,
      thread: 4,
      stok: 34,
      harga: 1640000,
    },
    {
      jenis: "cpu",
      id: "cp16",
      nama: "I5 9600K",
      merek: "Intel",
      foto: "https://tpucdn.com/review/intel-core-i5-9600k/images/title.jpg",
      base_clock: 3.7,
      boost_clock: 4.6,
      core: 6,
      thread: 6,
      stok: 20,
      harga: 3672000,
    },
    {
      jenis: "cpu",
      id: "cp17",
      nama: "I7 9700K",
      merek: "Intel",
      foto:
        "https://www.pricerunner.com/product/320x320/1866817306/Intel-Core-i7-9700K-3.6GHz-Socket-1151-2-Box-without-Cooler.jpg",
      base_clock: 3.6,
      boost_clock: 4.9,
      core: 8,
      thread: 8,
      stok: 0,
      harga: 5140000,
    },
  ];

  constructor() {}

  getAllItems(admin?: boolean) {
    if (admin) {
      return this.items;
    }
    return this.items.filter(({ stok }) => stok > 0);
  }

  getItemsById(itemId: string) {
    return this.items.find(({ id }) => id === itemId);
  }

  getItemsByJenis(itemJenis: Jenis, admin?: boolean) {
    if (admin) {
      return this.items.filter(({ jenis }) => jenis === itemJenis);
    }
    return this.items.filter(
      ({ jenis, stok }) => jenis === itemJenis && stok > 0
    );
  }

  generateId(jenis: Jenis) {
    const { length } = this.items;
    switch (jenis) {
      case "cpu":
        return `cp${length}`;
      case "gpu":
        return `gp${length}`;
      case "mobo":
        return `mb${length}`;
      case "ram":
        return `rm${length}`;
    }
  }
}
