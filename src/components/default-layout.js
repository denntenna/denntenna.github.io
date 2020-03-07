import React from 'react'
import {Grommet, Box, Heading, Text } from 'grommet'
import Logo from './logo';
import SEO from './seo';
import Theme from './theme';
import {Link} from 'gatsby'
import styled from 'styled-components';

const StyledLink = styled(Link)`
    box-shadow: none;
`

/**
* @author
* @function DefaultLayout
**/

const DefaultLayout = ({children}) => {

    return (
        <Grommet theme={Theme} full>

            <Box fill direction={'column'}>
                <Box flex={false}>
                    <SEO title="Home" />
                    <StyledLink to={'/'}>
                        <Logo/>
                    </StyledLink>
                </Box>

                <Box flex overflow={'auto'} pad={'medium'}>
                    {children}
                </Box>

                <Box flex={false} pad={'medium'}>
                    <Heading level={5} margin={'none'}> footer </Heading>
                </Box>
            </Box>

        </Grommet>
    )
}

export default DefaultLayout