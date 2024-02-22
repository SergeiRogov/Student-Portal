import * as React from 'react';
import { Button, Flex, Input, InputGroup, InputLeftElement, Link, Text, useColorModeValue } from '@chakra-ui/react'
import { AtSignIcon, UnlockIcon } from "@chakra-ui/icons"


export interface ILoginProps {
}

export function Login (props: ILoginProps) {
  return (
    <Flex   
      flexDirection='column'
      justifyContent='center' // Center vertically
      alignItems='center' // Center horizontally
      height='100vh' // Set the height to the full viewport height
    >
      <Text 
        mb={4}
        fontWeight = 'extrabold'
        fontSize = '25'
        color = { useColorModeValue( 'primary.light', 'primary.dark' )}
      >
        Login
      </Text>

      <Flex alignItems="center"> 
        <InputGroup width="250px"> 
          <InputLeftElement pointerEvents='none'>
            <AtSignIcon color={ useColorModeValue( 'primary.light', 'primary.dark' )} />
          </InputLeftElement>
          <Input
            type='username'
            placeholder='username' 
            width='100%' // Use 100% width for the Input
            mb={4}
            minHeight='40px'
          />
        </InputGroup>
      </Flex>

      <Flex alignItems="center"> 
        <InputGroup width="250px"> 
          <InputLeftElement pointerEvents='none'>
            <UnlockIcon color={ useColorModeValue( 'primary.light', 'primary.dark' )} />
          </InputLeftElement>
          <Input
            placeholder='password'
            width='250px' // Set the width of the input field
            mb={4} // Adds margin-bottom for spacing
            minHeight='40px'
          />
        </InputGroup>
      </Flex>

      
      <Button variant='primary'>Sign in</Button>
      <Link 
        mb={4} 
        fontSize = '15'
      >
        forgot password
      </Link>
      <Text mb={4}>or</Text>
      <Button variant='primary'>Create new account</Button>
    </Flex>
  );
}
