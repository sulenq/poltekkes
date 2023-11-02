import { Avatar, Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import useScreenWidth from "../utils/useGetScreenWidth";
import customerNav from "../const/customerNav";
import { Link } from "react-router-dom";
import LandingHeader from "./LandingHeader";
import CustomerNavDrawer from "./CustomerNavDrawer";

type Props = { active: string };

export default function CustomerNav({ active }: Props) {
  const sw = useScreenWidth();

  return (
    <HStack justify={"space-between"} h={["80px", null, null]}>
      <HStack gap={4}>
        <LandingHeader />

        <HStack gap={0}>
          {sw >= 770 &&
            customerNav.map((n, i) => (
              <Button
                key={i}
                as={Link}
                to={n.link}
                variant={"ghost"}
                h={"80px"}
                // bg={active === n.name ? "var(--divider)" : ""}
                borderBottom={active === n.name ? "2px solid var(--p500)" : ""}
                className="btn"
                borderRadius={"0"}
                // leftIcon={
                //   <Icon
                //     as={n.icon}
                //     fontSize={iconSize}
                //     weight={active === n.name ? "duotone" : "regular"}
                //     mb={"1px"}
                //   />
                // }
                color={active === n.name ? "p.500" : "black"}
              >
                <Text>{n.name}</Text>
              </Button>
            ))}
        </HStack>
      </HStack>

      {sw >= 770 && (
        <Avatar size={"md"} name="Jolitos Kurniawan" src="/images/user.jpg" />
      )}

      {sw < 770 && <CustomerNavDrawer active={active} />}
    </HStack>
  );
}
