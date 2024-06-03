import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Your React App
        </Heading>
        <Text fontSize="lg" textAlign="center">
          This is a clean and minimalistic starting point for your application. Begin by editing the content and adding new features.
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;