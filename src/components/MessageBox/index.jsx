import { chakra } from "@chakra-ui/react";
import {
	Box,
	HStack,
	Stack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
export const MessageBox = (props) => (
	<div>
		<chakra.a
		{...props}
		href="#"
		px="4"
		py="1.5"
		textAlign="center"
		borderWidth="1px"
		borderColor="whiteAlpha.400"
		fontWeight="medium"
		rounded="base"
		_hover={{
			bg: "whiteAlpha.200",
		}}
	/>
		<Box as="section" pt="8" pb="12">
    	<Stack
			direction={{
				base: 'column',
				sm: 'row',
			}}
			justifyContent="center"
			alignItems="center"
			py="3"
			px={{
				base: '3',
				md: '6',
				lg: '8',
			}}
			color="white"
			bg={useColorModeValue('blue.600', 'blue.400')}
    >
      <HStack spacing="3">
        <Text fontWeight="medium" marginEnd="2">
          El mensaje debe ir aquí
		</Text>
      </HStack>
      <MessageBox
        w={{
          base: 'full',
          sm: 'auto',
        }}
        flexShrink={0}
      >
        Resend email
      </MessageBox>
    </Stack>
  </Box></div>

);
