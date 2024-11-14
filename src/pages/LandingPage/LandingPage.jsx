import React from "react";
import {
  Flex,
  Box,
  VStack,
  Text,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/UploadWiz Logo/Upload Wiz Logo.png";

import { useBreakpointValue } from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";

const LandingPage = () => {
  const navigate = useNavigate();
  const showButtons = useBreakpointValue({ base: false, md: true });
  return (
    <>
      <Box h={["12%", "14%", "16%"]}>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          background="linear-gradient(180deg, rgba(180, 33, 33, 1) 38%, rgba(33, 33, 33, 1) 100%)"
          w="100%"
          p={[1, 1, 4]}
        >
          <Flex alignItems={"center"}>
            <Image src={logo} pt={1} />
            <Flex
              fontFamily="Poppins, sans-serif"
              fontSize={["md", "md", "2xl"]}
              p={2}
              color="white"
              textShadow="1px 1px 2px black"
            >
              UploadWiz
            </Flex>
          </Flex>

          {showButtons ? (
            <Flex
              alignItems="center"
              p={2}
              fontFamily="outfit"
              fontSize={["xs", "xs", "xl"]}
              color="white"
            >
              <Button
                variant="ghost"
                _hover={{ borderBottom: "2px solid white" }}
                _active={{ borderBottom: "2px solid white" }}
                fontSize={["md", "xl"]}
                p={2}
                color="white"
                textShadow="1px 1px 2px black"
                borderBottom="2px solid transparent"
                borderRadius="0"
              >
                Price
              </Button>
              <Button
                variant="ghost"
                _hover={{ borderBottom: "2px solid white" }}
                _active={{ borderBottom: "2px solid white" }}
                ml={4}
                mr={4}
                fontSize={["xs", "xs", "xl"]}
                p={2}
                color="white"
                textShadow="1px 1px 2px black"
                borderBottom="2px solid transparent"
                borderRadius="0"
              >
                About Us
              </Button>
              <Button
                variant="ghost"
                _hover={{ borderBottom: "2px solid white" }}
                _active={{ borderBottom: "2px solid white" }}
                fontSize={["xs", "xs", "xl"]}
                p={2}
                color="white"
                textShadow="1px 1px 2px black"
                borderBottom="2px solid transparent"
                borderRadius="0"
              >
                Contact
              </Button>
            </Flex>
          ) : (
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<FiMoreVertical />}
                variant="ghost"
                aria-label="Options"
                color="white"
                _hover={{ color: "gray.300" }}
                _active={{ color: "gray.500" }}
              />
              <MenuList
                backgroundColor="rgba(180, 33, 33, 0.9)"
                borderColor="black"
                borderWidth="1px"
                borderRadius="0"
              >
                <MenuItem
                  _hover={{
                    backgroundColor: "rgba(150, 30, 30, 1)",
                    color: "white",
                  }}
                  _focus={{
                    backgroundColor: "rgba(150, 30, 30, 1)",
                    color: "white",
                  }}
                  backgroundColor={"rgba(180, 33, 33, 0.9)"}
                >
                  Price
                </MenuItem>
                <MenuItem
                  _hover={{
                    backgroundColor: "rgba(150, 30, 30, 1)",
                    color: "white",
                  }}
                  _focus={{
                    backgroundColor: "rgba(150, 30, 30, 1)",
                    color: "white",
                  }}
                  backgroundColor={"rgba(180, 33, 33, 0.9)"}
                >
                  About Us
                </MenuItem>
                <MenuItem
                  _hover={{
                    backgroundColor: "rgba(150, 30, 30, 1)",
                    color: "white",
                  }}
                  _focus={{
                    backgroundColor: "rgba(150, 30, 30, 1)",
                    color: "white",
                  }}
                  backgroundColor={"rgba(180, 33, 33, 0.9)"}
                >
                  Contact
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>
      </Box>

      <Box
        h={["88%", "86%", "84%"]}
        overflow="auto"
        scrollSnapType="y mandatory"
        scrollBehavior="smooth"
      >
        <Box
          id="a"
          h="100%"
          scrollSnapAlign="start"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg={"rgba(33, 33, 33, 1)"}
          padding={["4", "4", "8"]}
          flexDirection={"column"}
        >
          <Flex
            fontFamily="outfit"
            alignItems="center"
            flexDirection="column"
            fontSize={["5xl", "6xl", "8xl"]}
            justifyContent="center"
            height={["35%", "35%", "100%"]}
            textAlign="center"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="100%"
              h="auto"
            >
              <Text fontWeight="bold">Streamline Your</Text>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="100%"
              h="auto"
            >
              <Text fontWeight="bold">Content On The Go</Text>
            </Box>
          </Flex>

          <Flex
            fontFamily="outfit"
            alignItems="center"
            flexDirection="column"
            fontSize={["lg", "lg", "2xl"]}
            mb={["12%", "12%", "8%"]}
          >
            <Box
              mt={["10%", "10%", 4]}
              px={[4, 8]}
              width={["100%", "100%", "80%"]}
              textAlign="center"
            >
              <Text>
                Experience hassle-free content management for YouTubers on the
                move – UploadWiz simplifies the way you handle your videos and
                images while traveling, ensuring efficiency and creativity at
                your fingertips
              </Text>
            </Box>

            <Button
              id="join-now"
              bg="#FF6969"
              color="black"
              mt={["6%", "6%", "3%"]}
              w={["12rem", "12rem", "15rem"]}
              h={["4rem", "4rem", "5rem"]}
              rounded="2xl"
              fontSize={["2xl", "2xl", "4xl"]}
              fontWeight="bold"
              onClick={() => navigate("/auth/register")}
              _hover={{
                bg: "#FF4C4C",
                transform: "scale(1.05)",
                transition: "transform 0.2s ease, background-color 0.2s ease",
              }}
              _active={{
                bg: "#FF1F1F",
                transform: "scale(0.95)",
                transition: "transform 0.1s ease",
              }}
            >
              Join Now
            </Button>
          </Flex>
        </Box>

        <Box
          id="b"
          h="100%"
          scrollSnapAlign="start"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="linear-gradient(180deg, rgba(33, 33, 33, 1) 0%, rgba(180, 33, 33, 1) 50%, rgba(33, 33, 33, 1) 100%)"
          flexDirection={["column", "row"]}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flex="1"
          >
            <iframe
              src="https://www.youtube.com/embed/wd_zfAApt_0?autoplay=0&rel=0&controls=1"
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "600px",
                aspectRatio: "16/9",
              }}
            />
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flex="1"
            textAlign="center"
            px={["2rem", "2rem", "4rem"]}
            _hover={{
              "& > div > p": {
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              },
            }}
          >
            <Flex
              flexDirection={"column"}
              alignItems={"center"}
              fontSize={["md", "2xl"]}
              mb={["20%", "20%", "0%"]}
            >
              <Text fontSize={["xl", "xl", "6xl"]} fontWeight={"bold"}>
                Why Join Us?
              </Text>
              <Text fontSize={["md", "md", "2xl"]}>
                How good is being a traveller and yet a consistent YouTuber?
                Captivating, isn't it? But juggling between your travel diaries
                and editing hour-long videos seems tiring. This is where
                UploadWiz steps in.
              </Text>
              <Text fontSize={["md", "md", "2xl"]}>
                It's the place where you go to when you need to get your videos
                edited and uploaded. What sets us apart is our feature to
                deliver tailored outputs that align with your vision.
              </Text>
              <Text fontSize={["md", "md", "2xl"]}>
                Go ahead, be wiser, and choose UploadWiz.
              </Text>
            </Flex>
          </Box>
        </Box>

        <Box
          id="c"
          h={["20%", "20%", "50%"]}
          scrollSnapAlign="start"
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          bg="rgba(33, 33, 33, 1)"
          flexDirection={"column"}
        >
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            flex="1"
            textAlign="center"
            paddingX={["2rem", "2rem", "4rem"]}
            flexDirection={"column"}
            _hover={{
              "& > div > p": {
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              },
            }}
          >
            <Flex
              flexDirection={"column"}
              alignItems={"center"}
              fontSize={["md", "md", "2xl"]}
            >
              Content Creation Made Effortless
              <Box fontSize={["sm", "sm", "md"]} textAlign="center">
                UploadWiz revolutionizes the way YouTubers manage their content
                on the fly, providing a seamless and <br />
                intuitive solution for simplified creative workflows.
              </Box>
            </Flex>

            <Flex
              justifyContent="center"
              pt={2}
              fontSize={["sm", "sm", "xl"]}
              flexDirection={"row"}
              flexWrap="nowrap"
              alignItems="center"
            >
              <Box textAlign="center" m={4} flex="1" width={"30%"}>
                Reason 1
                <Flex
                  bg="white"
                  color="black"
                  p={2}
                  borderRadius="md"
                  width={["80px", "150px", "200px"]}
                  height={["60px", "60px", "80px"]}
                  alignItems="center"
                  justifyContent="center"
                  fontSize={["sm", "md", "lg"]}
                  _hover={{
                    bg: "#FF6969",
                    cursor: "pointer",
                  }}
                >
                  Streamlined Collaboration
                </Flex>
              </Box>

              <Box textAlign="center" m={[0, 4]} flex="1" width={"30%"}>
                Reason 2
                <Flex
                  bg="white"
                  color="black"
                  p={2}
                  borderRadius="md"
                  width={["80px", "150px", "200px"]}
                  height={["60px", "60px", "80px"]}
                  alignItems="center"
                  justifyContent="center"
                  fontSize={["sm", "md", "lg"]}
                  _hover={{
                    bg: "#FF6969",
                    cursor: "pointer",
                  }}
                >
                  End-to-End Workflow Support
                </Flex>
              </Box>

              <Box textAlign="center" m={4} flex="1" width={"30%"}>
                Reason 3
                <Flex
                  bg="white"
                  color="black"
                  p={2}
                  borderRadius="md"
                  width={["80px", "150px", "200px"]}
                  height={["60px", "60px", "80px"]}
                  alignItems="center"
                  justifyContent="center"
                  fontSize={["sm", "md", "lg"]}
                  _hover={{
                    bg: "#FF6969",
                    cursor: "pointer",
                  }}
                >
                  Direct Integration with YouTube
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>

        <Box
          id="d"
          h={["180%", "180%", "120%"]}
          scrollSnapAlign="start"
          display="flex"
          justifyContent="center"
          flexDirection={"column"}
          alignItems="center"
          bg="linear-gradient(180deg, rgba(33, 33, 33, 1) 50%, rgba(180, 33, 33, 1) 100%)"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flex="1"
            textAlign="center"
            paddingX={["2rem", "4rem"]}
            _hover={{
              "& > div > p": {
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              },
            }}
            mb={[0, 0, "12%"]}
          >
            <Flex alignItems="center" flexDirection="column">
              <Box
                bg="#FF4C4C"
                color="black"
                px={4}
                borderRadius="md"
                width={["90%", "700px"]}
                height={["300px", "300px"]}
                display="flex"
                fontSize={["2xl", "4xl"]}
                fontWeight="bold"
                flexDirection="column"
                fontFamily="outfit"
                textAlign="center"
              >
                Join Now
                <Text fontSize={["sm", "xl"]} p={[2, 4]}>
                  Join the UploadWiz Community and elevate your content creation
                  journey! Connect with fellow YouTubers, share tips, and stay
                  updated on the latest features – together, we make content
                  management while traveling a breeze.
                </Text>
                <Button
                  bg="#FF3333"
                  color="black"
                  mt="5%"
                  rounded="2xl"
                  h={["80px", "25%"]}
                  fontSize={["2xl", "4xl"]}
                  fontWeight="bold"
                  alignItems="center"
                  boxShadow="0 0 0 2px white"
                  margin="auto"
                  onClick={() => {
                    const target = document.getElementById("a");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Get Started Now
                </Button>
              </Box>
            </Flex>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="space-evenly"
            flex="1"
            w={"100%"}
            textAlign="center"
            paddingX={["2rem", "4rem"]}
            _hover={{
              "& > div > p": {
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              },
            }}
            flexDirection={"row"}
            gap={[4, 10]}
            flexWrap="wrap"
            mb={[10, 10, 20]}
          >
            <Box
              flexDirection={"column"}
              justifyContent={["flex-end", "flex-end", "flex-start"]}
              alignItems={["flex-end", "flex-end", "flex-start"]}
              textAlign="left"
              mt={["50%", "10%", "0%"]}
              fontSize={["2xl", "2xl", "3xl"]}
            >
              <Box h={["25%", "25%", "100%"]}>
                Upload Wiz
                <Box fontSize={["xl", "xl", "2xl"]}>
                  Contact Us
                  <Flex fontSize={["xl", "xl", "2xl"]} alignItems="center">
                    Email:&nbsp;
                    <a href="mailto:uploadwiz9@gmail.com">
                      uploadwiz9@gmail.com
                    </a>
                  </Flex>
                </Box>
              </Box>
            </Box>

            <Box
              flexDirection={"row"}
              justifyContent="flex-start"
              alignItems="flex-start"
              textAlign="left"
              fontSize={["md", "md", "lg"]}
            >
              About
              <Box fontSize={["sm", "sm", "lg"]}>
                <Button variant="link" mb={2}>
                  About Us
                </Button>
              </Box>
              <Box fontSize={["sm", "sm", "lg"]}>
                <Button variant="link" mb={2}>
                  How it works
                </Button>
              </Box>
              <Box fontSize={["sm", "sm", "lg"]}>
                <Button variant="link" mb={2}>
                  Security
                </Button>
              </Box>
              <Box fontSize={["sm", "sm", "lg"]}>
                <Button variant="link" mb={2}>
                  Sitemap
                </Button>
              </Box>
              <Box fontSize={["sm", "sm", "lg"]}>
                <Button variant="link" mb={2}>
                  News
                </Button>
              </Box>
              <Box fontSize={["sm", "sm", "lg"]}>
                <Button variant="link" mb={2}>
                  Team
                </Button>
              </Box>
              <Box fontSize={["sm", "sm", "lg"]}>
                <Button variant="link" mb={2}>
                  Press
                </Button>
              </Box>
            </Box>
            <Box
              flexDirection={"row"}
              justifyContent="flex-start"
              alignItems="flex-start"
              textAlign="left"
              fontSize={["md", "md", "lg"]}
            >
              Terms
              <Box fontSize={["sm", "sm", "lg"]}>
                <Button variant="link" mb={2}>
                  Privacy Policy{" "}
                </Button>
              </Box>
              <Box fontSize={["sm", "sm", "lg"]}>
                <Button variant="link" mb={2}>
                  Terms of Service
                </Button>
              </Box>
              <Box fontSize={["sm", "sm", "lg"]}>
                <Button variant="link" mb={2}>
                  Copyright Policy
                </Button>
              </Box>
              <Box fontSize={["sm", "sm", "lg"]}>
                <Button variant="link" mb={2}>
                  Code of Conduct
                </Button>
              </Box>
              <Box fontSize={["sm", "sm", "lg"]}>
                <Button variant="link" mb={2}>
                  Fees and Charges
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LandingPage;
