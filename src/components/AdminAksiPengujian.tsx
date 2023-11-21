import { Button, Text } from "@chakra-ui/react";
import React from "react";
import VerifikasiBerkasModal from "../components/VerifikasiBerkasModal";

export default function AdminAksiPengujian(props: any) {
  const noreg = props.noreg;
  const status = props.status;
  // TODO buat komponen yang sesuai

  switch (status) {
    default:
      return <Text>-</Text>;
    case "Verifikasi Berkas":
      return <VerifikasiBerkasModal noreg={noreg} />;
    case "Tagihan Belum Dibayar":
      return (
        <Button w={"100%"} colorScheme={"ap"}>
          Input Kontrak & Tagihan
        </Button>
      );
    case "Verifikasi Pembayaran":
      return (
        <Button w={"100%"} colorScheme="ap" className="lg-clicky">
          Verifikasi Pembayaran
        </Button>
      );
    case "Pembayaran Diverifikasi":
      return (
        <Button w={"100%"} colorScheme="ap" className="lg-clicky">
          Input Tanggal Pengujian
        </Button>
      );
    case "Dalam Pengujian":
      return (
        <Button w={"100%"} colorScheme="ap" className="lg-clicky">
          Unggah Hasil Pengujian
        </Button>
      );
  }
}
