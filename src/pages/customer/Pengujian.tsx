import React from "react";
import CustomerContainer from "../../components/CustomerContainer";
import {
  Badge,
  Box,
  Button,
  Icon,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Container from "../../components/Container";
import TableContainer from "../../components/TableContainer";
import { DotsThreeVertical } from "@phosphor-icons/react";
import { iconSize } from "../../const/sizes";
import ContentContainer from "../../components/ContentContainer";
import { Link } from "react-router-dom";

export default function Pengujian() {
  // TODO show riwayat pengujian table data

  return (
    <CustomerContainer active={"Pengujian"}>
      <ContentContainer>
        <Container>
          <Box>
            <Text fontSize={[22, null, 24]} fontWeight={600} mt={12} mb={6}>
              Pendaftaran Pengujian Online
            </Text>

            <Text mb={4}>
              Untuk Pendaftaran Sampel Pengujian Online, klik tombol dibawah ini
            </Text>

            <Button
              as={Link}
              to={"/customer/pendaftaran-pengujian"}
              colorScheme="ap"
              className="lg-clicky"
              mb={6}
            >
              Pendaftaran Pengujian Online
            </Button>

            <Box p={6} bg={"p.100"} borderRadius={16} mb={8}>
              <Text lineHeight={"30px"}>
                Permohonan Penelitian dengan Status <b>Uji Kompetensi</b> Akan
                Diproses Setelah Calon Peneliti Lulus Uji Kompetensi yang
                Dijadwalkan oleh LPPT UGM. Jika Tidak Lulus, Anda Dapat
                Mengulang Uji Kompetensi Pada Jadwal Tes Selanjutnya. Untuk
                Informasi Lebih Lanjut, Silakan Hubungi Layanan Pelanggan Kami
              </Text>
            </Box>
          </Box>

          <Box>
            <Text fontSize={[22, null, 24]} fontWeight={600} my={6}>
              Riwayat Pengujian
            </Text>

            <Text mb={4}>Telusuri Perjalanan Pengujian Anda</Text>
          </Box>

          <Box mb={8}>
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th>No</Th>
                    <Th>No.Registrasi</Th>
                    <Th whiteSpace={"nowrap"}>Tanggal Order</Th>
                    <Th>Nama</Th>
                    <Th>Alamat</Th>
                    <Th whiteSpace={"nowrap"}>Status Pembayaran</Th>
                    <Th whiteSpace={"nowrap"}>Status Pengujian</Th>
                    <Th isNumeric></Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {/* TODO show data */}
                  <Tr bg={"var(--divider)"}>
                    <Td isNumeric>1</Td>
                    <Td>001</Td>
                    <Td>22 Okt 2023</Td>
                    <Td>Anjay</Td>
                    <Td minW={"200px"}>Jalan Banjarsari no.12</Td>
                    <Td>
                      <Badge colorScheme="red">Belum Dibayar</Badge>
                    </Td>
                    <Td>
                      <Badge colorScheme="blue">Sedang Diuji</Badge>
                    </Td>
                    <Td isNumeric>
                      <IconButton
                        aria-label="more"
                        icon={
                          <Icon
                            as={DotsThreeVertical}
                            fontSize={iconSize}
                            weight="bold"
                          />
                        }
                        variant={"ghost"}
                        className="btn"
                        borderRadius={"full"}
                      />
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      </ContentContainer>
    </CustomerContainer>
  );
}