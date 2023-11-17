import {
  Button,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { ArrowDown, ArrowUp, CaretDown } from "@phosphor-icons/react";
import React from "react";
import { iconSize } from "../const/sizes";
import useSortKelolaProduk from "../globalState/useSortKelolaProduk";

export default function SortKelolaProduk() {
  const { setSortBy, setSortOrder } = useSortKelolaProduk();

  return (
    <Menu>
      <MenuButton
        as={Button}
        flexShrink={0}
        variant={"outline"}
        colorScheme="ap"
        pr={"12px"}
        rightIcon={
          <Icon
            as={CaretDown}
            fontSize={iconSize}
          />
        }
      >
        Urutkan
      </MenuButton>

      <MenuList
      // minW={"140px"}
      >
        <MenuGroup title="Nama Produk">
          <MenuItem
            onClick={() => {
              setSortBy("namaProduk");
              setSortOrder("asc");
            }}
          >
            <HStack className="sortItem">
              <Text>A-Z</Text>
              <Icon
                as={ArrowUp}
                fontSize={iconSize}
              />
            </HStack>
          </MenuItem>
          <MenuItem
            onClick={() => {
              setSortBy("namaProduk");
              setSortOrder("desc");
            }}
          >
            <HStack className="sortItem">
              <Text>Z-A</Text>
              <Icon
                as={ArrowDown}
                fontSize={iconSize}
              />
            </HStack>
          </MenuItem>
        </MenuGroup>

        <MenuDivider />

        <MenuGroup title="Kategori">
          <MenuItem
            onClick={() => {
              setSortBy("kategori");
              setSortOrder("asc");
            }}
          >
            <HStack className="sortItem">
              <Text>A-Z</Text>
              <Icon
                as={ArrowUp}
                fontSize={iconSize}
              />
            </HStack>
          </MenuItem>
          <MenuItem
            onClick={() => {
              setSortBy("kategori");
              setSortOrder("desc");
            }}
          >
            <HStack className="sortItem">
              <Text>Z-A</Text>
              <Icon
                as={ArrowDown}
                fontSize={iconSize}
              />
            </HStack>
          </MenuItem>
        </MenuGroup>

        <MenuDivider />

        <MenuGroup title="Harga">
          <MenuItem
            onClick={() => {
              setSortBy("harga");
              setSortOrder("asc");
            }}
          >
            <HStack className="sortItem">
              <Text>Rendah-Tinggi</Text>
              <Icon
                as={ArrowUp}
                fontSize={iconSize}
              />
            </HStack>
          </MenuItem>
          <MenuItem
            onClick={() => {
              setSortBy("harga");
              setSortOrder("desc");
            }}
          >
            <HStack className="sortItem">
              <Text>Tinggi-Rendah</Text>
              <Icon
                as={ArrowDown}
                fontSize={iconSize}
              />
            </HStack>
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}