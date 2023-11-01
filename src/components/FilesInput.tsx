import { Box, Button, HStack, Input, Text } from "@chakra-ui/react";
import React, { useRef } from "react";

export default function FilesInput(props: any) {
  const formik = props.formik;
  const name = props.name;
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <Input
        ref={inputRef}
        display={"none"}
        name={name}
        type="file"
        accept=".jpg, .jpeg, .png"
        multiple
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const files: FileList | null = e.target.files;
          if (files) {
            const fileArray = Array.from(files);
            formik.setFieldValue("fotoSampel", fileArray);
          }
          console.log(files);
        }}
        mb={4}
      />

      <Button
        px={0}
        w={"100%"}
        fontWeight={400}
        variant={"ghost"}
        className="btn"
        gap={0}
        border={"1px solid var(--divider3)"}
        boxShadow={formik.errors[name] ? "0 0 0px 1px var(--red)" : ""}
        borderRadius={8}
        cursor={"pointer"}
        _focus={{ boxShadow: "0 0 0px 1px var(--p500)" }}
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.click();
          }
        }}
      >
        <HStack gap={0} w={"100%"}>
          <HStack
            h={"40px"}
            flexShrink={0}
            px={4}
            py={2}
            borderRadius={"8px 0 0 8px"}
            bg={"var(--divider3)"}
          >
            <Text fontSize={[12, null, 14]}>Pilih Files</Text>
          </HStack>

          <Box px={4} py={2}>
            <Text noOfLines={1} fontSize={[12, null, 14]}>
              {formik.values[name].length > 0
                ? formik.values[name].map((file: File) => file.name).join(", ")
                : "Pilih berkas yang ingin diunggah"}
            </Text>
          </Box>
        </HStack>
      </Button>
    </>
  );
}